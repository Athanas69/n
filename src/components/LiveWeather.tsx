"use client";

import { useEffect, useState } from "react";
import { fetchWeather, describeWeather, type WeatherNow } from "@/lib/weather";

const DAY_LABELS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

export default function LiveWeather({ lat, lon, targetDate }: { lat: number; lon: number; targetDate?: string }) {
  const [data, setData] = useState<WeatherNow | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchWeather(lat, lon, targetDate ? 16 : 6)
      .then((w) => {
        if (!cancelled) setData(w);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [lat, lon, targetDate]);

  if (error) return null;

  if (!data) {
    return (
      <div className="liveweather liveweather-loading">
        <span className="liveweather-pulse" />
        Météo en direct…
      </div>
    );
  }

  const forDate = targetDate ? data.daily.find((d) => d.date === targetDate) : undefined;

  if (targetDate && forDate) {
    const info = describeWeather(forDate.code);
    return (
      <div className="liveweather">
        <div className="liveweather-now">
          <span className="liveweather-icon">{info.icon}</span>
          <div>
            <b>
              {forDate.max}° / {forDate.min}°
            </b>
            <small>{info.label} · prévision pour le {new Date(targetDate).toLocaleDateString("fr-FR")}</small>
          </div>
        </div>
        <div className="liveweather-days">
          {data.daily
            .filter((d) => d.date !== targetDate)
            .slice(0, 5)
            .map((d) => {
              const i = describeWeather(d.code);
              const day = DAY_LABELS[new Date(d.date).getDay()];
              return (
                <div className="liveweather-day" key={d.date}>
                  <small>{day}</small>
                  <span>{i.icon}</span>
                  <b>{d.max}°</b>
                  <small className="muted">{d.min}°</small>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  const now = describeWeather(data.code);

  return (
    <div className="liveweather">
      <div className="liveweather-now">
        <span className="liveweather-icon">{now.icon}</span>
        <div>
          <b>{data.temp}°C</b>
          <small>
            {now.label} · {targetDate ? "prévision indisponible à cette échéance" : "maintenant"}
          </small>
        </div>
      </div>
      <div className="liveweather-days">
        {data.daily.slice(1, 6).map((d) => {
          const info = describeWeather(d.code);
          const day = DAY_LABELS[new Date(d.date).getDay()];
          return (
            <div className="liveweather-day" key={d.date}>
              <small>{day}</small>
              <span>{info.icon}</span>
              <b>{d.max}°</b>
              <small className="muted">{d.min}°</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
