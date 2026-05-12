'use client';

import React from 'react';
import { Card } from './Card';
import { SchemaLD } from './SchemaLD';
import { siteConfig } from '@/config/site';

/**
 * Enhanced Card component specifically for Destinations.
 * Includes SEO Schema.org metadata and automated hash links.
 */
export const DestinationCard: React.FC<{ dest: { id: string; title: string; description: string; image: string } }> = ({ dest }) => (
  <>
    <SchemaLD data={{
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: dest.title,
      description: dest.description,
      image: dest.image,
      url: `${siteConfig.basePath}/destinations#${dest.id}`,
    }} />
    <Card title={dest.title} image={dest.image} href={`/destinations#${dest.id}`} />
  </>
);
