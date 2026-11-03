"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "../components/Logo";
import { site } from "../data/content";

export default function Footer() {
  const pathname = usePathname();
  const spa = pathname.startsWith("/one-page");
  const pages = [
    { label: "Services", href: spa ? "/one-page#services" : "/services" },
    { label: "Industries", href: spa ? "/one-page#industries" : "/industries" },
    { label: "Engagement", href: spa ? "/one-page#engagement" : "/engagement" },
    { label: "Careers", href: spa ? "/one-page#careers" : "/careers" },
    { label: "About", href: spa ? "/one-page#about" : "/about" },
    { label: "Contact", href: spa ? "/one-page#contact" : "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink-deep" data-testid="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-lg font-bold text-slate-50">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            A trusted SAP consulting and talent solutions partner helping organizations accelerate digital transformation and deliver successful SAP programs.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Navigate</p>
          <ul className="mt-5 space-y-3">
            {pages.map((p) => (
              <li key={p.label}>
                <Link href={p.href} data-testid={`footer-${p.label.toLowerCase()}-link`} className="text-sm text-slate-400 transition-colors hover:text-accent">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-3"><Mail size={15} className="text-accent" /><a href={`mailto:${site.email}`} data-testid="footer-email-link" className="hover:text-accent">{site.email}</a></li>
            <li className="flex items-center gap-3"><Phone size={15} className="text-accent" /><a href={`tel:${site.phone.replace(/\s/g, "")}`} data-testid="footer-phone-link" className="hover:text-accent">{site.phone}</a></li>
            <li className="flex items-center gap-3"><MapPin size={15} className="text-accent" />{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
        © {new Date().getFullYear()} {site.name} · {site.tagline}
      </div>
    </footer>
  );
}
