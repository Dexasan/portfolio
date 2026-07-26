"use client";

import { useEffect } from "react";

export default function MotionController() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".about-current-copy, .ocean-section-heading, .current-row, .ocean-project-card, .section-heading, .notebook-card, .principles-grid article, .catalog-item, .archive-list a, .case-section, .timeline article, .capability-list article, .contact-channels a",
      ),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    targets.forEach((target, index) => {
      target.classList.add("motion-target");
      target.style.setProperty("--motion-order", String(index % 4));
    });
    document.documentElement.classList.add("motion-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
