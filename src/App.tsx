import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <ScrollProgress />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(180deg,#050816_0%,#08111f_48%,#050816_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="orb orb-1 pointer-events-none fixed -z-10" />
      <div className="orb orb-2 pointer-events-none fixed -z-10" />
      <div className="orb orb-3 pointer-events-none fixed -z-10" />
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
