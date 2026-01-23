import type { Variants, Transition } from 'framer-motion';

/**
 * Motion utility library for Framer Motion animations
 * Provides reusable animation variants, transitions, and utilities
 * for consistent animations throughout the application.
 */

// ============================================================================
// Transition Presets
// ============================================================================

/**
 * Spring transition for smooth, natural feeling animations
 */
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

/**
 * Tween transition for linear animations
 */
export const tweenTransition: Transition = {
  type: 'tween',
  duration: 0.5,
  ease: 'easeInOut',
};

/**
 * Fast spring for quick, snappy interactions
 */
export const fastSpring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

// ============================================================================
// Fade Animations
// ============================================================================

/**
 * Simple fade in animation
 * Usage: <motion.div variants={fadeIn} initial="hidden" animate="visible" />
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: tweenTransition,
  },
};

/**
 * Fade in with customizable delay
 * @param delay - Delay before animation starts (in seconds)
 */
export const fadeInWithDelay = (delay: number = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ...tweenTransition,
      delay,
    },
  },
});

// ============================================================================
// Slide Animations
// ============================================================================

/**
 * Slide up animation with fade
 * Perfect for section reveals
 */
export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...tweenTransition,
      duration: 0.6,
    },
  },
};

/**
 * Slide down animation with fade
 */
export const slideDown: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...tweenTransition,
      duration: 0.6,
    },
  },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: tweenTransition,
  },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: tweenTransition,
  },
};

// ============================================================================
// Scale Animations
// ============================================================================

/**
 * Scale up on hover with subtle lift
 * Perfect for cards and interactive elements
 */
export const scaleOnHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: fastSpring,
  },
};

/**
 * Scale animation for entrance
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

/**
 * Pop animation for buttons and CTAs
 */
export const popIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
};

// ============================================================================
// Stagger Containers
// ============================================================================

/**
 * Container for staggered children animations
 * Usage: Wrap parent with this variant and children will animate in sequence
 * @param staggerDelay - Delay between each child animation (in seconds)
 */
export const staggerContainer = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.2,
    },
  },
});

/**
 * Fast stagger for quick reveals
 */
export const fastStagger: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/**
 * Slow stagger for dramatic effect
 */
export const slowStagger: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// ============================================================================
// Complex Animations
// ============================================================================

/**
 * Hero entrance animation
 * Combines fade, slide, and scale for impact
 */
export const heroEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier for smooth easing
    },
  },
};

/**
 * Floating animation for decorative elements
 */
export const float: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// Whil e Hover/Tap Presets
// ============================================================================

/**
 * Lift effect on hover
 */
export const lift = {
  y: -5,
  transition: fastSpring,
};

/**
 * Subtle scale up on hover
 */
export const scaleUp = {
  scale: 1.05,
  transition: fastSpring,
};

/**
 * Press down effect on tap
 */
export const pressDown = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

// ============================================================================
// Scroll-Triggered Animations
// ============================================================================

/**
 * Configuration for scroll-triggered animations
 * Use with whileInView prop
 */
export const scrollReveal = {
  viewport: { once: true, amount: 0.3 },
  variants: slideUp,
};

/**
 * Fade in when scrolled into view
 */
export const fadeInOnScroll: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Creates a custom delay for any variant
 * @param variants - The base variant object
 * @param delay - Delay in seconds
 */
export const withDelay = (variants: Variants, delay: number): Variants => {
  const visibleState = variants.visible as { transition?: Transition };
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...visibleState.transition,
        delay,
      },
    },
  };
};

/**
 * Combines multiple variant objects
 * Later variants override earlier ones
 */
export const combineVariants = (...variants: Variants[]): Variants => {
  return variants.reduce((acc, variant) => ({ ...acc, ...variant }), {});
};

/**
 * Creates a sequential animation with custom durations
 * @param steps - Array of animation steps with durations
 * Note: This is a flexible utility function that needs to handle various animation properties.
 * Using 'any' here is intentional to support Framer Motion's flexible variant types.
 */
export const sequence = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  steps: Array<{ style: any; duration: number }>
): Variants => {
  let totalDelay = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keyframes: any[] = [];

  steps.forEach((step) => {
    keyframes.push({
      ...step.style,
      transition: {
        duration: step.duration,
        delay: totalDelay,
      },
    });
    totalDelay += step.duration;
  });

  return {
    hidden: steps[0]?.style || {},
    visible: keyframes[keyframes.length - 1] || {},
  };
};
