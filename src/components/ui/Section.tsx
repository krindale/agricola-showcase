interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  alternate?: boolean;
}

export default function Section({ children, id, className = '', alternate = false }: SectionProps) {
  const bgColor = alternate ? 'bg-white' : 'bg-background';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
}
