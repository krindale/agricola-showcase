import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Badge, Button } from '../ui';

export default function ComingSoon() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <Section id="coming-soon" className="bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-2xl mx-auto text-center">
        <Badge variant="accent" className="mb-4">
          {t('comingSoon.badge')}
        </Badge>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">
          🎮 {t('comingSoon.title')}
        </h2>

        <p className="text-xl text-text/70 mb-8">
          {t('comingSoon.desc')}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-text/80">
            <span className="text-green-500">✓</span>
            {t('comingSoon.feature1')}
          </div>
          <div className="flex items-center gap-2 text-text/80">
            <span className="text-green-500">✓</span>
            {t('comingSoon.feature2')}
          </div>
          <div className="flex items-center gap-2 text-text/80">
            <span className="text-green-500">✓</span>
            {t('comingSoon.feature3')}
          </div>
        </div>

        {submitted ? (
          <div className="bg-green-50/80 backdrop-blur-md border border-green-200/50 rounded-lg p-6 shadow-lg">
            <p className="text-green-700 font-medium">
              🎉 Thank you! We'll notify you when online play is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('comingSoon.emailPlaceholder')}
              className="flex-1 px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:border-primary bg-white/80 backdrop-blur-md shadow-lg"
              required
            />
            <Button type="submit" variant="primary">
              {t('comingSoon.notify')}
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
