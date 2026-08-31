import { ConfigBlock } from '@/widgets/configurator/types/configurator.types';

const COUNT_OPTS = [...Array(24)].map((_, i) => String(i + 1)).concat(['>24']);

export const STORAGE_SCHEMA: ConfigBlock[] = [
  {
    title: 'Основное',
    fields: [
      {
        id: 'storageCount',
        label: 'Количество СХД',
        type: 'number',
        colSpan: 'col-span-6 sm:col-span-3 xl:col-span-2',
        options: COUNT_OPTS.slice(0, 5).concat(['>5']),
      },
      {
        id: 'storageFormFactor',
        label: 'Форм-фактор',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-3 xl:col-span-4',
        cellSpan: 'grid-cols-4',
        options: ['2U', '3U', '4U', '5U+'],
      },
      {
        id: 'storageType',
        label: 'Тип системы хранения',
        type: 'checkbox',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4',
        options: [
          'SAN (Block level)',
          'NAS (File level)',
          'Unified (Block + File)',
          'S3 Object Storage',
        ],
      },
    ],
  },
  {
    title: 'Контроллеры',
    fields: [
      {
        id: 'controllerCount',
        label: 'Количество контроллеров',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-3 md:col-span-2 xl:col-span-2',
        cellSpan: 'grid-cols-3',
        options: ['1', '2', '2+'],
      },
      {
        id: 'controllerCache',
        label: 'Объём кэша на контроллер, Гб',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-3 md:col-span-4 xl:col-span-4',
        cellSpan: 'grid-cols-3 xs:grid-cols-6 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6',
        options: ['8', '16', '32', '64', '128', '256'],
      },
    ],
  },
  {
    title: 'Хранилище',
    fields: [
      {
        id: 'mediaType',
        label: 'Тип носителей',
        type: 'radio',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-1 sm:grid-cols-3',
        options: ['Hybrid storage', 'All-flash storage', 'All-flash NVMe storage'],
      },
      {
        id: 'driveBays',
        label: 'Количество отсеков',
        type: 'checkbox',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_1fr_2fr_2fr]',
        options: [
          '12 LFF',
          '24 SFF',
          '25 SFF',
          '36 SFF',
          'NVMe expansion shelf',
          'SAS expansion shelf',
        ],
      },
      {
        id: 'driveTypes',
        label: 'Тип накопителей',
        type: 'checkbox',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-2 md:grid-cols-4',
        options: ['NL-SAS (HDD)', 'SAS HDD', 'SAS SSD', 'NVMe SSD'],
      },
    ],
  },
  {
    title: 'Производительность',
    fields: [
      {
        id: 'connectionTypes',
        label: 'Тип подключений',
        type: 'checkbox',
        colSpan: 'col-span-6 xl:col-span-3',
        cellSpan: 'grid-cols-1 sm:grid-cols-3',
        options: ['FC 16/32 Gb', 'iSCSI', 'NVMe-oF'],
      },
      {
        id: 'raidProfiles',
        label: 'RAID-профили, RAID',
        type: 'checkbox',
        colSpan: 'col-span-6 xl:col-span-3',
        cellSpan: 'grid-cols-1 xxs:grid-cols-4 sm:grid-cols-7',
        options: ['0', '1', '5', '6', '10', '50', '60'],
      },
    ],
  },
];
