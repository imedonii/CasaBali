// app/fonts.ts
import localFont from 'next/font/local';

export const modulusPro = localFont({
  src: [
    {
      path: '../public/font/ModulusPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/ModulusPro-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
});
