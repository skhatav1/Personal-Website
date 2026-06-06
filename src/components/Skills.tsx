import { skills } from '../data';
import { Marquee } from './Marquee';
import { Section } from './Section';

export function Skills() {
  const allItems = skills.flatMap((g) => g.items);
  const rows = [
    allItems.slice(0, 28),
    allItems.slice(8, 36),
    allItems.slice(16),
  ];

  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit">
      <div className="grid gap-3">
        <Marquee items={rows[0]} direction="left" speed={30} />
        <Marquee items={rows[1]} direction="right" speed={34} />
        <Marquee items={rows[2]} direction="left" speed={26} />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.category} className="card card-hover">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="rounded-full border border-white/[0.06] bg-[#07070c] px-3 py-1 font-mono text-xs text-slate-500 transition hover:border-amber-400/20 hover:text-amber-300">
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
