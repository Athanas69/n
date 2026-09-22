import type { City } from "@/lib/data";

const DOT_COLORS = ["#6e72d9", "#df9b47", "#4ba36d", "#b168a7", "#5a9db7"];

export function SimpleMap({ city }: { city: City }) {
  const w = 520;
  const h = 300;
  const points = city.neighborhoods.map((n, i) => ({
    x: 75 + (i % 3) * 170 + (i % 2) * 20,
    y: 70 + Math.floor(i / 3) * 95,
    name: n[0],
    i,
  }));

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", background: "#eef2ef", borderRadius: 17 }}>
      <path
        d="M40 210 C100 80 250 35 420 80 C500 120 490 235 380 265 C250 300 100 285 40 210Z"
        fill="#dce7df"
      />
      {points.map((p) => (
        <g key={p.name}>
          <circle cx={p.x} cy={p.y} r={22} fill={DOT_COLORS[p.i % 5]} stroke="#fff" strokeWidth={4} />
          <rect x={p.x + 18} y={p.y - 14} width={112} height={28} rx={9} fill="#fff" />
          <text x={p.x + 27} y={p.y + 4} fontSize={11} fontFamily="var(--font-dm-sans)" fill="#27332d">
            {p.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

const METRO_COLORS = ["#e25a57", "#3b8edb", "#4ba36d", "#d19a3f", "#9b6bd1"];

const WOBBLE = [
  [0, 0, 0, 0, 0, 0],
  [0, -22, -22, 22, 22, 0],
  [0, 18, -18, -18, 18, 0],
];

const XS = [40, 142, 244, 396, 498, 600];
const HUBS = [244, 498];

export function MetroMap({ city }: { city: City }) {
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
