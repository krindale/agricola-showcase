interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'secondary';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';

  const variants = {
    default: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-amber-200',
    accent: 'bg-accent/20 text-amber-800 dark:bg-accent/30 dark:text-amber-300',
    secondary: 'bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-green-300',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
