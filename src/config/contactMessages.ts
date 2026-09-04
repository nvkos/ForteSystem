import {
  CONFIG_BLOCK_EMOJIS,
  ConfigBlock,
  ConfigValues,
  PlatformId,
} from '@/widgets/configurator/types/configurator.types';

export const createTelegramMessage = ({
  name,
  company,
  phone,
  email,
  message,
}: {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}) => `
<b>📥 Новая заявка</b>

<b>КОНТАКТЫ</b>
○ Имя: ${name}
○ Компания: ${company}
○ Телефон: ${phone}
○ Email: ${email}

<b>СООБЩЕНИЕ</b>
${message || '-'}

━━━━━━━━━━━━━━━━━━━━━━━
<i>fortesystem.by · запрос создан ${new Date().toLocaleString()}</i>
`;

export const createConfiguratorTelegramMessage = ({
  name,
  email,
  message,
  company,
  phone,
  schema,
  values,
  // configuratorType,
}: {
  name: string;
  email: string;
  message: string;
  company: string;
  phone: string;
  schema: ConfigBlock[];
  values: ConfigValues;
  // configuratorType: PlatformId;
}) => {
  const configMessage = schema
    .map((block) => {
      const filledFields = block.fields
        .map((field) => {
          const value = values[field.id];

          if (
            value === undefined ||
            value === null ||
            value === '' ||
            (Array.isArray(value) && value.length === 0)
          ) {
            return null;
          }

          const displayValue = Array.isArray(value) ? value.join(', ') : String(value);

          return `• <b>${field.label}:</b> ${displayValue}`;
        })
        .filter(Boolean);

      if (filledFields.length === 0) {
        return '';
      }

      const emoji = CONFIG_BLOCK_EMOJIS[block.title] || '•';

      return `
<b>${emoji} ${block.title}</b>
${filledFields.join('\n')}
`;
    })
    .filter(Boolean)
    .join('\n');

  return `
<b>📥 Новая заявка из конфигуратора</b>

<b>КОНТАКТЫ</b>
○ Имя: ${name}
○ Компания: ${company}
○ Телефон: ${phone}
○ Email: ${email}

<b>СООБЩЕНИЕ</b>
${message || '-'}

<b>⚙️ КОНФИГУРАЦИЯ</b>
${configMessage || 'Параметры не указаны.'}

━━━━━━━━━━━━━━━━━━
<i>fortesystem.by · ${new Date().toLocaleString('ru-RU')}</i>
`;
};

