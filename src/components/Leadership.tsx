import { Trophy } from 'lucide-react';
import { Section } from './Section';

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Leadership shaped through competition and teamwork">
      <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-soft backdrop-blur">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
              <Trophy size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Cricket Vice-Captain & National Representative</h3>
              <p className="mt-2 font-medium text-slate-400">Mumbai Cricket Association & Arizona State University</p>
            </div>
          </div>
          <p className="rounded-full bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-300 ring-1 ring-white/10">May 2016 - Present</p>
        </div>
        <ul className="mt-7 grid gap-3 text-slate-300 md:grid-cols-3">
          <li className="rounded-2xl bg-white/[0.045] p-5 leading-7 ring-1 ring-white/10">Served as Vice-Captain and temporary Captain for the Under-16 Mumbai Cricket Association team.</li>
          <li className="rounded-2xl bg-white/[0.045] p-5 leading-7 ring-1 ring-white/10">Represented Arizona State University at Nationals in Texas.</li>
          <li className="rounded-2xl bg-white/[0.045] p-5 leading-7 ring-1 ring-white/10">Built leadership, teamwork, discipline, and communication skills in high-pressure environments.</li>
        </ul>
      </article>
    </Section>
  );
}
