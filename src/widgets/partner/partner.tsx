import { Container, Heading, Section } from '@/shared';

import { PartnerCard } from './partner-card';
import Icons from '@/assets/icons';

export function Partner() {
  return (
    <Section className={'py-16 lg:py-18'}>
      <Container>
        <Heading description="Полный спектр услуг по построению и сопровождению корпоративной ИТ-инфраструктуры.">
          Надёжный партнёр
        </Heading>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          <PartnerCard
            icon={<Icons type={'deliver'} />}
            title="Быстрая доставка по всей Беларуси"
            description="Поставляем оборудование точно в срок. Бесплатная доставка по всей территории Республики Беларусь."
          />

          <PartnerCard
            icon={<Icons type={'goal'} />}
            title="Экспертный подбор решений"
            description="Подбираем серверное и сетевое оборудование под реальные задачи, нагрузки и бюджет компании."
          />

          <PartnerCard
            icon={<Icons type={'suit'} />}
            title="Отраслевая экспертиза"
            description="Успешно реализуем проекты для бизнеса, промышленности, финансового сектора и государственных организаций."
          />

          <PartnerCard
            icon={<Icons type={'certificate'} />}
            title="Сертифицированные специалисты"
            description="Команда опытных технических экспертов с подтверждённой квалификацией."
          />

          <PartnerCard
            icon={<Icons type={'warranty'} />}
            title="Гарантия с возможностью расширения"
            description="Предоставляем официальную гарантию и предлагаем расширенные программы поддержки оборудования."
          />

          <PartnerCard
            icon={<Icons type={'to-do'} />}
            title="Более 100 реализованных проектов"
            description="Практический опыт внедрения и поставки инфраструктурных решений различного масштаба."
          />
        </div>
        <div id={'products'} />
      </Container>
    </Section>
  );
}
