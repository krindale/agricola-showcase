interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-md p-6';
  const hoverStyles = hover ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
