'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  image: string;
  href?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, image, href, className }) => {
  const content = (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-2xl overflow-hidden shadow-md bg-card ${className}`}
    >
      <div className="relative h-64 w-full">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <h3
        className="text-center font-serif font-light py-6 text-primary text-2xl"
      >
        {title}
      </h3>
    </motion.div>
  );

  return href ? <Link href={href} className="block">{content}</Link> : content;
};
