'use client';
import { Container } from '@/shared';
import Icons from '@/assets/icons';
import FullLogo from '@/assets/logo/full-logo';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { useCallback, useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <div className="hidden sm:block topbar bg-white text-xsm font-heading font-light">
        <Container className="py-2">
          <div
            className="
              flex flex-row
              items-start
              justify-between
              gap-2

              md:items-center
            "
          >
            <div
              className="
                flex
                flex-col
                gap-1

                text-xxs

                md:text-[12px]

                lg:flex-row
                lg:items-center
                lg:gap-10
                lg:text-[13px]
              "
            >
              <p>ООО «Форте Систем»</p>

              <p
                className="
                  topbar__address
                  flex
                  flex-row
                  items-center
                  gap-3
                "
                aria-label="Адрес"
              >
                <span className="hidden xl:block">
                  <Icons type="map" />
                </span>

                <span>220024, г. Минск, ул. Серова, д. 2А, каб. 31В</span>
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                gap-1

                text-xxs

                md:text-[12px]

                lg:flex-row
                lg:items-center
                lg:gap-10
                lg:text-[13px]
              "
            >
              <a className="flex items-center gap-3" href="tel:+375447191824">
                <span className="hidden xl:block">
                  <Icons type="phone" />
                </span>

                <span>+375 44 719-18-24</span>
              </a>

              <a className="flex items-center gap-3" href="mailto:sales@fortesystem.by">
                <span className="hidden xl:block">
                  <Icons type="mail" />
                </span>

                <span>sales@fortesystem.by</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <header
        className={`sticky top-0 z-0 h-19 menu:h-auto w-full site-header ${isScrolled ? 'site-header--scrolled' : ''}`}
      >
        <Container>
          <nav aria-label="Global" className="flex h-full items-center justify-between">
            <div className="hidden md:flex lg:flex-1">
              <a href="#">
                <span className="sr-only">Forte System</span>
                <FullLogo />
              </a>
            </div>

            <div className="hidden menu:flex glass flex-row gap-4 px-6 py-2">
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

            <div className="hidden md:flex lg:flex-1 lg:justify-end">
              <Button
                size="md"
                variant="default"
                className="rounded-3xl px-5 py-12px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
              >
                <Icons type="configuration" size={16} />
                Конфигуратор
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onToggle={toggleMenu} onClose={closeMenu} />
    </>
  );
}
