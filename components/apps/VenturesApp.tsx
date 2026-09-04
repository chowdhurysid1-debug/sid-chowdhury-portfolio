"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ventures, type Venture } from "@/data/content";

function VentureList({ onOpen }: { onOpen: (venture: Venture) => void }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-7 sm:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-white">
        Things I built
      </h1>
      <p className="mt-1 text-sm text-zinc-500">
        Three of them. Open one for the whole story.
      </p>

      <div className="mt-6">
        {ventures.map((venture) => (
          <button
            key={venture.id}
            type="button"
            onClick={() => onOpen(venture)}
            className="group flex w-full cursor-pointer items-start gap-5 border-t border-zinc-800 py-5 text-left last:border-b"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2.5">
                <h2 className="text-lg font-semibold text-white">
                  {venture.name}
                </h2>
                {venture.active && (
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                )}
              </div>
              <p className="mt-1 text-[15px] leading-relaxed text-zinc-400">
                {venture.hook}
              </p>
              <p className="mt-2 font-mono text-[12px] text-zinc-600">
                {venture.dates}
              </p>
            </div>
            <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-zinc-700 transition-colors duration-200 group-hover:text-zinc-400" />
          </button>
        ))}
      </div>
    </div>
  );
}

function VentureDetail({
  venture,
  onBack,
}: {
  venture: Venture;
  onBack: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
      <button
        type="button"
        onClick={onBack}
        className="flex cursor-pointer items-center gap-0.5 text-[15px] text-indigo-400 transition-colors duration-150 hover:text-indigo-300"
      >
        <ChevronLeft className="h-5 w-5" />
        Back
      </button>

      <div className="mt-5">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {venture.name}
        </h1>
        <p className="mt-1.5 font-mono text-[12px] tracking-wide text-zinc-500 uppercase">
          {venture.role} &middot; {venture.dates} &middot; {venture.location}
        </p>
      </div>

      <p className="mt-6 border-l-2 border-indigo-500 pl-4 text-xl leading-snug font-medium text-zinc-100">
        {venture.tagline}
      </p>

      <div className="mt-6 space-y-4">
        {venture.body.map((paragraph, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-zinc-300">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-zinc-800 sm:grid-cols-4">
        {venture.highlights.map((item) => (
          <div key={item.label} className="bg-zinc-950 px-3 py-4 text-center">
            <p className="text-lg font-semibold text-white">{item.value}</p>
            <p className="mt-0.5 text-[11px] tracking-wide text-zinc-500 uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {venture.portfolio && (
        <div className="mt-8 pb-4">
          <h2 className="font-mono text-[12px] tracking-[0.2em] text-zinc-500 uppercase">
            The portfolio
          </h2>
          <div className="mt-3 space-y-3">
            {venture.portfolio.map((company) => (
              <div
                key={company.name}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
              >
                <p className="text-[15px] font-semibold text-white">
                  {company.name}
                </p>
                <p className="mt-1 text-[14px] text-zinc-400">{company.what}</p>
                <p className="mt-2 text-[14px] text-emerald-400">
                  {company.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function VenturesApp() {
  const [open, setOpen] = useState<Venture | null>(null);

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.div
            key={open.id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            className="absolute inset-0 overflow-y-auto bg-zinc-950"
          >
            <VentureDetail venture={open} onBack={() => setOpen(null)} />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ x: "-20%", opacity: 0.7 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-20%", opacity: 0.7 }}
            transition={{ type: "spring", stiffness: 380, damping: 38 }}
            className="absolute inset-0 overflow-y-auto bg-zinc-950"
          >
            <VentureList onOpen={setOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
