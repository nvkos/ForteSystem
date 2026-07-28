'use client';

import { Button } from '@/components/ui/button';
import { Container, Section } from '@/shared';
import FullLogo from '@/assets/logo/full-logo';
import heroBack from './hero-back2.png';
import Icons from '@/assets/icons';
import { BrandsMarquee } from '@/widgets/brands/brands-marquee';

export function Hero() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="e222background"></div>
      <div className="topbar bg-white text-xsm font-heading font-light">
        <div className="max-w-350 min-h-10 mx-auto py-2 px-8 flex flex-row justify-between items-center gap-2">
          <div className="topbar__left flex flex-row items-center gap-10">
            <p>ООО «Форте Систем»</p>
            <p className="topbar__address flex flex-row items-center gap-3" aria-label="Адрес">
              <Icons type={'map'} />
              <span>220024, г. Минск, ул. Серова, д. 2А, каб. 31В</span>
            </p>
          </div>
          <div className="flex flex-row items-center gap-10">
            <a className="flex flex-row items-center gap-3" href="tel:+375447191824">
              <Icons type={'phone'} />
              <span>+375 44 719-18-24</span>
            </a>
            <a className="flex flex-row items-center gap-3" href="mailto:info@fortesystem.by">
              <Icons type={'mail'} />
              <span>info@fortesystem.by</span>
            </a>
          </div>
        </div>
      </div>
      <header className={`sticky top-0 z-100 transition animated-box duration-300 easy`}>
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-350 items-center justify-between p-5 px-0 sm:px-5"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="">
              <span className="sr-only">Forte System</span>
              <div className="w-auto">
                <FullLogo size={50} />
              </div>
            </a>
          </div>
          <div className={'glass flex flex-row py-2 px-6 gap-4'}>
            <a href="#" className="block text-sm/6 font-semibold hover:text-primary">
              Продукты
            </a>
            <a href="#" className="block text-sm/6 font-semibold hover:text-primary">
              О компании
            </a>
            <a href="#" className="block text-sm/6 font-semibold hover:text-primary">
              Контакты
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button size="md" variant={'default'} className={'px-5 py-12px rounded-3xl'}>
              <Icons type={'configuration'} size={16} />
              Конфигуратор
            </Button>
          </div>
        </nav>
      </header>
      <Section className="lg:py-0 md:py-0 py-0 min-h-screen -mt-32 flex flex-col">
        {/* фоновые эффекты */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-white bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBack.src})` }}
        />

        <Container className={`max-w-350 p-5 grow-1 flex flex-row items-end`}>
          <div
            className={`w-full`}
            // className="grid items-center gap-12 lg:grid-cols-2"
          >
            {/* LEFT */}
            <div className="space-y-8">
              {/*<div*/}
              {/*  className="inline-flex items-center gap-2*/}
              {/*  rounded-full*/}
              {/*  border border-blue-100 bg-blue-50*/}
              {/*  px-4 py-2*/}
              {/*  text-sm text-primary"*/}
              {/*>*/}
              {/*  <Server size={16}/>*/}
              {/*  IT-инфраструктура для бизнеса*/}
              {/*</div>*/}

              <h1
                className="
              font-heading

              {/*max-w-xl*/}

              text-3xl
              font-semibold
              leading-snug
              tracking-wide
              my-5

              {/*text-text-primary*/}

              md:text-3xl
              lg:text-5xl
            "
              >
                Системный интегратор <span className={'text-primary'}>IT-решений</span>
              </h1>

              <p className="max-w-3xl text-lg leading-snug text-text-secondary pb-3">
                Комплексные решения в области системной интеграции, поставки серверного оборудования
                и IT-инфраструктуры для бизнеса любого масштаба.
              </p>

              <div className="flex flex-wrap gap-8">
                <Button size="md" variant={'default'} className={'py-22px px-6'}>
                  Связаться с нами
                </Button>

                <Button variant="glass" size="md" className={' py-22px px-6'}>
                  Каталог решений
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-5 pt-25 pb-11">
              <BrandsMarquee />
            </div>

            {/* RIGHT */}

            {/*<HeroImage/>*/}
          </div>
        </Container>
      </Section>
    </>
  );
}

// function Stat({value, text}: { value: string; text: string }) {
//   return (
//     <div>
//       <div className="text-2xl font-semibold text-text-primary">{value}</div>
//
//       <div className="text-sm text-text-secondary">{text}</div>
//     </div>
//   );
// }
