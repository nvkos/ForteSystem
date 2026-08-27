'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import type { PlatformId } from '../types/configurator.types';
import { BRANDS, BRAND_LOGOS } from '../data/brands.tsx';
import { Heading } from '@/shared';
import { ConfiguratorStepper } from '@/widgets/configurator/components/ConfiguratorStepper';
// import Image from "next/image";

type Props = {
  platform: PlatformId | null;
  selectedBrand: string | null;
  onSelect: (brand: string) => void;
  onBack: () => void;
};

export function BrandStep({ platform, selectedBrand, onSelect, onBack }: Props) {
  if (!platform) {
    return null;
  }
  console.log(platform);
  const brands = BRANDS[platform];

  return (
    <section className="mx-auto">
      <div className="mb-5 md:mb-11">
        <Heading hClassName={'lg:text-[24px] text-center'} wrapClassName={'space-y-2'}>
          Выберите производителя
        </Heading>

        <div className={'grid grid-cols-3 mb-8 mt-4 items-center'}>
          <button
            type="button"
            onClick={onBack}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-slate-500
              transition-colors
              hover:text-primary
            "
          >
            <ArrowLeft size={16} />
            Назад
          </button>
          <ConfiguratorStepper step={2} platform={platform} />
          {/*<p className="text-sm font-medium text-center text-primary">*/}
          {/*  Шаг 2 из 3*/}
          {/*</p>*/}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                onSelect('not_selected');
              }}
              className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-slate-500
              transition-colors
              hover:text-primary
            "
            >
              Пропустить
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {brands.map((brand) => {
          const selected = selectedBrand === brand;

          const logo = BRAND_LOGOS[brand];

          return (
            <button
              key={brand}
              type="button"
              onClick={() => onSelect(brand)}
              className={`
                group
                relative
                flex
                min-h-[130px]
                flex-col
                items-center
                justify-center
                gap-5
                rounded-[24px]
                border
                bg-white/70
                p-5
                backdrop-blur-xl
                transition-all
                duration-200

                ${
                  selected
                    ? `
                      border-primary
                      bg-primary/[0.04]
                      shadow-[0_15px_45px_rgba(0,82,204,.12)]
                    `
                    : `
                      border-slate-200
                      hover:-translate-y-0.5
                      hover:border-primary/30
                      hover:bg-white
                    `
                }
              `}
            >
              {selected && (
                <span
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    text-[11px]
                    text-white
                  "
                >
                  ✓
                </span>
              )}

              {logo || brand}
            </button>
          );
        })}
      </div>
    </section>
  );
}
