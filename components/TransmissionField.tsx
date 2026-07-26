"use client";

import { useEffect, useRef } from "react";

type Bubble = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  phase: number;
  radius: number;
  drift: number;
  speed: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  life: number;
};

export default function TransmissionField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const contextElement = canvasElement.getContext("2d");
    if (!contextElement) return;

    const canvas: HTMLCanvasElement = canvasElement;
    const context: CanvasRenderingContext2D = contextElement;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let bubbles: Bubble[] = [];
    let ripples: Ripple[] = [];
    let lastRipple = 0;
    let lastTime = 0;
    let spacing = 108;
    const pointer = { x: width / 2, y: height / 2, active: false };

    function buildField() {
      spacing = width < 700 ? 108 : 96;
      bubbles = [];

      for (let y = -spacing; y <= height + spacing; y += spacing) {
        for (let x = -spacing; x <= width + spacing; x += spacing) {
          const seed = Math.abs(Math.sin(x * 12.9898 + y * 78.233));
          const offsetX = Math.sin((x + y) * 0.013) * 34;
          const offsetY = Math.cos((x - y) * 0.011) * 28;
          bubbles.push({
            x: x + offsetX,
            y: y + offsetY,
            baseX: x + offsetX,
            baseY: y + offsetY,
            phase: (x * 0.003 + y * 0.005) % (Math.PI * 2),
            // Smaller bubbles than before — reads as water, not blobs.
            radius: 2.5 + seed * 8,
            drift: 0.55 + seed * 0.8,
            // Per-bubble rise speed (px/sec) for a real upward current.
            speed: 9 + seed * 20,
          });
        }
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      buildField();
    }

    function ripple(x: number, y: number) {
      ripples.push({ x, y, radius: 8, life: 1 });
      if (ripples.length > 5) ripples.shift();
    }

    function handlePointerMove(event: PointerEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;

      const now = performance.now();
      if (now - lastRipple > 130) {
        ripple(pointer.x, pointer.y);
        lastRipple = now;
      }
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    function draw(time = 0) {
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      const wrapSpan = height + spacing * 2;

      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "screen";

      bubbles.forEach((bubble) => {
        // Rise upward on a loop so the field feels like a live current.
        if (!reducedMotion) {
          bubble.baseY -= bubble.speed * dt;
          if (bubble.baseY < -spacing) {
            bubble.baseY += wrapSpan;
            bubble.y += wrapSpan; // snap so it doesn't streak across screen
          }
        }

        const horizontalDrift = reducedMotion
          ? 0
          : Math.sin(time * 0.00028 * bubble.drift + bubble.phase) * 9;
        const verticalDrift = reducedMotion
          ? 0
          : Math.cos(time * 0.0002 * bubble.drift + bubble.phase) * 13;
        let targetX = bubble.baseX + horizontalDrift;
        let targetY = bubble.baseY + verticalDrift;

        if (pointer.active) {
          const dx = bubble.baseX - pointer.x;
          const dy = bubble.baseY - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 240 && distance > 0) {
            const push = (1 - distance / 240) * 38;
            targetX += (dx / distance) * push;
            targetY += (dy / distance) * push;
          }
        }

        bubble.x += (targetX - bubble.x) * 0.055;
        bubble.y += (targetY - bubble.y) * 0.055;
      });

      bubbles.forEach((bubble) => {
        const distance = pointer.active
          ? Math.hypot(pointer.x - bubble.x, pointer.y - bubble.y)
          : 999;
        const reaction = Math.max(0, 1 - distance / 240);
        const radius = bubble.radius * (1 + reaction * 0.55);
        const fill = context.createRadialGradient(
          bubble.x - radius * 0.32,
          bubble.y - radius * 0.38,
          radius * 0.08,
          bubble.x,
          bubble.y,
          radius,
        );
        fill.addColorStop(0, `rgba(225, 255, 253, ${0.1 + reaction * 0.2})`);
        fill.addColorStop(0.45, `rgba(75, 212, 206, ${0.035 + reaction * 0.08})`);
        fill.addColorStop(1, "rgba(75, 212, 206, 0)");

        context.beginPath();
        context.arc(bubble.x, bubble.y, radius, 0, Math.PI * 2);
        context.fillStyle = fill;
        context.fill();
        context.strokeStyle = `rgba(160, 244, 239, ${0.13 + reaction * 0.42})`;
        context.lineWidth = 0.8 + reaction * 0.8;
        context.stroke();

        context.beginPath();
        context.arc(
          bubble.x,
          bubble.y,
          radius * 0.72,
          Math.PI * 1.08,
          Math.PI * 1.48,
        );
        context.strokeStyle = `rgba(245, 255, 255, ${0.2 + reaction * 0.45})`;
        context.lineWidth = 1.1;
        context.stroke();
      });

      ripples = ripples
        .map((currentRipple) => ({
          ...currentRipple,
          radius: currentRipple.radius + 2.9,
          life: currentRipple.life - 0.022,
        }))
        .filter((currentRipple) => currentRipple.life > 0);

      ripples.forEach((currentRipple) => {
        context.beginPath();
        context.arc(
          currentRipple.x,
          currentRipple.y,
          currentRipple.radius,
          0,
          Math.PI * 2,
        );
        context.strokeStyle = `rgba(153, 245, 240, ${currentRipple.life * 0.28})`;
        context.lineWidth = 1.2;
        context.stroke();
      });

      context.restore();
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas className="transmission-field" ref={canvasRef} aria-hidden="true" />;
}
