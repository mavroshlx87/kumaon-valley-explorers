'use client';

import React from 'react';
import { SectionHeader } from './SectionHeader';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}) => (
  <section className={`py-16 md:py-24 ${dark ? 'bg-primary text-white' : 'bg-background'} ${className}`}>
    <div className="container mx-auto px-4 max-w-7xl">
      {(title || subtitle) && (
        <SectionHeader title={title || ''} subtitle={subtitle} className={dark ? 'text-white' : ''} />
      )}
      {children}
    </div>
  </section>
);
