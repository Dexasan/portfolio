"use client";
import { PointerEvent, useEffect, useRef, useState } from "react";

export default function Portrait() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const print = useRef<HTMLImageElement | null>(null);
  const previous = useRef<{ x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false);
  const [rubbing, setRubbing] = useState(false);
  const [touched, setTouched] = useState(false);
  const [photo, setPhoto] = useState(false);

  useEffect(() => {
    let mounted = true;
    const image = new window.Image();
    image.onload = () => {
      if (!mounted) return;
      print.current = image;
      const context = canvas.current?.getContext("2d");
      if (!context) return;
      context.fillStyle = "#171c22";
      context.fillRect(0, 0, 600, 600);
      context.drawImage(image, 0, 0, 600, 600);
      setReady(true);
    };
    image.src = "/art/sandesh-blue.webp";
    return () => { mounted = false; };
  }, []);

  function reset() {
    const context = canvas.current?.getContext("2d");
    if (!context || !print.current) return;
    context.globalCompositeOperation = "source-over";
    context.clearRect(0, 0, 600, 600);
    context.fillStyle = "#171c22";
    context.fillRect(0, 0, 600, 600);
    context.drawImage(print.current, 0, 0, 600, 600);
    previous.current = null;
    setPhoto(false);
    setTouched(false);
    setRubbing(false);
  }

  function erase(event: PointerEvent<HTMLCanvasElement>) {
    const context = event.currentTarget.getContext("2d");
    if (!context) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const point = {
      x: (event.clientX - rect.left) * 600 / rect.width,
      y: (event.clientY - rect.top) * 600 / rect.height,
    };
    context.globalCompositeOperation = "destination-out";
    context.lineWidth = 94;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(previous.current?.x ?? point.x, previous.current?.y ?? point.y);
    context.lineTo(point.x, point.y);
    context.stroke();
    context.beginPath();
    context.arc(point.x, point.y, 47, 0, Math.PI * 2);
    context.fill();
    previous.current = point;
    setTouched(true);
  }

  function start(event: PointerEvent<HTMLCanvasElement>) {
    if (!ready || photo || (event.pointerType === "touch" && !rubbing)) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    previous.current = null;
    erase(event);
  }

  function showPhoto() {
    canvas.current?.getContext("2d")?.clearRect(0, 0, 600, 600);
    setPhoto(true);
    setTouched(true);
    setRubbing(false);
    previous.current = null;
  }

  return <div className="portrait-composition">
    <div className="print-stage">
      <div className={`scratch-portrait ${rubbing ? "is-rubbing" : ""} ${photo ? "is-photo" : ""}`} role="img" aria-label={photo ? "Sandesh's original photograph" : "A chalk and charcoal portrait of Sandesh. Rub the ink off or use show photo to reveal the original photograph."}>
        <img className="portrait-original" src="/sandesh.jpg" alt="" width="600" height="600" />
        <img className={`portrait-print-fallback ${ready || photo ? "canvas-ready" : ""}`} src="/art/sandesh-blue.webp" alt="" width="600" height="600" fetchPriority="high" />
        <canvas ref={canvas} width="600" height="600" aria-hidden="true" style={{ visibility: photo ? "hidden" : undefined }}
          onPointerDown={start}
          onPointerMove={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) erase(event); }}
          onPointerUp={event => { previous.current = null; if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
          onPointerCancel={() => { previous.current = null; }}
        />
      </div>
      <span className="print-note" aria-hidden="true">try rubbing this.</span>
      <svg className="print-note-arrow" viewBox="0 0 90 65" fill="none" aria-hidden="true"><path d="M85 6C58 1 70 49 12 45m13-9L9 46l20 8" /></svg>
    </div>
    <div className="print-controls">
      <button aria-pressed={rubbing} disabled={!ready || photo} onClick={() => setRubbing(!rubbing)}>{rubbing ? "go on, rub the portrait" : "rub the ink off"}</button>
      <span aria-hidden="true">/</span>
      {touched ? <button onClick={reset} disabled={!ready}>start again</button> : <button onClick={showPhoto}>show photo</button>}
      {touched && !photo && <button className="photo-shortcut" onClick={showPhoto}>show photo</button>}
    </div>
    <p className="print-instruction" aria-live="polite">{photo ? "yep. that's me." : rubbing ? "drag a finger or your mouse over the print." : "the photo's still underneath."}</p>
  </div>;
}
