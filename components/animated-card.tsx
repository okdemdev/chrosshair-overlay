'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className={`transform transition-all duration-300 hover:scale-[1.02] ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
}
