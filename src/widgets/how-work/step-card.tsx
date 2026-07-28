type Props = {
  number: string;
  title: string;
  description: string;
  className?: string;
};

export function StepCard({ number, title, description, className = '' }: Props) {
  return (
    <div className={`group relative ${className}`}>
      <div
        className="
                absolute
                -top-7
                left-0
                z-20
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-primary
                text-xl
                font-bold
                text-white
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:shadow-[0_0_40px_rgba(59,130,246,.45)]
            "
      >
        {number}
      </div>

      <h3 className="mb-4 pt-8 text-2xl font-semibold text-white">{title}</h3>

      <p className="max-w-[360px] leading-8 text-zinc-400">{description}</p>
    </div>
  );
}
