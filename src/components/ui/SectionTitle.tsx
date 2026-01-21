interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ children, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-text font-serif mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-text/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
