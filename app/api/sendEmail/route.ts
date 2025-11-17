import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting map (in production, use Redis or a proper rate limiting service)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Helper to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate input data
function validateFormData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('El nombre es obligatorio');
  } else if (data.name.length > 100) {
    errors.push('El nombre es demasiado largo');
  }

  if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email)) {
    errors.push('Email inválido');
  }

  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length === 0) {
    errors.push('El asunto es obligatorio');
  } else if (data.subject.length > 200) {
    errors.push('El asunto es demasiado largo');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.push('El mensaje es obligatorio');
  } else if (data.message.length > 5000) {
    errors.push('El mensaje es demasiado largo');
  }

  return { valid: errors.length === 0, errors };
}

// Simple rate limiting (5 requests per hour per IP)
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const rateLimit = rateLimitMap.get(ip);

  if (!rateLimit || now > rateLimit.resetTime) {
    // Reset rate limit
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 }); // 1 hour
    return { allowed: true };
  }

  if (rateLimit.count >= 5) {
    return { allowed: false, resetTime: rateLimit.resetTime };
  }

  rateLimit.count++;
  return { allowed: true };
}

export async function POST(req: NextRequest) {
  // Check API key is configured
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Servicio de correo no configurado' },
      { status: 500 }
    );
  }

  // Rate limiting
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const rateLimitCheck = checkRateLimit(ip);
  
  if (!rateLimitCheck.allowed) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Por favor, intenta más tarde.' },
      { 
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((rateLimitCheck.resetTime! - Date.now()) / 1000))
        }
      }
    );
  }

  try {
    const body = await req.json();
    
    // Validate input
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validation.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Sanitize inputs to prevent XSS
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

    const data = await resend.emails.send({
      from: '"Mail de JorgeVidovic.com"<mailhandler@jorgevidovic.com>',
      to: 'jorgevidovic@vidovic.systems',
      subject: `Nuevo mensaje de contacto de jorgevidovic.com: ${safeSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Nombre:</strong> ${safeName}</p>
            <p><strong>Correo:</strong> ${safeEmail}</p>
            <p><strong>Asunto:</strong> ${safeSubject}</p>
            <hr style="border: 1px solid #ddd;">
            <p><strong>Mensaje:</strong></p>
            <p>${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Correo enviado con éxito.', success: true });
  } catch (error) {
    // Log error securely (in production, use a proper logging service)
    console.error('Error sending email:', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json(
      { error: 'Error al enviar el correo. Por favor, intenta más tarde.' },
      { status: 500 }
    );
  }
}
