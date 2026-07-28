import localFont from 'next/font/local';

export const unbounded = localFont({
  src: [
    {
      path: '../assets/fonts/unboaded/Unbounded-Regular.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/unboaded/Unbounded-Medium.ttf',
      weight: '500',
    },
    {
      path: '../assets/fonts/unboaded/Unbounded-SemiBold.ttf',
      weight: '600',
    },
  ],
  variable: '--font-unbounded',
});

export const manrope = localFont({
  src: [
    {
      path: '../assets/fonts/manrope/Manrope-Regular.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/manrope/Manrope-Medium.ttf',
      weight: '500',
    },
  ],
  variable: '--font-manrope',
});
