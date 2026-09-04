"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { garage, builds, forzaGarage } from "@/data/content";

export function GarageApp() {
  const [openEntry, setOpenEntry] = useState<string | null>(
    garage.log[0]?.problem ?? null,
  );

  return (
    <div className="min-h-full bg-[#0b0c0e]">
      {/* Hazard stripe, the kind painted on a trailer bunk */}
      <div className="h-1.5 w-full bg-[repeating-linear-gradient(45deg,#f59e0b_0px,#f59e0b_10px,#0b0c0e_10px,#0b0c0e_20px)] opacity-70" />

      <div className="mx-auto max-w-2xl px-6 py-7 sm:px-8">
        {/* Instrument panel */}
        <div className="rounded-lg border border-zinc-800 bg-black p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-zinc-600 uppercase">
                Vessel
              </p>
              <h1 className="mt-1 text-xl leading-tight font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                {garage.vessel}
              </h1>
              <p className="mt-2 flex items-center gap-2 font-mono text-[13px] text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {garage.status.toUpperCase()}
              </p>
            </div>

            {/* Engine hour meter */}
            <div className="shrink-0 rounded border border-zinc-800 bg-[#120e05] px-3 py-2 text-right">
              <p className="font-mono text-2xl leading-none font-bold text-amber-500 tabular-nums">
                {garage.hoursAdded}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-amber-700 uppercase">
                Hrs added
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-baseline gap-2 border-t border-dashed border-zinc-800 pt-3">
            <span className="font-mono text-[11px] tracking-[0.15em] text-zinc-600 uppercase">
              Relationship
            </span>
            <span className="font-mono text-[13px] text-zinc-300">
              {garage.relationship.toLowerCase()}
            </span>
          </div>
        </div>

        {/* Service log, formatted like a work order */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between border-b border-zinc-800 pb-1.5">
            <h2 className="font-mono text-[13px] tracking-[0.2em] text-zinc-400 uppercase">
              Service log
            </h2>
            <span className="font-mono text-[11px] text-zinc-700">
              {garage.log.length} entries
            </span>
          </div>

          <div>
            {garage.log.map((entry, i) => (
              <button
                key={entry.problem}
                type="button"
                onClick={() =>
                  setOpenEntry(
                    openEntry === entry.problem ? null : entry.problem,
                  )
                }
                className="flex w-full cursor-pointer gap-4 border-b border-zinc-900 py-4 text-left transition-colors duration-150 hover:bg-white/[0.02]"
              >
                <span className="pt-0.5 font-mono text-[13px] text-zinc-700 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-medium text-zinc-100">
                    {entry.problem}
                  </p>
                  <AnimatePresence initial={false}>
                    {openEntry === entry.problem && entry.detail && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden font-mono text-[13px] leading-relaxed text-zinc-500"
                      >
                        <span className="block pt-1">{entry.detail}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Stamped, not badged */}
                <span
                  className={`mt-0.5 h-fit shrink-0 rotate-[-4deg] border-2 px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.15em] ${
                    entry.status === "UPGRADED"
                      ? "border-amber-600/60 text-amber-500/90"
                      : "border-emerald-600/60 text-emerald-500/90"
                  }`}
                >
                  {entry.status}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Margin notes */}
        <div className="mt-8 border-l-2 border-amber-600/50 pl-5">
          <h2 className="font-mono text-[13px] tracking-[0.2em] text-zinc-400 uppercase">
            What it taught me
          </h2>
          <div className="mt-4 space-y-5">
            {garage.lessons.map((lesson) => (
              <div key={lesson.number}>
                <p className="text-[15px] font-medium text-zinc-100">
                  {lesson.title}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-zinc-500">
                  {lesson.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Things built by hand */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between border-b border-zinc-800 pb-1.5">
            <h2 className="font-mono text-[13px] tracking-[0.2em] text-zinc-400 uppercase">
              Built by hand
            </h2>
          </div>
          {builds.map((build) => (
            <div key={build.name} className="flex gap-4 py-4">
              <span className="pt-1 font-mono text-[13px] text-zinc-700">
                &#9633;
              </span>
              <div>
                <p className="text-[15px] font-medium text-zinc-100">
                  {build.name}
                </p>
                <p className="mt-0.5 font-mono text-[12px] tracking-wide text-amber-600/90 uppercase">
                  {build.material}
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-500">
                  {build.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual fleet */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between border-b border-zinc-800 pb-1.5">
            <h2 className="font-mono text-[13px] tracking-[0.2em] text-zinc-400 uppercase">
              Forza garage
            </h2>
            <span className="font-mono text-[11px] text-zinc-700">
              owns every car
            </span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {forzaGarage.map((entry) => (
              <div
                key={entry.car}
                className="flex items-baseline justify-between gap-3 border border-zinc-900 bg-black/40 px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-[14px] text-zinc-100">
                    {entry.car}
                  </p>
                  <p className="font-mono text-[11px] text-zinc-600">
                    {entry.year}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] tracking-wider text-amber-600/80 uppercase">
                  {entry.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Open ticket */}
        <div className="mt-8 mb-4 border border-dashed border-zinc-700 bg-black/40 p-4">
          <p className="font-mono text-[10px] tracking-[0.2em] text-amber-600 uppercase">
            Open ticket
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-300">
            {garage.rabbitHole}
          </p>
        </div>
      </div>
    </div>
  );
}
