import { ContactForm } from './ContactForm';
import { Container, Heading } from '@/shared';

const steps = [
  {
    number: '1',
    text: 'После анализа ваших требований с вами свяжется эксперт',
  },
  {
    number: '2',
    text: 'При необходимости мы подпишем соглашение о неразглашении, чтобы обеспечить высочайший уровень конфиденциальности',
  },
  {
    number: '3',
    text: 'Мы представляем комплексное проектное предложение, включающее смету, сроки, резюме и т.д.',
  },
];

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28" id={'contact-with-us'}>
      <Container>
        {/* ====== Фон ====== */}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[180px]" />

          <div className="absolute bottom-[-250px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/40 blur-[220px]" />

          <div className="absolute right-20 bottom-0 h-[350px] w-[350px] rounded-full bg-white/20 blur-[140px]" />
        </div>

        {/*<div*/}
        {/*  className="*/}
        {/*    absolute*/}
        {/*    inset-0*/}
        {/*    bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_35%,#eef7ff_55%,#8bc5ff_80%,#0052CC_100%)]*/}
        {/*  "*/}
        {/*/>*/}

        {/* большое синее свечение */}

        {/*<div*/}
        {/*  className="*/}
        {/*    absolute*/}
        {/*    -bottom-56*/}
        {/*    right-[-200px]*/}
        {/*    h-[700px]*/}
        {/*    w-[700px]*/}
        {/*    rounded-full*/}
        {/*    bg-[#0052CC]/60*/}
        {/*    blur-[180px]*/}
        {/*  "*/}
        {/*/>*/}

        {/* голубое */}
        {/*<div*/}
        {/*  className="*/}
        {/*    absolute*/}
        {/*    bottom-0*/}
        {/*    left-1/2*/}
        {/*    h-[400px]*/}
        {/*    w-[700px]*/}
        {/*    -translate-x-1/2*/}
        {/*    rounded-full*/}
        {/*    bg-sky-300/40*/}
        {/*    blur-[160px]*/}
        {/*  "*/}
        {/*/>*/}

        <div className="relative mx-auto max-w-[1360px] px-6">
          <div className="grid gap-20 lg:grid-cols-[520px_1fr]">
            {/* ================================= */}

            {/* Левая колонка */}

            {/* ================================= */}

            <div>
              <Heading hClassName={'mb-4'} pClassName={''} description="">
                Закажите бесплатную консультацию
              </Heading>
              {/*<h2*/}
              {/*  className="*/}
              {/*    max-w-md*/}
              {/*    font-heading*/}
              {/*    text-5xl*/}
              {/*    font-bold*/}
              {/*    leading-tight*/}
              {/*    text-slate-800*/}
              {/*  "*/}
              {/*>*/}
              {/*  Закажите бесплатную консультацию*/}
              {/*</h2>*/}

              <h3
                className="
                mt-20
                text-md
                font-semibold
                text-slate-800
              "
              >
                Что произойдет дальше?
              </h3>

              <div className="relative mt-10">
                {/* линия */}

                <div
                  className="
                  absolute
                  left-[23px]
                  top-4
                  bottom-4
                  w-px h-72.5
                  bg-slate-300
                "
                />

                <div className="space-y-10">
                  {steps.map((step) => (
                    <div key={step.number} className="relative flex gap-8">
                      <div
                        className="
                        relative
                        z-10
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-4xl
                        font-bold
                        text-slate-800
                      "
                      >
                        {step.number}
                      </div>

                      <div className="pt-2">
                        <p
                          className="
                          max-w-sm
                          text-lg
                          leading-8
                          text-slate-700
                        "
                        >
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================================= */}

            {/* Правая колонка */}

            {/* ================================= */}

            <div className="relative">
              {/* декоративное свечение */}

              <div
                className="
                absolute
                -top-10
                -right-10
                h-80
                w-80
                rounded-full
                bg-white/30
                blur-[120px]
              "
              />

              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
