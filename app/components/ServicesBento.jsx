"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "../data/content";

export default function ServicesBento() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12" data-testid="services-bento">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={i * 0.06} className={`col-span-full ${s.span}`}>
          <article
            data-testid={`service-card-${s.id}`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-deep p-8 transition-colors duration-300 hover:border-accent/40"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 blur-2xl transition-opacity duration-500 group-hover:bg-accent/10" />
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                {s.badge}
              </span>
              <ArrowUpRight size={20} className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-slate-50 sm:text-2xl">{s.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.points.map((p) => (
                <li key={p} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{p}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
