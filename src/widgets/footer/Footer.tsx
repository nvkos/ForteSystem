import { Container, Section } from '@/shared';
import ShortLogo from '@/assets/logo/short-logo';

export function Footer() {
  return (
    <Section
      className={'py-4 lg:py-4 bg-text-primary relative overflow-hidden text-white/70 text-xs'}
    >
      {/*<div className={'absolute w-70 h-70 bg-white/5 rounded-full -bottom-20 -left-10'}/>*/}
      {/*<div className={'absolute w-100 h-100 bg-white/5 rounded-full -top-20 -right-10'}/>*/}

      <Container>
        <div className="flex justify-between items-center">
          <div className={'flex items-center'}>
            <div className="w-auto opacity-70 mr-6">
              <ShortLogo size={20} />
            </div>
            <div>
              <p className={'mb-1'}>Общество с ограниченой ответственностью Форте Систем </p>
              <p className={'mb-1'}>220024, г. Минск, ул. Серова, д. 2А, кб. 31Б. </p>
              <p>© 2026 ForteSystem</p>
            </div>
          </div>

          <div className={'flex flex-col gap-2 text-white items-end'}>
            <p className={'py-22px px-6'}>info@fortesystem.by</p>

            <p className={'py-22px px-6 bg-white/0'}>+375 44 719-18-24</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
