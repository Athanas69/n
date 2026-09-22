import type { City } from "@/lib/data";
import { REAL_TRANSIT } from "@/lib/transitLines";

const METRO_COLORS = ["#e25a57", "#3b8edb", "#4ba36d", "#d19a3f", "#9b6bd1"];

const WOBBLE = [
  [0, 0, 0, 0, 0, 0],
  [0, -22, -22, 22, 22, 0],
  [0, 18, -18, -18, 18, 0],
];

const XS = [40, 142, 244, 396, 498, 600];
const HUBS = [244, 498];

export function MetroMap({ city, cityName }: { city: City; cityName: string }) {
  const realLines = REAL_TRANSIT[cityName];

  if (realLines) {
    const rowH = 78;
    const h = 40 + realLines.length * rowH;
    const rows = realLines.map((l, i) => ({
      ...l,
      y: 50 + i * rowH,
      wobble: WOBBLE[i % WOBBLE.length],
    }));
    return (
      <>
        <svg viewBox={`0 0 640 ${h}`}>
          {rows.map((r) => {
            const pts = XS.map((x, k) => `${x},${r.y + r.wobble[k]}`).join(" ");
            return (
              <g key={r.name}>
                <polyline points={pts} fill="none" stroke={r.color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
                {XS.map((x, k) => {
                  const cy = r.y + r.wobble[k];
                  const labelUp = k % 2 === 0;
                  return (
                    <g key={x}>
                      <circle cx={x} cy={cy} r={5} fill="#fff" stroke={r.color} strokeWidth={3} />
                      <text
                        x={x}
                        y={labelUp ? cy - 12 : cy + 20}
                        fontSize={8.5}
                        fontFamily="var(--font-dm-sans)"
                        fill="#3a4640"
                        textAnchor="middle"
                      >
                        {r.stations[k]}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
        <div className="metrolegend">
          {rows.map((r) => (
            <span key={r.name}>
              <i style={{ background: r.color }} />
              {r.name}
            </span>
          ))}
          <span className="metrolegend-hub">
            <i className="metrolegend-hubdot" />
            Station
          </span>
        </div>
      </>
    );
  }

  const lines = city.transport.split(" · ").slice(0, 5);
  const h = 70 + lines.length * 46;
  const rows = lines.map((l, i) => ({
    name: l,
    color: METRO_COLORS[i % METRO_COLORS.length],
    y: 46 + i * 46,
    wobble: WOBBLE[i % WOBBLE.length],
  }));

  return (
    <>
      <svg viewBox={`0 0 640 ${h}`}>
        {rows.map((r) => {
          const pts = XS.map((x, k) => `${x},${r.y + r.wobble[k]}`).join(" ");
          return (
            <g key={r.name}>
              <polyline points={pts} fill="none" stroke={r.color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
              {XS.map((x, k) => (
                <circle key={x} cx={x} cy={r.y + r.wobble[k]} r={4.5} fill="#fff" stroke={r.color} strokeWidth={3} />
              ))}
              <text x={XS[0]} y={r.y - 12} fontSize={10.5} fontWeight={600} fontFamily="var(--font-dm-sans)" fill="#27332d">
                {r.name}
              </text>
            </g>
          );
        })}
        {HUBS.map((hx) => (
          <g key={hx}>
            <circle cx={hx} cy={h / 2} r={11} fill="#fff" stroke="#27332d" strokeWidth={3} />
            <circle cx={hx} cy={h / 2} r={4} fill="#27332d" />
          </g>
        ))}
      </svg>
      <div className="metrolegend">
        {rows.map((r) => (
          <span key={r.name}>
            <i style={{ background: r.color }} />
            {r.name}
          </span>
        ))}
        <span className="metrolegend-hub">
          <i className="metrolegend-hubdot" />
          Correspondance
        </span>
      </div>
    </>
  );
}
