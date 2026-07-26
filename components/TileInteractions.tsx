"use client";

import { useEffect } from "react";

const TILE_SELECTOR =
  ".ocean-project-card, .current-row, .catalog-item, .notebook-card, .archive-list a, .contact-channels a";

/**
 * Adds touch/press feedback to the card "tiles" that previously only had a
 * hover state (or none): a cursor-following spotlight via --mx/--my and a
 * ripple spawned on press, so taps register on touch devices too.
 *
 * Listeners are delegated at the document level, so tiles on any route work
 * without per-page wiring. Honors prefers-reduced-motion.
 */
export default function TileInteractions() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tiles = Array.from(
      document.querySelectorAll<HTMLElement>(TILE_SELECTOR),
    );
    tiles.forEach((tile) => tile.classList.add("tap-fx"));
    if (reduced) return;

    function onPointerMove(event: PointerEvent) {
      const target = event.target as Element | null;
      const tile = target?.closest<HTMLElement>(".tap-fx");
      if (!tile) return;
      const rect = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      tile.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Element | null;
      const tile = target?.closest<HTMLElement>(".tap-fx");
      if (!tile) return;
      const rect = tile.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.15;
      const ripple = document.createElement("span");
      ripple.className = "tap-ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      ripple.addEventListener("animationend", () => ripple.remove());
      tile.appendChild(ripple);
    }

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return null;
}
