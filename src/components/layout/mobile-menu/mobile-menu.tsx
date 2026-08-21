// 'use client';
//
// import { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { ArrowUpRight } from 'lucide-react';
//
// const navigation = [
//   {
//     label: 'О компании',
//     href: '#about',
//   },
//   {
//     label: 'Оборудование',
//     href: '#equipment',
//   },
//   {
//     label: 'Решения',
//     href: '#solutions',
//   },
//   {
//     label: 'Контакты',
//     href: '#contact',
//   },
// ];
//
// export function MobileMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//
//   useEffect(() => {
//     const html = document.documentElement;
//     const body = document.body;
//
//     if (isOpen) {
//       html.style.overflow = 'hidden';
//       body.style.overflow = 'hidden';
//     }
//
//     return () => {
//       html.style.overflow = '';
//       body.style.overflow = '';
//     };
//   }, [isOpen]);
//
//   const closeMenu = () => {
//     setIsOpen(false);
//   };
//
//   return (
//     <div className="menu:hidden">
//       {/* Кнопка открытия */}
//
//       <div className={'flex menu:hidden glass flex-row py-2 px-4 gap-3'}>
//         <a
//           href="#"
//           className="hidden sm:flex text-sm/6 font-semibold hover:text-primary text-black gap-1
//         items-center border-r-1 pr-3 border-neutral-800"
//         >
//           {/*<Icons type={'configuration'} size={12} color={'black'}/>*/}
//           <ArrowUpRight size={'22px'} />
//           Конфигуратор
//         </a>
//         <button>
//           <Menu size={20} />
//         </button>
//       </div>
//
//       {/*<button*/}
//       {/*  type="button"*/}
//       {/*  onClick={() => setIsOpen(true)}*/}
//       {/*  aria-label="Открыть меню"*/}
//       {/*  aria-expanded={isOpen}*/}
//       {/*  className="*/}
//       {/*    flex*/}
//       {/*    size-11*/}
//       {/*    items-center*/}
//       {/*    justify-center*/}
//       {/*    rounded-xl*/}
//       {/*    border*/}
//       {/*    border-border*/}
//       {/*    bg-background*/}
//       {/*    transition-colors*/}
//       {/*    hover:bg-muted*/}
//       {/*  "*/}
//       {/*>*/}
//       {/*  <Menu size={22} />*/}
//
//       {/*  <Icons type={'configuration'} size={16}/>*/}
//       {/*</button>*/}
//
//       {/* Затемнение */}
//       <button
//         type="button"
//         aria-label="Закрыть меню"
//         onClick={closeMenu}
//         className={`
//           fixed
//           inset-0
//           z-40
//           bg-black/45
//           backdrop-blur-sm
//           transition-opacity
//           duration-300
//           ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
//         `}
//       />
//
//       {/* Выезжающая панель */}
//       {/*<aside*/}
//       {/*  className={`*/}
//       {/*    fixed*/}
//       {/*    inset-y-0*/}
//       {/*    right-0*/}
//       {/*    z-[100]*/}
//       {/*    flex*/}
//       {/*    h-dvh*/}
//       {/*    w-[88vw]*/}
//       {/*    max-w-[380px]*/}
//       {/*    flex-col*/}
//       {/*    bg-background*/}
//       {/*    px-6*/}
//       {/*    py-5*/}
//       {/*    shadow-2xl*/}
//       {/*    transition-transform*/}
//       {/*    duration-300*/}
//       {/*    ease-out*/}
//       {/*    ${*/}
//       {/*      isOpen*/}
//       {/*        ? 'translate-x-0'*/}
//       {/*        : 'translate-x-full'*/}
//       {/*    }*/}
//       {/* `}*/}
//       {/*>*/}
//       {/*  /!* Верхняя часть *!/*/}
//       {/*  <div className="flex items-center justify-between">*/}
//       {/*    <span className="font-unbounded text-sm font-semibold">*/}
//       {/*      FORTE SYSTEM*/}
//       {/*    </span>*/}
//
//       {/*    <button*/}
//       {/*      type="button"*/}
//       {/*      onClick={closeMenu}*/}
//       {/*      aria-label="Закрыть меню"*/}
//       {/*      className="*/}
//       {/*        flex*/}
//       {/*        size-11*/}
//       {/*        items-center*/}
//       {/*        justify-center*/}
//       {/*        rounded-xl*/}
//       {/*        border*/}
//       {/*        border-border*/}
//       {/*        transition-colors*/}
//       {/*        hover:bg-muted*/}
//       {/*      "*/}
//       {/*    >*/}
//       {/*      <X size={22} />*/}
//       {/*    </button>*/}
//       {/*  </div>*/}
//
//       {/*  /!* Навигация *!/*/}
//       {/*  <nav className="mt-12 flex flex-col">*/}
//       {/*    {navigation.map((item) => (*/}
//       {/*      <a*/}
//       {/*        key={item.href}*/}
//       {/*        href={item.href}*/}
//       {/*        onClick={closeMenu}*/}
//       {/*        className="*/}
//       {/*          border-b*/}
//       {/*          border-border*/}
//       {/*          py-5*/}
//       {/*          text-lg*/}
//       {/*          font-medium*/}
//       {/*          text-foreground*/}
//       {/*          transition-colors*/}
//       {/*          hover:text-primary*/}
//       {/*        "*/}
//       {/*      >*/}
//       {/*        {item.label}*/}
//       {/*      </a>*/}
//       {/*    ))}*/}
//       {/*  </nav>*/}
//
//       {/*  /!* Кнопка внизу *!/*/}
//       {/*  <div className="mt-auto pb-4">*/}
//       {/*    <a*/}
//       {/*      href="#request"*/}
//       {/*      onClick={closeMenu}*/}
//       {/*      className="*/}
//       {/*        flex*/}
//       {/*        h-13*/}
//       {/*        w-full*/}
//       {/*        items-center*/}
//       {/*        justify-center*/}
//       {/*        rounded-xl*/}
//       {/*        bg-primary*/}
//       {/*        px-6*/}
//       {/*        text-sm*/}
//       {/*        font-semibold*/}
//       {/*        text-primary-foreground*/}
//       {/*        transition-opacity*/}
//       {/*        hover:opacity-90*/}
//       {/*      "*/}
//       {/*    >*/}
//       {/*      Получить предложение*/}
//       {/*    </a>*/}
//       {/*  </div>*/}
//       {/*</aside>*/}
//     </div>
//   );
// }

