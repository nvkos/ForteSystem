import type { ConfigField } from '../../types/configurator.types';

type Props = {
  field: ConfigField;
  value: string[];
  onChange: (value: string[]) => void;
};

const colSpanClasses = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
} as const;

export function CheckboxField({ field, value, onChange }: Props) {
  const toggleValue = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((item) => item !== optionValue));

      return;
    }

    onChange([...value, optionValue]);
  };

  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-slate-700">{field.label}</legend>

      <div className={`grid gap-2 ${field.cellSpan}`}>
        {field.options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value;

          const optionLabel = typeof option === 'string' ? option : option.label;

          const checked = value.includes(optionValue);

          return (
            <label
              key={optionValue}
              className={`
                group
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-2xl
                border
                px-3 py-2
                text-sm leading-tight
                transition-all
                duration-200

                ${
                  checked
                    ? `
                      border-primary
                      bg-primary/5
                      text-primary
                    `
                    : `
                      border-slate-200
                      bg-white/50
                      text-slate-600
                      hover:border-primary/40
                      hover:bg-white/80
                    `
                }
              `}
            >
              <input
                type="checkbox"
                value={optionValue}
                checked={checked}
                onChange={() => toggleValue(optionValue)}
                className="sr-only"
              />

              <span
                className={`
                  flex
                  h-3
                  w-3
                  shrink-0
                  items-center
                  justify-center
                  rounded-md
                  border
                  transition-all

                  ${checked ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-white'}
                `}
              >
                {checked && (
                  <svg
                    viewBox="0 0 20 20"
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 10 3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>

              <span>{optionLabel}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
