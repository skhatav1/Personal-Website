import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { FocusAreas } from './components/FocusAreas';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ImpactStrip } from './components/ImpactStrip';
import { Leadership } from './components/Leadership';
import { Navbar } from './components/Navbar';
import { ProjectLanding } from './components/ProjectLanding';
import { ProfileSnapshot } from './components/ProfileSnapshot';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { TechShowcase } from './components/TechShowcase';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(180deg,#050816_0%,#08111f_48%,#050816_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <Navbar />
      <main>
        <Hero />
        <ImpactStrip />
        <FocusAreas />
        <ProfileSnapshot />
        <About />
        <Education />
        <TechShowcase />
        <Experience />
        <ProjectLanding />
        <CaseStudies />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
