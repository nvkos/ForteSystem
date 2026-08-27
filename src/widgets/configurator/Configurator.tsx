'use client';

import { useConfigurator } from './hooks/useConfigurator';

import { ConfiguratorStepper } from './components/ConfiguratorStepper';
// import { ConfiguratorHero } from './components/ConfiguratorHero';

import { PlatformStep } from './components/PlatformStep';
import { BrandStep } from './components/BrandStep';
import { RequirementsStep } from './components/RequirementsStep';
import { ConfiguratorSidebar } from '@/widgets/configurator/components/ConfiguratorSidebar';
import { Container } from '@/shared';

// import { ConfiguratorModal } from './components/ConfiguratorModal';
// import { ConfiguratorSuccess } from './components/ConfiguratorSuccess';

export function Configurator() {
  const configurator = useConfigurator();

  const { step, submitted } = configurator;

  return (
    <div>
      <Container className={'pt-6 pb-25 md:pt-9'}>
        <>
          {submitted ? (
            // <ConfiguratorSuccess
            //   onNewRequest={configurator.reset}
            // />
            <p>submitted</p>
          ) : (
            <div className="gap-5">
              <div className="min-w-0 flex-1">
                {step === 1 && (
                  <PlatformStep
                    onSelect={configurator.selectPlatform}
                    onBack={configurator.goBack}
                    step={step}
                  />
                )}

                {step === 2 && (
                  <BrandStep
                    step={step}
                    platform={configurator.platform}
                    selectedBrand={configurator.brand}
                    onSelect={configurator.selectBrand}
                    onBack={configurator.goBack}
                  />
                )}

                {step === 3 && (
                  <RequirementsStep
                    step={step}
                    platform={configurator.platform}
                    brand={configurator.brand}
                    schema={configurator.schema}
                    values={configurator.values}
                    onChange={configurator.setValue}
                    onBack={configurator.goBack}
                    onReset={configurator.reset}
                  />
                )}
              </div>
            </div>
          )}
        </>
      </Container>

      {/*{!submitted && (*/}
      {/*  <ConfiguratorModal*/}
      {/*    open={false}*/}
      {/*    platform={configurator.platform}*/}
      {/*    brand={configurator.brand}*/}
      {/*    values={configurator.values}*/}
      {/*    schema={configurator.schema}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}
