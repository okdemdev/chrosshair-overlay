'use client';

import { SectionHeader } from './section-header';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const games = [
  {
    name: 'Rust',
    logo: '/game-logos/rust.png',
  },
  {
    name: 'DayZ',
    logo: '/game-logos/dayz.png',
    darkLogo: '/game-logos/dayz-white.png',
  },
  {
    name: 'Hunt: Showdown',
    logo: '/game-logos/hunt.png',
    darkLogo: '/game-logos/hunt-white.png',
  },
  {
    name: 'Escape from Tarkov',
    logo: '/game-logos/tarkov.png',
    darkLogo: '/game-logos/tarkov-white.png',
  },
  {
    name: 'Sea of Thieves',
    logo: '/game-logos/sea-of-thieves.png',
  },
];

export function GamesSection() {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update dark mode when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      setIsDarkMode(true);
    } else if (theme === 'light') {
      setIsDarkMode(false);
    }
  }, [theme]);

  return (
    <section id="games" className="py-24 px-4 bg-accent/5">
      <div className="container mx-auto">
        <SectionHeader
          title="Perfect for Any Game"
          subtitle="Works flawlessly with any game that lacks built-in crosshairs"
          className="mb-16"
        />

        <div className="relative">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-accent/5 to-transparent z-10" />

          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-accent/5 to-transparent z-10" />

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pb-4 min-w-max px-8">
              {games.map((game, index) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative w-32 h-32 bg-white dark:bg-black/20 rounded-xl overflow-hidden shadow-md dark:shadow-none backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={game.darkLogo && isDarkMode ? game.darkLogo : game.logo}
                        alt={game.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{game.name}</span>
                </motion.div>
              ))}

              {/* "And More" Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: games.length * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-32 h-32 bg-white/50 dark:bg-black/10 rounded-xl flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-600">
                  <div className="text-center">
                    <ChevronRight className="w-8 h-8 text-muted-foreground mx-auto" />
                    <span className="text-sm text-muted-foreground block mt-2">
                      Any Game Without
                      <br />
                      Built-in Crosshair
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this CSS to your globals.css
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
