import localFont from 'next/font/local';

export const unbounded = localFont({
  src: [
    {
      path: '../assets/fonts/unbounded/Unbounded-Light.ttf',
      weight: '300',
    },
    {
      path: '../assets/fonts/unbounded/Unbounded-Regular.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/unbounded/Unbounded-Medium.ttf',
      weight: '500',
    },
    {
      path: '../assets/fonts/unbounded/Unbounded-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../assets/fonts/unbounded/Unbounded-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/unbounded/Unbounded-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-unbounded',
  display: 'swap',
  preload: true,
});

export const manrope = localFont({
  src: [
    {
      path: '../assets/fonts/manrope/Manrope-Light.ttf',
      weight: '300',
    },
    {
      path: '../assets/fonts/manrope/Manrope-Regular.ttf',
      weight: '400',
    },
    {
      path: '../assets/fonts/manrope/Manrope-Medium.ttf',
      weight: '500',
    },
    {
      path: '../assets/fonts/manrope/Manrope-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../assets/fonts/manrope/Manrope-Bold.ttf',
      weight: '700',
    },
    {
      path: '../assets/fonts/manrope/Manrope-ExtraBold.ttf',
      weight: '800',
    },
  ],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
});
