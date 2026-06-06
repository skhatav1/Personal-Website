import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { contact, emailHref } from '../data';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Contact',    href: '#contact' },
];

export function Footer() {
  const scroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#07070c] px-5 pb-10 pt-16 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(251,191,36,0.04),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Swar Khatav</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
              Software Engineer · Full-stack · Open to SWE roles
            </p>
          </div>
          <div className="flex gap-2">
            <a href={emailHref} target="_blank" rel="noreferrer" className="nav-icon-link"><Mail size={15} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="nav-icon-link"><Linkedin size={15} /></a>
            <a href="https://github.com/skhatav1" target="_blank" rel="noreferrer" className="nav-icon-link"><Github size={15} /></a>
            <a href={contact.resume} target="_blank" rel="noreferrer" className="nav-icon-link"><FileText size={15} /></a>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-x-7 gap-y-2">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => scroll(e, link.href)}
              className="font-mono text-xs uppercase tracking-[0.18em] text-slate-600 transition hover:text-amber-400">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-slate-700">© 2026 Swar Mahesh Khatav</p>
          <p className="font-mono text-xs text-slate-700">React · TypeScript · Tailwind · Vite</p>
        </div>
      </div>
    </footer>
  );
}
