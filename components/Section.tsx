import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', containerClassName = '' }) => {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};