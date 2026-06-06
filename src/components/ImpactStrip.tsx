import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { impactMetrics } from '../data';

function MetricCard({ value, label, detail, delay }: { value: string; label: string; detail: string; delay: number }) {
  const { ref, inView } = useInView();
  const count = useCountUp(value, inView);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal-card rounded-2xl border border-white/[0.07] bg-[#0d0d16] p-6"
      style={{ animationDelay: `${delay}ms` }}
      data-visible={inView}
    >
      <p className="text-4xl font-extrabold tracking-tight text-white">{count}</p>
      <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">{label}</p>
      <p className="mt-1.5 text-sm text-slate-500">{detail}</p>
    </article>
  );
}

export function ImpactStrip() {
  return (
    <section className="px-5 pb-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {impactMetrics.map((m, i) => (
          <MetricCard key={m.label} {...m} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
