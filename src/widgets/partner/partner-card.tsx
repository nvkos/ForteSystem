import { ReactNode } from 'react';

import { GlassCard } from '@/shared';

interface PartnerCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function PartnerCard({ icon, title, description }: PartnerCardProps) {
  return (
    <GlassCard className="h-full py-5 px-7 flex items-center gap-7">
      <div className="flex p-3 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>

      <div>
        <h3 className="mb-2 font-heading leading-snug text-base font-medium">{title}</h3>

        <p className="text-base leading-snug text-text-secondary text-justify">{description}</p>
      </div>
    </GlassCard>
  );
}
