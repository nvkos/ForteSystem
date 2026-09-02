//новое менеджеру в ТГ
// import {ConfigBlock} from "@/widgets/configurator/types/configurator.types";

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

// старое админу с главной
// export const createAdminEmailHtml = ({
//                                        name,
//                                        company,
//                                        phone,
//                                        email,
//                                        message,
//                                      }: {
//   name: string;
//   company: string;
//   phone: string;
//   email: string;
//   message: string;
// }) => `
//   <div style="font-family:Arial,sans-serif">
//     <h2>Новая заявка с сайта</h2>
//
//     <p><b>Имя:</b> ${name}</p>
//     <p><b>Компания:</b> ${company}</p>
//     <p><b>Телефон:</b> ${phone}</p>
//     <p><b>Email:</b> ${email}</p>
//
//     <hr>
//
//     <h3>Запрос</h3>
//
//     <p style="">
//       ${message || 'Клиент не указал описание запроса.'}
//     </p>
//
//     <i>fortesystem.by · запрос создан ${new Date().toLocaleString()}</i>
//   </div>
// `;

//новое админу с главной
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
    margin:0 auto;
    background:#ffffff;
    border:1px solid #e5e7eb;
  ">

    <div style="
      padding:20px 24px;
      border-bottom:1px solid #e5e7eb;
    ">
      <div style="
        font-size:20px;
        font-weight:700;
        color:#111827;
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

      <div style="
        margin:18px 0;
        border-top:1px solid #e5e7eb;
      "></div>

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
        line-height:1.6;
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
      fortesystem.by · ${new Date().toLocaleString('ru-RU')}
    </div>

  </div>

</body>
</html>
`;

// старое админу с главной
// export const adminEmailHtml = ({
//                                  name,
//                                  company,
//                                  phone,
//                                  email,
//                                  message,
//                                }: {
//   name: string;
//   company: string;
//   phone: string;
//   email: string;
//   message: string;
// }) => `
//       <div style="max-width:620px; margin:0 auto; font-family:Arial,sans-serif; color:#172033;">
//         <div style="padding:28px 32px; background:#0052CC; color:#fff; border-radius:16px 16px 0 0">
//           <div style="font-size:13px; letter-spacing:1.5px;">FORTE SYSTEM</div>
//
//           <div style="margin-top:8px; font-size:26px; font-weight:600">
//             Новая заявка с сайта
//           </div>
//         </div>
//
//         <div style="padding:32px; border:1px solid #e5e9f0; border-top:0; border-radius:0 0 16px 16px;">
//
//           <h3>Контактные данные</h3>
//
//           <p><b>Имя:</b> ${name}</p>
//           <p><b>Компания:</b> ${company}</p>
//           <p><b>Телефон:</b> ${phone}</p>
//           <p><b>Email:</b> ${email}</p>
//
//           <hr style="border:0; border-top:1px solid #e5e9f0; margin:24px 0;" />
//
//           <h3>Запрос</h3>
//
//           <div style="padding:18px; background:#f5f7fa; border-radius:10px; line-height:1.6; white-space:pre-wrap">
//             ${message || 'Клиент не указал описание запроса.'}
//           </div>
//         </div>
//       </div>
//     `;

// type ConfigField = {
//   id: string;
//   label: string;
// };
//
// type ConfigBlock = {
//   title: string;
//   fields: ConfigField[];
// };
//
// const CONFIG_BLOCK_EMOJIS: Record<string, string> = {
//   'Основная информация': '📌',
//   'Основное': '📌',
//   'Процессор (CPU)': '🧠',
//   'Память (RAM)': '💾',
//   'RAID-контроллер': '🛡️',
//   'Хранилище HDD': '💽',
//   'Хранилище SSD': '⚡',
//   'Сеть и расширения': '🌐',
//   'Питание (PSU)': '🔌',
//   'GPU': '🎮',
//   'Работы / услуги': '🛠️',
//   'Контроллеры': '🎛️',
//   'Хранилище': '💾',
//   'Производительность': '⚡',
// };