//админу с главной
export const createAdminEmailHtml = ({
  name,
  company,
  phone,
  email,
  message,
}: {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Новая заявка с сайта</title>
</head>

<body style="
  margin:0;
  padding:24px;
  background:#f4f5f7;
  font-family:Arial, Helvetica, sans-serif;
  color:#111827;
">

  <div style="
    max-width:620px;
    /*margin:0 auto;*/
    background:#ffffff;
    border:1px solid #e5e7eb;
    border-radius: 12px;
  ">

    <div style="
      padding:20px 24px;
      background:#4c5261;
      border-radius: 12px 12px 0 0;
      border-bottom:1px solid #e5e7eb;
    ">
      <div style="
        font-size:20px;
        font-weight:700;
        color:#ffffff;
      ">
        Новая заявка с сайта
      </div>

      <div style="
        margin-top:4px;
        font-size:12px;
        color:#9ca3af;
      ">
        Обратная связь
      </div>
    </div>

    <div style="padding:20px 24px;">

      <div style="
        font-size:14px;
        line-height:1.7;
        color:#374151;
      ">
        <div><b>Имя:</b> ${name}</div>
        <div><b>Компания:</b> ${company || '—'}</div>
        <div><b>Телефон:</b> ${phone}</div>
        <div><b>Email:</b> ${email || '—'}</div>
      </div>

      <div style="margin:18px 0; border-top:1px solid #e5e7eb;"></div>

      <div style="
        margin-bottom:6px;
        font-size:14px;
        font-weight:700;
        color:#111827;
      ">
        Сообщение
      </div>

      <div style="
        font-size:13px;
        line-height:1.25;
        color:#374151;
        white-space:pre-line;
      ">
        ${message || 'Клиент не указал описание запроса.'}
      </div>

    </div>

    <div style="
      padding:12px 24px;
      border-top:1px solid #e5e7eb;
      font-size:11px;
      color:#9ca3af;
    ">
       <i>fortesystem.by · заявка создана ${new Date().toLocaleString('ru-RU')}</i>
    </div>

  </div>

</body>
</html>
`;

// админу с конфигуратора
export function createAdminConfiguratorEmail({
  name,
  company,
  phone,
  email,
  message,
  schema,
  values,
  configuratorType,
}: {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  schema: ConfigBlock[];
  values: Record<string, unknown>;
  configuratorType: PlatformId | null;
}) {
  const configHtml = schema
    .map((block) => {
      const filledFields = block.fields
        .map((field) => {
          const value = values[field.id];

          if (
            value === undefined ||
            value === null ||
            value === '' ||
            (Array.isArray(value) && value.length === 0)
          ) {
            return null;
          }

          const displayValue = Array.isArray(value) ? value.join(', ') : String(value);

          return `• ${field.label}: ${displayValue}`;
        })
        .filter(Boolean);

      if (filledFields.length === 0) {
        return '';
      }

      const emoji = CONFIG_BLOCK_EMOJIS[block.title] || '•';

      return `
        <div style="margin:0 0 12px 0;">
          <div style="
            font-size:14px;
            font-weight:600;
            color:#111827;
            margin-bottom:4px;
            text-transform: uppercase;
          ">
            ${emoji} <span style="font-weight: 500; color:#111827">${block.title}</span>
          </div>

          <div style="
            font-size:13px;
            line-height:1.5;
            color:#374151;
          ">
            ${filledFields.join(' &nbsp;')}
          </div>
        </div>
      `;
    })
    .filter(Boolean)
    .join('');

  return `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Новая заявка на конфигурацию ${configuratorType === 'servers' ? 'сервера' : 'СХД'}</title>
</head>

<body style="margin:0; padding:0; background:#f4f5f7; font-family:Arial, Helvetica, sans-serif; color:#111827;">

  <div style="
    max-width:680px;
    margin:24px;
    background:#ffffff;
    border:1px solid #e5e7eb;
    border-radius: 12px;
  ">

    <div style="
      padding:20px 24px;
      background:#4c5261;
      border-radius: 12px 12px 0 0;
      border-bottom:1px solid #e5e7eb;
    ">
      <div style="
        font-size:20px;
        font-weight:700;
        color:#ffffff;
      ">
        Новая заявка с сайта
      </div>

      <div style="
        margin-top:4px;
        font-size:12px;
        color:#9ca3af;
      ">
        Обратная связь
      </div>
    </div>

    <div style="padding:20px 24px;">

      <div style="
        font-size:14px;
        line-height:1.7;
        color:#374151;
      ">
        <div><b>Имя:</b> ${name}</div>
        <div><b>Компания:</b> ${company || '—'}</div>
        <div><b>Телефон:</b> ${phone}</div>
        <div><b>Email:</b> ${email || '—'}</div>
      </div>

      <div style="margin:18px 0; border-top:1px solid #e5e7eb;"></div>

      <div style="
        margin-bottom:16px;
        font-size:14px;
        font-weight:700;
        color:#111827;
      ">
        Конфигурация
      </div>

      ${
        configHtml ||
        `
        <div style="font-size:13px; color:#6b7280">
          Параметры конфигурации не заполнены.
        </div>
      `
      }

      ${
        message
          ? `
            <div style="margin-top:18px; padding-top:16px; border-top:1px solid #e5e7eb;">
              <div style=" font-size:14px; font-weight:700; margin-bottom:6px;">Доп. инфа</div>
              <div style="font-size:13px; line-height:1.5; color:#374151;">
                ${message}
              </div>
            </div>
          `
          : ''
      }

    </div>

    <div style=" padding:14px 24px; border-top:1px solid #e5e7eb; font-size:11px; color:#9ca3af;">
      <i>fortesystem.by · заявка создана ${new Date().toLocaleString('ru-RU')}</i>
    </div>
  </div>
</body>
</html>
`;
}

// клиенту с главной
export const createClientEmailHtml = (name: string) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Запрос на обратную связь</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
      color: #172033;
    }

    .email-wrapper {
      max-width: 620px;
      margin: 0 auto;
    }

.email-header {
  padding: 28px 25px;
  background: #0052CC;
  color: #ffffff;
  border-radius: 16px 16px 0 0;
}

.logo {
  display: block;
  height: 53px;
  max-width: 195px;
}

.contacts {
  color: #ffffff!important;
  font-size: 13px;
  line-height: 1.6;
  letter-spacing: 1.5px;
  text-align: end;
  text-decoration: none;
}

.email-content {
  padding: 26px 25px 23px;
  border: 1px solid #e5e9f0;
  border-top: 0;
  border-radius: 0 0 16px 16px;
}

.title {
  margin: 0 0 16px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  color: #172033;
}

.success-icon {
  margin: 0 0 8px;
  font-size: 32px;
  line-height: 1;
  color: #0052CC;
}

.text {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.6;
  color: #3e434c;
}

.note {
  margin-top: 28px;
  padding: 18px;
  background: #f5f7fa;
  border-radius: 10px;
  color: #3e434c;
  font-size: 14px;
  line-height: 1.6;
}

.disclaimer {
  margin-top: 40px;
  color: #ababab;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
}

.email-footer {
  padding: 20px;
  color: #9aa3b1;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
}

@media only screen and (max-width: 640px) {
  .email-wrapper {
    width: 100% !important;
  }

  .email-header, .email-content {
    border-radius: 0;
  }

  .email-header {
    padding: 24px 20px;
  }

  .email-content {
    padding: 24px 20px 20px;
  }

  .title {
    font-size: 24px;
  }
}
</style>
</head>
<body>
  <div class="email-wrapper">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" class="email-header">
      <tr>
        <td align="left" valign="middle">
          <img src="https://fortesystem.by/full-logo.png" alt="Форте Систем" class="logo">
        </td>

        <td align="right" valign="middle">
          <div style="font-size:13px; line-height:1.6; letter-spacing:1.5px;">
            <a href="tel:+375447191824" style="color:#ffffff !important; text-decoration:none;">
              +375 44 719-18-24
            </a>
          </div>

          <div style="font-size:13px; line-height:1.6; letter-spacing:1.5px;">
            <a href="mailto:sales@fortesystem.by" style="color:#ffffff !important; text-decoration:none;">
              sales@fortesystem.by
            </a>
          </div>
        </td>
      </tr>
    </table>

    <div class="email-content">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td valign="middle" style="width: 36px">
            <div class="success-icon">✓</div>
          </td>
          <td valign="middle">
            <h1 class="title" style="margin: 0;">Заявка получена</h1>
          </td>
        </tr>
      </table>
      <br/>
      <p class="text">Здравствуйте, <i>${name}</i>!</p>
      <p class="text">
        Спасибо за обращение в <b>Forte System</b>.Мы получили Ваш запрос и передали его специалисту.
      </p>
      <p class="text">Мы свяжемся с Вами в ближайшее время.</p>
      <div class="note">Если Вам потребуется дополнить информацию, просто ответьте на это письмо.</div>
      <div class="disclaimer">Если это письмо пришло Вам по ошибке, не отвечайте на него.</div>
    </div>

    <div class="email-footer">ООО Форте Систем · fortesystem.by</div>
  </div>
</body>
</html>
`;

// клиенту с конфигурации
export function createClientConfiguratorEmail({
  name,
  schema,
  values,
}: {
  name: string;
  schema: ConfigBlock[];
  values: Record<string, unknown>;
}) {
  const configHtml = schema
    .map((block) => {
      const filledFields = block.fields
        .map((field) => {
          const value = values[field.id];

          if (
            value === undefined ||
            value === null ||
            value === '' ||
            (Array.isArray(value) && value.length === 0)
          ) {
            return null;
          }

          const displayValue = Array.isArray(value) ? value.join(', ') : String(value);

          return `
            <span style="
              display:inline;
              font-size:13px;
              line-height:1.6;
              color:#374151;
            ">
              <b>${field.label}:</b> ${displayValue}
            </span>
          `;
        })
        .filter(Boolean);

      if (filledFields.length === 0) {
        return '';
      }

      return `
        <div style="margin:0 0 14px 0;">

          <div style="
            margin-bottom:3px;
            font-size:13px;
            font-weight:700;
            color:#b1b1b1;
          ">
            ${block.title}
          </div>

          <div style="
            font-size:13px;
            line-height:1.6;
            color:#374151;
          ">
            ${filledFields.join(' &nbsp;•&nbsp; ')}
          </div>

        </div>
      `;
    })
    .filter(Boolean)
    .join('');

  return `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Ваш запрос получен — Forte System</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
      color: #172033;
    }
    .email-header {
      padding: 28px 25px;
      background: #0052CC;
      color: #ffffff;
      border-radius: 16px 16px 0 0;
    }
    .logo {
      display: block;
      height: 53px;
      max-width: 195px;
    }
    .text {
      margin: 0 0 16px;
      font-size: 16px;
      line-height: 1.6;
      color: #3e434c;
    }
    .title {
      margin: 0 0 16px;
      font-size: 24px;
      line-height: 1.2;
      font-weight: 700;
      color: #172033;
    }

    .success-icon {
      margin: 0 0 8px;
      font-size: 32px;
      line-height: 1;
      color: #0052CC;
    }
    .text {
      margin: 0 0 16px;
      font-size: 16px;
      line-height: 1.6;
      color: #3e434c;
    }

      @media only screen and (max-width: 640px) {
      .email-wrapper {
        width: 100% !important;
      }

      .email-header, .email-content {
        border-radius: 0;
      }

      .email-header {
        padding: 24px 20px;
      }

      .email-content {
        padding: 24px 20px 20px;
      }

      .title {
        font-size: 24px;
      }
    }
  </style>
</head>

<body>
  <div style="max-width:620px; margin:24px auto; background:#ffffff">

    <table width="100%" cellpadding="0" cellspacing="0" border="0" class="email-header">
      <tr>
        <td align="left" valign="middle">
          <img src="https://fortesystem.by/full-logo.png" alt="Форте Систем" class="logo">
        </td>

        <td align="right" valign="middle">
          <div style="font-size:13px; line-height:1.6; letter-spacing:1.5px;">
            <a href="tel:+375447191824" style="color:#ffffff !important; text-decoration:none;">
              +375 44 719-18-24
            </a>
          </div>

          <div style="font-size:13px; line-height:1.6; letter-spacing:1.5px;">
            <a href="mailto:sales@fortesystem.by" style="color:#ffffff !important; text-decoration:none;">
              sales@fortesystem.by
            </a>
          </div>
        </td>
      </tr>
    </table>

    <div style="padding:26px 25px 23px; border: 1px solid #e5e9f0;border-top: 0;border-radius: 0 0 16px 16px; margin-bottom: 16px">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td valign="middle" style="width: 36px">
            <div class="success-icon">✓</div>
          </td>
          <td valign="middle">
            <h1 class="title" style="margin: 0;">Заявка получена</h1>
          </td>
        </tr>
      </table>

      <p class="text">Здравствуйте, <i>${name}</i>!</p>

      <p style="margin:0 0 20px; font-size:14px; line-height:1.6; color:#374151;">
        Мы получили Вашу заявку.
        Наш специалист изучит параметры конфигурации
        и свяжется с вами для уточнения деталей.
      </p>
      <p class="text">
        Спасибо за обращение в <b>Forte System</b>
      </p>

      <div style="
        margin-bottom:20px;
        padding-top:16px;
        border-top:1px solid #e5e7eb;
      ">

        <div style="
          margin-bottom:14px;
          font-size:15px;
          font-weight:700;
          color:#111827;
        ">
          Параметры вашего запроса
        </div>

        ${
          configHtml ||
          `<div style="font-size:13px;color:#6b7280;">
          Дополнительные параметры не указаны.
        </div>`
        }

      </div>

      <div style="
        margin-top: 28px;
        padding: 18px;
        background: #f5f7fa;
        border-radius: 10px;
        color: #3e434c;
        font-size: 14px;
        line-height: 1.6;
      ">
        Если вы хотите дополнить заявку или изменить
        параметры, просто ответьте на это письмо.
      </div>
      <div style="
        margin-top: 40px;
        color: #ababab;
        font-size: 12px;
        line-height: 1.5;
        text-align: center;
      ">
        Если это письмо пришло Вам по ошибке, не отвечайте на него.</div>
    </div>

    <div style="
      padding: 20px;
      color: #9aa3b1;
      font-size: 12px;
      line-height: 1.5;
      text-align: center;
    ">
      <div>Forte System</div>
      <div>+375 44 719-18-24 · sales@fortesystem.by</div>
    </div>

  </div>

</body>
</html>
`;
}
