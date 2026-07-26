'use client';

import { useEffect } from 'react';

/**
 * Global, delegated interactions for anything marked `data-tile`.
 *
 * - Tracks the pointer inside a tile and exposes it as `--mx` / `--my`
 *   (percentages) so CSS can render a spotlight that follows the cursor.
 * - On press (mouse or touch) spawns a ripple at the contact point, giving
 *   touch devices real feedback — the piece that was missing before.
 *
 * Listeners are attached once at the document level, so tiles added by any
 * page (server or client rendered) work without extra wiring.
 */
export default function TileInteractions() {
  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      const target = e.target as Element | null;
      const tile = target?.closest<HTMLElement>('[data-tile]');
      if (!tile) return;
      const rect = tile.getBoundingClientRect();
      tile.style.setProperty(
        '--mx',
        `${((e.clientX - rect.left) / rect.width) * 100}%`
      );
      tile.style.setProperty(
        '--my',
        `${((e.clientY - rect.top) / rect.height) * 100}%`
      );
    }

    function onPointerDown(e: PointerEvent) {
      const target = e.target as Element | null;
      const tile = target?.closest<HTMLElement>('[data-tile]');
      if (!tile) return;

      const rect = tile.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'tile-ripple';
      const size = Math.max(rect.width, rect.height) * 1.1;
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      ripple.addEventListener('animationend', () => ripple.remove());
      tile.appendChild(ripple);
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return null;
}
