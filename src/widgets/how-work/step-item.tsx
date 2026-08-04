export function StepItem({
  header,
  desc,
  left,
  top,
  number,
}: {
  header: string;
  desc: string;
  left: number;
  top: number;
  number: number;
}) {
  return (
    <li
      className={`stages-map__item absolute`}
      style={{ width: 'min(320px, 30%)', left: left + '%', top: top + '%' }}
    >
      <span
        className="
              stages-map__badge grid place-items-center
              w-10 h-10 rounded-full mb-2.5
              font-unbounded text-[16px] font-semibold text-white leading-none
              bg-[#3B82F6]
              steps_blue_bg
            "
        aria-hidden="true"
      >
        0{number}
      </span>
      <h3 className={'font-unbounded text-[15px] text-white font-medium mb-1'}>{header}</h3>
      <p className={'text-[13px] text-white/75'}>{desc}</p>
    </li>
  );
}
