import { ArrowDown, FileText, Linkedin, Mail, MapPin } from 'lucide-react';
import { contact, emailHref } from '../data';
import { TypeWriter } from './TypeWriter';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.12)]">
            Arizona State University • Computer Science • GPA 4.0
          </p>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Swar Mahesh Khatav
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
            <TypeWriter
              phrases={[
                'Software Engineer focused on full-stack systems.',
                'Building scalable APIs and dashboards.',
                'Automating workflows with Python and Go.',
                'Shipping production-minded web applications.',
              ]}
            />
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Computer Science student at Arizona State University with hands-on experience building production-minded web applications, backend APIs, database workflows, and automation systems.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-cyan-300" />
              {contact.location}
            </span>
            <a href={emailHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-200">
              <Mail size={16} className="text-cyan-300" />
              {contact.email}
            </a>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/projects" className="btn-primary">
              View Projects <ArrowDown size={18} />
            </a>
            <a href={emailHref} target="_blank" rel="noreferrer" className="btn-secondary">
              Contact Me <Mail size={18} />
            </a>
            <a href={contact.resume} target="_blank" rel="noreferrer" className="btn-secondary">
              Resume <FileText size={18} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="animate-fade-up rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08111f] p-4 text-white">
            <div className="p-6">
              <div className="mb-6 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04]">
                <div className="relative mx-auto aspect-[4/5] max-h-[420px]">
                  <img
                    src="/profile-portrait.png"
                    alt="Portrait of Swar Mahesh Khatav"
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#08111f]/75 p-4 backdrop-blur-md">
                    <p className="text-sm font-semibold text-cyan-200">Candidate profile</p>
                    <p className="mt-1 text-base font-semibold text-white">Full-stack development + automation</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                {['React + TypeScript products', 'Go and Python services', 'PostgreSQL data workflows', 'Automation and APIs'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white/[0.045] px-4 py-4 ring-1 ring-white/10">
                    <span className="font-medium text-slate-200">{item}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">GPA</p>
                  <p className="mt-2 text-3xl font-bold text-cyan-200">4.0</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Graduation</p>
                  <p className="mt-2 text-2xl font-bold text-violet-200">May 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
