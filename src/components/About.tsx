import { GraduationCap, Sparkles } from 'lucide-react';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" number="00" eyebrow="About" title="Building practical software with a product mindset">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <div className="card">
          <p className="text-lg leading-8 text-slate-400">
            Swar is a Computer Science student at Arizona State University with a 4.0 GPA and experience in software engineering, technical operations, full-stack development, automation, database optimization, and API integration. He enjoys building scalable web applications, improving system efficiency, and solving real-world problems through technology.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="info-card">
            <GraduationCap className="shrink-0 text-amber-400" size={22} />
            <div>
              <p className="font-semibold text-white">Arizona State University</p>
              <p className="mt-1 text-sm text-slate-500">B.S. Computer Science, GPA 4.0</p>
            </div>
          </div>
          <div className="info-card">
            <Sparkles className="shrink-0 text-violet-400" size={22} />
            <div>
              <p className="font-semibold text-white">Engineering Focus</p>
              <p className="mt-1 text-sm text-slate-500">Scalable apps, automation, APIs, and performance</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
