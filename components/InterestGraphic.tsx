"use client";

import { useRef } from "react";

export default function InterestGraphic() {
  const graphicRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    graphicRef.current?.style.setProperty("--shift-x", `${(x * 9).toFixed(2)}px`);
    graphicRef.current?.style.setProperty("--shift-y", `${(y * 9).toFixed(2)}px`);
  }

  function resetPointer() {
    graphicRef.current?.style.setProperty("--shift-x", "0px");
    graphicRef.current?.style.setProperty("--shift-y", "0px");
  }

  return (
    <div
      className="interest-graphic reveal reveal-3"
      ref={graphicRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <div className="interest-grid" />
      <div className="interest-orbit orbit-one"><i /><i /><i /></div>
      <div className="interest-orbit orbit-two"><i /><i /></div>
      <div className="interest-core">
        <span>Current interest</span>
        <strong>How systems<br />feel alive</strong>
      </div>
      <span className="interest-label label-browser">Browser media</span>
      <span className="interest-label label-network">Networks</span>
      <span className="interest-label label-runtime">Runtimes</span>
      <span className="interest-label label-interface">Interfaces</span>
      <div className="interest-cursor">EXPLORE</div>
    </div>
  );
}
