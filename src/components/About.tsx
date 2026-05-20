import { GraduationCap, Sparkles } from 'lucide-react';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Building practical software with a product mindset">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-soft backdrop-blur">
          <p className="text-lg leading-8 text-slate-300">
            Swar is a Computer Science student at Arizona State University with a 4.0 GPA and experience in software engineering, technical operations, full-stack development, automation, database optimization, and API integration. He enjoys building scalable web applications, improving system efficiency, and solving real-world problems through technology.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="info-card">
            <GraduationCap className="text-cyan-300" size={24} />
            <div>
              <p className="font-semibold text-white">Arizona State University</p>
              <p className="mt-1 text-sm text-slate-400">B.S. Computer Science, GPA 4.0</p>
            </div>
          </div>
          <div className="info-card">
            <Sparkles className="text-violet-300" size={24} />
            <div>
              <p className="font-semibold text-white">Engineering Focus</p>
              <p className="mt-1 text-sm text-slate-400">Scalable apps, automation, APIs, and performance</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
