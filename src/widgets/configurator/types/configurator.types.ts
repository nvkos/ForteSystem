export type PlatformId = 'servers' | 'storage';

export type FieldType = 'select' | 'radio' | 'checkbox' | 'number';

export type RadioOption = {
  value: string;
  label: string;
};

export type ConfigOption = string | RadioOption;

export type ConfigValues = Record<string, string | string[]>;

export type ConfigField = {
  id: string;
  label: string;
  type: FieldType;

  placeholder?: string;
  min?: number;
  max?: number;

  colSpan?: string;
  cellSpan?: string;

  options: ConfigOption[];

  showIf?: (values: ConfigValues) => boolean;
};

export type ConfigBlock = {
  title: string;
  fields: ConfigField[];
};

export const CONFIG_BLOCK_EMOJIS: Record<string, string> = {
  'Основная информация': '📌',
  Основное: '📌',
  'Процессор (CPU)': '🧠',
  'Память (RAM)': '💾',
  'RAID-контроллер': '🛡️',
  'Хранилище HDD': '💽',
  'Хранилище SSD': '⚡',
  'Сеть и расширения': '🌐',
  'Питание (PSU)': '🔌',
  GPU: '🎮',
  'Работы / услуги': '🛠️',
  Контроллеры: '🎛️',
  Хранилище: '💾',
  Производительность: '⚡',
};

export type Platform = {
  id: PlatformId;
  title: string;
  pageTitle: string;
  description: string;
  icon: 'server' | 'storage';
};

export type ConfiguratorState = {
  step: 1 | 2 | 3;
  platform: PlatformId | null;
  brand: string | null;
  values: ConfigValues;
};

export type NumberFieldProps = {
  field: ConfigField;
  value: string;
  onChange: (value: string) => void;
};
