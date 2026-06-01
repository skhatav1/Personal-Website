import { FocusAreas } from '../components/FocusAreas';
import { Hero } from '../components/Hero';
import { ImpactStrip } from '../components/ImpactStrip';
import { ProfileSnapshot } from '../components/ProfileSnapshot';
import { TopicGateway } from '../components/TopicGateway';

export function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <FocusAreas />
      <ProfileSnapshot />
      <TopicGateway />
    </>
  );
}
