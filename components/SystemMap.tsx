const nodes = [
  { number: "01", label: "Capture", detail: "Camera · screen · audio" },
  { number: "02", label: "Compose", detail: "Scenes · layers · guests" },
  { number: "03", label: "Encode", detail: "WebCodecs · MediaRecorder" },
  { number: "04", label: "Relay", detail: "WebSocket · ffmpeg" },
  { number: "05", label: "Deliver", detail: "RTMP destinations" },
];

export default function SystemMap() {
  return (
    <div className="system-map" aria-label="Ditch media pipeline">
      <div className="map-topline">
        <span>Current system</span>
        <span className="map-live"><i aria-hidden="true" /> Ditch pipeline</span>
      </div>
      <div className="map-flow">
        {nodes.map((node, index) => (
          <div className="map-step" key={node.label}>
            <div className="map-node">
              <span>{node.number}</span>
              <strong>{node.label}</strong>
              <small>{node.detail}</small>
            </div>
            {index < nodes.length - 1 && (
              <div className="map-connector" aria-hidden="true">
                <i style={{ animationDelay: `${index * -0.55}s` }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="map-footer">
        <span>Browser</span>
        <span>Control + media planes</span>
        <span>Infrastructure</span>
      </div>
    </div>
  );
}
