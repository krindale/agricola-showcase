import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';

export default function Components() {
  const { t } = useTranslation();

  return (
    <Section id="components" alternate>
      <SectionTitle>{t('components.title')}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Game Board */}
        <Card hover>
          <div className="text-center">
            <div className="text-5xl mb-4">🎲</div>
            <h3 className="font-serif text-xl font-bold text-text mb-2">
              {t('components.board')}
            </h3>
            <p className="text-text/70 text-sm">
              {t('components.boardDesc')}
            </p>
          </div>
        </Card>

        {/* Cards */}
        <Card hover>
          <div className="text-center">
            <div className="text-5xl mb-4">🃏</div>
            <h3 className="font-serif text-xl font-bold text-text mb-2">
              {t('components.cards')}
            </h3>
            <ul className="text-text/70 text-sm space-y-1 text-left">
              <li>🟡 {t('components.occupations')}</li>
              <li>🟠 {t('components.minorImprovements')}</li>
              <li>🔴 {t('components.majorImprovements')}</li>
              <li>🔵 {t('components.roundCards')}</li>
            </ul>
          </div>
        </Card>

        {/* Tokens */}
        <Card hover>
          <div className="text-center">
            <div className="text-5xl mb-4">🪵</div>
            <h3 className="font-serif text-xl font-bold text-text mb-2">
              {t('components.tokens')}
            </h3>
            <ul className="text-text/70 text-sm space-y-1 text-left">
              <li>{t('components.resources')}</li>
              <li>{t('components.animals')}</li>
              <li>{t('components.others')}</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Resource Icons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
        <div className="text-center">
          <span className="text-3xl">🪵</span>
          <p className="text-xs text-text/50 mt-1">Wood</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🧱</span>
          <p className="text-xs text-text/50 mt-1">Clay</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🌿</span>
          <p className="text-xs text-text/50 mt-1">Reed</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🪨</span>
          <p className="text-xs text-text/50 mt-1">Stone</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🌾</span>
          <p className="text-xs text-text/50 mt-1">Grain</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🥕</span>
          <p className="text-xs text-text/50 mt-1">Vegetables</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🐑</span>
          <p className="text-xs text-text/50 mt-1">Sheep</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🐗</span>
          <p className="text-xs text-text/50 mt-1">Boar</p>
        </div>
        <div className="text-center">
          <span className="text-3xl">🐄</span>
          <p className="text-xs text-text/50 mt-1">Cattle</p>
        </div>
      </div>
    </Section>
  );
}
