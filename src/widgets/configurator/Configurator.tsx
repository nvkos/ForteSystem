'use client';

import { useConfigurator } from './hooks/useConfigurator';

import { PlatformStep } from './components/PlatformStep';
import { BrandStep } from './components/BrandStep';
import { RequirementsStep } from './components/RequirementsStep';
import { Container } from '@/shared';
import { ConfiguratorSuccess } from '@/widgets/configurator/components/ConfiguratorSuccess';
import { ConfiguratorModal } from '@/widgets/configurator/components/ConfiguratorModal';
import { useSearchParams } from 'next/navigation';

export function Configurator() {
  const configurator = useConfigurator();
  const searchParams = useSearchParams();
  const urlBrand = searchParams.get('brand');
  const { step, submitted } = configurator;

  return (
    <div className={'relative'}>
      <div
        className={`hero-background_mobile ${urlBrand && !submitted ? 'h-[calc(100%_+_90px)]' : 'h-[calc(100svh_+_0px)]'} -top-[90px]`}
      />

      <Container className={'pt-6 pb-25 md:pt-12 md:pb-17 relative'}>
        <>
          {submitted ? (
            <ConfiguratorSuccess setSubmitted={configurator.setSubmitted} />
          ) : (
            <div className="gap-5">
              <div className="min-w-0 flex-1">
                {step === 1 && (
                  <PlatformStep
                    onSelect={configurator.selectPlatform}
                    onBack={configurator.goBack}
                  />
                )}

                {step === 2 && (
                  <BrandStep
                    platform={configurator.platform}
                    selectedBrand={configurator.brand}
                    onSelect={configurator.selectBrand}
                    onBack={configurator.goBack}
                  />
                )}

                {step === 3 && (
                  <RequirementsStep
                    platform={configurator.platform}
                    brand={configurator.brand}
                    schema={configurator.schema}
                    values={configurator.values}
                    onChange={configurator.setValue}
                    onBack={configurator.goBack}
                    onReset={configurator.reset}
                    onSubmit={configurator.onSubmit}
                  />
                )}
              </div>
            </div>
          )}
        </>
      </Container>

      {!submitted && (
        <ConfiguratorModal
          platform={configurator.platform}
          open={configurator.isOpen}
          values={configurator.values}
          setSubmitted={configurator.setSubmitted}
          onClose={configurator.setClose}
        />
      )}
    </div>
  );
}
