'use client';

import { DownloadEmailForm } from '@/components/hero-email-form';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { BackButton } from '@/components/back-button';

export default function SeaOfThievesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Back Button */}
      <div className="w-full container mx-auto px-4 pt-24">
        <BackButton />
      </div>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-b from-background to-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Best Free Crosshair Overlay for{' '}
            <span className="text-primary">Sea of Thieves</span>
          </h1>
          <p className="text-xl text-foreground/80">
            Zero RAM impact, no ban risk, and perfect for ship combat and PvP. Works with all game modes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DownloadEmailForm />
            <ThemeToggle />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose ChrossX for Sea of Thieves?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-lg bg-accent/10"
            >
              <h3 className="text-xl font-semibold mb-4">Perfect for Ship Combat</h3>
              <p className="text-foreground/80">
                Improve your cannon accuracy and ship-to-ship combat with our precise crosshair overlay.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-lg bg-accent/10"
            >
              <h3 className="text-xl font-semibold mb-4">Safe & Undetectable</h3>
              <p className="text-foreground/80">
                ChrossX is completely external and doesn't modify any game files. Use it with confidence on any server.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-lg bg-accent/10"
            >
              <h3 className="text-xl font-semibold mb-4">Customizable Settings</h3>
              <p className="text-foreground/80">
                Tailor your crosshair to your playstyle with our easy-to-use customization options.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="w-full py-24 px-4 bg-accent/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              How to Use ChrossX with{' '}
              <span className="text-primary">Sea of Thieves</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Get started in just a few simple steps. No complicated setup required.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-card rounded-lg p-6 group hover:bg-accent/5 transition-colors"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">1</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Download ChrossX</h3>
              <p className="text-foreground/80">
                Enter your email to get instant access to our free crosshair overlay software.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-card rounded-lg p-6 group hover:bg-accent/5 transition-colors"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">2</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Launch & Play</h3>
              <p className="text-foreground/80">
                Run ChrossX alongside Sea of Thieves. Works with any game mode or server.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative bg-card rounded-lg p-6 group hover:bg-accent/5 transition-colors"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">3</div>
              <h3 className="text-xl font-semibold mb-4 mt-2">Customize</h3>
              <p className="text-foreground/80">
                Choose your preferred crosshair style, color, and size for perfect cannon shots.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <DownloadEmailForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
