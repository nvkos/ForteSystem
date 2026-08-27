import { NumberFieldProps } from '@/widgets/configurator/types/configurator.types';

export function NumberField({ field, value, onChange }: NumberFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{field.label}</span>

      <input
        type="number"
        min={field.min || 1}
        max={field.max || 1000}
        value={value || ''}
        placeholder={field.placeholder || 'Введите количество'}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="

          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/60
          px-3 py-2
          text-sm leading-tight
          text-slate-800
          outline-none
          transition-all

          placeholder:text-slate-400

          hover:border-slate-300

          focus:border-primary
          focus:bg-white
          focus:ring-4
          focus:ring-primary/10

          [appearance:textfield]
          [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none
        "
      />
    </label>
  );
}
