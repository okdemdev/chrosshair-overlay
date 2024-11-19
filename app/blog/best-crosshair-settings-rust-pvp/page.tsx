'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DownloadEmailForm } from '@/components/hero-email-form';
import { BackButton } from '@/components/back-button';

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      {/* Back Button */}
      <div className="w-full container mx-auto px-4 pt-24">
        <BackButton />
      </div>

      {/* Blog Post Content */}
      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <span className="text-primary font-medium">Rust Guide</span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Best Crosshair Settings for Rust PvP
              </h1>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <span>February 14, 2024</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/blog/rust-settings.jpg"
                alt="Rust PvP combat with crosshair overlay"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Why Crosshair Settings Matter in Rust</h2>
              <p>
                In Rust, having the right crosshair can mean the difference between winning and losing a crucial PvP encounter. Whether you're defending your base from raiders or taking on other players at monuments, your crosshair settings play a vital role in your success.
              </p>

              <h2>Optimal Crosshair Settings for Different Weapons</h2>
              
              <h3>Bow Fighting</h3>
              <p>
                For bow combat, we recommend using a small dot crosshair with these settings:
              </p>
              <ul>
                <li>Style: Dot</li>
                <li>Size: 2-3 pixels</li>
                <li>Color: Green (#00FF00) for maximum visibility</li>
                <li>Opacity: 80%</li>
              </ul>

              <h3>Automatic Weapons (AK, MP5)</h3>
              <p>
                When using automatic weapons, a slightly larger crosshair helps with spray control:
              </p>
              <ul>
                <li>Style: Cross</li>
                <li>Size: 4-5 pixels</li>
                <li>Color: Red (#FF0000) for contrast</li>
                <li>Gap: 2 pixels</li>
              </ul>

              <h2>Advanced Tips for Better Aim</h2>
              <p>
                Beyond crosshair settings, here are some pro tips to improve your aim:
              </p>
              <ul>
                <li>Practice spray patterns on build servers</li>
                <li>Use different crosshairs for different situations</li>
                <li>Adjust your sensitivity for better control</li>
                <li>Learn to quick-switch between weapons</li>
              </ul>

              <div className="my-8 p-6 bg-card rounded-lg">
                <h3>Try ChrossX for Rust</h3>
                <p>
                  Get the perfect crosshair overlay for Rust with ChrossX. Zero performance impact, customizable settings, and instant activation.
                </p>
                <div className="mt-4">
                  <DownloadEmailForm variant="default" />
                </div>
              </div>

              <h2>Frequently Asked Questions</h2>
              <h3>Is using a crosshair overlay allowed in Rust?</h3>
              <p>
                Yes, using ChrossX's crosshair overlay is completely safe and allowed. It doesn't modify any game files and works as an overlay on your screen.
              </p>

              <h3>Will it affect my FPS?</h3>
              <p>
                No, ChrossX has zero performance impact. It uses minimal system resources and won't affect your game's performance.
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
