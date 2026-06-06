import { ArrowUpRight, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projects } from '../data';
import { RevealCard } from './RevealCard';
import { Section } from './Section';

export function Projects() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      number="02"
      eyebrow="Projects"
      title="Selected work across AI, web platforms, and dashboards"
      description="A focused set of projects showing full-stack thinking, backend APIs, and deployment-ready architecture."
    >
      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] transition ${
              active === cat
                ? 'bg-amber-400 text-slate-950 shadow-amber-lg'
                : 'border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:border-amber-400/25 hover:text-amber-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((project, i) => (
          <RevealCard key={project.name} delay={i * 80}>
            <article className="project-card group h-full flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400">{project.category}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-white">{project.name}</h3>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400 transition group-hover:border-amber-400/30 group-hover:bg-amber-400/[0.08] group-hover:text-amber-400">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/[0.06] bg-[#07070c] px-2.5 py-1 font-mono text-[11px] text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.liveUrl && (
                    <a className="btn-primary min-h-0 px-4 py-2 text-xs" href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live demo <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a className="btn-secondary min-h-0 px-4 py-2 text-xs" href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github size={14} /> GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          </RevealCard>
        ))}
      </div>
    </Section>
  );
}
