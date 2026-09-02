'use client';
import { Configurator } from '@/widgets/configurator/Configurator';
import { Suspense } from 'react';

export default function ConfiguratorPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <main>
        <Configurator />
      </main>
    </Suspense>
  );
}