// 'use client';
//
// import { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import Icons from "@/assets/icons";
// import {Container} from "@/shared";
//
// const menuItems = [
//   { label: 'О компании', href: '#about' },
//   { label: 'Оборудование и решения', href: '#equipment' },
//   { label: 'Как мы работаем', href: '#process' },
//   // { label: 'Контакты', href: '#contacts' },
// ];
//
// export function MobileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//   // Блокируем скролл страницы при открытом меню
//   useEffect(() => {
//     if (!isMenuOpen) return;
//
//     const originalOverflow = document.body.style.overflow;
//
//     document.body.style.overflow = 'hidden';
//
//     return () => {
//       document.body.style.overflow = originalOverflow;
//     };
//   }, [isMenuOpen]);
//
//   // Закрытие по Escape
//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         setIsMenuOpen(false);
//       }
//     };
//
//     document.addEventListener('keydown', handleEscape);
//
//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//     };
//   }, []);
//
//   // Если вернулись на desktop — закрываем меню
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(min-width: 561px)');
//
//     const handleChange = (event: MediaQueryListEvent) => {
//       if (event.matches) {
//         setIsMenuOpen(false);
//       }
//     };
//
//     mediaQuery.addEventListener('change', handleChange);
//
//     return () => {
//       mediaQuery.removeEventListener('change', handleChange);
//     };
//   }, []);
//
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };
//
//   return (
//     <header className="sticky menu:hidden top-0 z-[1000] w-full">
//       {/* Основной header */}
//       <div className="relative z-[1002]">
//         <div className={`mx-auto flex  h-11 max-w-7xl items-center ${isMenuOpen ? 'justify-end' : 'justify-end'} pl-5 md:pl-8`}>
//
//           {/* Mobile button */}
//           <button
//             type="button"
//             aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
//             aria-expanded={isMenuOpen}
//             onClick={() => setIsMenuOpen((prev) => !prev)}
//             className="
//               relative z-[1003]
//               flex
//               items-center justify-center
//
//               rounded-xl
//               {/*border border-slate-200*/}
//               {/*bg-white/60*/}
//               text-slate-700
//               transition-all
//               hover:border-primary
//               hover:text-primary
//               min-[561px]:hidden
//             "
//           >
//             {isMenuOpen ? (
//               <X size={22} />
//             ) : (
//               <Menu size={22} />
//             )}
//           </button>
//         </div>
//       </div>
//
//       {/* Overlay */}
//       <div
//         onClick={closeMenu}
//         className={`
//           fixed inset-0 z-[1000]
//           bg-slate-300/30
//           backdrop-blur-[2px]
//           transition-opacity duration-300
//           min-[561px]:hidden
//           h-screen
//           ${
//           isMenuOpen
//             ? 'pointer-events-auto opacity-100'
//             : 'pointer-events-none opacity-0'
//         }
//         `}
//       />
//
//       {/* Mobile menu */}
//       <aside
//         className={`
//           fixed
//           right-0
//           top-0
//           z-[1001]
//           h-dvh
//           w-[min(89vw,380px)]
//           overflow-y-auto
//
//           border-l border-white/60
//           bg-white/65
//           shadow-[-20px_0_60px_rgba(0,82,204,.15)]
//           // backdrop-blur-2xl
//
//           transition-transform
//           duration-300
//           ease-out
//
//           min-[561px]:hidden
//
//           ${
//           isMenuOpen
//             ? 'translate-x-0'
//             : 'translate-x-full'
//         }
//         `}
//       >
//         <div className="flex min-h-full flex-col px-6 pb-8 pt-20">
//
//           {/* Заголовок */}
//           {/*<div className="mb-10">*/}
//           {/*  <p className="text-xs uppercase tracking-[0.2em] text-primary">*/}
//           {/*    Forte System*/}
//           {/*  </p>*/}
//
//           {/*  <h2 className="mt-3 text-2xl font-semibold text-slate-900">*/}
//           {/*    Навигация*/}
//           {/*  </h2>*/}
//           {/*</div>*/}
//
//           {/* Пункты */}
//           <nav className="flex flex-col">
//             {menuItems.map((item, index) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={closeMenu}
//                 className="
//                   group
//                   flex items-center
//                   border-b border-slate-200
//                   py-5
//                   text-lg
//                   text-slate-700
//                   transition-colors
//                   hover:text-primary
//                 "
//               >
//                 <span className="mr-4 text-xs text-slate-400">
//                   0{index + 1}
//                 </span>
//
//                 <span className="transition-transform duration-300 group-hover:translate-x-1">
//                   {item.label}
//                 </span>
//               </Link>
//             ))}
//           </nav>
//
//           <Container className={'py-2'}>
//             <div
//               className="flex flex-col items-start justify-between gap-2 md:items-center"
//             >
//               <div
//                 className=" flex flex-col gap-1 text-xxs
//               lg:flex-row md:text-[12px] lg:text-[13px] lg:topbar__left lg:items-center lg:gap-10
//             "
//               >
//                 <p>ООО «Форте Систем»</p>
//                 <p className="topbar__address flex flex-row items-center gap-3" aria-label="Адрес">
//                 <span className={'hidden xl:block'}>
//                   <Icons type={'map'} />
//                 </span>
//                   <span>220024, г. Минск, ул. Серова, д. 2А, каб. 31В</span>
//                 </p>
//               </div>
//               <div
//                 className="flex flex-col gap-1 text-xxs
//              lg:flex-row md:text-[12px] lg:text-[13px] lg:items-center lg:gap-10
//             "
//               >
//                 <a className="flex flex-row items-center gap-3" href="tel:+375447191824">
//                 <span className={'hidden xl:block'}>
//                   <Icons type={'phone'} />
//                 </span>
//                   <span>+375 44 719-18-24</span>
//                 </a>
//                 <a className="flex flex-row items-center gap-3" href="mailto:sales@fortesystem.by">
//                 <span className={'hidden xl:block'}>
//                   <Icons type={'mail'} />
//                 </span>
//                   <span>sales@fortesystem.by</span>
//                 </a>
//               </div>
//             </div>
//           </Container>
//
//           {/* Нижняя часть */}
//           <div className="mt-auto pt-10">
//             {/*<p className="text-sm leading-relaxed text-slate-500">*/}
//             {/*  Серверное оборудование,*/}
//             {/*  инфраструктурные решения*/}
//             {/*  и информационная безопасность.*/}
//             {/*</p>*/}
//             <Link
//               href="#contacts"
//               onClick={closeMenu}
//               className="
//                 mt-6
//                 flex h-9
//                 items-center justify-center
//                 rounded-xl
//                 bg-white
//                 px-6
//                 text-sm
//                 font-medium
//                 text-primary
//                 transition-all
//                 hover:shadow-[0_12px_35px_rgba(0,82,204,.3)]
//               "
//             >
//               Открыть конфигуратор
//             </Link>
//             <Link
//               href="#contacts"
//               onClick={closeMenu}
//               className="
//                 mt-4
//                 flex h-9
//                 items-center justify-center
//                 rounded-xl
//                 bg-primary
//                 px-6
//                 text-sm
//                 font-medium
//                 text-white
//                 transition-all
//                 hover:shadow-[0_12px_35px_rgba(0,82,204,.3)]
//               "
//             >
//               Оставить заявку
//             </Link>
//           </div>
//         </div>
//       </aside>
//     </header>
//   );
// }

