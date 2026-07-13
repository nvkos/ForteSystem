import Image from 'next/image';
import { GlassCard } from '@/shared';

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

      <GlassCard className="relative p-8">
        <Image
          src="/hero-server.png"
          alt="Server infrastructure"
          width={600}
          height={500}
          className="relative z-10"
        />
      </GlassCard>
    </div>
  );
}
