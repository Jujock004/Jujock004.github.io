import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'max-w-4xl mx-auto px-4 py-4 sm:py-8 transition-all duration-700 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </section>
  );
};
