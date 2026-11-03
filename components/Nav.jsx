"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "../data/content";
import Logo from "./Logo";

const LINKS = [
  { label: "Home", href: "/home", anchor: "home" },
  { label: "About", href: "/about", anchor: "about" },
  { label: "Services", href: "/services", anchor: "services" },
  { label: "Industries", href: "/industries", anchor: "industries" },
  { label: "Engagement", href: "/engagement", anchor: "engagement" },
  { label: "Careers", href: "/careers", anchor: "careers" },
  { label: "Contact", href: "/contact", anchor: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(LINKS[0].anchor);
  const [active, setActive] = useState(LINKS[0].anchor);
  const contactHref = "contact";

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry.target.id);

          if (entry.isIntersecting) {
            setSelectedMenu(entry.target.id);
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl" data-testid="site-nav">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={"/"} className="flex items-center gap-3" data-testid="nav-logo-link" onClick={() => setOpen(false)}>
          <Logo />
          <span className="font-display text-5xl font-bold tracking-tight text-slate-50">
            {site.short}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            l.anchor !== 'contact' ? (
              <a
                key={l.label}
                onClick={(e) => { scrollToSection(e, l.anchor); setSelectedMenu(l.anchor); }}
                data-testid={`nav-${l.label.toLowerCase()}-link`}
                className={`text-sm font-medium transition-colors cursor-pointer duration-200 ${selectedMenu === l.anchor ? "text-accent font-semibold" : "text-slate-300 hover:text-accent"
                  }`}
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.label}
                onClick={(e) => { scrollToSection(e, l.anchor); setSelectedMenu(l.anchor); }}
                data-testid="nav-contact-button"
                className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-semibold cursor-pointer text-accent transition-all duration-200 hover:bg-accent hover:text-ink"
              >
                {l.label}
              </a>
            )
          ))}
        </div>

        <button className="text-slate-200 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" data-testid="nav-menu-toggle">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-deep/95 px-6 py-4 backdrop-blur-xl lg:hidden" data-testid="nav-mobile-menu">
          {LINKS.map((l) => (
            l.anchor !== 'contact' ? (

              <a key={l.label} onClick={(e) => { setOpen(false); scrollToSection(e, l.anchor); setSelectedMenu(l.anchor); }} data-testid={`nav-mobile-${l.label.toLowerCase()}-link`}
                className="block py-3 text-sm font-medium text-slate-200 hover:text-accent">
                {l.label}
              </a>
            ) : (
              <a
                key={l.label}
                onClick={(e) => { setOpen(false); scrollToSection(e, l.anchor); setSelectedMenu(l.anchor); }} data-testid="nav-mobile-contact-button"
                className="mt-2 block rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-center text-sm font-semibold text-accent">
                Contact
              </a>
            )))
          }
        </div>
      )}
    </header>
  );
}
