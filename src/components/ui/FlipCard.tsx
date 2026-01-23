import { useState } from 'react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  flipOnHover?: boolean;
  flipOnClick?: boolean;
  flipped?: boolean;
  onFlip?: (isFlipped: boolean) => void;
}

export default function FlipCard({
  front,
  back,
  className = '',
  flipOnHover = false,
  flipOnClick = true,
  flipped = false,
  onFlip,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(flipped);

  const handleClick = () => {
    if (flipOnClick) {
      const newFlippedState = !isFlipped;
      setIsFlipped(newFlippedState);
      onFlip?.(newFlippedState);
    }
  };

  const handleMouseEnter = () => {
    if (flipOnHover) {
      setIsFlipped(true);
      onFlip?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (flipOnHover) {
      setIsFlipped(false);
      onFlip?.(false);
    }
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ perspective: '1000px' }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
