'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DownloadEmailForm } from './hero-email-form';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname === '/') {
      // Only scroll if we're on the homepage
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const navigation = [
    { 
      name: 'Home', 
      href: '/',
      action: () => {} 
    },
    {
      name: 'Games',
      href: pathname === '/' ? '#games' : '/#games',
      action: () => pathname === '/' && scrollToSection('games'),
      items: [
        { name: 'Rust', href: '/games/rust' },
        { name: 'DayZ', href: '/games/dayz' },
        { name: 'Hunt: Showdown', href: '/games/hunt-showdown' },
        { name: 'Escape from Tarkov', href: '/games/escape-from-tarkov' },
        { name: 'Sea of Thieves', href: '/games/sea-of-thieves' },
      ],
    },
    { 
      name: 'Features', 
      href: pathname === '/' ? '#features' : '/#features',
      action: () => pathname === '/' && scrollToSection('features')
    },
    { 
      name: 'Blog', 
      href: '/blog',
      action: () => {}
    },
    { 
      name: 'Download', 
      href: pathname === '/' ? '#download' : '/#download',
      action: () => pathname === '/' && scrollToSection('download')
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="ChrossX Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl md:text-2xl font-bold hidden sm:inline">CHROSSX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.action) {
                      e.preventDefault();
                      item.action();
                    }
                  }}
                  className="text-sm lg:text-base text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
                {item.items && (
                  <div className="absolute left-0 mt-2 w-48 bg-background rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/10"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Add ThemeToggle before the download form */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <ThemeToggle />
            <DownloadEmailForm />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t"
          >
            <div className="flex flex-col gap-2 p-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.action) {
                        e.preventDefault();
                        item.action();
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-foreground/80 hover:text-foreground transition-colors px-4 py-2 block rounded-lg hover:bg-accent/10"
                  >
                    {item.name}
                  </Link>
                  {item.items && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-foreground/80 hover:text-foreground transition-colors px-4 py-2 block rounded-lg hover:bg-accent/10"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 py-2">
                <DownloadEmailForm />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
