import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { DestinationCard } from '@/components/DestinationCard';
import { destinations, tourPackages } from '@/content/data';
import { siteConfig } from '@/config/site';
import { SchemaLD } from '@/components/SchemaLD';
import { FramerWrapper } from '@/components/FramerWrapper';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <SchemaLD data={{
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        areaServed: 'Kumaon, Uttarakhand, India',
        priceRange: '₹₹',
      }} />

      {/* Hero */}
      <Hero
        title="Soulful connection with the Himalayas"
        subtitle="Welcome to Kumaon Valley"
        backgroundImage={`${siteConfig.basePath}/images/hero_drone.png`}
        ctaText="Explore Destinations"
        ctaHref="/destinations"
      />

      {/* Intro */}
      <Section className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light font-serif italic text-primary mb-8">
            Beyond the tourist trail…
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            We specialize in relaxed, rejuvenating, spiritually enriching tourism in the Kumaon region, offering journeys that are as soulful as the mountains themselves.
          </p>
          <div className="w-24 h-px bg-accent mx-auto" />
        </div>
      </Section>

      {/* Featured Destinations */}
      <Section
        title="The heart of Kumaon"
        subtitle="Hand‑picked destinations that offer more than just a view."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>
      </Section>

      {/* Featured Packages */}
      <Section
        title="Popular Tour Packages"
        subtitle="All‑inclusive journeys with comfortable stays, local guides, and authentic meals."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourPackages.slice(0, 3).map((pkg, i) => (
            <FramerWrapper key={pkg.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }}>
              <Link href={`/packages#${pkg.id}`} className="block group">
                <div className="bg-card rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={`${pkg.title} tour package in Kumaon`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow">
                      From ₹{pkg.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-body">{pkg.duration}</p>
                    <h3 className="text-xl font-bold text-primary font-serif mb-2">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{pkg.description}</p>
                    <span className="mt-4 text-primary font-bold text-xs uppercase tracking-widest inline-flex items-center group-hover:gap-2 transition-all">
                      View Details <span className="ml-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </FramerWrapper>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-serif text-lg shadow-lg hover:bg-accent hover:text-accent-foreground transition-all"
          >
            View All Packages
          </Link>
        </div>
      </Section>
    </main>
  );
}
