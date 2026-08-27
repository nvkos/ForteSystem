import type { Platform } from '../types/configurator.types';

export const PLATFORMS: Record<string, Platform> = {
  servers: {
    id: 'servers',
    title: 'Сервер',
    pageTitle: 'Серверы',
    icon: 'server',
    description: 'Стоечные, башенные, blade и edge-серверы',
  },

  storage: {
    id: 'storage',
    title: 'Система хранения данных (СХД)',
    pageTitle: 'Системы хранения данных',
    icon: 'storage',
    description: 'SAN, NAS, unified и object storage',
  },
};
