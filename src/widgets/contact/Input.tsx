type Props = {
  label: string;
  name: string;
  type?: string;
};

export function InputContacts({ label, name, type = 'text' }: Props) {
  return (
    <label className="block">
      <div className="pointer-events-none absolute -top-20 right-10 h-60 w-60 rounded-full bg-white/40 blur-[120px]" />

      <span className=" mb-3 block text-[15px] text-slate-500">{label}</span>

      <input
        name={name}
        type={type}
        className="
          w-full border-0 border-b border-slate-300
          bg-transparent
          pb-3
          outline-none
          transition-all
          placeholder:text-slate-400
          focus:border-primary
        "
      />
    </label>
  );
}
