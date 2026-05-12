import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`text-center mb-16 px-4 ${className}`}>
      <h2
        className="font-serif font-light text-4xl md:text-5xl mb-4 text-primary leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-body"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
