import type { City } from "@/lib/data";
import { REAL_TRANSIT } from "@/lib/transitLines";

const METRO_COLORS = ["#e25a57", "#3b8edb", "#4ba36d", "#d19a3f", "#9b6bd1"];

const W = 640;
const H = 460;
const CX = W / 2;
const CY = H / 2;
const RADIUS = 195;

type Row = { name: string; color: string; stops: string[] };

function anchorIndexFor(rowIndex: number, rows: Row[]): number {
  const own = rows[rowIndex].stops;
  for (let k = 0; k < own.length; k++) {
    const s = own[k];
    if (!s) continue;
    for (let ri = 0; ri < rows.length; ri++) {
      if (ri === rowIndex) continue;
      if (rows[ri].stops.includes(s)) return k;
    }
  }
  return Math.floor((own.length - 1) / 2);
}

function Diagram({ rows, hubLabel }: { rows: Row[]; hubLabel: string }) {
  const interchanges = new Set<string>();
  const seen = new Map<string, number>();
  rows.forEach((r, ri) => {
    r.stops.forEach((s) => {
      if (!s) return;
      const owner = seen.get(s);
      if (owner !== undefined && owner !== ri) interchanges.add(s);
      else seen.set(s, ri);
    });
  });

  const lines = rows.map((r, i) => {
    const angleDeg = rows.length === 1 ? 0 : i * (180 / rows.length);
    const angleRad = (angleDeg * Math.PI) / 180;
    const dx = Math.cos(angleRad);
    const dy = Math.sin(angleRad) * 0.72;
    const anchor = anchorIndexFor(i, rows);
    const maxSteps = Math.max(anchor, r.stops.length - 1 - anchor, 1);
    const spacing = RADIUS / maxSteps;
    const points = r.stops.map((_, k) => {
      const offset = (k - anchor) * spacing;
      return { x: CX + dx * offset, y: CY + dy * offset };
    });
    return { ...r, angleRad, points };
  });

  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`}>
        {lines.map((r) => {
          const pts = r.points.map((p) => `${p.x},${p.y}`).join(" ");
          const perp = r.angleRad + Math.PI / 2;
          return (
            <g key={r.name}>
              <polyline points={pts} fill="none" stroke={r.color} strokeWidth={5.5} strokeLinecap="round" strokeLinejoin="round" />
              {r.points.map((p, k) => {
                const stop = r.stops[k];
                const isTerminus = k === 0 || k === r.stops.length - 1;
                const isHub = Boolean(stop && interchanges.has(stop));
                const dir = k % 2 === 0 ? 1 : -1;
                const lx = p.x + Math.cos(perp) * 15 * dir;
                const ly = p.y + Math.sin(perp) * 15 * dir + 3;
                return (
                  <g key={k}>
                    {isHub ? (
                      <>
                        <circle cx={p.x} cy={p.y} r={7.5} fill="#fff" stroke="#27332d" strokeWidth={2.5} />
                        <circle cx={p.x} cy={p.y} r={3} fill="#27332d" />
                      </>
                    ) : (
                      <circle cx={p.x} cy={p.y} r={isTerminus ? 5.5 : 5} fill="#fff" stroke={r.color} strokeWidth={isTerminus ? 3.5 : 3} />
                    )}
                    {stop && (
                      <text
                        x={lx}
                        y={ly}
                        fontSize={8.5}
                        fontWeight={isTerminus || isHub ? 700 : 400}
                        fontFamily="var(--font-dm-sans)"
                        fill={isHub ? "#1b241f" : "#3a4640"}
                        textAnchor="middle"
                      >
                        {stop}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      <div className="metrolegend">
        {rows.map((r) => (
          <span key={r.name} className="metrolegend-line">
            <i style={{ background: r.color }}>{r.name.slice(0, 2)}</i>
            {r.name}
          </span>
        ))}
        {interchanges.size > 0 && (
          <span className="metrolegend-hub">
            <i className="metrolegend-hubdot" />
            {hubLabel}
          </span>
        )}
      </div>
    </>
  );
}

export function MetroMap({ city, cityName }: { city: City; cityName: string }) {
  const realLines = REAL_TRANSIT[cityName];

  if (realLines) {
    const rows: Row[] = realLines.map((l) => ({ name: l.name, color: l.color, stops: l.stations }));
    return <Diagram rows={rows} hubLabel="Correspondance" />;
  }

  const lineLabels = city.transport.split(" · ").slice(0, 3);
  const neighborhoodNames = city.neighborhoods.map((n) => n[0]);
  const rows: Row[] = lineLabels.map((l, i) => ({
    name: l,
    color: METRO_COLORS[i % METRO_COLORS.length],
    stops:
      neighborhoodNames.length > 0
        ? Array.from({ length: 6 }, (_, k) => neighborhoodNames[(k + i * 2) % neighborhoodNames.length])
        : Array.from({ length: 6 }, () => ""),
  }));

  return <Diagram rows={rows} hubLabel="Quartier desservi par plusieurs lignes" />;
}
