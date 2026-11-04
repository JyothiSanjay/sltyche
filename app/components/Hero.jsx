"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero, site } from "../data/content";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero({ primary = { label: "Let's Discuss Your SAP Requirements", href: "contact" }, secondary = { label: "Explore Services", href: "services" } }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 180]);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="noise relative w-full flex min-h-[100svh] items-center overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="image4.png" width={1920} height={1080}
          alt="Enterprise technology architecture"
          className="h-[120%] w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 grid-lines" />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent"
          data-testid="hero-kicker"
        >
          {hero.kicker}
        </motion.p>

        <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
          {hero.lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: EASE }}
              >
                {i === 1 ? <span className="text-accent">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="mt-8 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          data-testid="hero-subtext"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a onClick={(e) => scrollToSection(e, primary.href)} data-testid="hero-primary-cta"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-ink transition-all duration-300 cursor-pointer hover:shadow-[0_0_36px_rgba(0,229,255,0.35)]">
            {primary.label}
            <ArrowRight size={16} className="transition-transform  duration-300 group-hover:translate-x-1" />
          </a>
          <a onClick={(e) => scrollToSection(e, secondary.href)} data-testid="hero-secondary-cta"
            className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-colors cursor-pointer duration-300 hover:border-accent/50 hover:text-accent">
            {secondary.label}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3"
        >
          {hero.badges.map((b) => (
            <span key={b} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 lg:block">
        {site.location}
      </div>
    </section>
  );
}
