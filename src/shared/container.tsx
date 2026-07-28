import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  style?: ReactNode;
  className?: string;
}

export function Container({ children, className, style }: ContainerProps) {
  return (
    <div style={{ ...style }} className={cn('mx-auto w-full max-w-350 p-5', className)}>
      {children}
    </div>
  );
}
