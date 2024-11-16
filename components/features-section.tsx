'use client';

import { Zap, Shield, Target, Cpu, Download } from 'lucide-react';
import { AnimatedCard } from './animated-card';
import { SectionHeader } from './section-header';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Cpu,
    title: 'Zero RAM Impact',
    description:
      'While competitors use 100MB+ of RAM, CHROSSX runs with negligible memory usage, ensuring your games run at peak performance.',
  },
  {
    icon: Target,
    title: 'Perfect Pixel Accuracy',
    description:
      'Our crosshair is pixel-perfect, providing the most precise aiming point possible without any blur or distortion.',
  },
  {
    icon: Download,
    title: 'Completely Free',
    description:
      'Other overlays charge $10-30 for basic features. CHROSSX is completely free with no premium features or hidden costs.',
  },
  {
    icon: Zap,
    title: 'Ultra-Light Design',
    description:
      'Built for performance, CHROSSX uses minimal system resources while providing maximum functionality.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto">
        <SectionHeader
          title="Why CHROSSX Beats the Competition"
          subtitle="Experience gaming excellence with our cutting-edge features"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1} className="p-6 hover:shadow-lg">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </motion.div>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
