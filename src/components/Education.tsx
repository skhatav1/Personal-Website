import { BookOpen, GraduationCap } from 'lucide-react';
import { education } from '../data';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <article className="card">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.08] text-amber-400">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{education.degree}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {education.school} · {education.location}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-400">
            GPA {education.gpa} · {education.dates}
          </span>
        </div>
        <div className="mt-7">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
            <BookOpen size={14} />
            Relevant Coursework
          </div>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span key={course} className="rounded-full border border-white/[0.06] bg-[#07070c] px-3 py-1.5 font-mono text-xs text-slate-400">
                {course}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Section>
  );
}
