import type { Metadata, Viewport } from 'next';
import { Poppins, Inter, Montserrat, Raleway, Roboto_Slab } from 'next/font/google';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';

import './globals.css';

// Use google's fonts poppins
const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Use google's fonts inter
const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Use google's fonts inter
const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Use google's fonts inter
const raleway = Raleway({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Use google's fonts inter
const robotoslab = Roboto_Slab({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-robotoslab',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Metadata and viewport settings for the entire site, can be overridden per page if needed
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Unimarket Technologies | Business technology for Africa',
    template: '%s | Unimarket Technologies',
  },
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/unimarket-logo-180.png',
    shortcut: '/favicons/unimarket-logo-64.png',
    other: [
      { rel: 'icon', url: '/favicons/unimarket-logo-32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicons/unimarket-logo-16.png', sizes: '16x16' },
    ],
  },
  description: siteConfig.description,
  keywords: [
    'Unimarket Technologies',
    'POS software Malawi',
    'MRA EIS solutions',
    'card machines Malawi',
    'enterprise software Malawi',
    'UX UI design Malawi',
    'website development Malawi',
    'full-stack development Malawi',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_MW',
    siteName: siteConfig.name,
    title: 'Unimarket Technologies',
    description: siteConfig.description,
    images: [
      {
        url: '/images/retail-pos-payment.webp',
        width: 1672,
        height: 941,
        alt: 'Retail card payment workflow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unimarket Technologies',
    description: siteConfig.description,
    images: ['/images/retail-pos-payment.webp'],
  },
  // indexing rules important for crawlers and SEO, can be adjusted per page with next/head if needed
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
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
};

// Root layout for the entire site, can be overridden per page if needed
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MW',
    },
  };

  // The root layout component wraps the entire application, providing a consistent structure and styling across all pages. It includes the site header, footer, and main content area, as well as metadata and schema for SEO purposes.
  return (
    <html className={inter.variable} lang="en">
      <body className="font-sans antialiased">
        <a
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-brand-950 px-4 py-3 text-sm font-semibold text-white transition focus:translate-y-0"
          href="#main-content"
        >
          Skip to content
        </a>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
