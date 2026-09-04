"use client";

import { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudFog, Zap } from "lucide-react";

type CityWeather = {
  id: string;
  name: string;
  note: string;
  temp: number | null;
  code: number | null;
};

// WMO weather codes, grouped into the handful of conditions worth drawing.
function condition(code: number | null) {
  if (code === null) return { label: "No reading", Icon: Cloud };
  if (code === 0) return { label: "Clear", Icon: Sun };
  if (code <= 3) return { label: "Partly cloudy", Icon: Cloud };
  if (code <= 48) return { label: "Fog", Icon: CloudFog };
  if (code <= 67) return { label: "Rain", Icon: CloudRain };
  if (code <= 77) return { label: "Snow", Icon: CloudSnow };
  if (code <= 82) return { label: "Showers", Icon: CloudRain };
  if (code <= 86) return { label: "Snow showers", Icon: CloudSnow };
  return { label: "Thunderstorm", Icon: Zap };
}

const skies: Record<string, string> = {
  la: "from-sky-500 to-indigo-700",
  ep: "from-slate-500 to-slate-800",
  dxb: "from-amber-500 to-orange-700",
};

export function WeatherApp() {
  const [cities, setCities] = useState<CityWeather[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/weather")
      .then((res) => {
        if (!res.ok) throw new Error("weather request failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setCities(data.cities);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto max-w-xl px-6 py-6 sm:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-white">Weather</h1>
      <p className="mt-1 text-sm text-zinc-400">
        Three cities, live. I have lived in all of them.
      </p>

      <div className="mt-5 space-y-3">
        {failed && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-sm text-zinc-400">
            Could not reach the weather service. It is usually back within a
            minute.
          </div>
        )}

        {!cities && !failed
          ? [0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-[104px] animate-pulse rounded-2xl bg-zinc-900"
              />
            ))
          : cities?.map((city) => {
              const { label, Icon } = condition(city.code);
              return (
                <div
                  key={city.id}
                  className={`flex items-center justify-between rounded-2xl bg-gradient-to-br p-5 ${skies[city.id] ?? "from-zinc-700 to-zinc-900"}`}
                >
                  <div>
                    <p className="text-xl font-semibold text-white">
                      {city.name}
                    </p>
                    <p className="text-sm text-white/70">{city.note}</p>
                    <p className="mt-2 text-sm text-white/80">{label}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon
                      className="h-8 w-8 text-white/90"
                      strokeWidth={1.75}
                    />
                    <span className="text-4xl font-light text-white tabular-nums">
                      {city.temp === null ? "--" : `${city.temp}°`}
                    </span>
                  </div>
                </div>
              );
            })}
      </div>

      <p className="mt-5 mb-2 text-sm leading-relaxed text-zinc-500">
        Moved from the last one to the middle one at ten years old, then to the
        first one at eighteen.
      </p>
    </div>
  );
}
