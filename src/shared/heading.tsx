import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  description?: string;
  wrapClassName?: string;
  hClassName?: string;
  pClassName?: string;
  align?: 'left' | 'center';
}

export function Heading({
  children,
  description,
  wrapClassName,
  hClassName,
  pClassName,
  align = 'left',
}: HeadingProps) {
  return (
    <div className={cn('space-y-3', align === 'center' && 'text-center', wrapClassName)}>
      <h2
        className={`font-heading leading-snug text-xl font-medium tracking-wide text-text-primary md:text-2xl lg:text-3xl ${hClassName}`}
      >
        {children}
      </h2>

      {description && (
        <p
          className={
            'font-base md:text-lg text-base leading-snug text-text-secondary md:text-lg ' +
            pClassName
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
