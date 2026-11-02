"use client";

import { useEffect, useRef, useState } from "react";
import BikeArtwork from "./BikeArtwork";

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

    function follow(event: PointerEvent) {
      if (event.pointerType !== "mouse" || preference.matches || lap.current !== null) return;
      const track = route.current?.ownerSVGElement;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      target = Math.max(0.035, Math.min(0.965, (event.clientX - rect.left) / rect.width));
      if (!frame) frame = requestAnimationFrame(tick);
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
      } else place(current);
    }

    function startLap() {
      if (preference.matches) return;
      lap.current = -1;
      if (!frame) frame = requestAnimationFrame(tick);
    }

    onPreference();
    const track = route.current?.ownerSVGElement;
    track?.addEventListener("pointermove", follow, { passive: true });
    preference.addEventListener("change", onPreference);
    scene.current?.addEventListener("take-lap", startLap);
    const element = scene.current;
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      track?.removeEventListener("pointermove", follow);
      preference.removeEventListener("change", onPreference);
      element?.removeEventListener("take-lap", startLap);
    };
  }, []);

  return <div className="road-interlude" ref={scene}>
    <svg className="road-scene" viewBox="0 0 600 120" fill="none" aria-hidden="true">
      <path className="road-edge" d="M-20 83C68 83 62 45 151 45S262 96 341 85 431 39 488 48 555 82 620 63" />
      <path ref={route} className="road-route" d="M-20 73C68 73 62 35 151 35S262 86 341 75 431 29 488 38 555 72 620 53" />
      <g ref={rider} className="little-rider" transform="translate(55 50)">
        <BikeArtwork wheelsRef={wheels}/>
      </g>
    </svg>
    <div className="road-caption"><span className="cursor-road-caption">move your mouse along the road.</span><span className="touch-road-caption">road rash started all of this.</span><button onClick={() => {
      if (reduced) return;
      setRacing(true);
      scene.current?.dispatchEvent(new Event("take-lap"));
    }} disabled={racing || reduced} aria-label={reduced ? "Animation disabled by your reduced motion preference" : "Animate the motorcycle along the road"}>{racing ? "there he goes" : reduced ? "parked for now" : "take a lap ↗"}</button></div>
  </div>;
}
