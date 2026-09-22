import Link from "next/link";
import type { Neighborhood } from "@/lib/data";
import { citySlug } from "@/lib/data";
import { hoodSlug } from "@/lib/hoodSlug";

const PALETTE = ["#6e72d9", "#df9b47", "#4ba36d", "#b168a7", "#5a9db7", "#d9707a"];

export default function DistrictMap({ neighborhoods, city }: { neighborhoods: Neighborhood[]; city: string }) {
  return (
    <div className="districtmap">
      {neighborhoods.map((h, i) => {
        const [name, tags, , image] = h;
        const color = PALETTE[i % PALETTE.length];
        return (
          <Link
            key={name}
            href={`/atlas/${citySlug(city)}/quartiers/${hoodSlug(name)}`}
            className="district"
            style={{ "--district-color": color } as React.CSSProperties}
          >
            <img src={image} alt={name} />
            <span className="district-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="district-info">
              <b>{name}</b>
              <small>{tags.split(" · ")[0]}</small>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
