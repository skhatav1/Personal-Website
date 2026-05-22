import { ArrowUpRight, Github, Layers3 } from 'lucide-react';
import { projects } from '../data';
import { Section } from './Section';

export function ProjectLanding() {
  return (
    <Section
      id="featured"
      eyebrow="Featured"
      title="Project landing panels built for quick recruiter scanning"
      description="Each project is presented like a compact product page, with the problem area, stack, and standout capabilities visible at a glance."
    >
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <article key={project.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-soft backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className={`relative min-h-[280px] bg-gradient-to-br ${project.accent} p-7 text-slate-950`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.18)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-950/15 px-4 py-2 text-sm font-black uppercase tracking-[0.18em]">{project.signal}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/15">
                      <Layers3 size={21} />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] opacity-70">Project 0{index + 1}</p>
                    <h3 className="mt-3 text-4xl font-black tracking-tight">{project.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-7 lg:p-9">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <p className="max-w-2xl text-lg leading-8 text-slate-300">{project.description}</p>
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-200 lg:flex">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div key={stat} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-sm font-semibold text-slate-200">{stat}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-cyan-100 ring-1 ring-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a className="btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                        Open live demo
                        <ArrowUpRight size={17} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a className="btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github size={17} />
                        View code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
