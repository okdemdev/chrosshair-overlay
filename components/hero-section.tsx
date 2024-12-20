'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { DownloadEmailForm } from './hero-email-form';
import { SocialShare } from './social-share';
import { MiniCrosshairControl } from './mini-crosshair-control';
import { GamePreview } from './game-preview';
import { Cpu, Zap, Shield } from 'lucide-react';

export function HeroSection() {
  const [dotSize, setDotSize] = useState(5);
  const [dotColor, setDotColor] = useState('#ff0000');
  const [crosshairStyle, setCrosshairStyle] = useState({ id: 'dot', name: 'Dot', preview: '•' });

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-32 mt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              ChrossX: Best Free
              <br />
              Crosshair Overlay for Gaming
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light space-y-4"
          >
            <div>Free Crosshair Overlay for Rust, DayZ & More</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base md:text-lg">
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Zero RAM Impact
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Free Forever
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                No Ban Risk
              </span>
            </div>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <DownloadEmailForm variant="hero" />
            <p className="text-sm text-muted-foreground mt-4">
              Download the best free crosshair overlay instantly - No registration required
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-sm text-muted-foreground">Share CHROSSX with others:</p>
            <SocialShare />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 relative"
          >
            <div className="max-w-4xl mx-auto relative">
              <GamePreview dotSize={dotSize} dotColor={dotColor} crosshairStyle={crosshairStyle} />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-4"
              >
                <MiniCrosshairControl
                  onSizeChange={setDotSize}
                  onColorChange={setDotColor}
                  onStyleChange={setCrosshairStyle}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
