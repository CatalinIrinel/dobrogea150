import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { nume, prenume, email, message } = await request.json();
    console.log('Received form data:', { nume, prenume, email, message });

    const transporter = nodemailer.createTransport({
      host: process.env.HOST_EMAIL,
      port: parseInt(process.env.PORT_EMAIL), // usually 465 or 587
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
      },
    });

    await transporter.verify(); // optional, checks connection
    console.log('SMTP connection verified');

    const mailOptions = {
      from: email,
      to: process.env.USER_EMAIL,
      subject: `${nume} ${prenume} va contactat`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Mesajul a fost trimis cu succes.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Eroare trimitere email:', error);
    return new Response(
      JSON.stringify({ message: 'Eroare la trimiterea mesajului.' }),
      { status: 500 }
    );
  }
}
