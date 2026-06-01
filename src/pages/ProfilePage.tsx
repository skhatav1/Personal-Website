import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Education } from '../components/Education';
import { PageHeader } from '../components/PageHeader';
import { ProfileSnapshot } from '../components/ProfileSnapshot';

export function ProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="Computer Science student and software engineer focused on useful systems"
        description="A concise profile for recruiters and collaborators: background, academic signal, technical direction, and the fastest ways to connect."
      />
      <ProfileSnapshot />
      <About />
      <Education />
      <Contact />
    </>
  );
}
