type SectionProps = {
  id: string;
  eyebrow?: string;
  number?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, number, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            {number && <span className="section-number">{number}</span>}
            {number && <span className="h-px w-8 bg-white/15" />}
            {eyebrow && <span className="section-label">{eyebrow}</span>}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
          {description && <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
