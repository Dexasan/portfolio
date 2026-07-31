"use client";

import { useEffect } from "react";

// Non-focusable card tiles (overflow-clipping is safe on these — no focus ring
// to clip). Kept in sync with the selector list in globals.css.
const TILE_SELECTOR =
  ".ocean-project-card, .current-row, .catalog-item, .notebook-card";

/**
 * Adds touch/press feedback to card "tiles": a cursor-following spotlight via
 * --mx/--my and a ripple spawned on press, so taps register on touch devices.
 *
 * Handlers are delegated on the document and match tiles live via closest(),
 * so they work on every route (including client-side navigations) without
 * depending on when the layout mounted. Honors prefers-reduced-motion.
 */
export default function TileInteractions() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onPointerMove(event: PointerEvent) {
      const target = event.target as Element | null;
      const tile = target?.closest<HTMLElement>(TILE_SELECTOR);
      if (!tile) return;
      const rect = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      tile.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Element | null;
      const tile = target?.closest<HTMLElement>(TILE_SELECTOR);
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
