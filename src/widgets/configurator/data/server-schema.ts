import type { ConfigBlock } from '../types/configurator.types';

const COUNT_OPTS = ['1', '2', '3', '4', '5', '>5'];

const HDD_CAPACITY = [
  '300 GB SAS',
  '600 GB SAS',
  '900 GB SAS',
  '1 TB SATA',
  '1 TB SAS',
  '1.2 TB SAS',
  '1.8 TB SAS',
  '2 TB SATA',
  '2 TB SAS',
  '2.4 TB SAS',
  '4 TB SATA',
  '4 TB SAS',
  '6 TB SATA',
  '6 TB SAS',
  '8 TB SATA',
  '8 TB SAS',
  '10 TB SATA',
  '10 TB SAS',
  '>10 TB SATA',
  '>10 TB SAS',
];

const SSD_CAPACITY = [
  '240 GB SATA',
  '480 GB SAS',
  '960 GB NVMe',
  '1.92 TB SAS',
  '3.84 TB NVMe',
  '7.68 TB NVMe',
  '15.36 TB NVMe',
];

export const SERVER_SCHEMA: ConfigBlock[] = [
  {
    title: 'Основная информация',

    fields: [
      {
        id: 'serverCount',
        label: 'Количество серверов',
        type: 'number',
        colSpan: 'col-span-6 sm:col-span-3 xl:col-span-2',
        options: [],
      },

      {
        id: 'formFactor',
        label: 'Форм-фактор',
        type: 'radio',
        colSpan: 'col-span-6',
        cellSpan: 'sm:grid-cols-2 xl:grid-cols-4',
        options: [
          {
            value: 'rack',
            label: 'Rack (стоечный)',
          },
          {
            value: 'tower',
            label: 'Tower (башенный)',
          },
          {
            value: 'blade',
            label: 'Blade-шасси',
          },
          {
            value: 'edge',
            label: 'Edge',
          },
        ],
      },

      {
        id: 'formFactorSize',
        label: 'Размер в U',
        type: 'radio',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-3',
        options: ['1U', '2U', '4U'],

        showIf: (values) => values.formFactor === 'rack' || values.formFactor === 'tower',
      },

      {
        id: 'drivePlatform',
        label: 'Платформа для дисков',
        type: 'select',
        colSpan: 'col-span-6 sm:col-span-2 xl:col-span-2',
        options: [
          '4×3.5"',
          '8×3.5"',
          '10×3.5"',
          '12×3.5"',
          '>12×3.5"',
          '8×2.5"',
          '10×2.5"',
          '16×2.5"',
          '24×2.5"',
          '>24×2.5"',
        ],
      },

      {
        id: 'serverPurpose',
        label: 'Назначение сервера',
        type: 'checkbox',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3',
        options: [
          'файловый сервер',
          'вычислительный сервер',
          'сервер БД',
          'веб-сервер',
          'виртуализация',
        ],
      },
    ],
  },

  {
    title: 'Процессор (CPU)',

    fields: [
      {
        id: 'cpuCount',
        label: 'Количество CPU',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-3',
        cellSpan: 'grid-cols-4',
        options: ['1', '2', '4', '8'],
      },

      {
        id: 'cpuVendor',
        label: 'Производитель CPU',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-3',
        cellSpan: 'grid-cols-2',
        options: ['Intel', 'AMD'],
      },
    ],
  },

  {
    title: 'Память (RAM)',

    fields: [
      {
        id: 'ramSize',
        label: 'Объем ОЗУ',
        type: 'select',
        colSpan: 'col-span-6 sm:col-span-2 xl:col-span-2',
        options: ['16 GB', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB', '2 TB и более'],
      },

      {
        id: 'ramType',
        label: 'Тип памяти',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-4',
        cellSpan: 'grid-cols-3',
        options: ['DDR3', 'DDR4', 'DDR5'],
      },
    ],
  },

  {
    title: 'RAID-контроллер',

    fields: [
      {
        id: 'raidController',
        label: 'RAID-контроллер',
        type: 'radio',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-2 sm:grid-cols-4',
        options: ['нет', '2 GB cache', '4 GB cache', '8 GB cache'],
      },
    ],
  },

  {
    title: 'Хранилище HDD',

    fields: [
      {
        id: 'hddCount',
        label: 'Количество HDD',
        type: 'number',
        colSpan: 'col-span-6 xs:col-span-3 sm:col-span-2',
        options: COUNT_OPTS,
      },

      {
        id: 'hddFormFactor',
        label: 'Форм-фактор HDD',
        type: 'radio',
        colSpan: 'col-span-6 xs:col-span-3 sm:col-span-2',
        cellSpan: 'grid-cols-2',
        options: ['2.5"', '3.5"'],
      },

      {
        id: 'hddCapacity',
        label: 'Объём одного HDD',
        type: 'select',
        colSpan: 'col-span-6 xs:col-span-3 sm:col-span-2',
        options: HDD_CAPACITY,
      },
    ],
  },

  {
    title: 'Хранилище SSD',

    fields: [
      {
        id: 'ssdCount',
        label: 'Количество SSD',
        colSpan: 'col-span-6 xs:col-span-3 md:col-span-2 lg:col-span-3 xl:col-span-2',
        type: 'number',
        options: COUNT_OPTS,
      },

      {
        id: 'ssdFormFactor',
        label: 'Форм-фактор SSD',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-3 xl:col-span-2',
        cellSpan: 'grid-cols-2',
        options: ['2.5"', 'M.2'],
      },

      {
        id: 'ssdCapacity',
        label: 'Объём одного SSD',
        colSpan: 'col-span-6 xs:col-span-3 md:col-span-2 lg:col-span-3 xl:col-span-2',
        type: 'select',
        options: SSD_CAPACITY,
      },
    ],
  },

  {
    title: 'Сеть и расширения',

    fields: [
      {
        id: 'ethernet',
        label: 'Ethernet',
        type: 'select',
        colSpan: 'col-span-6 sm:col-span-3',
        options: ['2×1GE RJ45', '4×1GE', '2×10GE SFP+', '4×10GE', '2×25GE', '2×40GE', '2×100GE'],
      },

      {
        id: 'pcieAdapters',
        label: 'Другие PCIe-адаптеры',
        type: 'radio',
        colSpan: 'col-span-6 sm:col-span-3',
        cellSpan: 'grid-cols-2',
        options: ['да', 'нет'],
      },
    ],
  },

  {
    title: 'Питание (PSU)',

    fields: [
      {
        id: 'psuCount',
        label: 'Количество блоков питания',
        type: 'radio',
        colSpan: 'col-span-6 md:col-span-2 lg:col-span-6 xl:col-span-2',
        cellSpan: 'grid-cols-3',
        options: ['1', '2', '4'],
      },

      {
        id: 'psuPower',
        label: 'Мощность блока питания, Вт',
        type: 'radio',
        colSpan: 'col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-4',
        cellSpan: 'grid-cols-2 sm:grid-cols-4',
        options: ['> 500', '500–750', '750–1000', '< 1000'],
      },
    ],
  },

  {
    title: 'GPU (опционально)',

    fields: [
      {
        id: 'gpuCount',
        label: 'Количество GPU',
        type: 'radio',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-3 sm:grid-cols-6',
        options: ['нет', '1', '2', '4', '8', '> 8'],
      },

      {
        id: 'gpuMemory',
        label: 'Объем памяти GPU, ГБ',
        type: 'radio',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-4 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-8',
        options: ['8', '12', '16', '24', '32', '48', '64', '80'],

        showIf: (values) => Boolean(values.gpuCount) && values.gpuCount !== 'нет',
      },
    ],
  },

  {
    title: 'Работы / услуги',

    fields: [
      {
        id: 'services',
        label: 'Дополнительные услуги',
        type: 'checkbox',
        colSpan: 'col-span-6',
        cellSpan: 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-3',
        options: [
          'установка и настройка',
          'монтаж в стойку',
          'конфигурация RAID',
          'установка ОС',
          'техническая поддержка',
          'расширенная гарантия',
        ],
      },
    ],
  },
];
