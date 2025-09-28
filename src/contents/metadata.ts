import { getMetadataItems } from '@/lib/getMetadataItems'

const metadataItems = getMetadataItems()

export const BASE_METADATA = {
  title: metadataItems.title,
  description: metadataItems.description,
  creator: 'Ararya Teams',
  publisher: 'Ararya Teams',
  keywords: [
    'Parkiran TC',
    'Teknik Informatika 2025',
    'Parkiran Terbaik 2025',
    'Parkiran',
    'Parkir Indonesia',
    'Parkir Gratis',
    'TC',
    'Teknik Computer-Informatika',
    'Parkir Aman dan Gratis',
    'Institut Teknologi Sepuluh Nopember',
    'Institut Teknologi Sepuluh Nopember 2025',
  ],
  robots: 'follow, index',
  generator: 'Next.js',
  alternates: {
    canonical: metadataItems.pathname,
  },

  // todo: add og:image when logo is released
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon/android-chrome-192x192.png',
  //       sizes: '192x192',
  //       type: 'image/png',
  //     },
  //     {
  //       url: '/favicon/favicon-32x32.png',
  //       sizes: '32x32',
  //       type: 'image/png',
  //     },
  //     {
  //       url: '/favicon/favicon-16x16.png',
  //       sizes: '16x16',
  //       type: 'image/png',
  //     },
  //   ],
  //   apple: {
  //     url: '/favicon/apple-touch-icon.png',
  //     sizes: '180x180',
  //     type: 'image/png',
  //   },
  // },
}
