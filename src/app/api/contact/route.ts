import nodemailer from 'nodemailer';
import {
  createAdminEmailHtml,
  createClientEmailHtml,
  createTelegramMessage,
} from '@/config/contactMessages';

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

    const results = {
      telegram: false,
      adminEmail: false,
      clientEmail: false,
    };

    // =====================================================
    // TELEGRAM
    // =====================================================

    try {
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      if (!botToken || !chatId) {
        throw new Error('Telegram credentials отсутствуют');
      }

      const telegramMessage = createTelegramMessage({ name, email, message, company, phone });

      let response: Response;

      if (file) {
        const telegramFormData = new FormData();

        telegramFormData.append('chat_id', chatId);
        telegramFormData.append('caption', telegramMessage);
        telegramFormData.append('parse_mode', 'HTML');
        telegramFormData.append('document', file, file.name);

        response = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
          method: 'POST',
          body: telegramFormData,
        });
      } else {
        response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.description || 'Telegram error');
      }

      results.telegram = true;

      console.log('Telegram OK');
    } catch (error) {
      console.error('Telegram ERROR:', error);
    }

    // =====================================================
    // SMTP CHECK
    // =====================================================

    console.log('SMTP CONFIG:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      passwordExists: Boolean(process.env.SMTP_PASSWORD),
    });

    // =====================================================
    // EMAIL
    // =====================================================

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      console.log('SMTP VERIFY START');

      await transporter.verify();

      console.log('SMTP OK');

      // -----------------------------------------
      // ADMIN EMAIL
      // -----------------------------------------

      const adminEmailHtml = createAdminEmailHtml({ name, email, message, company, phone });

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
        replyTo: email || undefined,
        subject: `Новая заявка — ${company || name}`,
        html: adminEmailHtml,
        attachments,
      });

      results.adminEmail = true;

      console.log('ADMIN EMAIL OK');

      // -----------------------------------------
      // CLIENT EMAIL
      // -----------------------------------------

      if (email) {
        const clientEmailHtml = createClientEmailHtml(name);

        await transporter.sendMail({
          from: `"Forte System" <${process.env.SMTP_USER}>`,
          to: email,
          subject: 'Ваш запрос получен',
          html: clientEmailHtml,
        });

        results.clientEmail = true;

        console.log('CLIENT EMAIL OK');
      }
    } catch (error) {
      console.error('SMTP ERROR:', error);
    }

    // =====================================================
    // RESULT
    // =====================================================

    const success = results.telegram || results.adminEmail || results.clientEmail;

    if (success) {
      return Response.json(
        {
          success: true,
          results,
        },
        { status: 200 },
      );
    }

    return Response.json(
      {
        success: false,
        results,
        error: 'Не удалось отправить заявку',
      },
      { status: 500 },
    );
  } catch (error) {
    console.error('CONTACT FATAL ERROR:', error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Ошибка отправки заявки',
      },
      { status: 500 },
    );
  }
}
