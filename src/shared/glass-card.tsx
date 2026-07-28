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
        flex-column
        rounded-md
        border
        border-border/50
        bg-white/70
        backdrop-blur-xl
        shadow-soft
        hover:shadow-soft-hover
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
