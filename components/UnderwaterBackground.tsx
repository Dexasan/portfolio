'use client';

import { useEffect, useRef } from 'react';

/**
 * Site-wide underwater ambiance.
 *
 * A fixed, pointer-transparent canvas rendered behind all content:
 *  - slow drifting caustic light (looking-into-water shimmer)
 *  - small bubbles rising with a lateral wobble
 *  - a soft light that follows the cursor and gently pushes nearby bubbles,
 *    with ripple rings on quick movement
 *
 * Tuned low-opacity + warm/aqua so it sits under the light theme without
 * washing out text. Honors prefers-reduced-motion (static, no rAF loop).
 */

interface Bubble {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
}

interface Ripple {
  x: number;
  y: number;
  r: number;
  life: number;
}

export default function UnderwaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    // Non-null within this scope; alias so nested closures keep the narrowing.
    const g: CanvasRenderingContext2D = context;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    let bubbles: Bubble[] = [];
    const ripples: Ripple[] = [];

    // Pointer state (target vs eased, so the light glides rather than snaps).
    const pointer = { x: -9999, y: -9999, active: false };
    const light = { x: -9999, y: -9999 };
    let lastMoveT = 0;

    function makeBubble(atBottom: boolean): Bubble {
      // Mostly small bubbles, a few medium — deliberately not big.
      const r = 1.5 + Math.pow(Math.random(), 2.2) * 11;
      return {
        x: Math.random() * width,
        y: atBottom ? height + r + Math.random() * height : Math.random() * height,
        r,
        speed: 8 + (14 - r) * 1.6 + Math.random() * 10,
        drift: 12 + Math.random() * 20,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.05 + Math.random() * 0.16,
      };
    }

    function resize() {
      const cv = canvasRef.current;
      if (!cv) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      cv.width = Math.floor(width * dpr);
      cv.height = Math.floor(height * dpr);
      cv.style.width = `${width}px`;
      cv.style.height = `${height}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(46, (width * height) / 30000));
      bubbles = Array.from({ length: count }, () => makeBubble(false));
    }

    // ── Caustic light: a few large, slowly-shifting radial gradients ──
    function drawCaustics(t: number) {
      const blobs = [
        { bx: 0.2, by: 0.15, br: 0.55, sx: 0.00013, sy: 0.00009, h: '190 90% 70%' },
        { bx: 0.8, by: 0.35, br: 0.6, sx: 0.00009, sy: 0.00015, h: '170 80% 72%' },
        { bx: 0.5, by: 0.85, br: 0.7, sx: 0.00011, sy: 0.00007, h: '320 90% 72%' },
      ];
      g.globalCompositeOperation = 'multiply';
      for (const b of blobs) {
        const cx = (b.bx + Math.sin(t * b.sx + b.by * 9) * 0.06) * width;
        const cy = (b.by + Math.cos(t * b.sy + b.bx * 9) * 0.06) * height;
        const rad = b.br * Math.max(width, height);
        const grad = g.createRadialGradient(cx, cy, 0, cx, cy, rad);
        grad.addColorStop(0, `hsl(${b.h} / 0.05)`);
        grad.addColorStop(1, `hsl(${b.h} / 0)`);
        g.fillStyle = grad;
        g.fillRect(0, 0, width, height);
      }
      g.globalCompositeOperation = 'source-over';
    }

    function drawBubble(b: Bubble) {
      const wob = Math.sin(b.y / 40 + b.phase) * b.drift;
      const x = b.x + wob;
      const grad = g.createRadialGradient(
        x - b.r * 0.3,
        b.y - b.r * 0.3,
        b.r * 0.1,
        x,
        b.y,
        b.r
      );
      grad.addColorStop(0, `hsl(190 100% 100% / ${b.alpha * 1.1})`);
      grad.addColorStop(0.7, `hsl(195 85% 82% / ${b.alpha * 0.55})`);
      grad.addColorStop(1, `hsl(200 80% 70% / 0)`);
      g.beginPath();
      g.arc(x, b.y, b.r, 0, Math.PI * 2);
      g.fillStyle = grad;
      g.fill();
      // thin rim highlight
      g.beginPath();
      g.arc(x, b.y, b.r * 0.92, Math.PI * 1.1, Math.PI * 1.7);
      g.strokeStyle = `hsl(190 100% 100% / ${b.alpha * 0.9})`;
      g.lineWidth = Math.max(0.5, b.r * 0.08);
      g.stroke();
    }

    function drawStatic() {
      g.clearRect(0, 0, width, height);
      drawCaustics(6000);
      for (const b of bubbles) drawBubble(b);
    }

    let raf = 0;
    let prev = performance.now();

    function frame(now: number) {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      g.clearRect(0, 0, width, height);
      drawCaustics(now);

      // Ease the cursor light toward the pointer.
      if (pointer.active) {
        if (light.x < -9000) {
          light.x = pointer.x;
          light.y = pointer.y;
        }
        light.x += (pointer.x - light.x) * 0.08;
        light.y += (pointer.y - light.y) * 0.08;

        const lr = 190;
        const grad = g.createRadialGradient(
          light.x,
          light.y,
          0,
          light.x,
          light.y,
          lr
        );
        grad.addColorStop(0, 'hsl(185 100% 92% / 0.10)');
        grad.addColorStop(1, 'hsl(185 100% 92% / 0)');
        g.fillStyle = grad;
        g.beginPath();
        g.arc(light.x, light.y, lr, 0, Math.PI * 2);
        g.fill();
      }

      // Ripple rings.
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += dt * 130;
        rp.life -= dt;
        if (rp.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        g.beginPath();
        g.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        g.strokeStyle = `hsl(190 100% 88% / ${rp.life * 0.12})`;
        g.lineWidth = 1.2;
        g.stroke();
      }

      for (const b of bubbles) {
        b.y -= b.speed * dt;
        b.phase += dt * 0.6;

        // Gentle repulsion from the cursor — the "current" the user pushes.
        if (pointer.active) {
          const dx = b.x - pointer.x;
          const dy = b.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          const radius = 150;
          if (d2 < radius * radius) {
            const d = Math.sqrt(d2) || 1;
            const force = (1 - d / radius) * 60 * dt;
            b.x += (dx / d) * force;
            b.y += (dy / d) * force;
          }
        }

        if (b.y < -b.r - 4) {
          Object.assign(b, makeBubble(true));
        }
        drawBubble(b);
      }

      raf = requestAnimationFrame(frame);
    }

    function onPointerMove(e: PointerEvent) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      const now = performance.now();
      if (now - lastMoveT > 90) {
        lastMoveT = now;
        if (ripples.length < 12) {
          ripples.push({ x: e.clientX, y: e.clientY, r: 4, life: 0.9 });
        }
      }
    }
    function onPointerLeave() {
      pointer.active = false;
      light.x = -9999;
    }

    resize();
    window.addEventListener('resize', resize);

    if (reduceMotion) {
      drawStatic();
      return () => window.removeEventListener('resize', resize);
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        prev = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }
    document.addEventListener('visibilitychange', onVisibility);

    prev = performance.now();
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.9,
      }}
    />
  );
}
