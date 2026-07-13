import Image from 'next/image';

import { ArrowRight, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container, Section } from '@/shared';
import HeroImage from './hero-image';

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-24 lg:pt-32">
      {/* фоновые эффекты */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-white" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2
              rounded-full
              border border-blue-100 bg-blue-50
              px-4 py-2
              text-sm text-primary"
            >
              <Server size={16} />
              IT-инфраструктура для бизнеса
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              Серверные решения для надежной инфраструктуры
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-text-secondary">
              Поставка серверного оборудования, систем хранения данных и программного обеспечения
              для компаний любого масштаба.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="xl">
                Получить консультацию
                <ArrowRight />
              </Button>

              <Button variant="outline" size="xl">
                Каталог решений
              </Button>
            </div>

            <div className="flex gap-10 pt-6">
              <Stat value="10+" text="лет опыта" />
              <Stat value="500+" text="проектов" />
              <Stat value="24/7" text="поддержка" />
            </div>
          </div>

          {/* RIGHT */}

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}

function Stat({ value, text }: { value: string; text: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-text-primary">{value}</div>

      <div className="text-sm text-text-secondary">{text}</div>
    </div>
  );
}
