'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { tourPackages } from '@/content/data';
import { SchemaLD } from '@/components/SchemaLD';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function PackagesPage() {
  return (
    <main className="bg-background py-20">
      <SchemaLD data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Kumaon Valley Tour Packages',
        description: 'Curated Kumaon Himalayan tour packages starting from ₹8,499. Includes Nainital, Binsar, Ranikhet, Om Parvat, and Munsiyari.',
        numberOfItems: tourPackages.length,
        itemListElement: tourPackages.map((pkg, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'TouristTrip',
            name: pkg.title,
            description: pkg.description,
            touristType: 'Spiritual & Wellness Travelers',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              price: pkg.startingPrice,
              availability: 'https://schema.org/InStock',
            },
          },
        })),
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-6xl mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary font-serif leading-tight">
          Tour <span className="text-accent">Packages</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-body">
          Thoughtfully crafted journeys through the Kumaon Himalayas. Every package includes comfortable stays, local guides, all meals, and private transport.
        </p>
      </motion.div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {tourPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} — ${pkg.destination} tour package in Kumaon Valley`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Price badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Starting from ₹{pkg.startingPrice.toLocaleString('en-IN')}/person
                  </span>
                </div>

                {/* Difficulty badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${
                    pkg.difficulty === 'Easy'
                      ? 'bg-green-500/90 text-white'
                      : 'bg-amber-500/90 text-white'
                  }`}>
                    {pkg.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {pkg.destination}
                  </span>
                  <span className="text-border">•</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3 font-serif">
                  {pkg.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Highlights */}
                <div className="mb-8 flex-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 font-body">Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="text-accent mt-0.5 shrink-0">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={`/contact?inquiry=${pkg.id}&type=package`}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full text-center font-medium font-serif text-lg shadow-lg hover:bg-accent hover:text-accent-foreground transition-all active:scale-[0.98]"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-primary/5 border border-primary/10 rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-4">
            Looking for something custom?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We specialize in creating bespoke journeys tailored to your pace, preferences, and spiritual interests. Tell us your dream trip and we will craft it for you.
          </p>
          <Link
            href="/contact?type=custom"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-serif text-lg shadow-lg hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Plan a Custom Trip
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
