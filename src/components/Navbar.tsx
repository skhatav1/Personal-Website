import { FileText, Linkedin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contact } from '../data';

const links = [
  { label: '01', name: 'About',      href: '#about' },
  { label: '02', name: 'Experience', href: '#experience' },
  { label: '03', name: 'Projects',   href: '#projects' },
  { label: '04', name: 'Stack',      href: '#stack' },
  { label: '05', name: 'Contact',    href: '#contact' },
];

const sectionIds = links.map((l) => l.href.slice(1));

function useActiveSection() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return active;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();

  const scroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#07070c]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" onClick={(e) => scroll(e, '#home')} className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-amber-400 transition">
          SK
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scroll(e, link.href)}
                className={`nav-link relative group flex items-center gap-1.5 ${isActive ? 'text-amber-400' : ''}`}
              >
                <span className="font-mono text-[10px] text-white/25 group-hover:text-amber-400/50 transition">{link.label}</span>
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-[17px] left-0 h-[1px] w-full bg-gradient-to-r from-amber-400 to-amber-400/0" />
                )}
              </a>
            );
          })}
          <div className="flex items-center gap-2 border-l border-white/[0.08] pl-6">
            <a href={contact.resume} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="Resume">
              <FileText size={15} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-slate-300 md:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-white/[0.06] bg-[#07070c] px-5 py-5 md:hidden">
          <div className="grid gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => scroll(e, link.href)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
                <span className="font-mono text-[10px] text-white/25">{link.label}</span>
                {link.name}
              </a>
            ))}
            <a href={contact.resume} target="_blank" rel="noreferrer"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
