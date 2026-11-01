"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageMotion() {
  const path = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const elements = document.querySelectorAll<HTMLElement>(
      ".home-intro, .home-paths>a, .home-signoff, .reading-prose>p, .reading-prose>h2, .selected-work>a, .archive-row",
    );
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add("ink-arrived");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    elements.forEach((element, index) => {
      if (element.getBoundingClientRect().top > window.innerHeight - 20) {
        element.classList.add("ink-entrance");
        element.style.setProperty("--arrival-delay", `${Math.min(index % 4, 3) * 45}ms`);
        observer.observe(element);
      }
    });
    const revealAll = () => elements.forEach(element => element.classList.add("ink-arrived"));
    preference.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", revealAll);
      elements.forEach(element => element.classList.remove("ink-entrance", "ink-arrived"));
    };
  }, [path]);
  return null;
}
