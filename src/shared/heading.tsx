import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function Heading({ children, description, className, align = 'left' }: HeadingProps) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'text-center', className)}>
      <h2
        className="
          text-3xl
          font-semibold
          tracking-tight
          text-text-primary
          md:text-4xl
          lg:text-5xl
        "
      >
        {children}
      </h2>

      {description && (
        <p
          className="
          max-w-2xl
          text-base
          text-text-secondary
          md:text-lg
        "
        >
          {description}
        </p>
      )}
    </div>
  );
}
