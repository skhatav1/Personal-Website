import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import { impactMetrics } from '../data';

function MetricCard({ value, label, detail, delay }: { value: string; label: string; detail: string; delay: number }) {
  const { ref, inView } = useInView();
  const count = useCountUp(value, inView);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal-card rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-soft backdrop-blur"
      style={{ animationDelay: `${delay}ms` }}
      data-visible={inView}
    >
      <p className="text-3xl font-black tracking-tight text-white">{count}</p>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
    </article>
  );
}

export function ImpactStrip() {
  return (
    <section className="px-5 pb-8 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {impactMetrics.map((metric, i) => (
          <MetricCard key={metric.label} {...metric} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
