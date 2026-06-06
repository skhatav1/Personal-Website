import { FileText, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contact, emailHref } from '../data';
import { Section } from './Section';

export function Contact() {
  return (
    <Section id="contact" number="04" eyebrow="Contact" title="Let's build something together">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-lg leading-8 text-slate-400">
            Open to software engineering internships, full-time opportunities, and collaborative projects where thoughtful engineering improves real workflows.
          </p>
          <p className="mt-4 font-mono text-sm text-slate-600">
            Best way to reach me is email — I respond within 24 hours.
          </p>
        </div>
        <div className="grid gap-3">
          <a href={emailHref} target="_blank" rel="noreferrer" className="contact-link group">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/[0.08] text-amber-400 transition group-hover:bg-amber-400/15">
              <Mail size={16} />
            </div>
            <span className="text-sm">{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone}`} className="contact-link group">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition group-hover:border-amber-400/20 group-hover:text-amber-400">
              <Phone size={16} />
            </div>
            <span className="text-sm">{contact.phone}</span>
          </a>
          <div className="contact-link">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400">
              <MapPin size={16} />
            </div>
            <span className="text-sm">{contact.location}</span>
          </div>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link group">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition group-hover:border-amber-400/20 group-hover:text-amber-400">
              <Linkedin size={16} />
            </div>
            <span className="text-sm">linkedin.com/in/swarkhatav</span>
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer" className="contact-link group">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition group-hover:border-amber-400/20 group-hover:text-amber-400">
              <FileText size={16} />
            </div>
            <span className="text-sm">View resume PDF</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
