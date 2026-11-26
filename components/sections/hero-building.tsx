import type { CSSProperties } from "react";

/**
 * Isometric wireframe of a building with a cantilevered upper volume, a tower and a stepped
 * block, generated from simple 3D boxes. Faces are painted back to front so hidden lines
 * disappear; every outline draws itself, then the cantilever slab lights up orange.
 * Decorative only (aria-hidden).
 */
const S = 40, CX = 560, CY = 330;
const P = (x: number, y: number, z: number): [number, number] => [CX + (x - y) * 0.866 * S, CY + (x + y) * 0.5 * S - z * S];
const pts = (a: [number, number, number][]) => a.map(([x, y, z]) => P(x, y, z).map((n) => n.toFixed(1)).join(" ")).join("L");
const poly = (a: [number, number, number][]) => `M${pts(a)}Z`;

type Box = { x0: number; x1: number; y0: number; y1: number; z0: number; z1: number; bands?: number; mull?: number; accent?: boolean };

const BOXES: Box[] = [
  { x0: 0, x1: 18, y0: 0, y1: 6, z0: 0, z1: 0.6 }, // podium slab
  { x0: 1.5, x1: 10.5, y0: 1, y1: 3, z0: 0.6, z1: 4, bands: 1, mull: 1.5 }, // recessed glazed volume
  { x0: 1, x1: 11, y0: 0.5, y1: 5, z0: 4, z1: 6.5, accent: true }, // cantilever
  { x0: 11.5, x1: 14.5, y0: 0.5, y1: 4.5, z0: 0.6, z1: 10, bands: 0.8, mull: 1.5 }, // tower
  { x0: 14.5, x1: 18, y0: 0.5, y1: 5.5, z0: 0.6, z1: 5.5, bands: 0.9, mull: 1.75 }, // stepped block
  { x0: 15.5, x1: 18, y0: 1.5, y1: 4.5, z0: 5.5, z1: 7, bands: 0.75 }, // roof step
];
const COLUMNS = [1.5, 3.5, 5.5, 7.5, 9.5];

const st = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

function faces(b: Box) {
  const { x0, x1, y0, y1, z0, z1 } = b;
  const top = poly([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]]);
  const right = poly([[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]]);
  const front = poly([[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]]);
  let lines = "";
  if (b.bands) for (let z = z0 + b.bands; z < z1 - 0.01; z += b.bands) {
    lines += `M${pts([[x0, y1, z]])}L${pts([[x1, y1, z], [x1, y0, z]])}`;
  }
  if (b.mull) {
    for (let x = x0 + b.mull; x < x1 - 0.01; x += b.mull) lines += `M${pts([[x, y1, z0]])}L${pts([[x, y1, z1]])}`;
    for (let y = y0 + b.mull; y < y1 - 0.01; y += b.mull) lines += `M${pts([[x1, y, z0]])}L${pts([[x1, y, z1]])}`;
  }
  return { top, right, front, lines };
}

export function HeroBuilding({ className }: { className?: string }) {
  return (
    <svg viewBox="230 110 990 720" preserveAspectRatio="xMidYMid meet" aria-hidden focusable="false" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
      {/* long perspective lines across the sheet */}
      <g stroke="currentColor" opacity="0.35">
        <path className="draw" pathLength={1} style={st(0.1)} d="M0 690L1200 470" />
        <path className="draw" pathLength={1} style={st(0.2)} d="M0 600L300 640M900 120L1200 60" />
        <path className="draw" pathLength={1} style={st(0.3)} d="M-20 795L1220 795" />
      </g>
      <g className="text-white" opacity="0.85">
        {BOXES.map((b, i) => {
          const f = faces(b);
          const d = 0.3 + i * 0.35;
          return (
            <g key={i}>
              {i === 2 && COLUMNS.map((x, j) => (
                <path key={x} className="draw" pathLength={1} style={st(0.9 + j * 0.12)} strokeWidth="3" d={`M${pts([[x, 3.5, 0.6]])}L${pts([[x, 3.5, 4]])}`} />
              ))}
              <path className="draw" pathLength={1} style={st(d)} fill="#171310" d={f.front} />
              <path className="draw" pathLength={1} style={st(d + 0.1)} fill="#171310" d={f.right} />
              <path className="draw" pathLength={1} style={st(d + 0.2)} fill="#171310" d={f.top} />
              {f.lines && <path className="draw" pathLength={1} style={st(d + 0.4)} opacity="0.6" d={f.lines} />}
              {b.accent && <path className="accent-in" fill="var(--color-ember)" stroke="currentColor" d={f.front} />}
            </g>
          );
        })}
      </g>
    </svg>
  );
}
