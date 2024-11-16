'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { DownloadEmailForm } from '@/components/hero-email-form';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-4">
            <Image
              src="/icon.png"
              alt="CHROSSX Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl"
            />
            <span className="text-2xl font-bold">CHROSSX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('games')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Download
            </button>
          </nav>

          {/* Download Form - Desktop */}
          <div className="hidden md:block">
            <DownloadEmailForm />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('games')}
                  className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                >
                  Games
                </button>
                <button
                  onClick={() => scrollToSection('download')}
                  className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                >
                  Download
                </button>
                <div className="px-4 py-2">
                  <DownloadEmailForm />
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
