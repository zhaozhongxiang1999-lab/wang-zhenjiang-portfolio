"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>(".stack-panel"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const enabled = window.innerWidth >= 1100 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const viewport = window.innerHeight;

      panels.forEach((panel, index) => {
        panel.style.setProperty("--panel-z", String(index + 1));
        if (!enabled || !panels[index + 1]) {
          panel.style.setProperty("--panel-opacity", "1");
          panel.style.setProperty("--panel-scale", "1");
          panel.style.setProperty("--panel-blur", "0px");
          return;
        }
        const nextTop = panels[index + 1].getBoundingClientRect().top;
        const progress = Math.min(Math.max((viewport - nextTop) / viewport, 0), 1);
        panel.style.setProperty("--panel-opacity", (1 - progress).toFixed(4));
        panel.style.setProperty("--panel-scale", (1 - progress * 0.035).toFixed(4));
        panel.style.setProperty("--panel-blur", `${(progress * 2.5).toFixed(2)}px`);
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return null;
}
