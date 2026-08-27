import React from 'react';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export function InputContacts({ label, name, value, onChange, type = 'text' }: Props) {
  return (
    <label className="block">
      <span className="mb-1.5 md:mb-3 block text-sm md:text-[15px] text-slate-500">{label}</span>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="
          w-full border-0 border-b border-slate-300
          bg-transparent
          pb-2 md:pb-3
          text-sm md:text-[15px]
          outline-none
          transition-all
          focus:border-primary
        "
      />
    </label>
  );
}
