'use client';
import { useEffect, useState } from 'react';
import { Hero } from '@/widgets/hero/hero';
import { Partner } from '@/widgets/partner/partner';
import { Product } from '@/widgets/products/products';
import { MakeRequest } from '@/widgets/make-request/make-request';
import { HowWeWork } from '@/widgets/how-work/how-we-work';

import { Footer } from '@/widgets/footer/Footer';
import { ContactSection } from '@/widgets/contact/ContactSection';
import { MobileHowWeWork } from '@/widgets/how-work/mobile_how-we-work';
import { BrandsMarquee } from '@/widgets/brands/brands-marquee';

export default function Home() {
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    const iPhone = /iPhone/i.test(navigator.userAgent);

    setIsIPhone(iPhone);
  }, []);

  return (
    <main>
      <Hero isIPhone={isIPhone} />
      <div className="flex sm:hidden justify-between items-center gap-5 pt-10 sm:pt-25 pb-6">
        <BrandsMarquee />
        <div id={'mob-about-us'} className={'self-end mb-11'} />
      </div>
      <Partner />
      <Product />
      <MakeRequest />
      <HowWeWork />
      <MobileHowWeWork />
      <ContactSection />
      <Footer />
    </main>
  );
}
