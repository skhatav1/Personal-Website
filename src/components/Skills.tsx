import { Code2 } from 'lucide-react';
import { skills } from '../data';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.category} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:border-violet-300/30 hover:bg-white/[0.07]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-300/10 text-violet-300 ring-1 ring-violet-300/20">
                <Code2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-slate-300 ring-1 ring-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
