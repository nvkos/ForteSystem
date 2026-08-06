'use client';

import { Button } from '@/components/ui/button';
import { Container, Section } from '@/shared';
import FullLogo from '@/assets/logo/full-logo';
import heroBack from './hero-back2.png';
import Icons from '@/assets/icons';
import { BrandsMarquee } from '@/widgets/brands/brands-marquee';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero-background_mobile sm:h-[100svh]"></div>
      <div className="hidden sm:block topbar bg-white text-xsm font-heading font-light">
        <Container className={'py-2'}>
          <div
            className="flex flex-row items-start justify-between gap-2
            md:items-center
          "
          >
            <div
              className=" flex flex-col gap-1 text-xxs
              lg:flex-row md:text-[12px] lg:text-[13px] lg:topbar__left lg:items-center lg:gap-10
            "
            >
              <p>ООО «Форте Систем»</p>
              <p className="topbar__address flex flex-row items-center gap-3" aria-label="Адрес">
                <span className={'hidden xl:block'}>
                  <Icons type={'map'} />
                </span>
                <span>220024, г. Минск, ул. Серова, д. 2А, каб. 31В</span>
              </p>
            </div>
            <div
              className="flex flex-col gap-1 text-xxs
             lg:flex-row md:text-[12px] lg:text-[13px] lg:items-center lg:gap-10
            "
            >
              <a className="flex flex-row items-center gap-3" href="tel:+375447191824">
                <span className={'hidden xl:block'}>
                  <Icons type={'phone'} />
                </span>
                <span>+375 44 719-18-24</span>
              </a>
              <a className="flex flex-row items-center gap-3" href="mailto:sales@fortesystem.by">
                <span className={'hidden xl:block'}>
                  <Icons type={'mail'} />
                </span>
                <span>sales@fortesystem.by</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <header
        className={`sticky top-0 z-[1000] w-full site-header ${isScrolled ? 'site-header--scrolled' : ''}`}
      >
        <Container>
          <nav aria-label="Global" className="flex items-center justify-between px-0">
            <div className="flex lg:flex-1">
              <a href="#" className="">
                <span className="sr-only">Forte System</span>
                <div className="w-auto">
                  <FullLogo />
                </div>
              </a>
            </div>
            <div className={'hidden menu:flex glass flex-row py-2 px-6 gap-4'}>
              <a href="#about-us" className="block text-sm/6 font-semibold hover:text-primary">
                О компании
              </a>
              <a href="#products" className="block text-sm/6 font-semibold hover:text-primary">
                Продукты
              </a>
              <a
                href="#contact-with-us"
                className="block text-sm/6 font-semibold hover:text-primary"
              >
                Контакты
              </a>
            </div>
            <MobileMenu />
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Button size="md" variant={'default'} className={'px-5 py-12px rounded-3xl'}>
                <Icons type={'configuration'} size={16} />
                Конфигуратор
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      <Section className="lg:py-0 md:py-0 pb-8 sm:py-0 min-h-svh -mt-20 sm:-mt-32 flex flex-col">
        {/* фоновые эффекты */}
        <div
          className="hidden sm:absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-white bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBack.src})` }}
        />

        <Container className={`grow-1 flex flex-row items-end`}>
          <div className={`w-full`}>
            {/* LEFT */}
            <div className="space-y-8">
              <h1
                className="
              font-heading

              {/*max-w-xl*/}

              text-[22px]
              xs:text-2xl
              sm:text-3xl
              font-semibold
              leading-snug
              tracking-wide
              my-5

              {/*text-text-primary*/}

              md:text-3xl
              lg:text-5xl
            "
              >
                Системный интегратор <br className={'block xs:hidden'} />
                <span className={'text-primary text-2xl sm:text-3xl'}>IT-решений</span>
              </h1>

              <p className="max-w-3xl text-base md:text-lg leading-snug text-text-secondary pb-3">
                Комплексные решения в области системной интеграции, поставки серверного оборудования
                и IT-инфраструктуры для бизнеса любого масштаба.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-8">
                <a href="#contact-with-us" className={'grow-1 sm:grow-0'}>
                  <Button size="md" variant={'default'} className={'w-full py-22px px-6'}>
                    Связаться с нами
                  </Button>
                </a>

                <a href="#products" className={'grow-1 sm:grow-0'}>
                  <Button variant="glass" size="md" className={'w-full py-22px px-6'}>
                    Каталог решений
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden sm:flex justify-between items-center gap-5 pt-10 sm:pt-25 pb-6">
              <BrandsMarquee />
              <div id={'about-us'} className={'self-end mb-11'} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

// function Stat({value, text}: { value: string; text: string }) {
//   return (
//     <div>
//       <div className="text-2xl font-semibold text-text-primary">{value}</div>
//
//       <div className="text-sm text-text-secondary">{text}</div>
//     </div>
//   );
// }
