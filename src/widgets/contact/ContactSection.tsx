import { ContactForm } from './ContactForm';
import { Container, Heading } from '@/shared';

const steps = [
  {
    number: '1',
    text: 'Наш специалист свяжется с вами, чтобы уточнить задачи и требования к проекту.',
  },
  {
    number: '2',
    text: 'Проведём детальный анализ ваших задач и предложим оптимальное решение под ваши требования и бюджет.',
  },
  {
    number: '3',
    text: 'Подготовим комплексное проектное предложение с архитектурой решения, стоимостью и сроками реализации.',
  },
];

export function ContactSection() {
  const contactsData = (
    <ul
      className="flex flex-col gap-5 w-full p-0 p-5 mt-9 md:mt-14 rounded-md sm:grid sm:grid-cols-2 md:flex
              border border-white/30 bg-white/20 backdrop-blur-3xl shadow-[0_40px_120px_rgba(0,82,204,.15)]/5"
    >
      <li className={'flex items-start gap-3'}>
        <span
          className="w-10 h-10 shrink-0 rounded-md bg-primary/10 text-primary flex items-center justify-center"
          aria-hidden="true"
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path
              d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.1 2.9Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className={'flex flex-col justify-between h-full py-1'}>
          <span className="block text-[10px] md:text-[12px] text-medium mb-0.5 uppercase tracking-wide">
            Телефон
          </span>
          <a
            className="block leading-tight text-[12px] md:text-[14px] text-semibold"
            href="tel:+375447191824"
          >
            +375 44 719-18-24
          </a>
        </div>
      </li>
      <li className={'flex items-start gap-3'}>
        <span
          className="w-10 h-10 shrink-0 rounded-md bg-primary/10 text-primary flex items-center justify-center"
          aria-hidden="true"
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="m5.5 7 6.1 4.2c.2.2.6.2.8 0L18.5 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className={'flex flex-col justify-between h-full py-1'}>
          <span className="block text-[10px] md:text-[12px] text-medium mb-0.5 uppercase tracking-wide">
            Email
          </span>
          <a
            className="block leading-tight text-[12px] md:text-[14px] text-semibold"
            href="mailto:sales@fortesystem.by"
          >
            sales@fortesystem.by
          </a>
        </div>
      </li>
      <li className={'flex items-start gap-3 col-span-2'}>
        <span
          className="w-10 h-10 shrink-0 rounded-md bg-primary/10 text-primary flex items-center justify-center"
          aria-hidden="true"
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s7-5.8 7-12a7 7 0 1 0-14 0c0 6.2 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
        <div className={'flex flex-col justify-between h-full py-1'}>
          <span className="block text-[10px] md:text-[12px] text-medium mb-0.5 uppercase tracking-wide">
            Адрес
          </span>
          <a className="block leading-tight text-[12px] md:text-[14px] text-regular m-0">
            220024, г. Минск, ул. Серова, д. 2А, каб. 31В
          </a>
        </div>
      </li>
    </ul>
  );

  return (
    <section
      id="contact-with-us"
      className="relative isolate isolate overflow-hidden bg-white py-16 md:py-20"
    >
      <div className="absolute inset-0 z-10 bg-white" />

      <Container className="relative z-10 ">
        {/* большое синее свечение */}
        <div className="absolute -bottom-56 right-[-200px] h-[700px] w-[700px] rounded-full bg-[#0052CC]/10 blur-[180px]" />
        <div className="absolute -top-56 left-[-400px] h-[700px] w-[900px] rounded-full bg-[#0052CC]/20 blur-[130px]" />

        <div className="grid gap-6 md:gap-9 lg:gap-20 md:grid-cols-[1fr_405px] lg:grid-cols-[520px_1fr]">
          <div>
            <Heading hClassName={'mb-4'} pClassName={''} description="">
              Расскажите о своей задаче
            </Heading>

            <h3 className="mt-6 lg:mt-14 text-base md:text-xl font-semibold text-slate-800">
              После отправки заявки:
            </h3>

            <div className="relative mt-4 md:mt-8">
              {/* линия */}
              <div className="hidden md:absolute left-[23px] top-4 bottom-4 w-px h-50.5 bg-slate-300" />

              <div className="space-y-4 md:space-y-5">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative grid grid-cols-[48px_1fr] gap-4 sm:gap-6"
                  >
                    <div className=" relative z-10 flex md:h-12 w-12 items-start md:items-center justify-center rounded-full text-3xl leading-[1.1] md:text-4xl font-bold text-slate-800">
                      {step.number}
                    </div>

                    <div>
                      <p className="text-justify text-sm md:text-lg leading-snug text-slate-700">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={'hidden md:block'}>{contactsData}</div>
            </div>
          </div>

          <div className="relative">
            {/* декоративное свечение */}
            <div className="absolute -top-10 -right-10 h-80 w-80 rounded-full bg-white/30 blur-[120px]" />

            <ContactForm type={'main'} />
            <div className={'md:hidden'}>{contactsData}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
