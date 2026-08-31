'use client';

import { ArrowLeft, Database, Server } from 'lucide-react';

import type { PlatformId } from '../types/configurator.types';
import { Heading } from '@/shared';
import Link from 'next/link';
import { ConfiguratorStepper } from '@/widgets/configurator/components/ConfiguratorStepper';


type Props = {
  onSelect: (platform: PlatformId) => void;
  onBack: () => void;
};

const platforms = [
  {
    id: 'servers' as const,
    title: 'Серверы',
    description: 'Стоечные, башенные, blade и edge-серверы',
    icon: Server,
  },

  {
    id: 'storage' as const,
    title: 'Системы хранения данных',
    description: 'SAN, NAS, unified и object storage',
    icon: Database,
  },
];

export function PlatformStep({ onSelect, onBack }: Props) {
  return (
    <section className="">
      <div className="mb-5 md:mb-11">
        <Heading hClassName={'lg:text-[24px] text-center'} wrapClassName={'space-y-2'}>
          Выберите платформу
        </Heading>
        <div className={'grid grid-cols-3 mb-8 mt-4 items-center'}>
          <Link href="/">
            <button
              type="button"
              onClick={onBack}
              className="
                inline-flex
                items-center
                gap-2
                text-sm cursor-pointer
                text-slate-500
                transition-colors
                hover:text-primary
              "
            >
              <ArrowLeft size={16} />
              Выйти
            </button>
          </Link>
          <ConfiguratorStepper step={1} />
          {/*<p className="text-sm font-medium text-center text-primary">*/}
          {/*  Шаг 1 из 3*/}
          {/*</p>*/}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,_440px)_minmax(0,_440px)]">
        {platforms.map((platform) => {
          const Icon = platform.icon;

          return (
            <Link href={`?platform=${platform.id}`} className={'w-full'} key={platform.id}>
              <button
                key={platform.id}
                type="button"
                onClick={() => onSelect(platform.id)}
                className="
                group
                relative w-full
                overflow-hidden
                flex lg:block items-center gap-6
                rounded-[28px]
                border border-slate-200
                bg-white/70
                p-6
                text-left
                shadow-[0_20px_60px_rgba(0,82,204,.06)]
                backdrop-blur-xl
                transition-all
                duration-300
                cursor-pointer

                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-white
                hover:shadow-[0_25px_70px_rgba(0,82,204,.14)]
              "
              >
                {/* декоративное свечение */}
                <div
                  className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-primary/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-primary/20
                "
                />

                <div
                  className="
                  relative
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#eff6ff]
                  text-[#0052cc]
                  transition-all
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-white
                "
                >
                  <Icon size={25} strokeWidth={1.6} />
                </div>

                <div>
                  <div className="relative m-0 lg:mt-6">
                    <h2 className="text-md md:text-xl font-semibold text-slate-900">
                      {platform.title}
                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-tight text-slate-500">
                      {platform.description}
                    </p>
                  </div>
                </div>
              </button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
