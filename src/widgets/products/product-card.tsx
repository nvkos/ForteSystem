import { ReactNode } from 'react';

import { GlassCard } from '@/shared';
import { LucideServer, Network, Database, Cpu, CodeXml, ShieldCheck } from 'lucide-react';

interface PartnerCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ProductCard({ title, description, item }: PartnerCardProps) {
  // const [opened, setOpened] = useState(null);

  const imgs = {
    server: <LucideServer />,
    network: <Network />,
    added: <Cpu />,
    programs: <CodeXml />,
    satefy: <ShieldCheck />,
    storage: <Database />,
  };

  return (
    <GlassCard className="h-full flex flex-col gap-1 relative">
      {/*<img src={imgs[item].src} alt={'server image'} className='max-h-45 absolute -top-10 -right-10'/>*/}
      <div className={'flex  p-6'}>
        <div>
          <div className={'flex justify-between items-baseline mb-3'}>
            <h3 className=" font-heading leading-snug text-base font-medium">{title}</h3>
            <div
              className="flex items-center justify-center rounded-md text-primary max-w-auto p-3 border absolute -top-3 right-5 bg-white"
              // onClick={() => setOpened(item)}
            >
              {imgs[item]}
              {/*<Network/>*/}
            </div>
          </div>
          <p className="text-base leading-snug text-text-secondary text-justify">{description}</p>
        </div>
        {/*<ArrowRight className={'self-end w-40'}/>*/}
      </div>
    </GlassCard>
  );
}
