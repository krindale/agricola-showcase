import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';

type ActionKey = 'house' | 'family' | 'farming' | 'animals';

export default function CoreActions() {
  const { t } = useTranslation();
  const [activeAction, setActiveAction] = useState<ActionKey>('house');

  const actions: { key: ActionKey; icon: string }[] = [
    { key: 'house', icon: '🏠' },
    { key: 'family', icon: '👨‍👩‍👧‍👦' },
    { key: 'farming', icon: '🌾' },
    { key: 'animals', icon: '🐄' },
  ];

  const renderActionContent = (key: ActionKey) => {
    switch (key) {
      case 'house':
        return (
          <div className="space-y-4">
            <div className="flex justify-center gap-4 text-4xl">
              <div className="text-center">
                <span>🏠</span>
                <p className="text-xs mt-1 text-text/60">{t('coreActions.house.wood')}</p>
              </div>
              <span className="self-center text-2xl text-primary">→</span>
              <div className="text-center">
                <span>🏘️</span>
                <p className="text-xs mt-1 text-text/60">{t('coreActions.house.clay')}</p>
              </div>
              <span className="self-center text-2xl text-primary">→</span>
              <div className="text-center">
                <span>🏛️</span>
                <p className="text-xs mt-1 text-text/60">{t('coreActions.house.stone')}</p>
              </div>
            </div>
            <ul className="space-y-2 text-text/80">
              <li>• {t('coreActions.house.tip1')}</li>
              <li>• {t('coreActions.house.tip2')}</li>
              <li className="text-primary font-medium">• {t('coreActions.house.tip3')}</li>
            </ul>
          </div>
        );
      case 'family':
        return (
          <div className="space-y-4">
            <div className="flex justify-center gap-2 text-3xl">
              <span>👨‍👩</span>
              <span className="text-primary">→</span>
              <span>👨‍👩‍👦</span>
              <span className="text-primary">→</span>
              <span>👨‍👩‍👧‍👦</span>
              <span className="text-primary">→</span>
              <span>👨‍👩‍👧‍👦👶</span>
            </div>
            <ul className="space-y-2 text-text/80">
              <li>• {t('coreActions.family.tip1')}</li>
              <li className="text-red-600">• {t('coreActions.family.tip2')}</li>
              <li>• {t('coreActions.family.tip3')}</li>
            </ul>
          </div>
        );
      case 'farming':
        return (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <div className="text-3xl">🟫 {t('coreActions.farming.plow')}</div>
              <div className="text-2xl text-primary">↓</div>
              <div className="flex justify-center gap-8 text-xl">
                <span>🌾 {t('coreActions.farming.grain')}</span>
                <span>🥕 {t('coreActions.farming.vegetable')}</span>
              </div>
              <div className="text-2xl text-primary">↓</div>
              <div className="text-lg">🍞 {t('coreActions.farming.bake')}</div>
            </div>
          </div>
        );
      case 'animals':
        return (
          <div className="space-y-4">
            <p className="text-center text-text/80 mb-4">{t('coreActions.animals.intro')}</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-3xl">🐑</span>
                <p className="text-sm font-medium">{t('coreActions.animals.sheep')}</p>
              </div>
              <div>
                <span className="text-3xl">🐗</span>
                <p className="text-sm font-medium">{t('coreActions.animals.boar')}</p>
              </div>
              <div>
                <span className="text-3xl">🐄</span>
                <p className="text-sm font-medium">{t('coreActions.animals.cattle')}</p>
              </div>
            </div>
            <ul className="space-y-2 text-text/80 text-sm">
              <li>• {t('coreActions.animals.capacity')}</li>
              <li>• {t('coreActions.animals.stable')}</li>
              <li className="text-secondary font-medium">• {t('coreActions.animals.breeding')}</li>
              <li>• {t('coreActions.animals.pet')} 🏠🐑</li>
            </ul>
          </div>
        );
    }
  };

  return (
    <Section id="core-actions">
      <SectionTitle>{t('coreActions.title')}</SectionTitle>

      {/* Action Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        {actions.map(({ key, icon }) => (
          <button
            key={key}
            onClick={() => setActiveAction(key)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all ${
              activeAction === key
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white text-text hover:bg-primary/10'
            }`}
          >
            <span className="mr-2">{icon}</span>
            {t(`coreActions.${key}.title`)}
          </button>
        ))}
      </div>

      {/* Action Content */}
      <Card className="max-w-2xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-center mb-6">
          {t(`coreActions.${activeAction}.title`)}
        </h3>
        {renderActionContent(activeAction)}
      </Card>
    </Section>
  );
}
