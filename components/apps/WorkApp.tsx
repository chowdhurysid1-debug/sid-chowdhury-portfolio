import { founding, experience, academicProjects } from "@/data/content";
import { ExperienceList } from "./ExperienceList";

export function WorkApp() {
  return (
    <div className="mx-auto max-w-2xl space-y-10 px-6 py-8 sm:px-10">
      <section>
        <h2 className="mb-4 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Founding &amp; Leadership
        </h2>
        <ExperienceList entries={founding} />
      </section>

      <section>
        <h2 className="mb-4 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Experience
        </h2>
        <ExperienceList entries={experience} />
      </section>

      <section className="pb-4">
        <h2 className="mb-4 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
          Academic Projects
        </h2>
        <ExperienceList entries={academicProjects} />
      </section>
    </div>
  );
}
