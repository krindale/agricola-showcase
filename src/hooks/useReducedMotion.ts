import { useState, useEffect } from 'react';

/**
 * Custom hook that detects if the user has requested reduced motion
 * via their system preferences (prefers-reduced-motion media query).
 *
 * @returns {boolean} - True if user prefers reduced motion, false otherwise
 */
export function useReducedMotion(): boolean {
  // Use lazy initialization to get initial value without effect
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery.matches;
  });

  useEffect(() => {
    // Create media query matcher for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Handler for media query changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener for changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

export default useReducedMotion;
