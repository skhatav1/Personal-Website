import { CheckCircle2 } from 'lucide-react';
import { profileSnapshot } from '../data';
import { Section } from './Section';

export function ProfileSnapshot() {
  return (
    <Section
      id="snapshot"
      eyebrow="Snapshot"
      title="A concise engineering profile for recruiters"
      description="The core signal: practical full-stack engineering, strong academics, and hands-on product delivery across APIs, dashboards, automation, and cloud-aware systems."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profileSnapshot.map((item) => (
          <article key={item.label} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur">
            <CheckCircle2 className="mt-1 shrink-0 text-cyan-300" size={22} />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <p className="mt-2 text-lg font-semibold leading-7 text-white">{item.value}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
