'use client';

import { ArrowLeft, Send } from 'lucide-react';

import type { ConfigBlock, ConfigValues, PlatformId } from '../types/configurator.types';

import { ConfigField } from './fields/ConfigField';
import { Heading } from '@/shared';
import { ConfiguratorStepper } from '@/widgets/configurator/components/ConfiguratorStepper';
import { ConfiguratorSidebar } from '@/widgets/configurator/components/ConfiguratorSidebar';


type Props = {
  platform: PlatformId | null;
  brand: string | null;
  schema: ConfigBlock[];
  values: ConfigValues;

  onChange: (id: string, value: string | string[]) => void;

  onBack: () => void;
  onReset: () => void;
};

export function RequirementsStep({
  platform,
  brand,
  schema,
  values,
  onChange,
  onBack,
  onReset,
}: Props) {
  if (!platform || !brand) {
    return null;
  }

  return (
    <section className="">
      <div className="mb-5 md:mb-11">
        <Heading hClassName={'lg:text-[24px] text-center'} wrapClassName={'space-y-2'}>
          Требования к конфигурации
        </Heading>
        <div className={'grid grid-cols-3 mb-8 items-center mt-4'}>
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
            Назад
          </button>
          <ConfiguratorStepper step={3} brand={brand} platform={platform} />
          {/*<p className="text-sm font-medium text-center text-primary">*/}
          {/*  Шаг 3 из 3*/}
          {/*</p>*/}
        </div>
      </div>
      <div className="">
        <div className={'grid lg:grid-cols-[1fr_320px] gap-6'}>
          <div className={''}>
            <div className="">
              {schema.map((block) => (
                <section
                  key={block.title}
                  className="
                    overflow-hidden
                    [:first-child]:rounded-[18px_18px_0_0] [:last-child]:rounded-[0_0_18px_18px]
                    border
                    border-slate-200 [&:not(:last-child)]:border-b-0
                    bg-white/60
                    shadow-[0_15px_50px_rgba(0,82,204,.04)]
                    backdrop-blur-xl
                  "
                >
                  <div
                    className="
                      border-b
                      border-slate-100
                      bg-white/40
                      px-5
                      py-4
                      md:px-7
                    "
                  >
                    <h2 className="text-base font-semibold text-primary">{block.title}</h2>
                  </div>

                  <div className="grid gap-7 px-5 py-6 md:px-7 grid-cols-6">
                    {block.fields.map(
                      (field) =>
                        !(field.showIf && !field.showIf(values)) && (
                          <div key={field.id} className={field.colSpan}>
                            <ConfigField field={field} values={values} onChange={onChange} />
                          </div>
                        ),
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-8 flex justify-end items-center">
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-primary
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white
                    shadow-[0_10px_35px_rgba(0,82,204,.22)]
                    transition-all
                    hover:shadow-[0_15px_45px_rgba(0,82,204,.32)]
                  "
                >
                  <Send size={16} />
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>

          <ConfiguratorSidebar
            platform={platform}
            brand={brand}
            schema={schema}
            values={values}
          />
        </div>
      </div>
    </section>
  );
}
