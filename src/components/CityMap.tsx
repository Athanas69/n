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

const METRO_COLORS = ["#e25a57", "#3b8edb", "#4ba36d", "#d19a3f"];

export function MetroMap({ city }: { city: City }) {
  const lines = city.transport.split(" · ").slice(0, 4);
  return (
    <svg viewBox="0 0 620 300">
      {lines.map((l, i) => {
        const y = 60 + i * 65;
        return (
          <g key={l}>
            <path
              d={`M45 ${y} C160 ${y - 30} 270 ${y + 28} 390 ${y} S520 ${y - 25} 575 ${y}`}
              fill="none"
              stroke={METRO_COLORS[i]}
              strokeWidth={8}
              strokeLinecap="round"
            />
            {[80, 200, 320, 440, 555].map((x, k) => (
              <circle key={x} cx={x} cy={y + (k % 2 ? 4 : -3)} r={7} fill="#fff" stroke={METRO_COLORS[i]} strokeWidth={4} />
            ))}
            <text x={45} y={y - 14} fontSize={11} fontFamily="var(--font-dm-sans)" fill="#4b5a52">
              {l}
            </text>
          </g>
        );
      })}
      <rect x={245} y={108} width={135} height={70} rx={15} fill="#fff" stroke="#dbe3de" />
      <text x={267} y={139} fontSize={12} fontFamily="var(--font-dm-sans)" fontWeight={600} fill="#243129">
        Hub central
      </text>
      <text x={267} y={157} fontSize={9} fontFamily="var(--font-dm-sans)" fill="#6d7a73">
        correspondances
      </text>
    </svg>
  );
}
