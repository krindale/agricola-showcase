import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';

const featureIcons = {
  strategy: '🧠',
  paths: '🛤️',
  occupations: '🃏',
  improvements: '🔧',
  solo: '👤',
  family: '👨‍👩‍👧‍👦',
};

export default function Features() {
  const { t } = useTranslation();

  const features = Object.keys(featureIcons) as Array<keyof typeof featureIcons>;

  return (
    <Section id="features">
      <SectionTitle>{t('features.title')}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((key) => (
          <Card key={key} hover>
            <div className="text-4xl mb-4">{featureIcons[key]}</div>
            <h3 className="font-serif text-xl font-bold text-text mb-2">
              {t(`features.items.${key}.title`)}
            </h3>
            <p className="text-text/70">
              {t(`features.items.${key}.desc`)}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
