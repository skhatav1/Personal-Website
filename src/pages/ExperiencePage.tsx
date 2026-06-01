import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Leadership } from '../components/Leadership';
import { PageHeader } from '../components/PageHeader';

export function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Engineering experience, technical operations, and leadership"
        description="A formal timeline covering full-stack engineering, backend/API work, automation, database optimization, technical operations, academics, and team leadership."
      />
      <Experience />
      <Education />
      <Leadership />
    </>
  );
}
