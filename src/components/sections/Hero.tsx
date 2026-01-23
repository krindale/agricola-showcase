import { useTranslation } from 'react-i18next';
import { Badge, Button, Counter } from '../ui';

export default function Hero() {
  const { t, i18n } = useTranslation();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get language-specific badge text
  const isKorean = i18n.language === 'ko';
  const playersSuffix = isKorean ? '인' : ' Players';
  const timeSuffix = isKorean ? '분/인' : ' min/player';
  const ageSuffix = isKorean ? '세+' : '+';

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background pt-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 tracking-wider">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-text/80 mb-8 font-medium">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="default">
              <Counter value={1} />
              -
              <Counter value={5} />
              {playersSuffix}
            </Badge>
            <Badge variant="accent">
              <Counter value={30} />
              {timeSuffix}
            </Badge>
            <Badge variant="secondary">
              <Counter value={12} />
              {ageSuffix}
            </Badge>
          </div>

          <Button onClick={scrollToAbout} size="lg">
            {t('hero.cta')} <span className="ml-2">↓</span>
          </Button>
        </div>

        {/* Decorative farm elements */}
        <div className="mt-16 flex justify-center gap-8 text-4xl md:text-6xl opacity-50">
          <span>🌾</span>
          <span>🏠</span>
          <span>🐑</span>
          <span>🐗</span>
          <span>🐄</span>
          <span>🥕</span>
        </div>
      </div>
    </section>
  );
}
