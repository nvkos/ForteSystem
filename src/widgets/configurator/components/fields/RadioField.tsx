import type { ConfigField } from '../../types/configurator.types';

type Props = {
  field: ConfigField;
  value: string;
  onChange: (value: string) => void;
};


export function RadioField({ field, value, onChange }: Props) {

  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-slate-700">{field.label}</legend>

      <div className={`grid gap-2 ${field.cellSpan}`}>
        {field.options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value;

          const optionLabel = typeof option === 'string' ? option : option.label;

          const checked = value === optionValue;

          return (
            <label
              key={optionValue}
              className={`
                group
                relative
                flex
                cursor-pointer
                items-center
                gap-3
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
                type="radio"
                name={field.id}
                value={optionValue}
                checked={checked}
                onChange={() => onChange(optionValue)}
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
                  rounded-full
                  border
                  transition-all

                  ${checked ? 'border-primary' : 'border-slate-300 group-hover:border-primary/50'}
                `}
              >
                <span
                  className={`
                    h-1
                    w-1
                    rounded-full
                    bg-primary
                    transition-transform
                    ${checked ? 'scale-100' : 'scale-0'}
                  `}
                />
              </span>

              <span>{optionLabel}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
