import { Trophy } from 'lucide-react';
import { Section } from './Section';

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Leadership shaped through competition">
      <article className="card">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.08] text-amber-400">
              <Trophy size={18} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Cricket Vice-Captain & National Representative</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">Mumbai Cricket Association & Arizona State University</p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-400">
            May 2016 – Present
          </span>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            'Served as Vice-Captain and temporary Captain for the Under-16 Mumbai Cricket Association team.',
            'Represented Arizona State University at Nationals in Texas.',
            'Built leadership, teamwork, discipline, and communication skills in high-pressure environments.',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-white/[0.06] bg-[#07070c] p-4 text-sm leading-7 text-slate-400">
              {item}
            </div>
          ))}
        </div>
      </article>
    </Section>
  );
}
