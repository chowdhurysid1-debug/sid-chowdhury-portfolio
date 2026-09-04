import { FileText, ArrowRight } from "lucide-react";
import { founding, experience, academicProjects } from "@/data/content";
import { ExperienceList } from "./ExperienceList";

export function WorkApp() {
  return (
    <div className="mx-auto max-w-2xl space-y-10 px-6 py-8 sm:px-10">
      <a
        href="/Chowdhury_Siddharth_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:text-white"
      >
        <span className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-zinc-500" />
          This is the short version. See the full resume.
        </span>
        <ArrowRight className="h-4 w-4 shrink-0 text-zinc-500" />
      </a>

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
