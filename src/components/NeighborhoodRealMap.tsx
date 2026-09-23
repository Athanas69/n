"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

export default function NeighborhoodRealMap({ center }: { center: { lat: number; lon: number } }) {
  const ref = useRef<HTMLDivElement>(null);

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
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [center.lat, center.lon]);

  return <div ref={ref} className="hoodmap-real" />;
}
