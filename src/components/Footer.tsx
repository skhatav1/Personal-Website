import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { contact, emailHref } from '../data';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] px-5 pt-16 pb-10 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">Swar Khatav</p>
            <p className="mt-2 text-slate-400">Software Engineer · Full-stack · Open to SWE roles</p>
          </div>
          <div className="flex gap-3">
            <a href={emailHref} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="Email">
              <Mail size={17} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="https://github.com/skhatav1" target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={contact.resume} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="Resume">
              <FileText size={17} />
            </a>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-semibold text-slate-400 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">© 2026 Swar Mahesh Khatav. All rights reserved.</p>
          <p className="text-sm text-slate-600">Built with React · TypeScript · Tailwind CSS · Vite</p>
        </div>
      </div>
    </footer>
  );
}
