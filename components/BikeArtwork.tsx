import type { Ref } from "react";

export default function BikeArtwork({ wheelsRef }: { wheelsRef?: Ref<SVGGElement> }) {
  return <>
    <g ref={wheelsRef}>
      <g className="rider-wheel rear-wheel"><circle cx="-18" cy="-6" r="10"/><path d="M-18-16V4M-28-6h20M-25-13l14 14M-25 1l14-14"/></g>
      <g className="rider-wheel front-wheel"><circle cx="21" cy="-6" r="10"/><path d="M21-16V4M11-6h20M14-13l14 14M14 1l14-14"/></g>
    </g>
    <path className="bike-frame" d="m-18-6 10-16 18 1 11 15m-33-15 17 15h-23m16-15 7-8 6 2m-36 3h15m-8 9 4 9h13v-10"/>
    <path className="bike-tank" d="M-10-22q5-8 13-4l10 7H-9z"/>
    <path className="bike-engine" d="M-9-17H7v10H-7zm2 4H5m-11 3h10M-29-11q10-13 22 0m17-2q11-13 21 1"/>
    <path className="rider-body" d="m-10-25 5-14 15 4 5 11m-16-10-2 15 10 7-5 11"/>
    <path className="rider-helmet" d="M-5-41c-7-2-8-14 0-16 7-3 13 2 12 9l-7 1 5 6z"/>
    <path className="speed-ink" d="m-41-24-13 1m16 8-21 2m20-8-9 1"/>
  </>;
}
