import { Braces, CloudCog, Workflow } from 'lucide-react';
import { focusAreas } from '../data';
import { RevealCard } from './RevealCard';
import { Section } from './Section';

const icons = [Braces, Workflow, CloudCog];

export function FocusAreas() {
  return (
    <Section eyebrow="Focus" id="focus" title="Engineering direction at a glance">
      <div className="grid gap-4 lg:grid-cols-3">
        {focusAreas.map((area, i) => {
          const Icon = icons[i];
          return (
            <RevealCard key={area.title} delay={i * 100}>
              <article className="card card-hover group relative h-full overflow-hidden">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-400/[0.06] blur-2xl transition group-hover:bg-amber-400/10" />
                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.08] text-amber-400">
                    <Icon size={20} />
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">{area.eyebrow}</p>
                  <h3 className="mt-2.5 text-xl font-bold tracking-tight text-white">{area.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{area.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/[0.06] bg-[#07070c] px-3 py-1 font-mono text-xs text-slate-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </RevealCard>
          );
        })}
      </div>
    </Section>
  );
}
