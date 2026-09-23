import { getPracticalInfo } from "@/lib/practical";

export default function PracticalInfo({
  country,
  extra = [],
}: {
  country: string;
  extra?: Array<[string, string]>;
}) {
  const info = getPracticalInfo(country);
  const items: Array<[string, string]> = [
    ...extra,
    ["Visa", info.visa],
    ["Prise électrique", info.plug],
    ["Urgences", info.emergency],
    ["Pourboire", info.tipping],
    ["Langue", info.language],
    ["Fuseau horaire", info.timezone],
  ];
  return (
    <div className="practicalgrid">
      {items.map(([label, value]) => (
        <div className="fact" key={label}>
          <small>{label}</small>
          <b>{value}</b>
        </div>
      ))}
    </div>
  );
}
