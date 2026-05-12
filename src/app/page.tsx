import React from 'react';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { DestinationCard } from '@/components/DestinationCard';
import { destinations } from '@/content/data';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <Hero
        title="Soulful connection with the Himalayas"
        subtitle="Welcome to Kumaon Valley"
        backgroundImage={`${siteConfig.basePath}/images/hero.png`}
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
    </main>
  );
}
