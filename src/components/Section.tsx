'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className={`py-16 md:py-24 ${dark ? 'bg-primary text-white' : 'bg-background'} ${className}`}
  >
    <div className="container mx-auto px-4 max-w-7xl">
      {(title || subtitle) && (
        <SectionHeader title={title || ''} subtitle={subtitle} className={dark ? 'text-white' : ''} />
      )}
      {children}
    </div>
  </motion.section>
);
