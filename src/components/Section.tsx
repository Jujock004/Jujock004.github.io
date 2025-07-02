import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('max-w-4xl mx-auto px-4 py-4 sm:py-8', className)}
    >
      {children}
    </section>
  );
};
