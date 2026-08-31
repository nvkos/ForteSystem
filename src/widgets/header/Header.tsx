'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileMenu } from '@/components/layout/mobile-menu';
import Icons from '@/assets/icons';
import { Button } from '@/components/ui/button';
import FullLogo from '@/assets/logo/full-logo';
import { Container } from '@/shared';
import { useNotification } from '@/components/notifications/NotificationProvider';

export function Header() {
  const pathname = usePathname();
  const { notify } = useNotification();
  const isConfiguratorPage = pathname === '/configurator';

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

  const headerScrolled = isScrolled || isConfiguratorPage;

  return (
    <>
      <header
        className={`sticky top-0 z-0 h-19 menu:h-auto w-full site-header ${
          headerScrolled ? 'site-header--scrolled' : ''
        }`}
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
              <a href="/#about-us" className="block text-sm/6 font-semibold hover:text-primary">
                О компании
              </a>

              <a href="/#products" className="block text-sm/6 font-semibold hover:text-primary">
                Продукты
              </a>

              <a
                href="/#contact-with-us"
                className="block text-sm/6 font-semibold hover:text-primary"
              >
                Заявка
              </a>
            </div>

            <div className="hidden md:flex lg:flex-1 lg:justify-end">
              {!isConfiguratorPage && <Link href="/configurator">
                <Button
                  size="md"
                  variant="default"
                  className="rounded-3xl px-5 py-12px hover:shadow-[0_10px_40px_rgba(0,82,204,.3)]"
                >
                  <Icons type="configuration" size={16} />
                  Конфигуратор
                </Button>
              </Link>}
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onToggle={toggleMenu} onClose={closeMenu} />
    </>
  );
}
