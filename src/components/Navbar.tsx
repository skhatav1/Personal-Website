import { FileText, Linkedin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contact } from '../data';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
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

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" onClick={(e) => handleAnchor(e, '#home')} className="text-sm font-bold tracking-wide text-white">
          Swar Khatav
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className={`nav-link relative transition-colors ${isActive ? 'text-cyan-200' : ''}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                )}
              </a>
            );
          })}
          <div className="flex items-center gap-2 border-l border-white/10 pl-5">
            <a href={contact.resume} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="Open resume">
              <FileText size={17} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="Open LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-white/10 bg-[#07101f] px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href={contact.resume} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
