import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: '"Mail de JorgeVidovic.com"<mailhandler@jorgevidovic.com>',
      to: 'jorgevidovic@vidovic.systems',
      subject: `Nuevo mensaje de contacto de jorgevidovic.com: ${subject}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Correo enviado con éxito.', data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 });
  }
}
