import { ArrowDown, FileText, Linkedin, Mail, MapPin, Zap } from 'lucide-react';
import { contact, emailHref } from '../data';
import { MagneticButton } from './MagneticButton';
import { ParticleField } from './ParticleField';
import { TerminalSnippet } from './TerminalSnippet';
import { TiltCard } from './TiltCard';
import { TypeWriter } from './TypeWriter';

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 lg:px-8">
      <ParticleField />

      <div className="relative mx-auto w-full max-w-6xl py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left — text content */}
          <div className="animate-fade-up">
            {/* Status badge */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.08] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                Available for SWE roles
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <Zap size={11} className="text-amber-400" />
                Currently @ Velocified LMS
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight text-white">
              Swar<br />
              <span className="text-white/30">Khatav</span>
            </h1>

            {/* Typewriter role */}
            <p className="mt-6 text-xl font-semibold text-slate-300 sm:text-2xl">
              <TypeWriter
                phrases={[
                  'Software Engineer. Full-stack systems.',
                  'Building APIs and dashboards in Go.',
                  'Automating workflows with Python.',
                  'Shipping production-ready products.',
                ]}
              />
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
              CS student at Arizona State University. Hands-on with React, TypeScript, Go, Python, and PostgreSQL — from auth flows to ETL pipelines.
            </p>

            {/* Location / email */}
            <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-amber-400" />
                {contact.location}
              </span>
              <a href={emailHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-amber-400">
                <Mail size={13} className="text-amber-400" />
                {contact.email}
              </a>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="#projects" className="btn-primary">
                View Work <ArrowDown size={16} />
              </MagneticButton>
              <MagneticButton href={contact.resume} target="_blank" rel="noreferrer" className="btn-secondary">
                Resume <FileText size={16} />
              </MagneticButton>
              <MagneticButton href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                LinkedIn <Linkedin size={16} />
              </MagneticButton>
            </div>

            {/* Terminal */}
            <div className="mt-12">
              <TerminalSnippet />
            </div>
          </div>

          {/* Right — profile card */}
          <TiltCard className="animate-fade-up">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d16] p-5">
              {/* Photo */}
              <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                <div className="relative aspect-[4/5] max-h-[380px]">
                  <img
                    src="/profile-portrait.png"
                    alt="Swar Mahesh Khatav"
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d16] via-[#0d0d16]/15 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/[0.08] bg-[#0d0d16]/80 p-3 backdrop-blur-md">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400">Profile</p>
                    <p className="mt-1 text-sm font-semibold text-white">Full-stack · Automation · APIs</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.06] bg-[#07070c] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">GPA</p>
                  <p className="mt-1.5 text-2xl font-bold text-amber-400">4.0</p>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-[#07070c] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">Grad</p>
                  <p className="mt-1.5 text-xl font-bold text-violet-300">May '26</p>
                </div>
              </div>

              {/* Stack pills */}
              <div className="mt-3 flex flex-wrap gap-2">
                {['React', 'Go', 'Python', 'PostgreSQL'].map((t) => (
                  <span key={t} className="rounded-full border border-white/[0.06] bg-[#07070c] px-3 py-1 font-mono text-xs text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
