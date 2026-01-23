interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className = '', hover = false, glass = false }: CardProps) {
  const baseStyles = glass
    ? 'bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 border border-primary/10'
    : 'bg-white rounded-xl shadow-md p-6';
  const hoverStyles = hover ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
