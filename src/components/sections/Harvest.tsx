import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';

export default function Harvest() {
  const { t } = useTranslation();

  const phases = [
    { key: 'phase1', icon: '🌾', color: 'bg-amber-100 border-amber-300' },
    { key: 'phase2', icon: '🍽️', color: 'bg-orange-100 border-orange-300' },
    { key: 'phase3', icon: '💕', color: 'bg-pink-100 border-pink-300' },
  ];

  return (
    <Section id="harvest" alternate>
      <SectionTitle>{t('harvest.title')}</SectionTitle>

      <div className="text-center text-xl text-text/80 mb-8">
        {t('harvest.intro')}
      </div>

      {/* Harvest Phases */}
      <div className="max-w-3xl mx-auto space-y-4">
        {phases.map((phase, idx) => (
          <div key={phase.key} className="relative">
            <Card className={`${phase.color} border-2`}>
              <div className="flex items-start gap-4">
                <span className="text-4xl">{phase.icon}</span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-text mb-1">
                    {t(`harvest.${phase.key}.title`)}
                  </h3>
                  <p className="text-text/70">
                    {t(`harvest.${phase.key}.desc`)}
                  </p>
                  {phase.key === 'phase2' && (
                    <p className="text-sm text-text/50 mt-1">
                      {t('harvest.phase2.note')}
                    </p>
                  )}
                </div>
              </div>
            </Card>
            {idx < phases.length - 1 && (
              <div className="text-center text-2xl text-primary my-2">↓</div>
            )}
            {idx === 1 && (
              <div className="ml-16 mt-2 text-sm text-red-600 font-medium">
                {t('harvest.shortage')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Warning Box */}
      <div className="max-w-md mx-auto mt-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-700 font-bold text-lg">
            ⚠️ {t('harvest.warning.title')}
          </p>
          <p className="text-red-600 mt-1">
            {t('harvest.warning.desc')}
          </p>
        </div>
      </div>
    </Section>
  );
}
