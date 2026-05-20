type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
