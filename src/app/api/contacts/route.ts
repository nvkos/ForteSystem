import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { name, phone, company, message } = body;

  console.log('cwd:', process.cwd());
  console.log(
    'env keys:',
    Object.keys(process.env).filter((k) => k.includes('TELEGRAM')),
  );
  console.log('token:', process.env.TELEGRAM_BOT_TOKEN);

  // Telegram
  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `
            📥 Web-site: Новая заявка

            👤 ${name}

            📞 ${phone}

            🏢 ${company}

            💬 ${message}
        `,
    }),
  });

  // Mail

  // const transporter = nodemailer.createTransport({
  //   host: process.env.SMTP_HOST,
  //   port: Number(process.env.SMTP_PORT),
  //   secure: true,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASS,
  //   },
  // });
  //
  // await transporter.sendMail({
  //   from: process.env.SMTP_FROM,
  //   to: process.env.SMTP_TO,
  //   subject: 'Web-site: Новая заявка Forte System',
  //   html: `
  //     <h2>Новая заявка</h2>
  //
  //     <p><b>Имя:</b> ${name}</p>
  //
  //     <p><b>Телефон:</b> ${phone}</p>
  //
  //     <p><b>Компания:</b> ${company}</p>
  //
  //     <p><b>Сообщение:</b></p>
  //
  //     <p>${message}</p>
  //   `,
  // });

  return Response.json({
    success: true,
  });
}
