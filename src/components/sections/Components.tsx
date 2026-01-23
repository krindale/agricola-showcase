import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card, ImageWithFallback } from '../ui';

export default function Components() {
  const { t } = useTranslation();

  return (
    <Section id="components" alternate>
      <SectionTitle>{t('components.title')}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Game Board */}
        <Card hover>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <ImageWithFallback
                src="/agricola-showcase/assets/game-boards/Agricola_game_board_1.jpg"
                alt="Agricola Game Board"
                fallback="🎲"
                className="w-32 h-32 object-cover rounded-lg"
                loading="eager"
              />
            </div>
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
            <div className="mb-4 flex justify-center gap-2">
              <ImageWithFallback
                src="/agricola-showcase/assets/cards/occupations/JKxVsRF4DrGCijScMHd-L7Y21E4xTOwuqmPD9wm_BuGfOMx-EZKk6ufgHqaXB0B_eTSADUdkUFWYrb3VNIXYxTuqi-5hAf8YUd0AQRr38dtj-Lvgy3Km9slU77PpPdhr61QbB_gYrIaUeRmc1gfzlQ.webp"
                alt="Agricola Occupation Card"
                fallback="🃏"
                className="w-20 h-28 object-cover rounded shadow-md"
                loading="eager"
              />
              <ImageWithFallback
                src="/agricola-showcase/assets/cards/occupations/0PMJXxF3lwJ_2iZlel9WXxGEWVx_CXhv0D8pE7jF-8K4X1aiTNnlPOxALFzHKRmn5KNfqXGNpO1SeCD7D4St9-C5rnGE9r-A-VdZhqU0mMHHFCnlydy4Q5h5op7bZAjXMctfVg3aqVOqmFZRmcYAzA.webp"
                alt="Agricola Improvement Card"
                fallback="🃏"
                className="w-20 h-28 object-cover rounded shadow-md"
                loading="eager"
              />
            </div>
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
            <div className="mb-4 flex justify-center">
              <ImageWithFallback
                src="/agricola-showcase/assets/components/pic611134.webp"
                alt="Agricola Game Components and Tokens"
                fallback="🪵"
                className="w-32 h-32 object-cover rounded-lg"
                loading="eager"
              />
            </div>
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
      <div className="mt-12">
        <h3 className="text-center font-serif text-lg font-semibold text-text mb-6">
          {t('components.resourceTokens', 'Resource Tokens')}
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-amber-900/10 rounded-lg border-2 border-amber-900/20">
              <span className="text-3xl">🪵</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Wood</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-orange-900/10 rounded-lg border-2 border-orange-900/20">
              <span className="text-3xl">🧱</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Clay</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-green-900/10 rounded-lg border-2 border-green-900/20">
              <span className="text-3xl">🌿</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Reed</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-gray-900/10 rounded-lg border-2 border-gray-900/20">
              <span className="text-3xl">🪨</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Stone</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-yellow-900/10 rounded-lg border-2 border-yellow-900/20">
              <span className="text-3xl">🌾</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Grain</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-orange-700/10 rounded-lg border-2 border-orange-700/20">
              <span className="text-3xl">🥕</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Vegetables</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-slate-100/50 rounded-lg border-2 border-slate-300/50">
              <span className="text-3xl">🐑</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Sheep</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-amber-700/10 rounded-lg border-2 border-amber-700/20">
              <span className="text-3xl">🐗</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Boar</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-amber-800/10 rounded-lg border-2 border-amber-800/20">
              <span className="text-3xl">🐄</span>
            </div>
            <p className="text-xs text-text/50 mt-1">Cattle</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
