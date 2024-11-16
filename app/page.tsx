import Head from 'next/head';
import { Zap, Shield, Target, Cpu, Download } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/header';
import { DownloadEmailForm } from '@/components/hero-email-form';
import Script from 'next/script';
import { SocialShare } from '@/components/social-share';

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

        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Free Customizable Crosshair Overlay
            </h1>
            <h2 className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
              Zero RAM Impact • Perfect Pixel Accuracy • Free Forever
            </h2>
            <DownloadEmailForm variant="hero" />
            <p className="text-sm text-muted-foreground mt-4">
              Download instantly and receive your activation key via email.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">Share CHROSSX with others:</p>
              <SocialShare />
            </div>

            <div className="mt-12 relative">
              <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border">
                <Image
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
                  alt="CHROSSX Interface"
                  width={1920}
                  height={1080}
                  className="object-cover"
                />
                {/* App UI in top right corner */}
                <div className="absolute top-4 right-4 w-64">
                  <Image
                    src="www.png"
                    alt="CHROSSX UI"
                    width={256}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compatible Games Section */}
        <section className="py-20 px-4 bg-accent/5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect for These Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Rust</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance your PvP performance with a precise crosshair for better aim during raids
                  and combat.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">DayZ</h3>
                <p className="text-muted-foreground mb-4">
                  Improve your survival chances with accurate shooting in both PvP and PvE
                  encounters.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Other Compatible Games</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Hunt: Showdown</li>
                  <li>Escape from Tarkov</li>
                  <li>The Cycle</li>
                  <li>Sea of Thieves</li>
                  <li>Any game without built-in crosshairs</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Competitive Advantage Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why CHROSSX Beats the Competition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Zero RAM Impact</h3>
                </div>
                <p className="text-muted-foreground">
                  While competitors use 100MB+ of RAM, CHROSSX runs with negligible memory usage,
                  ensuring your games run at peak performance.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Perfect Pixel Accuracy</h3>
                </div>
                <p className="text-muted-foreground">
                  Our crosshair is pixel-perfect, providing the most precise aiming point possible
                  without any blur or distortion.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Completely Free</h3>
                </div>
                <p className="text-muted-foreground">
                  Other overlays charge $10-30 for basic features. CHROSSX is completely free with
                  no premium features or hidden costs.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Ultra-Light Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Built for performance, CHROSSX uses minimal system resources while providing
                  maximum functionality.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Rest of the existing sections remain unchanged */}
        {/* About CHROSSX Section */}
        <section className="py-12 bg-accent/5">
          <div className="container mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">About CHROSSX Crosshair Overlay</h2>
              <p className="text-muted-foreground">
                CHROSSX is a versatile crosshair overlay tool designed to enhance your gaming
                precision. Whether you're playing Rust, DayZ, or any other game that needs a
                crosshair, CHROSSX provides a customizable solution. Our overlay is completely free,
                has no ads, and doesn't include any watermarks, making it the perfect tool for
                competitive gaming.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">100% Ad-Free</h3>
                <p className="text-muted-foreground">
                  No annoying ads or watermarks. Clean interface.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Light on Resources</h3>
                <p className="text-muted-foreground">
                  Minimal CPU and memory usage. No performance impact.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Setup</h3>
                <p className="text-muted-foreground">
                  Ready to use in seconds. Easy configuration.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section
          id="download"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-accent/10 to-background"
        >
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Enhance Your Gaming?</h2>
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <h3 className="text-xl mb-4">Get CHROSSX in 3 Simple Steps:</h3>
              <ol className="text-left mb-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </span>
                  <span>Enter your email address</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    2
                  </span>
                  <span>Download and install CHROSSX</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center">
                    3
                  </span>
                  <span>Use the activation key from your email</span>
                </li>
              </ol>
              <DownloadEmailForm variant="hero" />
              <p className="text-sm text-muted-foreground mt-4">
                Your download will start immediately. Activation key will be sent to your email.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Is CHROSSX safe to use?</h3>
                <p className="text-muted-foreground">
                  Yes, CHROSSX is completely safe to use. It's a non-intrusive overlay that doesn't
                  modify any game files or interact directly with games.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Will this improve my aim?</h3>
                <p className="text-muted-foreground">
                  CHROSSX can help improve accuracy by providing a consistent reference point on
                  your screen. It's particularly useful for games that don't have built-in
                  crosshairs or for users who prefer a custom aiming point.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Does it work in fullscreen mode?</h3>
                <p className="text-muted-foreground">
                  Yes, CHROSSX works in both fullscreen and windowed modes for most games, providing
                  a consistent crosshair overlay without any performance impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How customizable is CHROSSX?</h3>
                <p className="text-muted-foreground">
                  CHROSSX offers a wide range of customization options. You can adjust the
                  crosshair's size, color, style, and position to suit your preferences and needs
                  for different games.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-bq26Y717yBCUhpsZGfrMPap0bCttsu.png"
                  alt="CHROSSX Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <div className="flex gap-8">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </div>
              <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
                © {new Date().getFullYear()} CHROSSX. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
