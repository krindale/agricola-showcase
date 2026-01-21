interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'secondary';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';

  const variants = {
    default: 'bg-primary/10 text-primary',
    accent: 'bg-accent/20 text-amber-800',
    secondary: 'bg-secondary/10 text-secondary',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
