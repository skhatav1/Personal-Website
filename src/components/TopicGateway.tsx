import { ArrowUpRight, Briefcase, Code2, Contact, Layers3 } from 'lucide-react';

const topics = [
  {
    title: 'Projects',
    href: '/projects',
    description: 'Case studies, live demos, GitHub links, and product-style project breakdowns.',
    icon: Layers3,
  },
  {
    title: 'Experience',
    href: '/experience',
    description: 'Engineering roles, technical operations work, leadership, and academic foundation.',
    icon: Briefcase,
  },
  {
    title: 'Stack',
    href: '/stack',
    description: 'Languages, frameworks, cloud tools, databases, testing, and delivery practices.',
    icon: Code2,
  },
  {
    title: 'Profile',
    href: '/profile',
    description: 'Professional summary, recruiter snapshot, resume, LinkedIn, and contact details.',
    icon: Contact,
  },
];

export function TopicGateway() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Explore</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Dedicated pages for the core portfolio areas</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <a key={topic.href} href={topic.href} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{topic.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{topic.description}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="shrink-0 text-slate-500 transition group-hover:text-cyan-200" size={22} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
