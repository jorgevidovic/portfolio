import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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
interface EmailFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateFormData(data: EmailFormData): { valid: boolean; errors: string[] } {
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

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: '"Jorge Vidovic · Portfolio" <mailhandler@jorgevidovic.com>',
      to: 'jorge.i.vidovic@edicionesclio.com',
      replyTo: safeEmail,
      subject: `✉ Nuevo mensaje — ${safeSubject}`,
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin:0;padding:0;background-color:#06060e;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#06060e;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:28px;" align="center">
              <p style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                Jorge <span style="color:#f5741c;">Vidovic</span>
              </p>
              <p style="margin:6px 0 0;font-size:12px;font-weight:600;color:#f5741c;letter-spacing:3px;text-transform:uppercase;">
                Portfolio · Formulario de contacto
              </p>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#0e0e1c;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

              <!-- Orange top bar -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:3px;background:linear-gradient(90deg,#f5741c 0%,rgba(245,116,28,0.2) 60%,transparent 100%);"></td>
                </tr>
              </table>

              <!-- Body -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:32px 32px 12px;">
                    <p style="margin:0 0 24px;font-size:18px;font-weight:700;color:#ffffff;">
                      Nuevo mensaje recibido
                    </p>

                    <!-- Field: Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td style="padding:14px 16px;background-color:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(255,255,255,0.07);">
                          <p style="margin:0 0 4px;font-size:10px;font-weight:600;color:#f5741c;text-transform:uppercase;letter-spacing:1.5px;">Nombre</p>
                          <p style="margin:0;font-size:15px;color:#e5e5e5;">${safeName}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Field: Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td style="padding:14px 16px;background-color:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(255,255,255,0.07);">
                          <p style="margin:0 0 4px;font-size:10px;font-weight:600;color:#f5741c;text-transform:uppercase;letter-spacing:1.5px;">Correo electrónico</p>
                          <p style="margin:0;font-size:15px;color:#e5e5e5;">
                            <a href="mailto:${safeEmail}" style="color:#f5741c;text-decoration:none;">${safeEmail}</a>
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Field: Subject -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td style="padding:14px 16px;background-color:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(255,255,255,0.07);">
                          <p style="margin:0 0 4px;font-size:10px;font-weight:600;color:#f5741c;text-transform:uppercase;letter-spacing:1.5px;">Asunto</p>
                          <p style="margin:0;font-size:15px;color:#e5e5e5;">${safeSubject}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Field: Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                      <tr>
                        <td style="padding:14px 16px;background-color:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(245,116,28,0.2);">
                          <p style="margin:0 0 8px;font-size:10px;font-weight:600;color:#f5741c;text-transform:uppercase;letter-spacing:1.5px;">Mensaje</p>
                          <p style="margin:0;font-size:15px;color:#cccccc;line-height:1.7;">${safeMessage}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Reply button -->
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="border-radius:10px;background-color:#f5741c;">
                          <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}"
                             style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">
                            Responder a ${safeName}
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Bottom bar -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.3);text-align:center;">
                      Enviado desde <a href="https://jorgevidovic.com" style="color:#f5741c;text-decoration:none;">jorgevidovic.com</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`,
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
