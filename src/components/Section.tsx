import { useInView } from '../hooks/useInView';
import { SplitHeading } from './SplitHeading';

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
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="mb-12 max-w-3xl">
          {/* Number + eyebrow row */}
          <div
            className="mb-4 flex items-center gap-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 500ms ease, transform 500ms ease',
            }}
          >
            {number && <span className="section-number">{number}</span>}
            {number && <span className="h-px w-6 bg-white/15" />}
            {eyebrow && <span className="section-label">{eyebrow}</span>}
          </div>

          {/* Animated heading */}
          <SplitHeading
            text={title}
            as="h2"
            delay={100}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          />

          {/* Description fade */}
          {description && (
            <p
              className="mt-5 text-lg leading-8 text-slate-400"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(14px)',
                transition: 'opacity 600ms ease 300ms, transform 600ms ease 300ms',
              }}
            >
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
