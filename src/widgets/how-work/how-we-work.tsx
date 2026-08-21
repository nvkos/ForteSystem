'use client';
import lineSVG from '@/assets/stages.svg';
import { Container, Heading, Section } from '@/shared';
import { StepItem } from '@/widgets/how-work/step-item';
import Image from 'next/image';
import { steps } from '@/widgets/how-work/data';

type StepNumber = '01' | '02' | '03' | '04' | '05' | '06';
const coordinates: Record<StepNumber, { left: number; top: number }> = {
  '01': { left: 25, top: 0 },
  '02': { left: 65.4, top: 0 },
  '03': { left: 9.1, top: 33 },
  '04': { left: 51, top: 33 },
  '05': { left: 25, top: 67 },
  '06': { left: 65.4, top: 67 },
};

export function HowWeWork() {
  return (
    <Section className={'hidden md:block py-12 sm:py-16 lg:py-18 bg-[#2b2e35]'}>
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
            {steps.map((step) => {
              const coordinate = coordinates[step.number as StepNumber];
              return (
                <StepItem
                  key={step.number}
                  number={step.number}
                  left={coordinate.left}
                  top={coordinate.top}
                  header={step.title}
                  desc={step.description}
                />
              );
            })}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
