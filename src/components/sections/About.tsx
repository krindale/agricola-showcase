import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" alternate>
      <SectionTitle>{t('about.title')}</SectionTitle>

      <div className="max-w-3xl mx-auto">
        <Card glass className="p-8 md:p-12">
          <div className="space-y-4 text-lg text-text/80 leading-relaxed">
            <p className="text-xl font-medium text-primary">
              {t('about.story.line1')}
            </p>
            <p>{t('about.story.line2')}</p>
            <p className="pt-4">{t('about.story.line3')}</p>
            <p>{t('about.story.line4')}</p>
            <p>{t('about.story.line5')}</p>
            <p className="pt-4 text-primary/90 font-medium">
              {t('about.story.line6')}
            </p>
            <p className="text-primary/90 font-medium">
              {t('about.story.line7')}
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
