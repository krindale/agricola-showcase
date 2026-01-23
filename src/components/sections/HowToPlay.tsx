import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';
import Counter from '../ui/Counter';

export default function HowToPlay() {
  const { t } = useTranslation();

  const stages = [
    { rounds: [1, 2, 3, 4], hasHarvest: true },
    { rounds: [5, 6, 7], hasHarvest: true },
    { rounds: [8, 9], hasHarvest: true },
    { rounds: [10, 11], hasHarvest: true },
    { rounds: [12, 13], hasHarvest: true },
    { rounds: [14], hasHarvest: true, isFinal: true },
  ];

  const phases = ['phase1', 'phase2', 'phase3', 'phase4'] as const;

  return (
    <Section id="how-to-play" alternate>
      <SectionTitle subtitle={t('howToPlay.subtitle')}>
        {t('howToPlay.title')}
      </SectionTitle>

      {/* Stage Timeline */}
      <div className="mb-12 overflow-x-auto">
        <div className="flex justify-center gap-2 md:gap-4 min-w-max px-4">
          {stages.map((stage, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xs text-text/50 mb-2">
                {t('howToPlay.stages')} <Counter value={idx + 1} />
              </div>
              <div className="flex gap-1">
                {stage.rounds.map((round) => (
                  <div
                    key={round}
                    className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded flex items-center justify-center text-sm font-medium text-primary"
                  >
                    <Counter value={round} />
                  </div>
                ))}
              </div>
              {stage.hasHarvest && (
                <div className="mt-2 text-lg">
                  🌾
                  <span className="text-xs block text-text/50">
                    {stage.isFinal ? t('howToPlay.finalHarvest') : t('howToPlay.harvest')}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Round Phases */}
      <div className="mt-12">
        <h3 className="text-xl font-serif font-bold text-center mb-8">
          {t('howToPlay.roundPhases.title')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {phases.map((phase, idx) => (
            <Card key={phase} className="text-center relative">
              {idx < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-2xl text-primary/30 z-10">
                  →
                </div>
              )}
              <div className="text-3xl mb-2 text-primary font-bold">
                <Counter value={idx + 1} />
              </div>
              <h4 className="font-medium text-text mb-1">
                {t(`howToPlay.roundPhases.${phase}.title`)}
              </h4>
              <p className="text-sm text-text/60">
                {t(`howToPlay.roundPhases.${phase}.desc`)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
