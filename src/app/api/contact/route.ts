import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = String(formData.get('name') || '');
    const company = String(formData.get('company') || '');
    const phone = String(formData.get('phone') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');

    const fileValue = formData.get('file');
    const file = fileValue instanceof File && fileValue.size > 0 ? fileValue : null;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // ==========================================
    // 1. TELEGRAM
    // ==========================================

    const telegramMessage = `
<b>📥 Новая заявка</b>

<b>КОНТАКТЫ</b>
○ Имя: ${name}
○ Компания: ${company}
○ Телефон: ${phone}
○ Email: ${email}

<b>СООБЩЕНИЕ</b>
${message || '-'}
━━━━━━━━━━━━━━━━━━━━━━━
<i>fortesystem.by · запрос создан ${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}</i>
`;
    let telegramResponse: Response;

    if (file && botToken && chatId) {
      const telegramFormData = new FormData();

      telegramFormData.append('chat_id', chatId);
      telegramFormData.append('caption', telegramMessage);
      telegramFormData.append('parse_mode', 'HTML');
      telegramFormData.append('document', file, file.name);

      telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: 'POST',
        body: telegramFormData,
      });
    } else {
      telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      });
    }

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram error:', telegramResult);

      throw new Error(telegramResult.description || 'Ошибка отправки в Telegram');
    }

    // ==========================================
    // 2. EMAIL → SALES
    // ==========================================

    const adminEmailHtml = `
      <div style="max-width:620px; margin:0 auto; font-family:Arial,sans-serif; color:#172033;">
        <div style="padding:28px 32px; background:#0052CC; color:#fff; border-radius:16px 16px 0 0">
          <div style="font-size:13px; letter-spacing:1.5px;">FORTE SYSTEM</div>

          <div style="margin-top:8px; font-size:26px; font-weight:600">
            Новая заявка с сайта
          </div>
        </div>

        <div style="padding:32px; border:1px solid #e5e9f0; border-top:0; border-radius:0 0 16px 16px;">

          <h3>Контактные данные</h3>

          <p><b>Имя:</b> ${name}</p>
          <p><b>Компания:</b> ${company}</p>
          <p><b>Телефон:</b> ${phone}</p>
          <p><b>Email:</b> ${email}</p>

          <hr style="border:0; border-top:1px solid #e5e9f0; margin:24px 0;" />

          <h3>Запрос</h3>

          <div style="padding:18px; background:#f5f7fa; border-radius:10px; line-height:1.6; white-space:pre-wrap">
            ${message || 'Клиент не указал описание запроса.'}
          </div>
        </div>
      </div>
    `;

    const attachments = file
      ? [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          },
        ]
      : [];

    await transporter.sendMail({
      from: `"Forte System" <${process.env.SMTP_USER}>`,
      to: 'sales@fortesystem.by',
      replyTo: email,
      subject: `Новая заявка — ${company || name}`,
      html: adminEmailHtml,
      attachments,
    });

    // ==========================================
    // 3. EMAIL → CLIENT
    // ==========================================

    const clientEmailHtml = `
      <div style="max-width:620px; margin:0 auto; font-family:Arial,sans-serif; color:#172033;">

        <div style=" padding:28px 32px; background:#0052CC; color:#fff; border-radius:16px 16px 0 0;">
          <div style=" font-size:13px; letter-spacing:1.5px;">
            FORTE SYSTEM
          </div>
        </div>

        <div style="
          padding:40px 32px;
          border:1px solid #e5e9f0;
          border-top:0;
          border-radius:0 0 16px 16px;
        ">

          <div style="
            font-size:32px;
            color:#0052CC;
            margin-bottom:20px;
          ">
            ✓
          </div>

          <h1 style="
            margin:0 0 16px;
            font-size:28px;
          ">
            Заявка получена
          </h1>

          <p style="
            font-size:16px;
            line-height:1.6;
            color:#657083;
          ">
            Здравствуйте, ${name}!
          </p>

          <p style="
            font-size:16px;
            line-height:1.6;
            color:#657083;
          ">
            Спасибо за обращение в Forte System.
            Мы получили ваш запрос и передали его
            специалисту.
          </p>

          <p style="
            font-size:16px;
            line-height:1.6;
            color:#657083;
          ">
            Мы свяжемся с вами в ближайшее время.
          </p>

          <div style="
            margin-top:28px;
            padding:18px;
            background:#f5f7fa;
            border-radius:10px;
            color:#657083;
            font-size:14px;
            line-height:1.6;
          ">
            Если вам потребуется дополнить информацию,
            просто ответьте на это письмо.
          </div>

        </div>

        <div style="
          padding:20px;
          color:#9aa3b1;
          font-size:12px;
          text-align:center;
        ">
          Forte System · fortesystem.by
        </div>

      </div>
    `;

    await transporter.sendMail({
      from: `"Forte System" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Ваш запрос получен — Forte System',
      html: clientEmailHtml,
    });

    // ==========================================
    // SUCCESS
    // ==========================================

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error('CONTACT ERROR:', error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Ошибка отправки заявки',
      },
      {
        status: 500,
      },
    );
  }
}
