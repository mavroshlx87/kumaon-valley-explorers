'use client';

import React from 'react';
import { motion, MotionProps, TargetAndTransition } from 'framer-motion';

interface FramerWrapperProps {
  children: React.ReactNode;
  initial?: MotionProps['initial'];
  whileInView?: TargetAndTransition;
  transition?: MotionProps['transition'];
  className?: string;
}

export const FramerWrapper: React.FC<FramerWrapperProps> = ({
  children,
  initial = { opacity: 0, y: 30 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: 'easeOut' },
  className,
}) => (
  <motion.div
    initial={initial}
    whileInView={whileInView}
    viewport={{ once: true, amount: 0.1 }}
    transition={transition}
    className={className}
  >
    {children}
  </motion.div>
);
