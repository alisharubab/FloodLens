// Rough land: deterministic jitter (no Math.random, so server and client agree)
const LAND = Array.from({ length: 46 }, (_, i) => {
  const x = 60 + i * 11.7;
  const y = 350 + (((i * 37) % 11) - 5) * 1.3;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");

const CLOUD =
  "M0 40 C-10 10 30 -10 60 8 C80 -25 140 -22 155 10 C190 -5 230 20 215 45 C240 60 220 85 190 80 L40 80 C5 85 -20 60 0 40 Z";

/** C-band pulses pass through cloud; rough land echoes back, calm water bounces the pulse away. */
export function SarDiagram() {
  return (
    <svg
      viewBox="0 0 1200 400"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: a radar satellite sends pulses through cloud. Rough land returns an echo to the satellite; smooth flood water reflects the pulse away, so flooded areas appear dark."
    >
      {/* ground */}
      <rect x="640" y="350" width="500" height="50" fill="var(--flood)" fillOpacity="0.1" />
      <polyline points={LAND} fill="none" stroke="var(--fg-dim)" strokeWidth="1.25" />
      <line x1="640" y1="350" x2="1140" y2="350" stroke="var(--flood)" strokeWidth="2" />

      {/* clouds: drawn before the beams so the pulses visibly pass through */}
      <g className="sar-cloud">
        <path d={CLOUD} transform="translate(330 140)" fill="var(--canvas-soft)" stroke="var(--fg-ghost)" strokeWidth="0.75" />
      </g>
      <g className="sar-cloud">
        <path d={CLOUD} transform="translate(640 128) scale(1.1)" fill="var(--canvas-soft)" stroke="var(--fg-ghost)" strokeWidth="0.75" />
      </g>

      {/* beam to land, echo back to satellite */}
      <line className="sar-down" x1="600" y1="50" x2="330" y2="350" stroke="var(--flood)" strokeWidth="2" />
      <line className="sar-up" x1="322" y1="350" x2="592" y2="50" stroke="var(--signal)" strokeWidth="2" />

      {/* beam to flood water, mirrored away from the satellite */}
      <line className="sar-down" x1="600" y1="50" x2="870" y2="350" stroke="var(--flood)" strokeWidth="2" />
      <line className="sar-bounce" x1="870" y1="350" x2="1140" y2="50" stroke="var(--alert)" strokeWidth="2" />

      {/* satellite */}
      <rect x="588" y="24" width="24" height="24" fill="var(--fg)" />
      <rect x="540" y="30" width="42" height="12" fill="none" stroke="var(--fg-dim)" strokeWidth="1" />
      <rect x="618" y="30" width="42" height="12" fill="none" stroke="var(--fg-dim)" strokeWidth="1" />

      {/* labels */}
      <text className="svg-label" x="676" y="40">Satellite · C-band pulse</text>
      <text className="svg-label" x="480" y="128" textAnchor="end">Cloud · transparent to microwaves</text>
      <text className="svg-label" x="60" y="385">Rough land · echo returns · bright</text>
      <text className="svg-label" x="640" y="385">Flood water · mirror-smooth · dark</text>
      <text className="svg-label" x="1150" y="232" textAnchor="end">Pulse reflected away</text>
    </svg>
  );
}
