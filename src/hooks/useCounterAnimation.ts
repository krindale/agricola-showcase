import { useEffect, useRef, useState } from 'react';

interface UseCounterAnimationOptions {
  /**
   * Target number to count up to
   */
  target: number;
  /**
   * Animation duration in milliseconds
   * @default 2000
   */
  duration?: number;
  /**
   * Whether animation should start immediately or wait for intersection
   * @default false
   */
  immediate?: boolean;
  /**
   * Intersection observer threshold (0-1)
   * @default 0.1
   */
  threshold?: number;
}

/**
 * Custom hook for animating number counters with intersection observer
 * Counts from 0 to target when element enters viewport
 * Triggers only once per session
 */
export function useCounterAnimation({
  target,
  duration = 2000,
  immediate = false,
  threshold = 0.1,
}: UseCounterAnimationOptions) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (hasAnimated || target === 0) return;

    const startAnimation = () => {
      if (hasAnimated) return;

      setHasAnimated(true);
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutCubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(startValue + (target - startValue) * easeOut);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    };

    if (immediate) {
      startAnimation();
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, hasAnimated, immediate, threshold]);

  return { count, ref: elementRef };
}
