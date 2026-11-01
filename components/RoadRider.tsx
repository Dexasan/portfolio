"use client";

import { useEffect, useRef, useState } from "react";

export default function RoadRider() {
  const scene = useRef<HTMLDivElement>(null);
  const route = useRef<SVGPathElement>(null);
  const rider = useRef<SVGGElement>(null);
  const wheels = useRef<SVGGElement>(null);
  const lap = useRef<number | null>(null);
  const [racing, setRacing] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let current = 0.1;
    let target = 0.1;
    let lastAngle = 0;
    let alive = true;

    function place(progress: number) {
      const path = route.current;
      if (!path || !rider.current) return;
      const length = path.getTotalLength();
      const at = Math.max(0, Math.min(1, progress)) * length;
      const point = path.getPointAtLength(at);
      const ahead = path.getPointAtLength(Math.min(length, at + 3));
      const behind = path.getPointAtLength(Math.max(0, at - 3));
      const angle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180 / Math.PI;
      const lean = Math.max(-6, Math.min(6, (angle - lastAngle) * 2));
      rider.current.setAttribute("transform", `translate(${point.x} ${point.y - 2}) rotate(${angle + lean})`);
      wheels.current?.style.setProperty("--wheel-turn", `${progress * 3600}deg`);
      lastAngle = angle;
    }

    function measure() {
      if (!scene.current) return;
      const rect = scene.current.getBoundingClientRect();
      target = Math.max(0.06, Math.min(0.94, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      if (!preference.matches && !frame) frame = requestAnimationFrame(tick);
    }

    function tick(time: number) {
      frame = 0;
      if (!alive || preference.matches) return;
      if (lap.current !== null) {
        if (lap.current < 0) lap.current = time;
        const elapsed = Math.min(1, (time - lap.current) / 2100);
        // Accelerate, cruise, then slow down into the last bend.
        current = elapsed < 0.5 ? 2 * elapsed * elapsed : 1 - Math.pow(-2 * elapsed + 2, 2) / 2;
        place(0.035 + current * 0.93);
        if (elapsed < 1) frame = requestAnimationFrame(tick);
        else {
          lap.current = null;
          current = 0.965;
          setRacing(false);
        }
        return;
      }
      current += (target - current) * 0.085;
      place(current);
      if (Math.abs(target - current) > 0.0005) frame = requestAnimationFrame(tick);
    }

    function onPreference() {
      setReduced(preference.matches);
      if (preference.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        lap.current = null;
        setRacing(false);
        current = 0.45;
        place(current);
      } else measure();
    }

    function startLap() {
      if (preference.matches) return;
      lap.current = -1;
      if (!frame) frame = requestAnimationFrame(tick);
    }

    onPreference();
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    preference.addEventListener("change", onPreference);
    scene.current?.addEventListener("take-lap", startLap);
    const element = scene.current;
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      preference.removeEventListener("change", onPreference);
      element?.removeEventListener("take-lap", startLap);
    };
  }, []);

  return <div className="road-interlude" ref={scene}>
    <svg className="road-scene" viewBox="0 0 600 120" fill="none" aria-hidden="true">
      <path className="road-edge" d="M-20 83C68 83 62 45 151 45S262 96 341 85 431 39 488 48 555 82 620 63" />
      <path ref={route} className="road-route" d="M-20 73C68 73 62 35 151 35S262 86 341 75 431 29 488 38 555 72 620 53" />
      <g ref={rider} className="little-rider" transform="translate(55 50)">
        <g ref={wheels}>
          <g className="rider-wheel rear-wheel"><circle cx="-18" cy="-6" r="10"/><path d="M-18-16V4M-28-6h20M-25-13l14 14M-25 1l14-14"/></g>
          <g className="rider-wheel front-wheel"><circle cx="21" cy="-6" r="10"/><path d="M21-16V4M11-6h20M14-13l14 14M14 1l14-14"/></g>
        </g>
        <path className="bike-frame" d="m-18-6 10-16 18 1 11 15m-33-15 17 15h-23m16-15 7-8 6 2m-36 3h15m-8 9 4 9h13v-10"/>
        <path className="bike-tank" d="M-10-22q5-8 13-4l10 7H-9z"/>
        <path className="bike-engine" d="M-9-17H7v10H-7zm2 4H5m-11 3h10M-29-11q10-13 22 0m17-2q11-13 21 1"/>
        <path className="rider-body" d="m-10-25 5-14 15 4 5 11m-16-10-2 15 10 7-5 11"/>
        <path className="rider-helmet" d="M-5-41c-7-2-8-14 0-16 7-3 13 2 12 9l-7 1 5 6z"/>
        <path className="speed-ink" d="m-41-24-13 1m16 8-21 2m20-8-9 1"/>
      </g>
    </svg>
    <div className="road-caption"><span>yeah, road rash started all of this.</span><button onClick={() => {
      if (reduced) return;
      setRacing(true);
      scene.current?.dispatchEvent(new Event("take-lap"));
    }} disabled={racing || reduced} aria-label={reduced ? "Animation disabled by your reduced motion preference" : "Animate the motorcycle along the road"}>{racing ? "there he goes" : reduced ? "parked for now" : "take a lap ↗"}</button></div>
  </div>;
}
