'use client';
import { Container, Heading, Section } from '@/shared';

import { ProductCard } from './product-card';

export function Product() {
  return (
    <Section className={'py-12 sm:py-16 lg:py-18 bg-indigo-50/50'}>
      <Container>
        <Heading description="Поставляем оборудование ведущих мировых производителей.">
          Оборудование и решения
        </Heading>

        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <ProductCard
            item={'server'}
            title="Серверы"
            description="Стоечные, блейд-, Tower- и GPU-серверы для виртуализации, баз данных, корпоративных приложений,
             искусственного интеллекта и высоконагруженных вычислений."
          />

          <ProductCard
            item={'network'}
            title="Сетевое оборудование"
            description="Коммутаторы, маршрутизаторы, точки доступа Wi-Fi и межсетевые экраны для построения
            отказоустойчивой, безопасной и масштабируемой сетевой инфраструктуры."
          />

          <ProductCard
            item={'storage'}
            title="Системы хранения"
            description="All-Flash и гибридные СХД, NAS, SAN и ленточные библиотеки для хранения, резервного копирования и защиты корпоративных данных."
          />

          <ProductCard
            item={'added'}
            title="Комплектующие"
            description="Серверные процессоры, оперативная память, SSD и HDD накопители, RAID-контроллеры, сетевые
             адаптеры и другие компоненты для модернизации и расширения инфраструктуры."
          />

          <ProductCard
            item={'programs'}
            title="Программное обеспечение"
            description="Платформы виртуализации, операционные системы, офисные продукты и корпоративное ПО для
            автоматизации процессов, совместной работы и управления IT-инфраструктурой."
          />

          <ProductCard
            item={'satefy'}
            title="Информационная безопасность"
            description="Комплексные решения для защиты сетевой инфраструктуры, данных и корпоративных систем: NGFW,
             SIEM, антивирусная защита, мониторинг событий безопасности и контроль доступа."
          />
        </div>
      </Container>
    </Section>
  );
}
