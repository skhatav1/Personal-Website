import { Braces, CloudCog, Workflow } from 'lucide-react';
import { focusAreas } from '../data';
import { Section } from './Section';

const icons = [Braces, Workflow, CloudCog];

export function FocusAreas() {
  return (
    <Section
      id="focus"
      eyebrow="Focus"
      title="What this portfolio should communicate quickly"
      description="A more advanced portfolio should make your engineering direction obvious in the first scroll: what you build, how you work, and where you can add value."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {focusAreas.map((area, index) => {
          const Icon = icons[index];
          return (
            <article key={area.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-violet-300/15" />
              <div className="relative">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  <Icon size={24} />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{area.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{area.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{area.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {area.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-cyan-100 ring-1 ring-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
