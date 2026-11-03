"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

const MODULES = [
  "SAP S/4HANA", "SAP FICO / MM / SD", "SAP SuccessFactors",
  "SAP BTP / Integration", "SAP Staffing Augmentation", "Other / General Inquiry",
];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-colors duration-200 focus:border-accent/60";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (url) {
      try {
        await fetch(url, { method: "POST", mode: "no-cors", body: new FormData(e.target) });
      } catch {}
    } else {
      await new Promise((r) => setTimeout(r, 800));
    }
    setStatus("sent");
    e.target.reset();
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-accent/30 bg-ink-deep p-10 text-center" data-testid="contact-form-success">
        <CheckCircle2 size={48} className="text-accent" />
        <h3 className="mt-6 font-display text-2xl font-semibold text-slate-50">Requirement Received</h3>
        <p className="mt-3 max-w-sm text-sm text-slate-400">
          Thank you for reaching out. Our SAP team will connect with you shortly to discuss the best solution for your business.
        </p>
        <button onClick={() => setStatus("idle")} data-testid="contact-form-again-button"
          className="mt-8 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/50 hover:text-accent">
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-ink-deep p-8" data-testid="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Full Name *</label>
          <input id="cf-name" name="name" required placeholder="Your name" className={inputCls} data-testid="contact-form-name-input" />
        </div>
        <div>
          <label htmlFor="cf-company" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Company *</label>
          <input id="cf-company" name="company" required placeholder="Company name" className={inputCls} data-testid="contact-form-company-input" />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Business Email *</label>
          <input id="cf-email" name="email" type="email" required placeholder="you@company.com" className={inputCls} data-testid="contact-form-email-input" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Phone</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="+91" className={inputCls} data-testid="contact-form-phone-input" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-module" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">SAP Module Required</label>
          <select id="cf-module" name="sap_module" className={inputCls} data-testid="contact-form-module-select" defaultValue={MODULES[0]}>
            {MODULES.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-details" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Project Details *</label>
          <textarea id="cf-details" name="project_details" required rows={5} placeholder="Tell us about your SAP requirements, timelines and team size…" className={inputCls} data-testid="contact-form-details-textarea" />
        </div>
      </div>
      <button type="submit" disabled={status === "sending"} data-testid="contact-form-submit-button"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:shadow-[0_0_36px_rgba(0,229,255,0.35)] disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Submit Requirement"}
        <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
