export function MobileStepItem({
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
  number: string;
}) {
  return (
    <li
      className={`stages-map__item absolute`}
      style={{ width: 'min(322px, 80%)', left: left + '%', top: top + '%' }}
    >
      <h3
        className={
          'font-unbounded w-fit text-[14px] text-white bg-[#262323] px-2.5 font-medium mb-1'
        }
      >
        {number} {header}
      </h3>
      <p className={'text-[13px] px-2.5 text-white/75'}>{desc}</p>
    </li>
  );
}
