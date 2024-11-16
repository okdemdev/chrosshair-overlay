'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <Image
              src="/icon.png"
              alt="CHROSSX Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            © {new Date().getFullYear()} CHROSSX. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
