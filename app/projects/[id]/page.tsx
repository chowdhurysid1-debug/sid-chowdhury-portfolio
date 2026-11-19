import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollNav } from "@/components/portfolio/ScrollNav";
import { FadeIn } from "@/components/portfolio/FadeIn";
import { caseStudies } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/projects/[id]">,
): Promise<Metadata> {
  const { id } = await props.params;
  const study = caseStudies.find((item) => item.id === id);
  if (!study) return { title: "Sid Chowdhury" };
  return {
    title: `${study.name}, a case study by Sid Chowdhury`,
    description: study.hook,
  };
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
      {children}
    </h2>
  );
}

export default async function ProjectPage(props: PageProps<"/projects/[id]">) {
  const { id } = await props.params;
  const index = caseStudies.findIndex((item) => item.id === id);
  if (index === -1) notFound();

  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.18),transparent_55%)] text-zinc-50">
      <ScrollNav />

      <main className="mx-auto max-w-3xl px-4 pt-12 pb-24 sm:px-6 md:pt-20 lg:px-8">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All work
        </Link>

        <FadeIn>
          <p className="mt-10 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
            {study.label}
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            {study.name}
          </h1>
          <p className="mt-5 text-xl leading-snug text-zinc-300 md:text-2xl">
            {study.hook}
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-4 border-y border-zinc-800 py-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-zinc-500">My role</dt>
              <dd className="mt-1 text-zinc-200">{study.role}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Team</dt>
              <dd className="mt-1 text-zinc-200">{study.team}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">When</dt>
              <dd className="mt-1 text-zinc-200">{study.dates}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            {study.links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? "inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-500 active:bg-indigo-700"
                    : "inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-all duration-200 hover:bg-zinc-700 active:bg-zinc-900"
                }
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-4">
          {study.stats.map((stat) => (
            <div key={stat.label} className="bg-zinc-950 px-4 py-6">
              <p className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                {stat.value}
              </p>
              <p className="mt-1 text-xs tracking-wide text-zinc-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-zinc-600">
          Sources: {study.statsSource}
        </p>

        <section className="mt-16">
          <SectionLabel>The problem</SectionLabel>
          <div className="mt-4 space-y-4">
            {study.problem.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-zinc-300 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {study.users && (
          <section className="mt-14">
            <SectionLabel>Who it&apos;s for</SectionLabel>
            <div className="mt-4 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/60">
              {study.users.map((user) => {
                const [who, ...rest] = user.split(": ");
                const detail = rest.join(": ");
                return (
                  <div
                    key={user}
                    className="grid gap-1 px-5 py-4 sm:grid-cols-[14rem_1fr] sm:gap-4"
                  >
                    <p className="font-semibold text-white">{who}</p>
                    <p className="text-zinc-400">
                      {detail.charAt(0).toUpperCase() + detail.slice(1)}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <section className="mt-14">
          <SectionLabel>What it does</SectionLabel>
          <ul className="mt-4 space-y-3">
            {study.built.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-zinc-300"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <SectionLabel>Calls we made</SectionLabel>
          <ol className="mt-4 space-y-4">
            {study.decisions.map((decision, i) => (
              <li
                key={decision.title}
                className="grid gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:grid-cols-[3rem_1fr]"
              >
                <span className="font-mono text-sm text-indigo-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {decision.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-400">
                    {decision.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <SectionLabel>What we don&apos;t know yet</SectionLabel>
          <ul className="mt-4 space-y-3">
            {study.limits.map((limit) => (
              <li
                key={limit}
                className="flex gap-3 leading-relaxed text-zinc-400"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                {limit}
              </li>
            ))}
          </ul>
        </section>

        <Link
          href={`/projects/${next.id}`}
          className="group mt-20 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-200 hover:border-zinc-600"
        >
          <div>
            <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
              Next project
            </p>
            <p className="mt-1 text-xl font-semibold text-white">{next.name}</p>
            <p className="mt-1 text-sm text-zinc-400">{next.hook}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-zinc-500 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white" />
        </Link>
      </main>
    </div>
  );
}
