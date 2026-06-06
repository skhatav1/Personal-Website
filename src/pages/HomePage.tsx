import { About } from '../components/About';
import { AnimatedDivider } from '../components/AnimatedDivider';
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
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <FocusAreas />
      <AnimatedDivider />
      <Experience />
      <Education />
      <Leadership />
      <AnimatedDivider />
      <Projects />
      <AnimatedDivider />
      <TechShowcase />
      <Skills />
      <AnimatedDivider />
      <Contact />
    </>
  );
}
