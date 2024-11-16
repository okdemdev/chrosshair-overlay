import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Free Crosshair Overlay for Rust & No-Crosshair Games | CHROSSX',
  description:
    'Download the best free crosshair overlay for Rust, Hunt: Showdown, DayZ, and other games without built-in crosshairs. Perfect for survival games and hardcore shooters.',
  keywords: [
    'rust crosshair overlay',
    'rust custom crosshair',
    'rust aim overlay',
    'hunt showdown crosshair',
    'dayz crosshair overlay',
    'escape from tarkov crosshair',
    'survival game crosshair',
    'hardcore fps crosshair',
    'no crosshair games overlay',
    'screen crosshair overlay',
    'gaming overlay windows',
    'rust aim assist',
    'rust combat helper',
    '7 days to die crosshair',
    'scum game crosshair',
  ],
  authors: [{ name: 'CHROSSX Team' }],
  creator: 'CHROSSX Team',
  publisher: 'CHROSSX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chrossx.com',
    title: 'Free Crosshair Overlay for Windows | CHROSSX',
    description:
      'Download the best free crosshair overlay for Windows. Zero ads, no watermarks, instant setup for any game.',
    siteName: 'CHROSSX',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CHROSSX Crosshair Overlay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Crosshair Overlay for Windows | CHROSSX',
    description:
      'Download the best free crosshair overlay for Windows. Zero ads, no watermarks, instant setup for any game.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chrossx.com',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
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
