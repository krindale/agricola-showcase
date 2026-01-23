import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card, ImageWithFallback } from '../ui';

export default function PlayerBoardGallery() {
  const { t } = useTranslation();

  // Different stages of player board development
  const boardStages = [
    {
      id: 'start',
      titleKey: 'playerBoard.stages.start.title',
      descKey: 'playerBoard.stages.start.desc',
    },
    {
      id: 'early',
      titleKey: 'playerBoard.stages.early.title',
      descKey: 'playerBoard.stages.early.desc',
    },
    {
      id: 'mid',
      titleKey: 'playerBoard.stages.mid.title',
      descKey: 'playerBoard.stages.mid.desc',
    },
    {
      id: 'late',
      titleKey: 'playerBoard.stages.late.title',
      descKey: 'playerBoard.stages.late.desc',
    },
  ];

  return (
    <Section id="player-board" alternate>
      <SectionTitle>{t('playerBoard.title')}</SectionTitle>

      <p className="text-center text-text/70 mb-12 max-w-2xl mx-auto">
        {t('playerBoard.subtitle')}
      </p>

      {/* Main player board image */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card glass>
          <ImageWithFallback
            src="/agricola-showcase/assets/components/house.webp"
            alt={t('playerBoard.imageAlt')}
            className="w-full h-auto rounded-lg"
            fallback="🏠"
          />
        </Card>
      </div>

      {/* Gallery of board development stages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {boardStages.map((stage) => (
          <Card key={stage.id} hover>
            <div className="text-center">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-background">
                <ImageWithFallback
                  src="/agricola-showcase/assets/components/house.webp"
                  alt={t(stage.titleKey)}
                  className="w-full h-full object-cover"
                  fallback="🏠"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-text mb-2">
                {t(stage.titleKey)}
              </h3>
              <p className="text-text/70 text-sm">
                {t(stage.descKey)}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
