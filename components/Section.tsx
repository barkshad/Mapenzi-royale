import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', containerClassName = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={`max-w-6xl mx-auto px-6 md:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};