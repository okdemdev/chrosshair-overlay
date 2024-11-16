'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from './section-header';
import { Clock, Target, Crosshair, Zap } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'Faster Reaction Time',
    description:
      'Players with crosshairs react up to 200ms faster in combat situations. No more guessing where the center of your screen is.',
    stat: '200ms',
    statLabel: 'faster reactions',
  },
  {
    icon: Target,
    title: 'Improved Hip-Fire Accuracy',
    description:
      'Skip ADS (Aim Down Sights) in close combat. Hip-firing with a crosshair is up to 40% more accurate.',
    stat: '40%',
    statLabel: 'better accuracy',
  },
  {
    icon: Crosshair,
    title: 'No More ADS Delay',
    description:
      'ADS takes 300-400ms. With a crosshair, pre-aim and shoot instantly without waiting for ADS animation.',
    stat: '350ms',
    statLabel: 'saved per shot',
  },
  {
    icon: Zap,
    title: 'Better Combat Flow',
    description:
      'Maintain full movement speed while aiming accurately. Perfect for aggressive playstyles and quick peek shots.',
    stat: '100%',
    statLabel: 'movement speed',
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto">
        <SectionHeader
          title="Why You Need a Crosshair"
          subtitle="Data-driven advantages that give you the competitive edge"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <advantage.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{advantage.stat}</div>
                    <div className="text-sm text-muted-foreground">{advantage.statLabel}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-muted-foreground text-center mt-8"
        >
          * Data based on average player performance metrics and gaming research studies
        </motion.p>
      </div>
    </section>
  );
}
