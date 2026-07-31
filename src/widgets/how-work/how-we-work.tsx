import lineSVG from '@/assets/stages.svg';
import { Container, Heading, Section } from '@/shared';
import { StepItem } from '@/widgets/how-work/step-item';
import Image from 'next/image';

export function HowWeWork() {
  return (
    <Section className={'py-16 lg:py-18 bg-text-primary'}>
      <Container>
        <Heading
          hClassName={'text-white'}
          pClassName={'text-white/75'}
          description="Помогаем подобрать оптимальное решение, организуем поставку и обеспечиваем поддержку на всех этапах проекта."
        >
          Этапы реализации проекта
        </Heading>

        <div className="relative mt-13 min-h-12">
          <Image
            className="absolute left-[1.7%] top-[18px] w-[calc(100%-40px)] h-[312px] pointer-events-none select-none"
            src={lineSVG}
            alt=""
            width={1360}
            height={460}
            aria-hidden="true"
          />
          <ol className="relative list-none min-h-115 m-0 p-0">
            <StepItem
              number={1}
              left={25}
              top={0}
              header={'Анализ задачи'}
              desc={'Изучаем требования, нагрузку, текущую инфраструктуру и бюджет проекта.'}
            />
            <StepItem
              number={2}
              left={65.4}
              top={0}
              header={'Подбор решения'}
              desc={
                'Подготавливаем оптимальную конфигурацию оборудования и программного обеспечения.'
              }
            />
            <StepItem
              number={3}
              left={9.1}
              top={33}
              header={'Согласование предложения'}
              desc={'Формируем коммерческое предложение и согласовываем сроки поставки.'}
            />
            <StepItem
              number={4}
              left={51}
              top={33}
              header={'Поставка оборудования'}
              desc={'Организуем доставку по всей территории Республики Беларусь.'}
            />
            <StepItem
              number={5}
              left={25}
              top={67}
              header={'Ввод в эксплуатацию'}
              desc={
                'При необходимости подключаем сертифицированных партнеров для монтажа и настройки.'
              }
            />
            <StepItem
              number={6}
              left={65.4}
              top={67}
              header={'Гарантийная поддержка'}
              desc={'Обеспечиваем гарантийное сопровождение и возможность расширенной поддержки.'}
            />
          </ol>
        </div>
      </Container>
    </Section>
  );
}
