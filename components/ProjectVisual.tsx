import type { CaseStudy } from "@/lib/projects";

export default function ProjectVisual({
  kind,
  compact = false,
}: {
  kind: CaseStudy["visual"];
  compact?: boolean;
}) {
  return (
    <div className={`project-visual visual-${kind} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      {kind === "signal" && <SignalVisual />}
      {kind === "road" && <RoadVisual />}
      {kind === "scale" && <ScaleVisual />}
      {kind === "ledger" && <LedgerVisual />}
    </div>
  );
}

function SignalVisual() {
  return (
    <>
      <div className="signal-window">
        <div className="visual-bar"><i /><i /><i /><span>program.output</span></div>
        <div className="signal-program">
          <div className="signal-guest">GUEST 02</div>
          <div className="signal-host">HOST</div>
          <span className="signal-bug">LIVE</span>
        </div>
      </div>
      <div className="signal-route">
        <span>WEB</span><i /><span>RELAY</span><i /><span>RTMP × 4</span>
      </div>
    </>
  );
}

function RoadVisual() {
  return (
    <>
      <div className="road-sun" />
      <div className="road-mountains road-left" />
      <div className="road-mountains road-right" />
      <div className="road-track"><i /><i /><i /></div>
      <span className="road-speed">199</span>
      <span className="road-unit">MPH</span>
    </>
  );
}

function ScaleVisual() {
  const widths = ["44%", "72%", "58%", "84%"];
  return (
    <>
      <div className="scale-heading"><span>WORKLOAD</span><b>Moderate architecture</b></div>
      <div className="scale-sliders">
        {widths.map((width, index) => (
          <div key={width}><span>0{index + 1}</span><i><b style={{ width }} /></i><strong>{width}</strong></div>
        ))}
      </div>
      <div className="scale-result">
        <span>PEAK LOAD</span><strong>437 <small>req/s</small></strong>
      </div>
    </>
  );
}

function LedgerVisual() {
  return (
    <>
      <div className="ledger-head"><span>TXN_8F1C</span><span>BALANCED</span></div>
      <div className="ledger-row"><span>Cash</span><strong>+ 250.00</strong></div>
      <div className="ledger-row"><span>Revenue</span><strong>− 250.00</strong></div>
      <div className="ledger-total"><span>NET POSTINGS</span><strong>0.00</strong></div>
      <div className="hash-chain"><i /><span /><i /><span /><i /></div>
      <small className="hash-label">GENESIS → EVENT 01 → EVENT 02</small>
    </>
  );
}
