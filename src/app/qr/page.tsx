'use client';

// import {useSearchParams} from 'next/navigation';
import ShortLogo from '@/assets/logo/short-logo';
import { Mail, Phone, Copy, MapPinned } from 'lucide-react';
import React from 'react';
import AddContactButton from '@/components/AddContactButton';
import { useNotification } from '@/components/notifications/NotificationProvider';
import Link from 'next/link';

export default function QRPage() {
  // const searchParams = useSearchParams();
  // const source = searchParams.get('source');
  const { notify } = useNotification();

  return (
    <main className="h-[100svh] flex items-start">
      <div className="w-full max-w-md text-center">
        <div className={'bg-primary pt-15 pb-6'}>
          <div className="hero-background_mobile sm:h-[100svh]" />
          <div
            className={
              'h-35 w-35 flex justify-center items-center mb-6 rounded-full mx-auto bg-white'
            }
          >
            <ShortLogo size={100} color={'#262323'} />
          </div>

          <h1 className="text-3xl text-white font-unbounded leading-snug tracking-wide">
            Форте Систем
          </h1>

          <p className={'px-5 py-3 text-sm text-white/80 mx-auto text-justify'}>
            Комплексные решения в области системной интеграции, поставки серверного оборудования и
            IT-инфраструктуры для бизнеса любого масштаба.
          </p>

          <div className="my-3 px-5 flex flex-row gap-4 justify-center text-sm">
            <div
              className={
                'flex glass-blue flex-row grow-1 items-center justify-center p-3 border border-white rounded-2xl gap-2 text-white'
              }
            >
              <Phone size={20} />
              <a href="tel:+375447191824" className="text-sm">
                Звонок
              </a>
            </div>

            <div
              className={
                'flex glass-blue flex-row grow-1 items-center justify-center p-3 border border-white rounded-2xl gap-2 text-white'
              }
            >
              <Mail size={20} />
              <a href="mailto:sales@fortesystem.by" className="text-sm">
                Письмо
              </a>
            </div>

            <div
              className={
                'flex glass-blue flex-row grow-1 items-center justify-center p-3 border border-white rounded-2xl gap-2 text-white'
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.5 7H13.5"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 7C9.3772 9.37699 8.50168 11.6533 7 13.5C5.49832 11.6533 4.6228 9.37699 4.5 7C4.6228 4.62301 5.49832 2.34665 7 0.5C8.50168 2.34665 9.3772 4.62301 9.5 7V7Z"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link href="/" className="text-sm">
                Веб-сайт
              </Link>
            </div>
          </div>
        </div>

        <div className={'flex flex-col px-5 pt-8 pb-5 gap-4'}>
          <div className="flex flex-row justify-between items-center gap-4 text-sm bq-white/30">
            <span className={'text-[16px] font-medium'}>+375 44 719-18-24</span>
            <div className={'flex gap-4'}>
              <AddContactButton
                contact={{
                  firstName: 'Forte',
                  lastName: 'System',
                  organization: 'Forte System',
                  phone: '+375447191824',
                  email: 'sales@fortesystem.by',
                  website: 'https://fortesystem.by',
                }}
              />

              <button
                className={'p-3 glass border-l-1 bg-white rounded-r-xl'}
                onClick={() => {
                  navigator.clipboard.writeText('+375447191824');
                  notify('Скопировано');
                }}
              >
                <Copy size={'20'} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-4 text-sm bq-white/30">
            <span className={'text-[16px] font-medium'}>sales@fortesystem.by</span>
            <div className={'flex gap-4'}>
              <button
                className={'p-3 glass border-l-1 bg-white rounded-xl'}
                onClick={() => {
                  navigator.clipboard.writeText('sales@fortesystem.by');
                  notify('Скопировано');
                }}
              >
                <Copy size={'20'} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-4 text-sm bq-white/30 ">
            <span className={'text-[16px] font-medium'}>Минск, ул.Серова 2А, каб.31В</span>
            <div className={'flex gap-4'}>
              <a
                href="https://yandex.ru/maps/?text=Минск, ул. Серова, 2А"
                target="_blank"
                rel="noopener noreferrer"
                className={'p-3 glass border-l-1 bg-white rounded-l-xl'}
              >
                <MapPinned size={'20'} strokeWidth={1.5} />
              </a>
              <button
                className={'p-3 glass border-l-1 bg-white rounded-r-xl'}
                onClick={() => {
                  navigator.clipboard.writeText('220024, Минск, ул.Серова 2А, каб.31В');
                  notify('Скопировано');
                }}
              >
                <Copy size={'20'} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
