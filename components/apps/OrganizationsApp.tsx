import { organizations } from "@/data/content";
import { Building2 } from "lucide-react";

export function OrganizationsApp() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 px-6 py-8 sm:px-10">
      {organizations.map((org) => (
        <div
          key={org.name}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl transition-all duration-200 hover:border-zinc-700"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Building2 className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-semibold text-white">{org.name}</h3>
              <p className="text-sm text-zinc-400">{org.role}</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            {org.description}
          </p>
        </div>
      ))}
    </div>
  );
}
