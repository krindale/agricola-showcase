import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';
import Counter from '../ui/Counter';

const featureIcons = {
  strategy: '🧠',
  paths: '🛤️',
  occupations: '🃏',
  improvements: '🔧',
  solo: '👤',
  family: '👨‍👩‍👧‍👦',
};

const featureNumbers: Record<string, number> = {
  occupations: 169,
  improvements: 139,
};

export default function Features() {
  const { t } = useTranslation();

  const features = Object.keys(featureIcons) as Array<keyof typeof featureIcons>;

  const renderTitle = (key: keyof typeof featureIcons) => {
    const titleText = t(`features.items.${key}.title`);
    const number = featureNumbers[key];

    if (!number) {
      return titleText;
    }

    // For Korean: "169개 직업 카드" -> split at number
    // For English: "169 Occupation Cards" -> split at number
    const numberStr = String(number);
    const parts = titleText.split(numberStr);

    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <Counter value={number} duration={2000} />
          {parts[1]}
        </>
      );
    }

    return titleText;
  };

  return (
    <Section id="features">
      <SectionTitle>{t('features.title')}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((key) => (
          <Card key={key} hover>
            <div className="text-4xl mb-4">{featureIcons[key]}</div>
            <h3 className="font-serif text-xl font-bold text-text mb-2">
              {renderTitle(key)}
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
