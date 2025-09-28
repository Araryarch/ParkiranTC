import { Livvic as LivvicFont } from 'next/font/google'
import localFont from 'next/font/local'

export const Livvic = LivvicFont({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-Livvic',
})

export const Monday = localFont({
  src: [
    {
      path: '../../public/fonts/Monday.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-Monday',
})
