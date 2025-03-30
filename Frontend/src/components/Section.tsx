import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bgColor?: string;
  centered?: boolean;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'bg-white',
  centered = false,
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className={`mb-12 heading-center ${centered ? 'text-center' : ''}`}>
            {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 max-w-3xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
