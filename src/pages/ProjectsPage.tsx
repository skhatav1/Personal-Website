import { CaseStudies } from '../components/CaseStudies';
import { PageHeader } from '../components/PageHeader';
import { ProjectLanding } from '../components/ProjectLanding';
import { Projects } from '../components/Projects';

export function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Product-minded software projects with demos, code, and engineering context"
        description="A dedicated project page for the work that best shows full-stack implementation, backend APIs, dashboards, AI-enabled workflows, and deployment-ready thinking."
      />
      <ProjectLanding />
      <CaseStudies />
      <Projects />
    </>
  );
}
