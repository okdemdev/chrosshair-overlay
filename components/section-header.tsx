'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center space-y-4 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-[900px] mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
