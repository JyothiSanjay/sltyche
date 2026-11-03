import { marqueeItems } from "../data/content";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-deep py-5" data-testid="marquee" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-lg font-semibold tracking-wide text-slate-400">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
