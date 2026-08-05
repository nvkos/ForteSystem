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

        <div className="grid gap-14 md:gap-20 lg:grid-cols-[520px_1fr]">
          {/* ================================= */}

          {/* Левая колонка */}

          {/* ================================= */}

          <div>
            <Heading hClassName={'mb-4'} pClassName={''} description="">
              Расскажите о своей задаче
            </Heading>

            <h3 className="mt-8 md:mt-14 text-xl font-semibold text-slate-800">
              После отправки заявки:
            </h3>

            <div className="relative mt-4 md:mt-8">
              {/* линия */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px h-50.5 bg-slate-300" />

              <div className="space-y-4 md:space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="relative flex gap-4 sm:gap-6">
                    <div className=" relative z-10 flex h-12 w-12 items-center justify-center rounded-full text-4xl font-bold text-slate-800">
                      {step.number}
                    </div>

                    <div>
                      <p className="max-w-md md:max-w-sm text-lg leading-snug text-slate-700">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {/* декоративное свечение */}
            <div className="absolute -top-10 -right-10 h-80 w-80 rounded-full bg-white/30 blur-[120px]" />
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
