import { mentors } from "@/data/content";
import { Users } from "lucide-react";

export function MentorsApp() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 px-6 py-8 sm:px-10">
      {mentors.map((mentor) => (
        <div
          key={mentor.name}
          className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl transition-all duration-200 hover:border-zinc-700"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <Users className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="font-semibold text-white">{mentor.name}</h3>
            <p className="text-sm text-zinc-400">{mentor.role}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
              {mentor.note}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
