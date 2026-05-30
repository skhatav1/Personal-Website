import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { label: 'Focus', href: '#focus' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Featured', href: '#featured' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="text-sm font-bold tracking-wide text-white">
          Swar Khatav
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {isOpen && (
        <div className="border-t border-white/10 bg-[#07101f] px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
