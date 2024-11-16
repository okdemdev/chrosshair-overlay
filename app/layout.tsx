import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chrossx.com'),
  title: {
    default: 'CHROSSX | Best Free Crosshair Overlay for PC Gaming',
    template: '%s | CHROSSX',
  },
  description:
    'Free crosshair overlay for games like Rust, DayZ, Hunt: Showdown. Zero RAM impact, no ads, instant setup. Perfect for survival games and hardcore shooters.',
  keywords: [
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
      name: 'CHROSSX',
      url: 'https://chrossx.com',
    },
  ],
  creator: 'CHROSSX',
  publisher: 'CHROSSX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: 'CHROSSX',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'gaming software',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chrossx.com',
    title: 'CHROSSX - Free Gaming Crosshair Overlay',
    description:
      'Zero-impact crosshair overlay for PC gaming. Perfect for Rust, DayZ, Hunt: Showdown, and more. Free, no ads, instant setup.',
    siteName: 'CHROSSX',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CHROSSX Gaming Overlay',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'CHROSSX - Free Gaming Crosshair Overlay',
    description:
      'Zero-impact crosshair overlay for PC gaming. Perfect for Rust, DayZ, Hunt: Showdown, and more.',
    images: ['/twitter-card.jpg'],
    creator: '@chrossx',
    site: '@chrossx',
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

  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },

  manifest: '/site.webmanifest',

  verification: {
    google: 'wf6rlrO_silzpHApqQdsj_5Er2oy4uJKT2_bspaRcxU',
  },

  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
