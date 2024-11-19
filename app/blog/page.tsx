'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BackButton } from '@/components/back-button';

const blogPosts = [
  {
    title: 'Best Crosshair Settings for Rust PvP',
    slug: 'best-crosshair-settings-rust-pvp',
    excerpt: 'Optimize your crosshair settings for different weapons and situations in Rust. From bow fighting to AK sprays.',
    image: '/images/blog/rust-settings.jpg',
    date: '2024-02-14',
    category: 'Rust',
  },
  {
    title: 'DayZ Survival Guide: Aiming Tips',
    slug: 'dayz-survival-guide-aiming',
    excerpt: 'Master long-range combat and CQB encounters in DayZ with these pro aiming techniques.',
    image: '/images/blog/dayz-guide.jpg',
    date: '2024-02-13',
    category: 'DayZ',
  },
  {
    title: 'How to Choose the Perfect Crosshair',
    slug: 'how-to-choose-perfect-crosshair',
    excerpt: 'Learn how to select and customize your crosshair for maximum performance in any game.',
    image: '/images/blog/crosshair-guide.jpg',
    date: '2024-02-12',
    category: 'Guides',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      {/* Back Button */}
      <div className="w-full container mx-auto px-4 pt-24">
        <BackButton />
      </div>

      {/* Blog Content */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Gaming Tips & Tutorials
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guides to improve your aim and dominate in your favorite games
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-video">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
