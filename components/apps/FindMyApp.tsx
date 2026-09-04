"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { people, type Person } from "@/data/content";

// Leaflet touches window on import, so the map only loads in the browser.
const FindMyMap = dynamic(
  () => import("./FindMyMap").then((mod) => mod.FindMyMap),
  {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-zinc-900" />,
  },
);

export function FindMyApp() {
  const [selected, setSelected] = useState<Person | null>(null);

  return (
    <div className="flex h-full flex-col sm:flex-row">
      <div className="h-1/2 w-full sm:h-full sm:flex-1">
        <FindMyMap people={people} selected={selected} onSelect={setSelected} />
      </div>

      <div className="h-1/2 w-full overflow-y-auto border-t border-zinc-800 bg-black sm:h-full sm:w-[300px] sm:border-t-0 sm:border-l">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-xl font-bold tracking-tight text-white">
            People
          </h1>
          <p className="mt-0.5 text-[13px] text-zinc-500">
            Tap anyone to fly there.
          </p>
        </div>

        <div className="pb-4">
          {people.map((person) => {
            const isActive = selected?.id === person.id;
            return (
              <button
                key={person.id}
                type="button"
                onClick={() => setSelected(person)}
                className={`flex w-full cursor-pointer items-start gap-3 px-4 py-3 text-left transition-colors duration-150 ${
                  isActive ? "bg-zinc-900" : "hover:bg-zinc-900/60"
                }`}
              >
                <span
                  className="mt-1 h-3 w-3 shrink-0 rounded-full ring-2 ring-white/80"
                  style={{ backgroundColor: person.color }}
                />
                <span className="min-w-0">
                  <span className="block text-[15px] font-medium text-white">
                    {person.label}
                  </span>
                  <span className="block text-[13px] text-zinc-400">
                    {person.place}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-zinc-500">
                    {person.detail}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
