'use client';

import { PlatformId } from '@/widgets/configurator/types/configurator.types';

type Step = 1 | 2 | 3;

type Props = {
  step: Step;
  platform?: PlatformId | null;
  brand?: string | null;
};

export function ConfiguratorStepper({ step, platform, brand }: Props) {
  const steps = [
    { id: 1, label: step === 1 ? '1' : platform === 'servers' ? 'Серверы' : 'СХД' },
    { id: 2, label: step <= 2 ? '2' : brand === 'not_selected' ? 'Не выбрано' : brand },
    { id: 3, label: '3' },
  ] as const;

  console.log(platform);
  return (
    <div className="flex w-fit items-center gap-2 self-center rounded-full border-white/60 bg-white/60 px-2 py-2 m-[0_auto]">
      {steps.map((item, index) => {
        const isActive = step === item.id;
        const isCompleted = step > item.id;

        return (
          <div key={item.id} className="flex items-center gap-2">
            <span
              className={`
                flex items-center justify-center
                rounded-full
                min-w-7
                px-[10px]
                py-[2px]
                text-sm/6
                font-medium
                transition-all
                duration-200

                ${
                  isActive
                    ? 'bg-[#0052cc]/90 text-white'
                    : isCompleted
                      ? 'bg-[#eff6ff] text-[#0052cc]'
                      : 'text-slate-700'
                }
              `}
            >
              {item.label}
            </span>

            {index < steps.length - 1 && <div className="h-px w-2 bg-neutral-200" />}
          </div>
        );
      })}
    </div>
  );
}
