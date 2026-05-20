import { BookOpen, GraduationCap } from 'lucide-react';
import { education } from '../data';
import { Section } from './Section';

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-soft backdrop-blur">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
              <p className="mt-2 font-medium text-slate-400">
                {education.school} • {education.location}
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white/[0.06] px-4 py-3 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
            GPA {education.gpa} • {education.dates}
          </div>
        </div>
        <div className="mt-7">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            <BookOpen size={17} />
            Relevant coursework
          </div>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span key={course} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
                {course}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Section>
  );
}
