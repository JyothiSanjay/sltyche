"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ anchors: true, lerp: 0.1 });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return children;
}
