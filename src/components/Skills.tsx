import { skills } from '../data';
import { Marquee } from './Marquee';
import { Section } from './Section';

export function Skills() {
  const rows = [
    skills.flatMap((g) => g.items).slice(0, 30),
    skills.flatMap((g) => g.items).slice(10, 40),
    skills.flatMap((g) => g.items).slice(20),
  ];

  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit">
      <div className="grid gap-4">
        <Marquee items={rows[0]} direction="left" speed={28} />
        <Marquee items={rows[1]} direction="right" speed={32} />
        <Marquee items={rows[2]} direction="left" speed={24} />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.category} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:border-violet-300/30 hover:bg-white/[0.07]">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-violet-300">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-slate-300 ring-1 ring-white/10 transition hover:ring-violet-300/40 hover:text-violet-200">
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
