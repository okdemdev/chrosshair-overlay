'use client';

import { AnimatedCard } from './animated-card';
import { SectionHeader } from './section-header';
import { motion } from 'framer-motion';

const games = [
  {
    title: 'Rust',
    description:
      'Enhance your PvP performance with a precise crosshair for better aim during raids and combat.',
    image: '/games/rust.jpg',
  },
  {
    title: 'DayZ',
    description:
      'Improve your survival chances with accurate shooting in both PvP and PvE encounters.',
    image: '/games/dayz.jpg',
  },
  {
    title: 'Other Compatible Games',
    description: 'Works perfectly with any game without built-in crosshairs',
    games: [
      'Hunt: Showdown',
      'Escape from Tarkov',
      'The Cycle',
      'Sea of Thieves',
      'Any game without built-in crosshairs',
    ],
  },
];

export function GamesSection() {
  return (
    <section id="games" className="py-24 px-4 bg-accent/5">
      <div className="container mx-auto">
        <SectionHeader
          title="Perfect for These Games"
          subtitle="Enhance your gaming experience across multiple titles"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <AnimatedCard
              key={game.title}
              delay={index * 0.1}
              className="p-6 hover:shadow-lg overflow-hidden group"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{game.title}</h3>
                <p className="text-muted-foreground mb-4">{game.description}</p>
                {game.games ? (
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {game.games.map((title) => (
                      <li key={title} className="group-hover:text-primary transition-colors">
                        {title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  game.image && (
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <motion.img
                        src={game.image}
                        alt={game.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )
                )}
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
