'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { destinations } from '@/content/data';
import { SchemaLD } from '@/components/SchemaLD';
import { siteConfig } from '@/config/site';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function DestinationsPage() {
  return (
    <main className="bg-background py-20">
      {/* Page-level structured data */}
      <SchemaLD data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Kumaon Valley Tour Destinations',
        description: 'Explore curated, spiritually enriching tour destinations across the Kumaon Himalayas — Nainital, Almora, Ranikhet, Mukteshwar, Binsar, Kausani, and more.',
        url: `${siteConfig.url}/destinations`,
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-6xl mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary font-serif leading-tight">
          Top Tours & <br />
          <span className="text-accent">Destinations in Kumaon</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-body">
          Explore the hidden gems of the Kumaon Himalayas. From the cultural heart of Almora to the mystical peaks of Om Parbat, discover the soul of Uttarakhand.
        </p>
      </motion.div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              id={dest.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <SchemaLD data={{
                '@context': 'https://schema.org',
                '@type': 'TouristDestination',
                name: dest.title,
                description: dest.description,
                image: dest.image,
                url: `${siteConfig.url}/destinations#${dest.id}`,
                touristType: 'Spiritual & Wellness Travelers',
              }} />
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`${dest.title} — scenic view of this Kumaon Himalayan destination`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
                  {dest.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3">
                  {dest.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/contact?inquiry=${dest.id}`}
                    className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all"
                  >
                    Plan Your Journey <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
