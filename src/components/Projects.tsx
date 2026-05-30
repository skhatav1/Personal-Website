import { ArrowUpRight, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projects } from '../data';
import { Section } from './Section';

export function Projects() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work across AI, web platforms, and operational dashboards"
      description="A focused set of projects that show practical product thinking, full-stack implementation, and integrations with modern APIs."
    >
      <div className="mb-7 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              activeCategory === category
                ? 'bg-cyan-300 text-slate-950 shadow-[0_14px_32px_rgba(34,211,238,0.18)]'
                : 'bg-white/[0.05] text-slate-300 ring-1 ring-white/10 hover:bg-white/[0.09] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.name} className="project-card group">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
                <h3 className="text-2xl font-bold tracking-tight text-white">{project.name}</h3>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-slate-300 ring-1 ring-white/10 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                <ArrowUpRight size={19} />
              </div>
            </div>
            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-300/20">
                  {tech}
                </span>
              ))}
            </div>
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a className="btn-primary min-h-0 px-4 py-2" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.githubUrl && (
                  <a className="btn-secondary min-h-0 px-4 py-2" href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
