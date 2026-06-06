import { useEffect, useRef } from 'react';
import { CursorGlow } from './components/CursorGlow';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HomePage } from './pages/HomePage';

function ParallaxOrbs() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (orb1.current) orb1.current.style.transform = `translateY(${y * 0.18}px)`;
        if (orb2.current) orb2.current.style.transform = `translateY(${y * -0.12}px)`;
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div ref={orb1} className="orb orb-1 pointer-events-none fixed -z-10" />
      <div ref={orb2} className="orb orb-2 pointer-events-none fixed -z-10" />
      <div className="orb orb-3 pointer-events-none fixed -z-10" />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070c] font-sans text-slate-100">
      <ScrollProgress />
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(251,191,36,0.07),transparent)]" />
      <ParallaxOrbs />
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
