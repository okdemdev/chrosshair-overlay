'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { DownloadEmailForm } from '@/components/hero-email-form';

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-bq26Y717yBCUhpsZGfrMPap0bCttsu.png"
              alt="CHROSSX Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#why-chrossx"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Why CHROSSX
            </a>
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
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#why-chrossx"
                className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why CHROSSX
              </a>
              <div className="px-4 py-2">
                <DownloadEmailForm />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
