import { useTranslation } from 'react-i18next';
import { Badge, Button } from '../ui';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

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
            <Badge variant="default">{t('hero.players')}</Badge>
            <Badge variant="accent">{t('hero.time')}</Badge>
            <Badge variant="secondary">{t('hero.age')}</Badge>
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
