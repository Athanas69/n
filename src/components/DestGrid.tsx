import Image from "next/image";
import Link from "next/link";
import { getCities, citySlug } from "@/lib/data";

export default function DestGrid({ names }: { names: string[] }) {
  const cities = getCities();
  return (
    <div className="destgrid">
      {names.map((name) => {
        const c = cities[name];
        return (
          <Link href={`/atlas/${citySlug(name)}`} className="dest" key={name}>
            <Image src={c.hero} alt={name} fill sizes="(max-width: 980px) 50vw, 25vw" />
            <div className="destcopy">
              <h3>{name}</h3>
              <p>{c.neighborhoods.slice(0, 3).map((n) => n[0]).join(" · ")}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
