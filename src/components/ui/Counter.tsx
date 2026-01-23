import { useCounterAnimation } from '../../hooks/useCounterAnimation';

interface CounterProps {
  /**
   * Target number to animate to
   */
  value: number;
  /**
   * Animation duration in milliseconds
   * If not provided, duration is automatically calculated based on number magnitude:
   * - Single digit (1-9): 1200ms
   * - Double digit (10-99): 1600ms
   * - Triple digit (100+): 2000ms
   */
  duration?: number;
  /**
   * Optional function to format the displayed number
   * @example (n) => n.toLocaleString() // Adds thousand separators
   */
  formatFn?: (value: number) => string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether animation should start immediately or wait for intersection
   * @default false
   */
  immediate?: boolean;
}

/**
 * Calculate optimal animation duration based on number magnitude
 */
function getOptimalDuration(value: number): number {
  if (value < 10) return 1200; // Single digit
  if (value < 100) return 1600; // Double digit
  return 2000; // Triple digit or more
}

export default function Counter({
  value,
  duration,
  formatFn,
  className = '',
  immediate = false,
}: CounterProps) {
  // Use provided duration or calculate optimal duration
  const animationDuration = duration ?? getOptimalDuration(value);

  const { count, ref } = useCounterAnimation({
    target: value,
    duration: animationDuration,
    immediate,
  });

  const displayValue = formatFn ? formatFn(count) : count.toString();

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
