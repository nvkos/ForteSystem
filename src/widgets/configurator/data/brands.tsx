import type { PlatformId } from '../types/configurator.types';
import PartnersIcons from '@/assets/logo/partnersIcons';
import { JSX } from 'react';

export const BRANDS: Record<PlatformId, string[]> = {
  servers: ['HPE', 'Dell', 'IBM', 'Lenovo', 'H3C', 'xFusion', 'Supermicro', 'Fujitsu'],

  storage: ['HPE', 'Dell', 'IBM', 'Lenovo', 'Huawei', 'Fujitsu', 'QSAN', 'Infortrend'],
};

export const BRAND_LOGOS: {
  Lenovo: JSX.Element;
  Supermicro: JSX.Element;
  Dell: JSX.Element;
  IBM: JSX.Element;
  H3C: JSX.Element;
  xFusion: JSX.Element;
  QSAN: JSX.Element;
  Fujitsu: JSX.Element;
  HPE: JSX.Element;
  Huawei: JSX.Element;
  Infortrend: JSX.Element;
} = {
  HPE: <PartnersIcons partner={'hpe'} size={60} style="w-auto object-contain" />,
  Dell: <PartnersIcons partner={'dell'} size={60} style="w-auto object-contain" />,
  IBM: <PartnersIcons partner={'ibm'} size={60} style="w-auto object-contain" />,
  Lenovo: <PartnersIcons partner={'lenovo'} size={70} style="w-auto object-contain" />,
  H3C: <PartnersIcons partner={'h3c'} size={70} style="w-auto object-contain" />,
  xFusion: <PartnersIcons partner={'xFusion'} size={20} style="w-auto object-contain" />,
  Supermicro: <PartnersIcons partner={'supermicro'} size={60} style="w-auto object-contain" />,
  Fujitsu: <PartnersIcons partner={'fujitsu'} size={60} style="w-auto object-contain" />,
  Huawei: <PartnersIcons partner={'huawei'} size={70} style="w-auto object-contain" />,
  QSAN: <PartnersIcons partner={'qsan'} size={70} style="w-auto object-contain" />,
  Infortrend: <PartnersIcons partner={'infortrend'} size={70} style="w-auto object-contain" />,
};
