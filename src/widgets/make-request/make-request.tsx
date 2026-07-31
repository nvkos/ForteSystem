import { Container, Heading, Section } from '@/shared';
import { Button } from '@/components/ui/button';

export function MakeRequest() {
  return (
    <Section className={'py-16 lg:py-18 bg-blue-600 relative overflow-hidden'}>
      <div className={'absolute w-70 h-70 bg-white/5 rounded-full -bottom-20 -left-10'} />
      <div className={'absolute w-100 h-100 bg-white/5 rounded-full -top-20 -right-10'} />

      <Container>
        <div className="flex justify-between items-center">
          <div className={'max-w-140'}>
            <div
              className={
                'glass w-fit py-2 px-4 text-white text-xs font-medium mb-5 flex items-center gap-2 leading-none'
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

          <div className={'flex gap-7'}>
            <a href="#contact-with-us">
              <Button size="md" variant={'default'} className={'py-22px px-6 '}>
                Оставить заявку
              </Button>
            </a>

            <Button
              variant="glass"
              size="md"
              className={'py-22px px-6 bg-white/0 text-white glass'}
            >
              +375 44 719-18-24
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
