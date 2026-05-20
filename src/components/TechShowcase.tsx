import { Cpu, Orbit } from 'lucide-react';
import { techLogos } from '../data';
import { Section } from './Section';

export function TechShowcase() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="A modern engineering stack with visual depth"
      description="Core technologies grouped into a polished logo system so recruiters can scan the stack quickly."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-soft backdrop-blur">
          <div className="absolute inset-8 rounded-full border border-cyan-300/15" />
          <div className="absolute inset-16 rounded-full border border-violet-300/15" />
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-[0_0_70px_rgba(34,211,238,0.18)]">
            <Cpu className="text-cyan-200" size={42} />
          </div>
          <div className="absolute left-8 top-10 rounded-2xl border border-white/10 bg-[#08111f] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Frontend</p>
            <p className="mt-1 font-bold text-white">React + Next.js</p>
          </div>
          <div className="absolute bottom-10 right-8 rounded-2xl border border-white/10 bg-[#08111f] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Backend</p>
            <p className="mt-1 font-bold text-white">Node + Python</p>
          </div>
          <div className="absolute bottom-12 left-10 rounded-full border border-violet-300/20 bg-violet-300/10 p-3 text-violet-200">
            <Orbit size={26} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techLogos.map((tech) => (
            <article key={tech.name} className="logo-card">
              <img src={tech.icon} alt={`${tech.name} logo`} className="h-9 w-9 object-contain" loading="lazy" />
              <div>
                <h3 className="font-bold text-white">{tech.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{tech.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
