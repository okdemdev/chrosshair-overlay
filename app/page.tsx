import Head from 'next/head';
import { Zap, Shield, Target, Cpu, Download } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/header';
import { DownloadEmailForm } from '@/components/hero-email-form';
import Script from 'next/script';
import { SocialShare } from '@/components/social-share';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { GamesSection } from '@/components/games-section';
import { Footer } from '@/components/footer';
import { DownloadSection } from '@/components/download-section';

export default function Home() {
  const pageTitle = 'CHROSSX: Free Customizable Crosshair Overlay for Gaming';
  const pageDescription =
    'Enhance your aim with CHROSSX - the free, zero-RAM crosshair overlay for Rust, DayZ and more. No ads, no watermarks, perfect pixel accuracy.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="crosshair overlay, custom crosshair, gaming overlay, Rust crosshair, DayZ crosshair, free crosshair"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://chrossx.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://chrossx.com/twitter-image.jpg" />
        <link rel="canonical" href="https://chrossx.com" />
      </Head>

      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'CHROSSX',
          applicationCategory: 'GameModification',
          operatingSystem: 'Windows',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description: pageDescription,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
          },
          downloadUrl: 'https://chrossx.com/download',
          softwareVersion: '1.0.0',
          fileSize: '10MB',
          requirements: 'Windows 10 or later',
          applicationSubCategory: 'Gaming Overlay',
          releaseNotes: 'Zero RAM impact crosshair overlay for gaming',
          keywords: 'crosshair overlay, Rust crosshair, DayZ crosshair',
        })}
      </Script>

      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <GamesSection />
        <FeaturesSection />
        <DownloadSection />
        <Footer />
      </main>
    </>
  );
}
