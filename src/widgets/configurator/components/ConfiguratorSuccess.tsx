'use client';
import { Heading } from '@/shared';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export function ConfiguratorSuccess({
  setSubmitted,
}: {
  setSubmitted: (submitted: boolean) => void;
}) {
  useEffect(() => {
    return () => {
      setSubmitted(false);
    };
  }, []);
  return (
    <section className="">
      <div className="">
        <div
          className="
          mx-auto max-w-2xl
          rounded-[28px]
          {/*border border-slate-200/80*/}
          {/*bg-white*/}
          px-5 py-7
          mb-7 md:mb-10
          sm:px-8 sm:py-9
          lg:px-10 lg:py-10
         "
        >
          <Heading hClassName={'lg:text-[24px] text-center'} wrapClassName={'space-y-2'}>
            Запрос успешно отправлен!
          </Heading>

          <div className={'mt-10'}>
            <p className="mb-4 text-justify">
              Спасибо за обращение. Мы получили ваш запрос и передали его специалисту. Письмо с
              указанной конфигурацией выслали Вам на указанную электронную почту.
            </p>

            <p className="">Мы свяжемся с Вами в ближайшее время.</p>
          </div>

          <div className="flex justify-center flex-wrap mt-10 gap-4 sm:gap-8">
            <Link href={'/configurator'} className={''}>
              <Button
                onClick={() => setSubmitted(false)}
                size="md"
                variant="default"
                className="px-6 py-22px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
              >
                Конфигуратор
              </Button>
            </Link>

            <Link href={'/'} className={''}>
              <Button
                variant="glass"
                size="md"
                className="px-6 py-22px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
              >
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
