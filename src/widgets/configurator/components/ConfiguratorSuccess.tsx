'use client';
import { Heading } from '@/shared';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ConfiguratorSuccess({}) {
  return (
    <section className="">
      <div className="">
        <div
          className="
          mx-auto max-w-2xl
          rounded-[28px]
          border border-slate-200/80
          bg-white
          px-5 py-7
          sm:px-8 sm:py-9
          lg:px-10 lg:py-10
          shadow-[0_20px_70px_rgba(15,23,42,.06)]"
        >
          <div className="mb-5 md:mb-7">
            <Heading hClassName={'lg:text-[24px] text-center'} wrapClassName={'space-y-2'}>
              Запрос успешко отправлен!
            </Heading>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-8">
          <a href="/configurator" className="grow-1 sm:grow-0">
            <Button
              size="md"
              variant="default"
              className="w-full px-6 py-22px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
            >
              Конфигуратор
            </Button>
          </a>

          <Link href={'/'} className={'mx-auto mt-8 block w-fit'}>
            <Button
              variant="glass"
              size="md"
              className="w-full px-6 py-22px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
            >
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
