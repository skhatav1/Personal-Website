import { FileText, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { contact, emailHref } from '../data';
import { Section } from './Section';

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s connect">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-lg leading-8 text-slate-300">
            I’m open to software engineering internships, full-time opportunities, and collaborative projects where thoughtful engineering can improve real workflows.
          </p>
          <p className="mt-4 text-sm font-semibold text-slate-500">Primary email opens your email client directly.</p>
        </div>
        <div className="grid gap-4">
          <a href={emailHref} className="contact-link">
            <Mail size={21} />
            <span>{contact.email}</span>
          </a>
          <a href={`mailto:${contact.alternateEmail}`} className="contact-link">
            <Mail size={21} />
            <span>{contact.alternateEmail}</span>
          </a>
          <a href={`tel:${contact.phone}`} className="contact-link">
            <Phone size={21} />
            <span>{contact.phone}</span>
          </a>
          <div className="contact-link">
            <MapPin size={21} />
            <span>{contact.location}</span>
          </div>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <Linkedin size={21} />
            <span>linkedin.com/in/swarkhatav</span>
          </a>
          <a href={contact.resume} target="_blank" rel="noreferrer" className="contact-link">
            <FileText size={21} />
            <span>View resume PDF</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
