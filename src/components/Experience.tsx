import { Briefcase } from 'lucide-react';
import { experiences } from '../data';
import { RevealCard } from './RevealCard';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" number="01" eyebrow="Experience" title="Engineering roles & technical work">
      <div className="relative grid gap-5">
        {experiences.map((exp, i) => (
          <RevealCard key={exp.role} delay={i * 80} direction={i % 2 === 0 ? 'left' : 'right'}>
            <article className="group card card-hover">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.08] text-amber-400">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-slate-500">{exp.company}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-400">
                  {exp.date}
                </span>
              </div>
              <ul className="mt-5 grid gap-2.5 text-slate-400">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7">
                    <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/[0.06] bg-[#07070c] px-3 py-1 font-mono text-xs text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </RevealCard>
        ))}
      </div>
    </Section>
  );
}
