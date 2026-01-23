import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'features', href: '#features' },
    { key: 'howToPlay', href: '#how-to-play' },
    { key: 'actions', href: '#core-actions' },
    { key: 'scoring', href: '#scoring' },
    { key: 'comingSoon', href: '#coming-soon' },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-serif text-2xl font-bold text-primary">
            Agricola
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-text/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1 rounded-full border border-primary/30 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {i18n.language === 'ko' ? 'EN' : 'KO'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/10 bg-white/80 backdrop-blur-md shadow-lg rounded-b-lg">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-text/70 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <button
                onClick={toggleLanguage}
                className="mt-2 px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors w-fit"
              >
                {i18n.language === 'ko' ? 'English' : '한국어'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
