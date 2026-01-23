import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Fuse from 'fuse.js';
import { Section, SectionTitle, Card, FlipCard } from '../ui';
import cardsData from '../../data/cards.json';

type CardType = 'occupation' | 'minor-improvement' | 'major-improvement';

interface CardData {
  id: string;
  name: string;
  type: CardType;
  description: string;
  imagePath: string;
}

type FilterType = 'all' | CardType;

export default function CardDatabase() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Initialize Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(cardsData as CardData[], {
        keys: ['name', 'description'],
        threshold: 0.3, // 0.0=exact, 0.6=balanced
      }),
    []
  );

  // Filter and search cards
  const filteredCards = useMemo(() => {
    let cards = cardsData as CardData[];

    // Apply type filter
    if (activeFilter !== 'all') {
      cards = cards.filter((card) => card.type === activeFilter);
    }

    // Apply search query
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      const searchedCards = searchResults.map((result) => result.item);

      // Apply filter to search results
      if (activeFilter !== 'all') {
        return searchedCards.filter((card) => card.type === activeFilter);
      }
      return searchedCards;
    }

    return cards;
  }, [searchQuery, activeFilter, fuse]);

  const filterButtons: { id: FilterType; label: string }[] = [
    { id: 'all', label: t('cardDatabase.filterAll') },
    { id: 'occupation', label: t('cardDatabase.filterOccupations') },
    { id: 'minor-improvement', label: t('cardDatabase.filterMinor') },
    { id: 'major-improvement', label: t('cardDatabase.filterMajor') },
  ];

  return (
    <Section id="cards" alternate>
      <SectionTitle>{t('cardDatabase.title')}</SectionTitle>

      {/* Search Input */}
      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('cardDatabase.searchPlaceholder')}
          className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-white/50 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-text"
          aria-label={t('cardDatabase.searchPlaceholder')}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filterButtons.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeFilter === filter.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white/50 backdrop-blur-sm text-text hover:bg-primary/10 border border-primary/20'
            }`}
            aria-pressed={activeFilter === filter.id}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-center text-text/60 mb-6">
        {t('cardDatabase.resultCount', { count: filteredCards.length })}
      </p>

      {/* Cards Grid */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredCards.map((card) => (
            <div key={card.id} className="h-96">
              <FlipCard
                front={
                  <Card className="h-full cursor-pointer">
                    <div className="h-full flex flex-col">
                      <img
                        src={card.imagePath}
                        alt={card.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                        loading="lazy"
                      />
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-serif text-lg font-bold text-text mb-1">
                          {card.name}
                        </h3>
                        <p className="text-xs text-primary/70 uppercase tracking-wide">
                          {card.type.replace('-', ' ')}
                        </p>
                      </div>
                    </div>
                  </Card>
                }
                back={
                  <Card className="h-full cursor-pointer bg-primary/5">
                    <div className="h-full flex flex-col items-center justify-center p-6">
                      <h3 className="font-serif text-xl font-bold text-text mb-4 text-center">
                        {card.name}
                      </h3>
                      <p className="text-sm text-text/80 text-center leading-relaxed">
                        {card.description}
                      </p>
                      <p className="text-xs text-primary/70 uppercase tracking-wide mt-4">
                        {card.type.replace('-', ' ')}
                      </p>
                    </div>
                  </Card>
                }
                flipOnClick={true}
                flipOnHover={false}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-text/50 text-lg">{t('cardDatabase.noResults')}</p>
        </div>
      )}
    </Section>
  );
}