'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

import FullLogo from '@/assets/logo/full-logo';
import Icons from '@/assets/icons';
import { Container } from '@/shared';

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
  /* Блокировка скролла */
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

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div>
      {/* =====================================================
          MOBILE HEADER CONTROLS
          LOGO + MENU BUTTON
      ====================================================== */}

      <div className="fixed inset-x-0 top-0 z-[1300] pointer-events-none min-[561px]:hidden">
        <div className="mx-auto flex h-19 w-full items-center justify-between px-6">
          {/* LOGO */}

          <a href="#" aria-label="Forte System" className="pointer-events-auto relative z-[1301]">
            <FullLogo />
          </a>

          {/* MENU BUTTON */}

          <button
            type="button"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
            onClick={onToggle}
            className="pointer-events-auto relative z-[1301] flex h-10 items-center justify-center rounded-xl text-slate-700
              transition-colors hover:text-primary"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[1100] bg-slate-300/20 backdrop-blur-md transition-opacity duration-300 min-[561px]:hidden
          ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
        `}
      />

      {/* =====================================================
          MOBILE ASIDE
      ====================================================== */}

      <aside
        aria-label="Мобильное меню"
        className={`fixed right-0 top-0 z-[1200] h-dvh w-[calc(100%-43px)]
          overflow-y-auto
          border-l border-white/60 bg-white/65 backdrop-blur-2xl
          shadow-[-20px_0_60px_rgba(0,82,204,.15)]

          transition-transform duration-300 ease-out min-[561px]:hidden

          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex min-h-full flex-col px-6 pb-8 pt-[110px]">
          {/* NAVIGATION */}

          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center py-3 px-6 bg-white/70 shadow-glass/4 rounded-[22px] border border-[#8080801a] text-sm text-slate-700 transition-colors hover:text-primary"
              >
                {/*<span className="mr-4 text-xs text-slate-400">*/}
                {/*  0{index + 1}*/}
                {/*</span>*/}

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CONTACTS */}

          <Container className="py-0 px-0 mt-auto">
            <div className="flex flex-col gap-3 text-xs bq-white/30 p-6 rounded-[22px] shadow-contacts/5 border border-[#8080801a]">
              <a
                href="tel:+375447191824"
                className="flex items-center gap-3"
                aria-label={'мобильный номер телефона'}
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

              <a className="flex items-center gap-3" aria-label="Адрес">
                <span>220024, Минск, ул.Серова 2А, каб.31В</span>
              </a>

              <p>ООО «Форте Систем»</p>
            </div>
          </Container>

          {/* BUTTONS */}

          <div className=" pt-10">
            <Link
              href="#configurator"
              onClick={onClose}
              className="
                flex
                h-10
                items-center
                justify-center
                rounded-xl
                bg-white
                text-sm
                font-medium
                text-primary
                hover:shadow-[0_12px_35px_rgba(0,82,204,.3)]
              "
            >
              Открыть конфигуратор
            </Link>

            <Link
              href="#contact-with-us"
              onClick={onClose}
              className="
                mt-4 flex h-10 items-center justify-center rounded-xl
                bg-primary text-sm font-medium text-white
                hover:shadow-[0_12px_35px_rgba(0,82,204,.3)]
              "
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
