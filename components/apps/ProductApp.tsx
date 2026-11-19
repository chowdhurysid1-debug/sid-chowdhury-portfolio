"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  aiUseStatement,
  caseStudies,
  type CaseStudy,
} from "@/data/caseStudies";

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-[12px] tracking-[0.2em] text-zinc-500 uppercase">
      {children}
    </h2>
  );
}

function CaseList({ onOpen }: { onOpen: (study: CaseStudy) => void }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-7 sm:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-white">
        Product work
      </h1>
      <p className="mt-1 text-sm text-zinc-500">
        Four products: the problem, who it&apos;s for, the calls I made, and
        what the numbers say. Tap one.
      </p>

      <div className="mt-6">
        {caseStudies.map((study) => (
          <button
            key={study.id}
            type="button"
            onClick={() => onOpen(study)}
            className="group flex w-full cursor-pointer items-start gap-5 border-t border-zinc-800 py-5 text-left transition-colors duration-200 last:border-b hover:bg-white/[0.02]"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="text-lg font-semibold text-white">
                  {study.name}
                </h2>
                {study.featured && (
                  <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-medium text-indigo-400">
                    {study.label}
                  </span>
                )}
              </div>
              <p className="mt-1 text-[15px] leading-relaxed text-zinc-400">
                {study.hook}
              </p>
              <p className="mt-2 font-mono text-[12px] text-zinc-600">
                {study.featured
                  ? study.dates
                  : `${study.label} · ${study.dates}`}
              </p>
            </div>
            <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-zinc-700 transition-colors duration-200 group-hover:text-zinc-400" />
          </button>
        ))}
      </div>

      <p className="mt-6 text-[13px] leading-relaxed text-zinc-500">
        Ventures I started (EP Venture Fund, Junior Sharks, DECA) live in the
        Ventures app.
      </p>

      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <SectionHeading>AI use statement</SectionHeading>
        <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
          {aiUseStatement}
        </p>
      </div>
    </div>
  );
}

function CaseDetail({
  study,
  onBack,
}: {
  study: CaseStudy;
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
        <p className="font-mono text-[12px] tracking-wide text-indigo-400 uppercase">
          {study.label}
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-white">
          {study.name}
        </h1>
        <p className="mt-1.5 font-mono text-[12px] tracking-wide text-zinc-500 uppercase">
          {study.role} &middot; {study.dates}
        </p>
        <p className="mt-1 text-[13px] text-zinc-500">{study.team}</p>
      </div>

      <p className="mt-6 border-l-2 border-indigo-500 pl-4 text-xl leading-snug font-medium text-zinc-100">
        {study.hook}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {study.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-all duration-200 hover:bg-zinc-700 active:bg-zinc-900"
          >
            {link.label}
            <ArrowUpRight className="h-4 w-4 text-zinc-400" />
          </a>
        ))}
      </div>

      <div className="mt-8">
        <SectionHeading>The problem</SectionHeading>
        <div className="mt-3 space-y-3">
          {study.problem.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[15px] leading-relaxed text-zinc-300"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {study.users && (
        <div className="mt-8">
          <SectionHeading>Who it&apos;s for</SectionHeading>
          <ul className="mt-3 space-y-2">
            {study.users.map((user) => {
              const [who, ...rest] = user.split(": ");
              const detail = rest.join(": ");
              return (
                <li
                  key={user}
                  className="text-[15px] leading-relaxed text-zinc-300"
                >
                  <span className="font-semibold text-white">{who}.</span>{" "}
                  {detail.charAt(0).toUpperCase() + detail.slice(1)}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <SectionHeading>What it does</SectionHeading>
        <ul className="mt-3 space-y-2">
          {study.built.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[15px] leading-relaxed text-zinc-300"
            >
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <SectionHeading>Calls we made</SectionHeading>
        <div className="mt-3 space-y-3">
          {study.decisions.map((decision, i) => (
            <div
              key={decision.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <p className="text-[15px] font-semibold text-white">
                <span className="mr-2 font-mono text-[12px] text-indigo-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {decision.title}
              </p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-400">
                {decision.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <SectionHeading>By the numbers</SectionHeading>
        <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-zinc-800 sm:grid-cols-4">
          {study.stats.map((stat) => (
            <div key={stat.label} className="bg-zinc-950 px-3 py-4 text-center">
              <p className="text-lg font-semibold text-white">{stat.value}</p>
              <p className="mt-0.5 text-[11px] tracking-wide text-zinc-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[12px] leading-relaxed text-zinc-600">
          Sources: {study.statsSource}
        </p>
      </div>

      <div className="mt-8 pb-6">
        <SectionHeading>What we don&apos;t know yet</SectionHeading>
        <ul className="mt-3 space-y-2">
          {study.limits.map((limit) => (
            <li
              key={limit}
              className="flex gap-3 text-[14px] leading-relaxed text-zinc-400"
            >
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
              {limit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProductApp() {
  const [open, setOpen] = useState<CaseStudy | null>(null);

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
            <CaseDetail study={open} onBack={() => setOpen(null)} />
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
            <CaseList onOpen={setOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
