import { Check, Wrench, Anchor } from "lucide-react";
import { garage } from "@/data/content";

export function GarageApp() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
            <Anchor className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-white">
              {garage.vessel}
            </h1>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {garage.status}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-zinc-950 p-3">
            <p className="text-lg font-semibold text-white">
              {garage.hoursAdded}
            </p>
            <p className="text-[11px] tracking-wider text-zinc-500 uppercase">
              Hours added
            </p>
          </div>
          <div className="rounded-xl bg-zinc-950 p-3">
            <p className="text-lg font-semibold text-white">
              {garage.relationship}
            </p>
            <p className="text-[11px] tracking-wider text-zinc-500 uppercase">
              Relationship status
            </p>
          </div>
        </div>
      </div>

      <section className="mt-7">
        <h2 className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
          Maintenance log
        </h2>
        <div className="mt-3 space-y-2">
          {garage.log.map((entry) => (
            <div
              key={entry.problem}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-white">
                  {entry.problem}
                </p>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-400">
                  <Check className="h-3 w-3" strokeWidth={3} />
                  {entry.status}
                </span>
              </div>
              {entry.detail && (
                <p className="mt-1.5 text-[13px] leading-relaxed text-zinc-400">
                  {entry.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
          What this boat taught me
        </h2>
        <div className="mt-3 space-y-3">
          {garage.lessons.map((lesson) => (
            <div key={lesson.number} className="flex gap-4">
              <span className="pt-0.5 font-mono text-sm text-zinc-600">
                {lesson.number}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  {lesson.title}
                </p>
                <p className="mt-0.5 text-[13px] leading-relaxed text-zinc-400">
                  {lesson.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-7 mb-4 flex gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
        <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <div>
          <p className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
            Current rabbit hole
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-300">
            {garage.rabbitHole}
          </p>
        </div>
      </div>
    </div>
  );
}
