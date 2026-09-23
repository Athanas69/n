import type { City } from "@/lib/data";
import { REAL_TRANSIT } from "@/lib/transitLines";

const METRO_COLORS = ["#e25a57", "#3b8edb", "#4ba36d", "#d19a3f", "#9b6bd1"];

const WOBBLE = [
  [0, 0, 0, 0, 0, 0],
  [0, -22, -22, 22, 22, 0],
  [0, 18, -18, -18, 18, 0],
];

const XS = [40, 142, 244, 396, 498, 600];

type Row = { name: string; color: string; y: number; wobble: number[]; stops: string[] };

function Diagram({ rows, height, hubLabel }: { rows: Row[]; height: number; hubLabel: string }) {
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

  return (
    <>
      <svg viewBox={`0 0 640 ${height}`}>
        {rows.map((r) => {
          const pts = XS.map((x, k) => `${x},${r.y + r.wobble[k]}`).join(" ");
          return (
            <g key={r.name}>
              <polyline points={pts} fill="none" stroke={r.color} strokeWidth={5.5} strokeLinecap="round" strokeLinejoin="round" />
              {XS.map((x, k) => {
                const cy = r.y + r.wobble[k];
                const labelUp = k % 2 === 0;
                const stop = r.stops[k];
                const isTerminus = k === 0 || k === XS.length - 1;
                const isHub = stop && interchanges.has(stop);
                return (
                  <g key={x}>
                    {isHub ? (
                      <>
                        <circle cx={x} cy={cy} r={7.5} fill="#fff" stroke="#27332d" strokeWidth={2.5} />
                        <circle cx={x} cy={cy} r={3} fill="#27332d" />
                      </>
                    ) : (
                      <circle cx={x} cy={cy} r={isTerminus ? 5.5 : 5} fill="#fff" stroke={r.color} strokeWidth={isTerminus ? 3.5 : 3} />
                    )}
                    {stop && (
                      <text
                        x={x}
                        y={labelUp ? cy - 13 : cy + 21}
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
    const rowH = 78;
    const height = 40 + realLines.length * rowH;
    const rows: Row[] = realLines.map((l, i) => ({
      name: l.name,
      color: l.color,
      y: 50 + i * rowH,
      wobble: WOBBLE[i % WOBBLE.length],
      stops: l.stations,
    }));
    return <Diagram rows={rows} height={height} hubLabel="Correspondance" />;
  }

  const lines = city.transport.split(" · ").slice(0, 3);
  const neighborhoodNames = city.neighborhoods.map((n) => n[0]);
  const rowH = 78;
  const height = 40 + lines.length * rowH;
  const rows: Row[] = lines.map((l, i) => ({
    name: l,
    color: METRO_COLORS[i % METRO_COLORS.length],
    y: 50 + i * rowH,
    wobble: WOBBLE[i % WOBBLE.length],
    stops:
      neighborhoodNames.length > 0
        ? XS.map((_, k) => neighborhoodNames[(k + i * 2) % neighborhoodNames.length])
        : XS.map(() => ""),
  }));

  return <Diagram rows={rows} height={height} hubLabel="Quartier desservi par plusieurs lignes" />;
}
