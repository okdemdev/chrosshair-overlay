import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chrossx.com'),
  title: {
    default: 'ChrossX - Free Gaming Crosshair Overlay | Official Site',
    template: '%s | ChrossX',
  },
  description:
    'ChrossX - The ultimate free crosshair overlay for PC gaming. Zero RAM impact, no ads, instant setup. Perfect for Rust, DayZ, Hunt: Showdown and other games.',
  keywords: [
    'ChrossX',
    'crosshair overlay',
    'gaming crosshair',
    'rust crosshair',
    'dayz crosshair',
    'hunt showdown crosshair',
    'gaming overlay',
    'free crosshair',
    'pc gaming crosshair',
    'fps crosshair',
    'custom crosshair',
    'game overlay',
    'aim assist',
    'gaming tools',
    'windows overlay',
    'gaming software',
  ],
  authors: [
    {
      name: 'ChrossX',
      url: 'https://chrossx.com',
    },
  ],
  creator: 'ChrossX',
  publisher: 'ChrossX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: 'ChrossX',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'gaming software',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chrossx.com',
    title: 'ChrossX - Free Gaming Crosshair Overlay | Official Site',
    description:
      'ChrossX - The ultimate free crosshair overlay for PC gaming. Zero RAM impact, no ads, instant setup.',
    siteName: 'ChrossX',
    images: [
      {
        url: 'https://chrossx.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CHROSSX Gaming Overlay',
        type: 'image/png',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'ChrossX - Free Gaming Crosshair Overlay',
    description: 'The ultimate free crosshair overlay for PC gaming.',
    images: ['https://chrossx.com/twitter-card.png'],
    creator: '@ChrossX',
    site: '@ChrossX',
  },

  // Icons and Appearance
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/icon.png',
      },
    ],
  },

  // Additional Metadata for Search
  other: {
    'msapplication-TileImage': '/icon-512.png',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },

  // Verification and alternates
  alternates: {
    canonical: 'https://chrossx.com',
    languages: {
      'en-US': 'https://chrossx.com',
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          data-website-id="673c7c962d3efa7abcb78064"
          data-domain="chrossx.com"
          src="https://datafa.st/js/script.js"
        ></script>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="mask-icon" href="/icon.png" color="#000000" />
        <meta name="msapplication-TileImage" content="/icon-512.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ChrossX',
              applicationCategory: 'GameApplication',
              operatingSystem: 'Windows',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              description:
                'ChrossX is a free gaming crosshair overlay for PC gaming with zero RAM impact. Perfect for Rust, DayZ, Escape from Tarkov, Sea of Thieves and other games.',
              image: 'https://chrossx.com/og-image.png',
              screenshot: 'https://chrossx.com/og-image.png',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '1250',
              },
              author: {
                '@type': 'Organization',
                name: 'ChrossX',
                url: 'https://chrossx.com',
              },
              publisher: {
                '@type': 'Organization',
                name: 'ChrossX',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://chrossx.com/icon-512.png',
                },
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
