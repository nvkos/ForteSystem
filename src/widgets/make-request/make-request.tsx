'use client';
import { Container, Heading, Section } from '@/shared';
import { Button } from '@/components/ui/button';

export function MakeRequest() {
  return (
    <Section className={'py-12 sm:py-16 lg:py-18 relative overflow-hidden blue_bg'}>
      <div className={'absolute w-70 h-70 bg-white/5 rounded-full -bottom-20 -left-10'} />
      <div className={'absolute w-100 h-100 bg-white/5 rounded-full -top-20 -right-10'} />

      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center relative">
          <div className={'max-w-140 mb-17 sm:mb-0'}>
            <div
              className={
                'glass_on_blue bg-repeat-round w-fit py-2.5 px-4 text-white text-xs font-medium mb-5 flex items-center gap-2 leading-none'
              }
            >
              <div className={'bg-white w-2 h-2 rounded-full'} />
              Готовы к внедрению?
            </div>

            <Heading
              hClassName={'text-white mb-4'}
              pClassName={'text-white/75'}
              description="Подберём оптимальное решение и подготовим коммерческое предложение с учётом ваших требований и бюджета."
            >
              Обсудим ваш проект
            </Heading>
          </div>

          <div className={'flex gap-7 w-full sm:w-fit'}>
            <a href="#contact-with-us" className={'grow-1 sm:grow-0'}>
              <Button
                className={
                  'w-full font-unbounded tracking-wider font-normal h-10 py-22px px-24px bg-white/85 hover:bg-white text-primary'
                }
              >
                Оставить заявку
              </Button>
            </a>

            <Button
              className={
                'py-22px px-34px grow-1 sm:grow-0 text-white big-glass_on_blue font-unbounded tracking-wider'
              }
            >
              +375 44 719-18-24
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
