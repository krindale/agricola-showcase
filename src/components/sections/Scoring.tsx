import { useTranslation } from 'react-i18next';
import { Section, SectionTitle, Card } from '../ui';

export default function Scoring() {
  const { t } = useTranslation();

  const scoreTable = [
    { key: 'fields', icon: '🟫', scores: ['0-1', '2', '3', '4', '5+'] },
    { key: 'pastures', icon: '🌿', scores: ['0', '1', '2', '3', '4+'] },
    { key: 'grain', icon: '🌾', scores: ['0', '1-3', '4-5', '6-7', '8+'] },
    { key: 'vegetables', icon: '🥕', scores: ['0', '1', '2', '3', '4+'] },
    { key: 'sheep', icon: '🐑', scores: ['0', '1-3', '4-5', '6-7', '8+'] },
    { key: 'boar', icon: '🐗', scores: ['0', '1-2', '3-4', '5-6', '7+'] },
    { key: 'cattle', icon: '🐄', scores: ['0', '1', '2-3', '4-5', '6+'] },
  ];

  const pointHeaders = ['-1', '1', '2', '3', '4'];

  return (
    <Section id="scoring">
      <SectionTitle subtitle={t('scoring.subtitle')}>
        {t('scoring.title')}
      </SectionTitle>

      {/* Score Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-primary/10">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-3 px-4 text-left">{t('scoring.title')}</th>
              {pointHeaders.map((p) => (
                <th key={p} className="py-3 px-4 text-center">
                  {p}{t('common.point')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scoreTable.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? 'bg-background/50' : 'bg-white/20'}
              >
                <td className="py-3 px-4 font-medium">
                  <span className="mr-2">{row.icon}</span>
                  {t(`scoring.categories.${row.key}`)}
                </td>
                {row.scores.map((score, scoreIdx) => (
                  <td
                    key={scoreIdx}
                    className={`py-3 px-4 text-center ${
                      scoreIdx === 0 ? 'text-red-500 font-medium' : ''
                    }`}
                  >
                    {score}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bonus Points */}
      <Card className="max-w-2xl mx-auto">
        <h3 className="font-serif text-xl font-bold text-center mb-4">
          {t('scoring.bonus.title')}
        </h3>
        <ul className="space-y-2 text-text/80">
          <li>• {t('scoring.bonus.clayRoom')}</li>
          <li className="text-secondary font-medium">• {t('scoring.bonus.stoneRoom')}</li>
          <li className="text-primary font-medium">• {t('scoring.bonus.familyMember')}</li>
          <li>• {t('scoring.bonus.fencedStable')}</li>
          <li className="text-red-500">• {t('scoring.bonus.emptySpace')}</li>
        </ul>
      </Card>

      {/* Tip */}
      <div className="max-w-2xl mx-auto mt-8 bg-white/80 backdrop-blur-md rounded-lg p-6 text-center shadow-lg border border-primary/10">
        <p className="text-lg text-amber-800">
          💡 {t('scoring.tip')}
        </p>
      </div>
    </Section>
  );
}
