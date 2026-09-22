import Link from "next/link";
import type { Neighborhood } from "@/lib/data";
import { citySlug } from "@/lib/data";
import { hoodSlug } from "@/lib/hoodSlug";

export const HOODMAP_PALETTE = ["#6e72d9", "#df9b47", "#4ba36d", "#b168a7", "#5a9db7", "#d9707a", "#5fae8c", "#c98f3f"];
const PALETTE = HOODMAP_PALETTE;

const W = 700;
const H = 440;
const CX = W / 2;
const CY = H / 2;
const GOLDEN_ANGLE = 137.508 * (Math.PI / 180);

function pinPosition(i: number, count: number) {
  if (count === 1) return { x: CX, y: CY };
  const spread = count <= 6 ? 68 : count <= 12 ? 52 : 40;
  const angle = i * GOLDEN_ANGLE;
  const radius = spread * Math.sqrt(i + 1);
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle) * 0.62,
  };
}

export default function NeighborhoodMap({ neighborhoods, city }: { neighborhoods: Neighborhood[]; city: string }) {
  const pins = neighborhoods.map((h, i) => ({
    name: h[0],
    tag: h[1].split(" · ")[0],
    color: PALETTE[i % PALETTE.length],
    ...pinPosition(i, neighborhoods.length),
  }));

  return (
    <div className="hoodmap">
      <div className="hoodmap-stage" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="hoodmap-canvas" preserveAspectRatio="xMidYMid meet">
          <path
            d={`M${W * 0.06} ${H * 0.62} C${W * 0.1} ${H * 0.22} ${W * 0.32} ${H * 0.05} ${W * 0.58} ${H * 0.1} C${W * 0.82} ${H * 0.15} ${W * 0.97} ${H * 0.42} ${W * 0.9} ${H * 0.72} C${W * 0.82} ${H * 0.98} ${W * 0.42} ${H * 0.99} ${W * 0.18} ${H * 0.88} C${W * 0.02} ${H * 0.8} ${W * 0.02} ${H * 0.72} ${W * 0.06} ${H * 0.62}Z`}
            fill="var(--hoodmap-land)"
          />
          {pins.map((p, i) => {
            const next = pins[i + 1];
            if (!next) return null;
            return (
              <line
                key={`l${i}`}
                x1={p.x}
                y1={p.y}
                x2={next.x}
                y2={next.y}
                stroke="var(--hoodmap-line)"
                strokeWidth={1}
                strokeDasharray="3 4"
              />
            );
          })}
        </svg>
        <div className="hoodmap-pins">
          {pins.map((p, i) => (
            <Link
              key={p.name}
              href={`/atlas/${citySlug(city)}/quartiers/${hoodSlug(p.name)}`}
              className="hoodpin"
              style={
                {
                  left: `${(p.x / W) * 100}%`,
                  top: `${(p.y / H) * 100}%`,
                  "--pin-color": p.color,
                } as React.CSSProperties
              }
            >
              <span className="hoodpin-dot">{i + 1}</span>
              <span className="hoodpin-label">
                <b>{p.name}</b>
                <small>{p.tag}</small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
