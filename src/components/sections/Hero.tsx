import { useTranslation } from 'react-i18next';
import { Badge, Button, ImageWithFallback } from '../ui';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background pt-16 relative overflow-hidden">
      {/* Game board background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <ImageWithFallback
          src="/agricola-showcase/assets/game-boards/Agricola_game_board_1.jpg"
          alt="Agricola game board background"
          className="w-full h-full object-cover"
          loading="eager"
          fallback=""
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center relative z-10">
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

        {/* Decorative game component images */}
        <div className="mt-16 flex justify-center gap-6 md:gap-8 flex-wrap">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100">
            <ImageWithFallback
              src="/agricola-showcase/assets/components/house.webp"
              alt="Player board"
              className="w-full h-full object-cover"
              fallback="🏠"
            />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100">
            <ImageWithFallback
              src="/agricola-showcase/assets/components/pic249642.webp"
              alt="Game components"
              className="w-full h-full object-cover"
              fallback="🎲"
            />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 opacity-80 hover:opacity-100">
            <ImageWithFallback
              src="/agricola-showcase/assets/components/pic611134.webp"
              alt="Game resources"
              className="w-full h-full object-cover"
              fallback="🌾"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
