'use client';

import { useEffect, useState } from 'react';
import { Portal } from '@radix-ui/react-portal';
import Link from 'next/link';
import { Container } from '@/shared';
import FullLogo from '@/assets/logo/full-logo';
import { Menu, X } from 'lucide-react';
import Icons from '@/assets/icons';

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

const menuItems = [
  { label: 'О компании', href: '#mob-about-us' },
  { label: 'Оборудование и решения', href: '#products' },
  // {label: 'Как мы работаем', href: '#process'},
];

export function MobileMenu({ isOpen, onToggle, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  /* Escape */
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  /* Закрытие при переходе на desktop */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 561px)');

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        onClose();
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [onClose]);

  /*
   * На сервере и при первой клиентской отрисовке
   * возвращаем одинаковый результат.
   */
  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <div>
        <div className="fixed inset-x-0 top-0 z-[1300] pointer-events-none min-[561px]:hidden">
          <div className="mx-auto flex h-19 w-full items-center justify-between px-6">
            <a href="#" aria-label="Forte System" className="pointer-events-auto relative z-[1301]">
              <FullLogo />
            </a>

            <button
              type="button"
              aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={isOpen}
              onClick={onToggle}
              className="pointer-events-auto relative z-[1301] flex h-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:text-primary"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          onClick={onClose}
          aria-hidden="true"
          className={`fixed inset-0 z-[1100] bg-slate-300/20 backdrop-blur-md transition-opacity duration-300 min-[561px]:hidden ${
            isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        />

        <aside
          aria-label="Мобильное меню"
          className={`fixed right-0 top-0 z-[1200] h-dvh w-[calc(100%-43px)]
          overflow-y-auto
          border-l border-white/60 bg-white/65
          backdrop-blur-2xl
          ${isOpen ? 'shadow-[-20px_0_60px_rgba(0,82,204,.15)]' : 'shadow-none'}
          transition-transform duration-300 ease-out
          min-[561px]:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        >
          <div className="flex min-h-full flex-col px-6 pb-8 pt-[110px]">
            <nav className="flex flex-col gap-3">
              {menuItems?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center rounded-[22px] border border-[#8080801a] bg-white/70 px-6 py-3 text-sm text-slate-700 shadow-glass/4 transition-colors hover:text-primary"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CONTACTS */}

            <Container className="mt-auto px-0 py-0">
              <div className="flex flex-col gap-3 rounded-[22px] border border-[#8080801a] p-6 text-xs shadow-contacts/5">
                <a
                  href="tel:+375447191824"
                  className="flex items-center gap-3"
                  aria-label="мобильный номер телефона"
                >
                  <Icons type="phone" />
                  <span>+375 44 719-18-24</span>
                </a>

                <a
                  href="mailto:sales@fortesystem.by"
                  className="flex items-center gap-3"
                  aria-label="электронная почта"
                >
                  <Icons type="mail" />
                  <span>sales@fortesystem.by</span>
                </a>

                <div className="flex items-center gap-3" aria-label="Адрес">
                  <span>220024, Минск, ул. Серова 2А, каб. 31В</span>
                </div>

                <p>ООО «Форте Систем»</p>
              </div>
            </Container>

            {/* BUTTONS */}

            <div className="pt-10">
              <Link
                href="/configurator"
                onClick={onClose}
                // href="/"
                // onClick={() => notify('В режиме разработки. Скоро функционал будет доступен!', 'info')}
                className="flex h-10 items-center justify-center rounded-xl bg-white text-sm font-medium text-primary hover:shadow-[0_12px_35px_rgba(0,82,204,.3)]"
              >
                Открыть конфигуратор
              </Link>

              <Link
                href="#contact-with-us"
                onClick={onClose}
                className="mt-4 flex h-10 items-center justify-center rounded-xl bg-primary text-sm font-medium text-white hover:shadow-[0_12px_35px_rgba(0,82,204,.3)]"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </Portal>
  );
}
