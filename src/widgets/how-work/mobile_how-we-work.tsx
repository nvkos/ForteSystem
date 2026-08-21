'use client';
import mobileLineSVG from '@/assets/mobile_stages.svg';
import { Container, Heading, Section } from '@/shared';
import Image from 'next/image';
import { MobileStepItem } from '@/widgets/how-work/mobile_step-item';
import { steps } from '@/widgets/how-work/data';

type StepNumber = '01' | '02' | '03' | '04' | '05' | '06';
const coordinates: Record<StepNumber, { left: number; top: number }> = {
  '01': { left: 27, top: 1 },
  '02': { left: 12, top: 19.8 },
  '03': { left: 26, top: 38 },
  '04': { left: 12, top: 57 },
  '05': { left: 27, top: 75 },
  '06': { left: 12, top: 93 },
};

export function MobileHowWeWork() {
  return (
    <Section className={'hidden md:hidden py-12 pb-16 sm:py-16 lg:py-18 bg-[#2b2e35]'}>
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
            className="absolute left-[1.7%] top-[18px] w-[calc(100%-40px)] h-[568px] pointer-events-none select-none"
            src={mobileLineSVG}
            alt=""
            width={1360}
            height={460}
            aria-hidden="true"
          />
          <ol className="relative list-none min-h-155 m-0 p-0">
            {steps.map((step) => {
              const coordinate = coordinates[step.number as StepNumber];
              return (
                <MobileStepItem
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
