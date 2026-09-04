import Image from "next/image";
import { about, profile } from "@/data/content";

export function AboutApp() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-8 sm:px-10">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-32 sm:w-32">
          <Image
            src={profile.headshot}
            alt={profile.name}
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {about.quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-center"
          >
            <p className="text-sm font-semibold text-white">{fact.value}</p>
            <p className="mt-0.5 text-[11px] tracking-wide text-zinc-500 uppercase">
              {fact.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-300">
        <p>{about.intro}</p>
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Outside of work
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {about.interests.map((interest) => (
            <span
              key={interest}
              className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 mb-8">
        <h2 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Languages
        </h2>
        <p className="mt-2 text-sm text-zinc-300">
          {about.languages.join(", ")}
        </p>
      </div>
    </div>
  );
}
