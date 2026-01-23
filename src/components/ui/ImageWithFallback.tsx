import { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string | React.ReactNode;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export default function ImageWithFallback({
  src,
  alt,
  fallback = '🖼️',
  className = '',
  loading = 'lazy',
  onLoad,
  onError,
}: ImageWithFallbackProps) {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setImageState('loading');
  }, [src]);

  const handleLoad = () => {
    setImageState('loaded');
    onLoad?.();
  };

  const handleError = () => {
    setImageState('error');
    onError?.();
  };

  if (imageState === 'error') {
    return (
      <div className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
        {typeof fallback === 'string' ? (
          <span className="text-4xl">{fallback}</span>
        ) : (
          fallback
        )}
      </div>
    );
  }

  return (
    <>
      {imageState === 'loading' && (
        <div className={`animate-pulse bg-gray-200 ${className}`} />
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${imageState === 'loading' ? 'hidden' : ''}`}
      />
    </>
  );
}
