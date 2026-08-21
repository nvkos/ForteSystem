import { Container, Section } from '@/shared';
import ShortLogo from '@/assets/logo/short-logo';

export function Footer() {
  return (
    <Section
      className={
        'py-0 sm:py-0 md:py-0 lg:py-0 bg-[#2b2e35] relative overflow-hidden text-white/70 text-xs'
      }
    >
      {/*<div className={'absolute w-70 h-70 bg-white/5 rounded-full -bottom-20 -left-20 blur-3xl'}/>*/}
      {/*<div className={'absolute w-100 h-100 bg-white/5 rounded-full -top-40 -right-20 blur-3xl'}/>*/}

      <Container>
        <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-center gap-2">
          <div className={'flex items-center'}>
            <div className="hidden sm:block w-auto opacity-70 mr-6">
              <ShortLogo />
            </div>
            <div className={'flex flex-col gap-2'}>
              {/*<p className={'mb-1'}>Общество с ограниченой ответственностью Форте Систем </p>*/}
              <p>220024, г. Минск, ул. Серова, д. 2А, кб. 31Б.</p>
              <p>© 2026 ForteSystem</p>
            </div>
          </div>

          <div className={'flex flex-col gap-2  sm:items-end'}>
            <p className={'p-0 sm:py-22px sm:px-6'}>sales@fortesystem.by</p>

            <p className={'p-0 sm:py-22px sm:px-6'}>+375 44 719-18-24</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
