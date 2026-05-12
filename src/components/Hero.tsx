'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaHref,
}) => {
  return (
    <section 
      className="relative w-full h-[60vh] md:h-[85vh] min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-primary"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})` }}
    >

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <p
            className="uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6 text-accent font-body"
          >
            {subtitle}
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-12 leading-[1.1] text-white font-serif"
          >
            {title}
          </h1>
          {ctaText && ctaHref && (
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-all shadow-2xl bg-white text-primary font-body"
            >
              {ctaText}
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Bottom fade for smoother transition to content */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
