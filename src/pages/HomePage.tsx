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

function Divider() {
  return <div className="section-divider mx-5 lg:mx-8" />;
}

export function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <Divider />
      <About />
      <Divider />
      <FocusAreas />
      <Divider />
      <Experience />
      <Education />
      <Leadership />
      <Divider />
      <Projects />
      <Divider />
      <TechShowcase />
      <Skills />
      <Divider />
      <Contact />
    </>
  );
}