//новое админу с конфигуратора
// export function createAdminConfiguratorEmail({
//                                                name,
//                                                company,
//                                                phone,
//                                                email,
//                                                message,
//                                                schema,
//                                                values,
//                                                configuratorType,
//                                              }: {
//   name: string;
//   company: string;
//   phone: string;
//   email: string;
//   message: string;
//   schema: ConfigBlock[];
//   values: Record<string, unknown>;
//   configuratorType: string;
// }) {
//   const configHtml = schema
//     .map((block) => {
//       const filledFields = block.fields
//         .map((field) => {
//           const value = values[field.id];
//
//           if (
//             value === undefined ||
//             value === null ||
//             value === '' ||
//             (Array.isArray(value) && value.length === 0)
//           ) {
//             return null;
//           }
//
//           const displayValue = Array.isArray(value)
//             ? value.join(', ')
//             : String(value);
//
//           return `• ${field.label}: ${displayValue}`;
//         })
//         .filter(Boolean);
//
//       if (filledFields.length === 0) {
//         return '';
//       }
//
//       const emoji = CONFIG_BLOCK_EMOJIS[block.title] || '•';
//
//       return `
//         <div style="margin:0 0 12px 0;">
//           <div style="
//             font-size:14px;
//             font-weight:700;
//             color:#111827;
//             margin-bottom:4px;
//           ">
//             ${emoji} ${block.title}
//           </div>
//
//           <div style="
//             font-size:13px;
//             line-height:1.5;
//             color:#374151;
//           ">
//             ${filledFields.join(' &nbsp;')}
//           </div>
//         </div>
//       `;
//     })
//     .filter(Boolean)
//     .join('');
//
//   return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>Новая заявка на конфигурацию</title>
// </head>
//
// <body style="
//   margin:0;
//   padding:0;
//   background:#f4f5f7;
//   font-family:Arial, Helvetica, sans-serif;
//   color:#111827;
// ">
//
//   <div style="
//     max-width:680px;
//     margin:24px auto;
//     background:#ffffff;
//     border:1px solid #e5e7eb;
//   ">
//
//     <div style="
//       padding:20px 24px;
//       border-bottom:1px solid #e5e7eb;
//     ">
//       <img
//         src="https://fortesystem.by/full-logo.svg"
//         alt="Forte System"
//         width="150"
//         style="display:block;width:150px;height:auto;"
//       >
//     </div>
//
//     <div style="padding:24px;">
//
//       <h1 style="
//         margin:0 0 6px;
//         font-size:20px;
//         line-height:1.3;
//         color:#111827;
//       ">
//         Новая заявка на конфигурацию
//       </h1>
//
//       <div style="
//         margin-bottom:20px;
//         font-size:13px;
//         color:#6b7280;
//       ">
//         ${configuratorType}
//       </div>
//
//       <div style="
//         padding:14px 16px;
//         background:#f8fafc;
//         border:1px solid #e5e7eb;
//         margin-bottom:22px;
//       ">
//
//         <div style="
//           font-size:14px;
//           font-weight:700;
//           margin-bottom:8px;
//         ">
//           Контактные данные
//         </div>
//
//         <div style="
//           font-size:13px;
//           line-height:1.6;
//           color:#374151;
//         ">
//           <b>Имя:</b> ${name}<br>
//           <b>Компания:</b> ${company || '—'}<br>
//           <b>Телефон:</b> ${phone}<br>
//           <b>Email:</b> ${email || '—'}
//         </div>
//
//       </div>
//
//       <div style="
//         font-size:15px;
//         font-weight:700;
//         margin-bottom:14px;
//       ">
//         Конфигурация
//       </div>
//
//       ${configHtml || `
//         <div style="
//           font-size:13px;
//           color:#6b7280;
//         ">
//           Параметры конфигурации не заполнены.
//         </div>
//       `}
//
//       ${
//     message
//       ? `
//             <div style="
//               margin-top:18px;
//               padding-top:16px;
//               border-top:1px solid #e5e7eb;
//             ">
//               <div style="
//                 font-size:14px;
//                 font-weight:700;
//                 margin-bottom:6px;
//               ">
//                 💬 Комментарий
//               </div>
//
//               <div style="
//                 font-size:13px;
//                 line-height:1.5;
//                 color:#374151;
//               ">
//                 ${message}
//               </div>
//             </div>
//           `
//       : ''
//   }
//
//     </div>
//
//     <div style="
//       padding:14px 24px;
//       border-top:1px solid #e5e7eb;
//       font-size:11px;
//       color:#9ca3af;
//     ">
//       fortesystem.by · заявка создана ${new Date().toLocaleString('ru-RU')}
//     </div>
//
//   </div>
//
// </body>
// </html>
// `;
// }

