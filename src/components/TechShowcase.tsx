import { Cpu, Orbit } from 'lucide-react';
import { techLogos } from '../data';
import { Section } from './Section';

export function TechShowcase() {
  return (
    <Section id="stack" number="03" eyebrow="Stack" title="Technologies I build with">
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
        {/* Visual panel */}
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d16] p-8">
          <div className="absolute inset-8 rounded-full border border-amber-400/10" />
          <div className="absolute inset-16 rounded-full border border-violet-400/10" />
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/[0.08] shadow-amber">
            <Cpu className="text-amber-400" size={32} />
          </div>
          <div className="absolute left-6 top-8 rounded-xl border border-white/[0.07] bg-[#07070c] px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">Frontend</p>
            <p className="mt-1 text-sm font-bold text-white">React + Next.js</p>
          </div>
          <div className="absolute bottom-8 right-6 rounded-xl border border-white/[0.07] bg-[#07070c] px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">Backend</p>
            <p className="mt-1 text-sm font-bold text-white">Go + Python</p>
          </div>
          <div className="absolute bottom-10 left-8 rounded-full border border-violet-400/20 bg-violet-400/[0.08] p-2.5 text-violet-400">
            <Orbit size={20} />
          </div>
        </div>

        {/* Tech logo grid */}
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {techLogos.map((tech) => (
            <article key={tech.name} className="logo-card group">
              <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain opacity-80 transition group-hover:opacity-100" loading="lazy" />
              <div>
                <h3 className="text-sm font-bold text-white">{tech.name}</h3>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">{tech.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
