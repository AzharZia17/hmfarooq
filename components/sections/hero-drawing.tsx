import type { CSSProperties } from "react";

/**
 * A construction elevation drawn in hairlines: a Doha-style skyline, a building frame going up
 * under a tower crane. Every stroke draws itself in sequence; a few windows light up; the hook sways.
 * Purely decorative (aria-hidden), no images.
 */
const G = 480; // ground line

const floors = (x1: number, x2: number, top: number, step = 28) => {
  let d = "";
  for (let y = top + step; y < G - 8; y += step) d += `M${x1} ${y}H${x2}`;
  return d;
};
const mullions = (x1: number, x2: number, top: number, n: number) => {
  let d = "";
  for (let i = 1; i < n; i++) d += `M${x1 + ((x2 - x1) * i) / n} ${top + 6}V${G}`;
  return d;
};
const lattice = (x1: number, x2: number, top: number, h: number) => {
  let d = "";
  for (let y = top; y + h <= G; y += h) d += `M${x1} ${y}L${x2} ${y + h}M${x2} ${y}L${x1} ${y + h}`;
  return d;
};
const mast = (x1: number, x2: number, top: number, h: number) => {
  let d = `M${x1} ${G}`;
  let left = false;
  for (let y = G; y > top; y -= h) { d += `L${left ? x1 : x2} ${y - h}`; left = !left; }
  return d;
};

const st = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

const WINDOWS: [number, number, number][] = [
  [577, 304, 3.6], [601, 360, 4.4], [700, 190, 5.2], [724, 246, 3.9], [806, 262, 6.0], [838, 346, 4.8],
  [918, 358, 5.6], [955, 398, 6.4], [1108, 400, 4.2], [1140, 430, 5.0],
];

export function HeroDrawing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 530" preserveAspectRatio="xMaxYMax slice" aria-hidden focusable="false" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" vectorEffect="non-scaling-stroke">
      <g className="text-gold" opacity="0.8">
        {/* ground */}
        <path className="draw" pathLength={1} style={st(0.1)} d={`M0 ${G}H1200`} />
        {/* low block */}
        <path className="draw" pathLength={1} style={st(0.5)} d={`M430 ${G}V395H540V${G}${floors(430, 540, 395, 28)}`} />
        {/* tower A */}
        <path className="draw" pathLength={1} style={st(0.7)} d={`M560 ${G}V270H640V${G}${floors(560, 640, 270)}${mullions(560, 640, 270, 3)}`} />
        {/* tower B, the tall one with the raked top */}
        <path className="draw" pathLength={1} style={st(0.9)} d={`M670 ${G}V160L760 125V${G}${floors(670, 760, 150, 30)}${mullions(670, 760, 150, 4)}M670 160L760 125`} />
        {/* tower C with lattice skin */}
        <path className="draw" pathLength={1} style={st(1.1)} d={`M790 ${G}V210H870V${G}${lattice(790, 870, 210, 54)}`} />
        {/* frame under construction */}
        <path className="draw" pathLength={1} style={st(1.4)} d={`M900 ${G}V300M937 ${G}V300M973 ${G}V300M1010 ${G}V300M900 420H1010M900 380H1010M900 340H1010M900 300H1010M900 300L937 340L973 300L1010 340M900 340L937 380L973 340L1010 380`} />
        <path className="draw" pathLength={1} style={{ ...st(2.0), strokeDasharray: "0.012 0.012" }} d="M900 300V250M937 300V250M973 300V250M1010 300V250" />
        {/* small block */}
        <path className="draw" pathLength={1} style={st(1.6)} d={`M1090 ${G}V370H1170V${G}${floors(1090, 1170, 370, 28)}${mullions(1090, 1170, 370, 3)}`} />
        {/* tower crane */}
        <path className="draw" pathLength={1} style={st(1.8)} d={`${mast(1040, 1062, 70, 26)}M1040 ${G}V70M1062 ${G}V70M1040 70H1062M1051 70V36M1051 36L800 70M1051 36L1150 70M780 70H1160M780 70V82H1160V70M780 82L1051 70L1160 82`} />
        {/* hook, cable and load: sways */}
        <g className="sway text-ember" style={{ transformOrigin: "900px 70px" }}>
          <path className="draw" pathLength={1} style={st(2.6)} d="M900 70V176M888 176H912V196H888Z M894 176L900 160L906 176" />
        </g>
        {/* grid bubbles and level dimension */}
        <path className="draw" pathLength={1} style={st(2.2)} d="M560 500H1170M560 494V506M760 494V506M960 494V506M1160 494V506" />
        <g className="label fade-in" style={{ ...st(3), fontSize: 11, letterSpacing: "0.14em" } as CSSProperties} fill="currentColor" stroke="none">
          <text x="556" y="522">A</text><text x="756" y="522">B</text><text x="956" y="522">C</text><text x="1156" y="522">D</text>
          <text x="1060" y="456" opacity="0.7">+00.00</text>
        </g>
        {/* lit windows */}
        {WINDOWS.map(([x, y, d]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="10" height="14" className={`lit ${(x + y) % 3 === 0 ? "text-ember" : ""}`} fill="currentColor" stroke="none" style={st(d)} />
        ))}
      </g>
    </svg>
  );
}
