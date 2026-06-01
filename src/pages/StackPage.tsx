import { PageHeader } from '../components/PageHeader';
import { Skills } from '../components/Skills';
import { TechShowcase } from '../components/TechShowcase';

export function StackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stack"
        title="Technical toolkit across product engineering, APIs, data, and cloud"
        description="A focused view of the languages, frameworks, databases, testing tools, and infrastructure practices used across coursework, internships, and shipped projects."
      />
      <TechShowcase />
      <Skills />
    </>
  );
}
