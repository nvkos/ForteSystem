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
        colSpan: 2,
        options: COUNT_OPTS.slice(0, 5).concat(['>5']),
      },
      {
        id: 'storageFormFactor',
        label: 'Форм-фактор',
        type: 'radio',
        colSpan: 4,
        cellSpan: 4,
        options: ['2U', '3U', '4U', '5U+'],
      },
      {
        id: 'storageType',
        label: 'Тип системы хранения',
        type: 'checkbox',
        cellSpan: 4,
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
        colSpan: 2,
        options: ['1', '2', '2+'],
      },
      {
        id: 'controllerCache',
        label: 'Объём кэша на контроллер, Гб',
        type: 'radio',
        colSpan: 4,
        cellSpan: 6,
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
        options: ['Hybrid storage', 'All-flash storage', 'All-flash NVMe storage'],
      },
      {
        id: 'driveBays',
        label: 'Количество отсеков',
        type: 'checkbox',
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
        cellSpan: 4,
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
        options: ['FC 16/32 Gb', 'iSCSI', 'NVMe-oF'],
      },
      {
        id: 'raidProfiles',
        label: 'RAID-профили',
        type: 'checkbox',
        cellSpan: 4,
        options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 6', 'RAID 10', 'RAID 50', 'RAID 60'],
      },
    ],
  },
];
