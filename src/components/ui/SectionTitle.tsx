import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { slideDown, fadeInWithDelay } from '../../utils/motion';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`text-center mb-12 ${className}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-text font-serif mb-4"
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={prefersReducedMotion ? undefined : slideDown}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg text-text/70 max-w-2xl mx-auto"
          initial={prefersReducedMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={prefersReducedMotion ? undefined : fadeInWithDelay(0.2)}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
