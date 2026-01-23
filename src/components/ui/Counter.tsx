import { useCounterAnimation } from '../../hooks/useCounterAnimation';

interface CounterProps {
  /**
   * Target number to animate to
   */
  value: number;
  /**
   * Animation duration in milliseconds
   * @default 2000
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

export default function Counter({
  value,
  duration = 2000,
  formatFn,
  className = '',
  immediate = false,
}: CounterProps) {
  const { count, ref } = useCounterAnimation({
    target: value,
    duration,
    immediate,
  });

  const displayValue = formatFn ? formatFn(count) : count.toString();

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
