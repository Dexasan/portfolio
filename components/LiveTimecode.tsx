'use client';

import { useEffect, useState } from 'react';

export default function LiveTimecode() {
  const [tc, setTc] = useState('--:--:--:--');

  useEffect(() => {
    function tick() {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      const s = String(d.getSeconds()).padStart(2, '0');
      const f = String(Math.floor(d.getMilliseconds() / 40)).padStart(2, '0');
      setTc(`${h}:${m}:${s}:${f}`);
    }
    tick();
    const id = setInterval(tick, 40);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="font-mono text-[10px] tracking-[0.06em] tabular-nums text-muted"
      aria-hidden="true"
    >
      {tc}
    </span>
  );
}
