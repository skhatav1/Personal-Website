import { impactMetrics } from '../data';

export function ImpactStrip() {
  return (
    <section className="px-5 pb-8 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {impactMetrics.map((metric) => (
          <article key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-soft backdrop-blur">
            <p className="text-3xl font-black tracking-tight text-white">{metric.value}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">{metric.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
