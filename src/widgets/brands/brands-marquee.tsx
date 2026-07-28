'use client';

import PartnersIcons from '@/assets/logo/partnersIcons';

export function BrandsMarquee() {
  const brands = [
    'hpe',
    'lenovo',
    'dell',
    'fujitsu',
    'netapp',
    'h3c',
    'huawei',
    'ibm',
    'cisco',
    'qsan',
    'qnap',
    'supermicro',
    'nvidia',
    'amd',
    'intel',
  ];
  const items = [...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* плавное исчезновение по краям */}
      {/*<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />*/}
      {/*<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />*/}

      <div
        className="flex w-max animate-marquee
       {/*hover:[animation-play-state:paused]*/}
      "
      >
        {items.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="
              flex
              h-24
              w-fit
              {/*min-w-[180px]*/}
              shrink-0
              items-center
              justify-center
              px-8
              mx-9

              {/*lg:min-w-[180px]*/}
              {/*md:min-w-[160px]*/}
              {/*sm:min-w-[140px]*/}
            "
          >
            <PartnersIcons
              partner={brand}
              size={50}
              style="w-auto object-contain
                             opacity-60 grayscale

                             transition-all duration-300

                             hover:opacity-100 hover:grayscale-0
                           "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
