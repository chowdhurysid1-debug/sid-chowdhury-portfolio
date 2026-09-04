import type { ExperienceEntry } from "@/data/content";

export function ExperienceList({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div
          key={entry.org}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl transition-all duration-200 hover:border-zinc-700 sm:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-white">{entry.org}</h3>
              <p className="text-sm text-zinc-400">
                {entry.role} &middot; {entry.location}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs whitespace-nowrap text-zinc-500">
                {entry.dates}
              </span>
              {entry.active && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              )}
            </div>
          </div>
          <ul className="mt-3 space-y-1.5">
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-zinc-300"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
