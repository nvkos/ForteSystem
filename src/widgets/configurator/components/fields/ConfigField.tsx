import type { ConfigField as ConfigFieldType, ConfigValues } from '../../types/configurator.types';

import { SelectField } from './SelectField';
import { RadioField } from './RadioField';
import { CheckboxField } from './CheckboxField';
import { NumberField } from '@/widgets/configurator/components/fields/NumberField';

type Props = {
  field: ConfigFieldType;
  values: ConfigValues;
  onChange: (id: string, value: string | string[]) => void;
};

export function ConfigField({ field, values, onChange }: Props) {
  if (field.showIf && !field.showIf(values)) {
    return null;
  }

  const rawValue = values[field.id];

  if (field.type === 'select') {
    return (
      <SelectField
        field={field}
        value={typeof rawValue === 'string' ? rawValue : ''}
        onChange={(value) => onChange(field.id, value)}
      />
    );
  }

  if (field.type === 'radio') {
    return (
      <RadioField
        field={field}
        value={typeof rawValue === 'string' ? rawValue : ''}
        onChange={(value) => onChange(field.id, value)}
      />
    );
  }

  if (field.type === 'number') {
    return (
      <NumberField
        field={field}
        value={typeof rawValue === 'string' ? rawValue : ''}
        onChange={(value) => onChange(field.id, value)}
      />
    );
  }

  if (field.type === 'checkbox') {
    return (
      <CheckboxField
        field={field}
        value={Array.isArray(rawValue) ? rawValue : []}
        onChange={(value) => onChange(field.id, value)}
      />
    );
  }

  return null;
}
