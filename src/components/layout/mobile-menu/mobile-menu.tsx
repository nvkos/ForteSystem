'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

const navigation = [
  {
    label: 'О компании',
    href: '#about',
  },
  {
    label: 'Оборудование',
    href: '#equipment',
  },
  {
    label: 'Решения',
    href: '#solutions',
  },
  {
    label: 'Контакты',
    href: '#contacts',
  },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="menu:hidden">
      {/* Кнопка открытия */}

      <div className={'flex menu:hidden glass flex-row py-2 px-4 gap-3'}>
        <a
          href="#"
          className="hidden xs:flex text-sm/6 font-semibold hover:text-primary text-black gap-1
        items-center border-r-1 pr-3 border-neutral-800"
        >
          {/*<Icons type={'configuration'} size={12} color={'black'}/>*/}
          <ArrowUpRight size={'22px'} />
          Конфигуратор
        </a>
        <button>
          <Menu size={20} />
        </button>
      </div>

      {/*<button*/}
      {/*  type="button"*/}
      {/*  onClick={() => setIsOpen(true)}*/}
      {/*  aria-label="Открыть меню"*/}
      {/*  aria-expanded={isOpen}*/}
      {/*  className="*/}
      {/*    flex*/}
      {/*    size-11*/}
      {/*    items-center*/}
      {/*    justify-center*/}
      {/*    rounded-xl*/}
      {/*    border*/}
      {/*    border-border*/}
      {/*    bg-background*/}
      {/*    transition-colors*/}
      {/*    hover:bg-muted*/}
      {/*  "*/}
      {/*>*/}
      {/*  <Menu size={22} />*/}

      {/*  <Icons type={'configuration'} size={16}/>*/}
      {/*</button>*/}

      {/* Затемнение */}
      <button
        type="button"
        aria-label="Закрыть меню"
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-40
          bg-black/45
          backdrop-blur-sm
          transition-opacity
          duration-300
          ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
        `}
      />

      {/* Выезжающая панель */}
      {/*<aside*/}
      {/*  className={`*/}
      {/*    fixed*/}
      {/*    inset-y-0*/}
      {/*    right-0*/}
      {/*    z-[100]*/}
      {/*    flex*/}
      {/*    h-dvh*/}
      {/*    w-[88vw]*/}
      {/*    max-w-[380px]*/}
      {/*    flex-col*/}
      {/*    bg-background*/}
      {/*    px-6*/}
      {/*    py-5*/}
      {/*    shadow-2xl*/}
      {/*    transition-transform*/}
      {/*    duration-300*/}
      {/*    ease-out*/}
      {/*    ${*/}
      {/*      isOpen*/}
      {/*        ? 'translate-x-0'*/}
      {/*        : 'translate-x-full'*/}
      {/*    }*/}
      {/* `}*/}
      {/*>*/}
      {/*  /!* Верхняя часть *!/*/}
      {/*  <div className="flex items-center justify-between">*/}
      {/*    <span className="font-unbounded text-sm font-semibold">*/}
      {/*      FORTE SYSTEM*/}
      {/*    </span>*/}

      {/*    <button*/}
      {/*      type="button"*/}
      {/*      onClick={closeMenu}*/}
      {/*      aria-label="Закрыть меню"*/}
      {/*      className="*/}
      {/*        flex*/}
      {/*        size-11*/}
      {/*        items-center*/}
      {/*        justify-center*/}
      {/*        rounded-xl*/}
      {/*        border*/}
      {/*        border-border*/}
      {/*        transition-colors*/}
      {/*        hover:bg-muted*/}
      {/*      "*/}
      {/*    >*/}
      {/*      <X size={22} />*/}
      {/*    </button>*/}
      {/*  </div>*/}

      {/*  /!* Навигация *!/*/}
      {/*  <nav className="mt-12 flex flex-col">*/}
      {/*    {navigation.map((item) => (*/}
      {/*      <a*/}
      {/*        key={item.href}*/}
      {/*        href={item.href}*/}
      {/*        onClick={closeMenu}*/}
      {/*        className="*/}
      {/*          border-b*/}
      {/*          border-border*/}
      {/*          py-5*/}
      {/*          text-lg*/}
      {/*          font-medium*/}
      {/*          text-foreground*/}
      {/*          transition-colors*/}
      {/*          hover:text-primary*/}
      {/*        "*/}
      {/*      >*/}
      {/*        {item.label}*/}
      {/*      </a>*/}
      {/*    ))}*/}
      {/*  </nav>*/}

      {/*  /!* Кнопка внизу *!/*/}
      {/*  <div className="mt-auto pb-4">*/}
      {/*    <a*/}
      {/*      href="#request"*/}
      {/*      onClick={closeMenu}*/}
      {/*      className="*/}
      {/*        flex*/}
      {/*        h-13*/}
      {/*        w-full*/}
      {/*        items-center*/}
      {/*        justify-center*/}
      {/*        rounded-xl*/}
      {/*        bg-primary*/}
      {/*        px-6*/}
      {/*        text-sm*/}
      {/*        font-semibold*/}
      {/*        text-primary-foreground*/}
      {/*        transition-opacity*/}
      {/*        hover:opacity-90*/}
      {/*      "*/}
      {/*    >*/}
      {/*      Получить предложение*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</aside>*/}
    </div>
  );
}
