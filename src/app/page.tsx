import { Hero } from '@/widgets/hero/hero';
import { Partner } from '@/widgets/partner/partner';
import { Product } from '@/widgets/products/products';
import { MakeRequest } from '@/widgets/make-request/make-request';
import { HowWeWork } from '@/widgets/how-work/how-we-work';

import { Footer } from '@/widgets/footer/Footer';
import { ContactSection } from '@/widgets/contact/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Partner />
      <Product />
      <MakeRequest />
      <HowWeWork />
      <ContactSection />
      <Footer />
    </main>
  );
}
