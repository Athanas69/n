"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import type { Neighborhood } from "@/lib/data";
import { citySlug } from "@/lib/data";
import { hoodSlug } from "@/lib/hoodSlug";

export const HOODMAP_PALETTE = ["#6e72d9", "#df9b47", "#4ba36d", "#b168a7", "#5a9db7", "#d9707a", "#5fae8c", "#c98f3f"];

const GOLDEN_ANGLE = 137.508 * (Math.PI / 180);

function offsetPosition(lat: number, lon: number, i: number, count: number) {
  if (count === 1) return { lat, lon };
  const spreadKm = count <= 6 ? 1.3 : count <= 12 ? 1.9 : 2.5;
  const angle = i * GOLDEN_ANGLE;
  const radiusKm = spreadKm * Math.sqrt((i + 1) / count);
  const dLat = (radiusKm / 111) * Math.cos(angle);
  const dLon = (radiusKm / (111 * Math.cos((lat * Math.PI) / 180))) * Math.sin(angle);
  return { lat: lat + dLat, lon: lon + dLon };
}

export default function NeighborhoodRealMap({
  neighborhoods,
  city,
  center,
}: {
  neighborhoods: Neighborhood[];
  city: string;
  center: { lat: number; lon: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    let map: import("leaflet").Map | undefined;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !ref.current) return;

      map = L.map(ref.current, {
        center: [center.lat, center.lon],
        zoom: 12,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      neighborhoods.forEach((h, i) => {
        const pos = offsetPosition(center.lat, center.lon, i, neighborhoods.length);
        const color = HOODMAP_PALETTE[i % HOODMAP_PALETTE.length];
        const icon = L.divIcon({
          className: "hoodpin-leaflet",
          html: `<span style="background:${color}"></span>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        });
        const marker = L.marker([pos.lat, pos.lon], { icon }).addTo(map!);
        marker.bindTooltip(`<b>${h[0]}</b>`, { direction: "top", offset: [0, -15], className: "hoodpin-tooltip" });
        marker.on("click", () => router.push(`/atlas/${citySlug(city)}/quartiers/${hoodSlug(h[0])}`));
      });
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [neighborhoods, city, center.lat, center.lon, router]);

  return <div ref={ref} className="hoodmap-real" />;
}
