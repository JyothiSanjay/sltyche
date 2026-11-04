"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import ServicesBento from "./ServicesBento";
import ContactForm from "./ContactForm";
import { about, industries, modules, roles, steps, talent, values, why, perks, engagementModels, methodology, site } from "../data/content";
import Image from "next/image";

export function SectionHead({ kicker, title, body }) {
  return (
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{kicker}</p>
      <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold leading-tight tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">{title}</h2>
      {body && <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">{body}</p>}
    </Reveal>
  );
}

export function PageHead({ kicker, title, body }) {
  return (
    <section className="noise relative overflow-hidden border-b border-white/10 bg-ink-deep/40 pt-36 pb-16">
      <div className="absolute inset-0 -z-10 grid-lines" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{kicker}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl">{title}</h1>
          {body && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">{body}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function AboutBlock({ preview = false }) {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24" data-testid="about-section">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead kicker="Who We Are" title="Building Long-Term SAP Success" body={about.who} />
          {!preview && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-ink-deep p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">Vision</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{about.vision}</p>
              </Reveal>
              <Reveal delay={0.18} className="rounded-2xl border border-white/10 bg-ink-deep p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">Mission</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{about.mission}</p>
              </Reveal>
            </div>
          )}
          {/* {preview && (
            <Reveal delay={0.15}>
              <Link href="/about" data-testid="about-more-link" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Vision, Mission & Values <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )} */}
        </div>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/image1.png" width={800} height={600}
              alt="Sloan Tyche SAP consulting team collaborating"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-300">Bangalore · Global Delivery</p>
          </div>
        </Reveal>
      </div>
      {!preview && (
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07} className="rounded-2xl border border-white/10 bg-ink-deep p-6 transition-colors duration-300 hover:border-accent/40">
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-slate-50">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24" data-testid="services-section">
      <SectionHead kicker="Our Core Services" title="End-to-End SAP Expertise, One Partner"
        body="From strategic consulting and S/4HANA transformation to talent augmentation and 24/7 managed services — everything your SAP landscape needs." />
      <div className="mt-12">
        <ServicesBento />
      </div>
    </section>
  );
}

export function ModulesStrip() {
  return (
    <section className="border-y border-white/10 bg-ink-deep/40 py-16" data-testid="modules-strip">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead kicker="Module Expertise" title="Deep Coverage Across the SAP Ecosystem" />
        <div className="mt-10 flex flex-wrap gap-3">
          {modules.map((m, i) => (
            <Reveal key={m} delay={i * 0.03}>
              <span className="rounded-full border border-white/10 bg-ink px-4 py-2 text-sm text-slate-300 transition-colors duration-200 hover:border-accent/40 hover:text-accent">{m}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TalentBlock() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" data-testid="talent-section">
      <SectionHead kicker="Resource Augmentation" title="Expert SAP Talent On Demand"
        body="Immediate access to highly qualified SAP professionals who integrate seamlessly into your teams and deliver project success." />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {talent.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.08} className="rounded-2xl border border-white/10 bg-ink-deep p-8 transition-colors duration-300 hover:border-accent/40">
            <h3 className="font-display text-xl font-semibold text-slate-50">{t.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {t.items.map((it) => (
                <li key={it} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {engagementModels.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.06} className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
            <h4 className="font-display text-base font-semibold text-accent">{m.title}</h4>
            <p className="mt-2 text-sm text-slate-400">{m.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="border-y border-white/10 bg-ink-deep/40 py-24" data-testid="why-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead kicker="Why Sloan Tyche" title="The Partner Behind Successful SAP Programs" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="group rounded-2xl border border-white/10 bg-ink p-7 transition-colors duration-300 hover:border-accent/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent"><Check size={17} /></div>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-50">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection({ full = false }) {
  return (
    <section id="industries" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24" data-testid="industries-section">
      <SectionHead kicker="Industries We Serve" title="SAP Expertise Across Every Sector"
        body="We support startups, mid-sized organizations, large enterprises and global system integrators across industries." />
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 0.05} className="group rounded-2xl border border-white/10 bg-ink-deep p-6 transition-colors duration-300 hover:border-accent/40">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">0{i + 1}</p>
            <h3 className="mt-3 font-display text-base font-semibold text-slate-50 transition-colors group-hover:text-accent sm:text-lg">{ind.name}</h3>
            {full && <p className="mt-2 text-xs leading-relaxed text-slate-400">{ind.desc}</p>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section id="engagement" className="border-y border-white/10 bg-ink-deep/40 py-24" data-testid="steps-section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead kicker="Client Engagement Model" title="From Discovery to Long-Term Success" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08} className="relative rounded-2xl border border-white/10 bg-ink p-7 transition-colors duration-300 hover:border-accent/40">
              <span className="font-display text-4xl font-extrabold text-accent/20">{s.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-50">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MethodologySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" data-testid="methodology-section">
      <SectionHead kicker="Project Methodology" title="Delivering SAP Projects With Confidence"
        body="A disciplined delivery framework that mitigates risk, maintains timelines and achieves measurable business outcomes." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {methodology.map((m, i) => (
          <Reveal key={m.step} delay={i * 0.06} className="rounded-2xl border border-white/10 bg-ink-deep p-6 transition-colors duration-300 hover:border-accent/40">
            <span className="font-mono text-xs text-accent">{m.step}</span>
            <h3 className="mt-3 font-display text-base font-semibold text-slate-50">{m.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">{m.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CareersSection({ preview = false }) {
  return (
    <section id="careers" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24" data-testid="careers-section">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead kicker="Careers" title="Grow Your SAP Career With Sloan Tyche"
            body="We are always looking for passionate SAP professionals who want to work on impactful projects and drive business transformation." />
          <div className="mt-8 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span key={r} className="rounded-full border border-white/10 bg-ink-deep px-4 py-1.5 text-xs text-slate-300">{r}</span>
            ))}
          </div>
          <Reveal delay={0.15}>
            <a href={`mailto:${site.careersEmail}`} data-testid="careers-apply-button"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-ink">
              Send Your Resume <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/image3.png" width={800} height={600}
              alt="SAP professionals collaborating at Sloan Tyche"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
          {!preview && (
            <div className="mt-4 grid grid-cols-2 gap-3">
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-2 rounded-xl border border-white/10 bg-ink-deep px-4 py-3 text-xs text-slate-300">
                  <Check size={13} className="shrink-0 text-accent" /> {p}
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection({ id = "contact" }) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24" data-testid="contact-section">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHead kicker="Contact Us" title="Let's Build Your SAP Success Story"
            body="Whether you need SAP consultants, project support, implementation expertise or managed services — tell us about your requirements and our team will connect with you." />
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-4 text-sm text-slate-300">
              <p className="font-display text-base font-semibold text-slate-50">{site.name}</p>
              <p>{site.location}</p>
              <p><a href={`mailto:${site.email}`} className="text-accent hover:underline" data-testid="contact-email-link">{site.email}</a></p>
              <p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent" data-testid="contact-phone-link">{site.phone}</a></p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

// export function CTABand() {
//   return (
//     <section className="border-t border-white/10 bg-ink-deep/40" data-testid="cta-band">
//       <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center">
//         <Reveal>
//           <h2 className="max-w-xl font-display text-2xl font-bold leading-tight tracking-tight text-slate-50 sm:text-3xl">
//             Let's Discuss Your SAP Requirements
//           </h2>
//           <p className="mt-3 max-w-lg text-sm text-slate-400">Partner with us to accelerate your SAP journey — from a single consultant to end-to-end program delivery.</p>
//         </Reveal>
//         <Reveal delay={0.1}>
//           <Link href="/contact" data-testid="cta-contact-button"
//             className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:shadow-[0_0_36px_rgba(0,229,255,0.35)]">
//             Talk to Our SAP Team <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//           </Link>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
