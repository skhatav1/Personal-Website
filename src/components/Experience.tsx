import { Briefcase } from 'lucide-react';
import { experiences } from '../data';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Software engineering and technical operations experience">
      <div className="relative grid gap-6">
        {experiences.map((experience) => (
          <article key={experience.role} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07] hover:shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  <Briefcase size={21} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                  <p className="mt-1 font-medium text-slate-400">{experience.company}</p>
                </div>
              </div>
              <p className="rounded-full bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-300 ring-1 ring-white/10">{experience.date}</p>
            </div>
            <ul className="mt-6 grid gap-3 text-slate-300">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-7">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
