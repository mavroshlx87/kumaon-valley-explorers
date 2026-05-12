'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ExperienceSectionProps {
  title: string;
  description: string;
  videoUrl?: string; // Optional YouTube embed URL
  imageUrl?: string; // Fallback or primary image URL
  reverse?: boolean; // Flip layout: Text right, Media left on desktop
  className?: string;
}

/**
 * Reusable section for highlighting specific experiences with text and media.
 */
export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  title,
  description,
  videoUrl,
  imageUrl,
  reverse = false,
  className = '',
}) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className={`container mx-auto flex flex-col items-center gap-12 px-4 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      {/* Content Side */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="font-serif font-light text-4xl md:text-5xl mb-6 text-primary leading-tight">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mx-auto lg:mx-0 max-w-2xl">
          {description}
        </p>
      </motion.div>

      {/* Media Side */}
      <motion.div
        className="lg:w-1/2 w-full"
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {videoUrl ? (
          <div className="aspect-video">
            <iframe
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        ) : (
          imageUrl && (
            <div className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src={imageUrl} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          )
        )}
      </motion.div>
    </div>
  </section>
);
