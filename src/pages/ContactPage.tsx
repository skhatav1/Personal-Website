import { Contact } from '../components/Contact';
import { PageHeader } from '../components/PageHeader';

export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s connect about software engineering opportunities"
        description="Use this page for email, LinkedIn, phone, resume, and location details."
      />
      <Contact />
    </>
  );
}