//старое клиенту с главной
// export const createClientEmailHtml = (name: string) => `
//   <div style="font-family:Arial,sans-serif">
//     <h2>Заявка получена</h2>
//
//     <p>
//       Здравствуйте, ${name}!
//     </p>
//
//     <p>
//       Спасибо за обращение в Forte System.
//       Мы получили ваш запрос и передали его специалисту.
//     </p>
//
//     <p>
//       Мы свяжемся с вами в ближайшее время.
//     </p>
//
//     <p>
//       Forte System · fortesystem.by
//     </p>
//   </div>
// `;

//новое клиенту с главной
export const createClientEmailHtml = (name: string) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
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
  height: 50px;
  max-width: 220px;
  margin-bottom: 18px;
}

.contacts {
  color: #ffffff;
  font-size: 13px;
  line-height: 1.6;
  letter-spacing: 1.5px;
}

.email-content {
  padding: 26px 25px 23px;
  border: 1px solid #e5e9f0;
  border-top: 0;
  border-radius: 0 0 16px 16px;
}

.title {
  margin: 0 0 16px;
  font-size: 28px;
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

.email-header,
.email-content {
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

<div class="email-header">

<img src="https://fortesystem.by/full-logo.png" alt="Форте Систем" class="logo">

<div class="contacts">
  <div>+375 44 719-18-24</div>
<div>sales@fortesystem.by</div>
</div>

</div>

<div class="email-content">

<div class="success-icon">
        ✓
      </div>

      <h1 class="title">
  Заявка получена
</h1>

<p class="text">
  Здравствуйте, <i>${name}</i>!
</p>

<p class="text">
  Спасибо за обращение в <b>Forte System</b>.
Мы получили ваш запрос и передали его специалисту.
</p>

<p class="text">
  Мы свяжемся с вами в ближайшее время.
</p>

<div class="note">
  Если вам потребуется дополнить информацию,
  просто ответьте на это письмо.
</div>

<div class="disclaimer">
  Если это письмо пришло Вам по ошибке,
  не отвечайте на него.
</div>

</div>

<div class="email-footer">
  ООО Форте Систем · fortesystem.by
</div>

</div>

</body>
</html>
  `;

//новое клиенту из конфигуратора
// export function createClientConfiguratorEmail({
//                                                 name,
//                                                 schema,
//                                                 values,
//                                                 configuratorType,
//                                               }: {
//   name: string;
//   schema: ConfigBlock[];
//   values: Record<string, unknown>;
//   configuratorType: string;
// }) {
//   const configHtml = schema
//     .map((block) => {
//       const filledFields = block.fields
//         .map((field) => {
//           const value = values[field.id];
//
//           if (
//             value === undefined ||
//             value === null ||
//             value === '' ||
//             (Array.isArray(value) && value.length === 0)
//           ) {
//             return null;
//           }
//
//           const displayValue = Array.isArray(value)
//             ? value.join(', ')
//             : String(value);
//
//           return `
//             <span style="
//               display:inline;
//               font-size:13px;
//               line-height:1.6;
//               color:#374151;
//             ">
//               <b>${field.label}:</b> ${displayValue}
//             </span>
//           `;
//         })
//         .filter(Boolean);
//
//       if (filledFields.length === 0) {
//         return '';
//       }
//
//       return `
//         <div style="margin:0 0 14px 0;">
//
//           <div style="
//             margin-bottom:3px;
//             font-size:13px;
//             font-weight:700;
//             color:#111827;
//           ">
//             ${block.title}
//           </div>
//
//           <div style="
//             font-size:13px;
//             line-height:1.6;
//             color:#374151;
//           ">
//             ${filledFields.join(' &nbsp;•&nbsp; ')}
//           </div>
//
//         </div>
//       `;
//     })
//     .filter(Boolean)
//     .join('');
//
//   return `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8">
//   <title>Ваш запрос получен — Forte System</title>
// </head>
//
// <body style="
//   margin:0;
//   padding:0;
//   background:#f4f5f7;
//   font-family:Arial, Helvetica, sans-serif;
//   color:#111827;
// ">
//
//   <div style="
//     max-width:620px;
//     margin:24px auto;
//     background:#ffffff;
//     border:1px solid #e5e7eb;
//   ">
//
//     <div style="
//       padding:20px 24px;
//       border-bottom:1px solid #e5e7eb;
//     ">
//       <img
//         src="https://fortesystem.by/full-logo.svg"
//         alt="Forte System"
//         width="150"
//         style="display:block;width:150px;height:auto;"
//       >
//     </div>
//
//     <div style="padding:26px 24px;">
//
//       <h1 style="
//         margin:0 0 12px;
//         font-size:20px;
//         line-height:1.35;
//         color:#111827;
//       ">
//         Спасибо за ваш запрос, ${name}!
//       </h1>
//
//       <p style="
//         margin:0 0 20px;
//         font-size:14px;
//         line-height:1.6;
//         color:#374151;
//       ">
//         Мы получили вашу заявку на
//         <b>${configuratorType}</b>.
//         Наш специалист изучит параметры конфигурации
//         и свяжется с вами для уточнения деталей.
//       </p>
//
//       <div style="
//         margin-bottom:20px;
//         padding-top:16px;
//         border-top:1px solid #e5e7eb;
//       ">
//
//         <div style="
//           margin-bottom:14px;
//           font-size:15px;
//           font-weight:700;
//           color:#111827;
//         ">
//           Параметры вашего запроса
//         </div>
//
//         ${configHtml || `
//           <div style="
//             font-size:13px;
//             color:#6b7280;
//           ">
//             Дополнительные параметры не указаны.
//           </div>
//         `}
//
//       </div>
//
//       <div style="
//         margin-top:22px;
//         padding:14px 16px;
//         background:#f8fafc;
//         border:1px solid #e5e7eb;
//         font-size:13px;
//         line-height:1.6;
//         color:#374151;
//       ">
//         Если вы хотите дополнить заявку или изменить
//         параметры, просто ответьте на это письмо.
//       </div>
//
//     </div>
//
//     <div style="
//       padding:16px 24px;
//       border-top:1px solid #e5e7eb;
//       font-size:12px;
//       line-height:1.5;
//       color:#9ca3af;
//     ">
//       <div>
//         Forte System
//       </div>
//       <div>
//         +375 44 719-18-24 · sales@fortesystem.by
//       </div>
//     </div>
//
//   </div>
//
// </body>
// </html>
// `;
// }

// export const clientEmailHtml = ({name}: { name: string }) => `
//    <div style="max-width:620px; margin:0 auto; font-family:Mono,sans-serif; color:#172033;">
//
//         <div style="display: flex, padding:28px 25px; background:#0052CC; color:#fff; border-radius:16px 16px 0 0;">
//           <div style="font-size:13px; letter-spacing:1.5px;">
//             FORTE SYSTEM
//           </div>
//         </div>
//
//         <div style="
//           padding:26px 25px 40px;
//           border:1px solid #e5e9f0;
//           border-top:0;
//           border-radius:0 0 16px 16px;
//         ">
//
//           <div style="font-size:32px; color:#0052CC; margin-bottom:20px;
//           ">
//             ✓
//           </div>
//
//           <h1 style=" margin:0 0 16px; font-size:28px;">
//             Заявка получена
//           </h1>
//
//           <p style="
//             font-size:16px;
//             line-height:1.6;
//             color:#657083;
//           ">
//             Здравствуйте, ${name}!
//           </p>
//
//           <p style="
//             font-size:16px;
//             line-height:1.6;
//             color:#657083;
//           ">
//             Спасибо за обращение в Forte System.
//             Мы получили Ваш запрос и передали его
//             специалисту.
//           </p>
//
//           <p style="
//             font-size:16px;
//             line-height:1.6;
//             color:#657083;
//           ">
//             Мы свяжемся с Вами в ближайшее время.
//           </p>
//
//           <div style="
//             margin-top:28px;
//             padding:18px;
//             background:#f5f7fa;
//             border-radius:10px;
//             color:#657083;
//             font-size:14px;
//             line-height:1.6;
//           ">
//             Если вам потребуется дополнить информацию,
//             просто ответьте на это письмо.
//           </div>
//
//         </div>
//
//         <div style="
//           padding:20px;
//           color:#9aa3b1;
//           font-size:12px;
//           text-align:center;
//         ">
//           ООО Форте Систем · fortesystem.by
//         </div>
//
//       </div>
//     `;
