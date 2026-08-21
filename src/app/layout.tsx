import type { Metadata, Viewport } from 'next';
import './globals.css';
import { unbounded, manrope } from '@/lib/fonts';
import React from 'react';
import { NotificationProvider } from '@/components/notifications/NotificationProvider';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Forte System',
  description: 'Серверные решения для надежной инфраструктуры',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable}`}
      suppressHydrationWarning
    >
      <NotificationProvider>
        <body
          suppressHydrationWarning
          // className={`antialiased`}
        >
          {children}
        </body>
      </NotificationProvider>
    </html>
  );
}
