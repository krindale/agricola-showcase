import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { slideUp } from '../../utils/motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  alternate?: boolean;
}

export default function Section({ children, id, className = '', alternate = false }: SectionProps) {
  const bgColor = alternate ? 'bg-white' : 'bg-background';
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${bgColor} ${className}`}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={prefersReducedMotion ? undefined : slideUp}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </motion.section>
  );
}
