'use client';

import { motion } from 'framer-motion';
import { DownloadEmailForm } from './hero-email-form';
import { SectionHeader } from './section-header';

export function DownloadSection() {
  return (
    <section
      id="download"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-accent/10 to-background"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <SectionHeader title="Ready to Enhance Your Gaming?" className="mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card p-8 rounded-lg shadow-lg border"
        >
          <h3 className="text-xl mb-4">Get CHROSSX in 3 Simple Steps:</h3>
          <ol className="text-left mb-8 space-y-4">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-primary font-semibold">
                1
              </span>
              <span>Enter your email address</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-primary font-semibold">
                2
              </span>
              <span>Download and install CHROSSX</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <span className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center text-primary font-semibold">
                3
              </span>
              <span>Use the activation key from your email</span>
            </motion.li>
          </ol>
          <DownloadEmailForm variant="hero" />
          <p className="text-sm text-muted-foreground mt-4">
            Your download will start immediately. Activation key will be sent to your email.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
