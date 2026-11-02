"use client";

import { useEffect, useRef } from "react";
import BikeArtwork from "./BikeArtwork";

export default function CursorBike() {
  const sprite = useRef<SVGSVGElement>(null);
  const body = useRef<SVGGElement>(null);
  const wheels = useRef<SVGGElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    let frame = 0;
    let visible = false;
    let resumeAt = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let turn = 0;
    let facing = 1;

    function park() {
      cancelAnimationFrame(frame);
      frame = 0;
      visible = false;
      sprite.current?.setAttribute("data-visible", "false");
      delete document.documentElement.dataset.bikeFollowing;
    }

    function tick() {
      frame = 0;
      if (!visible || reduced.matches || !fine.matches) return;
      const dx = (targetX - x) * 0.12;
      const dy = (targetY - y) * 0.12;
      x += dx;
      y += dy;
      if (Math.abs(dx) > 0.15) facing = dx > 0 ? 1 : -1;
      const lean = Math.max(-18, Math.min(18, dy * facing * 2.5));
      turn += Math.hypot(dx, dy) * 7 * facing;
      if (sprite.current) sprite.current.style.transform = `translate3d(${x - 36}px, ${y - 50}px, 0)`;
      body.current?.setAttribute("transform", `translate(45 64) scale(${facing} 1) rotate(${lean})`);
      wheels.current?.style.setProperty("--wheel-turn", `${turn}deg`);
      if (Math.hypot(targetX - x, targetY - y) > 0.2) frame = requestAnimationFrame(tick);
    }

    function follow(event: PointerEvent) {
      if (event.pointerType !== "mouse" || reduced.matches || !fine.matches || performance.now() < resumeAt) return;
      targetX = Math.max(40, Math.min(window.innerWidth - 40, event.clientX - 22));
      targetY = Math.max(55, Math.min(window.innerHeight - 20, event.clientY + 36));
      if (!visible) {
        x = targetX - 30;
        y = targetY;
        visible = true;
        sprite.current?.setAttribute("data-visible", "true");
        document.documentElement.dataset.bikeFollowing = "true";
      }
      if (!frame) frame = requestAnimationFrame(tick);
    }

    function leave(event: PointerEvent) { if (!event.relatedTarget) park(); }
    function lap() { resumeAt = performance.now() + 2300; park(); }
    window.addEventListener("pointermove", follow, { passive: true });
    window.addEventListener("pointerout", leave);
    window.addEventListener("blur", park);
    window.addEventListener("take-lap", lap, true);
    reduced.addEventListener("change", park);
    fine.addEventListener("change", park);
    return () => {
      park();
      window.removeEventListener("pointermove", follow);
      window.removeEventListener("pointerout", leave);
      window.removeEventListener("blur", park);
      window.removeEventListener("take-lap", lap, true);
      reduced.removeEventListener("change", park);
      fine.removeEventListener("change", park);
    };
  }, []);

  return <svg ref={sprite} className="cursor-bike" data-visible="false" viewBox="0 0 90 90" fill="none" aria-hidden="true">
    <g ref={body} className="little-rider" transform="translate(45 64)"><BikeArtwork wheelsRef={wheels}/></g>
  </svg>;
}
