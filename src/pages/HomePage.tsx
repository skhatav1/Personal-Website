import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { FocusAreas } from '../components/FocusAreas';
import { Hero } from '../components/Hero';
import { ImpactStrip } from '../components/ImpactStrip';
import { Leadership } from '../components/Leadership';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { TechShowcase } from '../components/TechShowcase';

export function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <About />
      <FocusAreas />
      <Experience />
      <Education />
      <Leadership />
      <Projects />
      <TechShowcase />
      <Skills />
      <Contact />
    </>
  );
}
