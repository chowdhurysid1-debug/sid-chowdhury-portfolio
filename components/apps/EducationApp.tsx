import { education } from "@/data/content";

export function EducationApp() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-6 py-8 sm:px-10">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-white">{education.school}</h3>
        <p className="text-sm text-zinc-400">{education.program}</p>
        <p className="mt-2 text-sm text-zinc-300">
          {education.degree} &middot; {education.location}
        </p>
        <p className="mt-1 text-xs text-zinc-500">
          Expected graduation {education.grad}
        </p>

        <div className="mt-5">
          <h4 className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
            Honors
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {education.honors.map((honor) => (
              <span
                key={honor}
                className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
              >
                {honor}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-white">
          {education.priorSchool.name}
        </h3>
        <p className="text-sm text-zinc-400">
          {education.priorSchool.location}
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-center">
            <p className="text-sm font-semibold text-white">
              {education.priorSchool.gpa}
            </p>
            <p className="mt-0.5 text-[11px] tracking-wide text-zinc-500 uppercase">
              GPA
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-center">
            <p className="text-sm font-semibold text-white">
              {education.priorSchool.sat}
            </p>
            <p className="mt-0.5 text-[11px] tracking-wide text-zinc-500 uppercase">
              SAT
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-center">
            <p className="text-sm font-semibold text-white">
              {education.priorSchool.grad}
            </p>
            <p className="mt-0.5 text-[11px] tracking-wide text-zinc-500 uppercase">
              Grad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
