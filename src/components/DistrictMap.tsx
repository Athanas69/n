"use client";

import type { Neighborhood } from "@/lib/data";
import { hoodAnchor } from "@/lib/hoodAnchor";

const PALETTE = ["#6e72d9", "#df9b47", "#4ba36d", "#b168a7", "#5a9db7", "#d9707a"];

export default function DistrictMap({ neighborhoods }: { neighborhoods: Neighborhood[] }) {
  return (
    <div className="districtmap">
      {neighborhoods.map((h, i) => {
        const [name, tags, , image] = h;
        const color = PALETTE[i % PALETTE.length];
        return (
          <button
            key={name}
            className="district"
            style={{ "--district-color": color } as React.CSSProperties}
            onClick={() =>
              document.getElementById(hoodAnchor(name))?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            <img src={image} alt={name} />
            <span className="district-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="district-info">
              <b>{name}</b>
              <small>{tags.split(" · ")[0]}</small>
            </span>
          </button>
        );
      })}
    </div>
  );
}
