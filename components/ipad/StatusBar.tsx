"use client";

import { useEffect, useState } from "react";
import { Wifi, BatteryFull } from "lucide-react";

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    update();
    const interval = setInterval(update, 15_000);
    return () => clearInterval(interval);
  }, []);

  const textColor = dark ? "text-black" : "text-white";

  return (
    <div
      className={`flex items-center justify-between px-8 pt-3 pb-1 text-sm font-semibold ${textColor}`}
    >
      <span className="tabular-nums">{time}</span>
      <div className="flex items-center gap-1.5">
        <Wifi className="h-4 w-4" strokeWidth={2.5} />
        <BatteryFull className="h-4 w-4" strokeWidth={2} />
      </div>
    </div>
  );
}
