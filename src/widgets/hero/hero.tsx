'use client';

import { Button } from '@/components/ui/button';
import { Container, Section } from '@/shared';
import heroBack from './hero-back2.png';
import { BrandsMarquee } from '@/widgets/brands/brands-marquee';

export function Hero() {
  return (
    <>
      <div className="hero-background_mobile sm:h-[100svh]" />

      <Section
        className="
        lg:py-0 md:py-0 pb-8 sm:py-0
        min-h-svh
        -mt-20 sm:-mt-32 md:-mt-[90px]
        flex flex-col
      "
      >
        <div
          className="hidden sm:absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-white bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBack.src})` }}
        />

        <Container className="grow-1 flex flex-row items-end">
          <div className="w-full">
            <div className="space-y-8">
              <h1
                className="font-heading
                  text-[22px] xs:text-2xl sm:text-3xl md:text-3xl lg:text-5xl
                  font-semibold leading-snug tracking-wide
                  my-5
              "
              >
                Системный интегратор <br className="block xs:hidden" />
                <span className="text-primary text-2xl sm:text-3xl lg:text-5xl">IT-решений</span>
              </h1>

              <p className="max-w-3xl pb-3 text-base md:text-lg leading-snug text-text-secondary">
                Комплексные решения в области системной интеграции, поставки серверного оборудования
                и IT-инфраструктуры для бизнеса любого масштаба.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-8">
                <a href="#contact-with-us" className="grow-1 sm:grow-0">
                  <Button
                    size="md"
                    variant="default"
                    className="w-full px-6 py-22px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
                  >
                    Связаться с нами
                  </Button>
                </a>

                <a href="#products" className="grow-1 sm:grow-0">
                  <Button
                    variant="glass"
                    size="md"
                    className="w-full px-6 py-22px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
                  >
                    Каталог решений
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden sm:flex items-center justify-between gap-5 pt-10 sm:pt-25 pb-6">
              <BrandsMarquee />

              <div id="about-us" className="self-end mb-11" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
