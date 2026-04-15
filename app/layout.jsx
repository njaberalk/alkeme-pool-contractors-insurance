import { Poppins } from 'next/font/google'
import './globals.css'
import ScrollToTop from './ScrollToTop'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://alkemeins.com/pool-contractors'),
  title: {
    template: '%s | ALKEME Insurance Services',
    default: 'Pool & Hot Tub Contractor Insurance | ALKEME Insurance Services',
  },
  description: 'ALKEME Insurance Services provides specialized insurance for pool builders, hot tub installers, pool service companies, and aquatic contractors. Coverage for general liability, completed operations, pollution liability, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ALKEME Insurance Services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'ALKEME Insurance Services — Pool & Hot Tub Contractor Insurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool & Hot Tub Contractor Insurance | ALKEME Insurance Services',
    description: 'Specialized insurance for pool builders, hot tub installers, and aquatic contractors across all 50 states.',
    images: ['https://images.unsplash.com/photo-1572331165267-854da2b021b1?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://alkemeins.com/pool-contractors/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
