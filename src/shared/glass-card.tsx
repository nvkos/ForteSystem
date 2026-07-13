import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-xl
        border
        border-border
        bg-white/70
        backdrop-blur-xl
        shadow-glass
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
