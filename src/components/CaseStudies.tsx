import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data';
import { Section } from './Section';

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case Studies"
      title="Projects framed as engineering decisions"
      description="A formal project section that explains the problem, implementation approach, and outcome instead of only listing technologies."
    >
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <article key={project.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur lg:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Case Study 0{index + 1}</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-white">{project.name}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-slate-300">{project.description}</p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Demo <ArrowUpRight size={17} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                    <Github size={17} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Problem</p>
                <p className="mt-3 leading-7 text-slate-300">{project.caseStudy.problem}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Build</p>
                <p className="mt-3 leading-7 text-slate-300">{project.caseStudy.build}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Outcome</p>
                <p className="mt-3 leading-7 text-slate-300">{project.caseStudy.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
