import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { ScrollNav } from "@/components/portfolio/ScrollNav";
import { FadeIn } from "@/components/portfolio/FadeIn";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import {
  academicProjects,
  education,
  experience,
  involvement,
  profile,
  ventures,
} from "@/data/content";
import { aiUseStatement, caseStudies } from "@/data/caseStudies";

function SectionHeader({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {blurb && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400">{blurb}</p>
      )}
    </div>
  );
}

export default function Home() {
  const [featured, ...rest] = caseStudies;
  const timeline = [...experience, ...involvement, ...academicProjects];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <ScrollNav />

      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.28),transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] [background-size:24px_24px]" />

        <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] lg:px-8">
          <FadeIn>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
              <GraduationCap className="h-3.5 w-3.5" />
              USC Iovine and Young Academy + Marshall
            </p>
            <h1 className="mt-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              {profile.tagline}
            </p>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500">
              <MapPin className="h-4 w-4 shrink-0" />
              {profile.location} &middot; {education.degree}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-500 active:bg-indigo-700"
              >
                See my product work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="/Chowdhury_Siddharth_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-2.5 font-medium text-zinc-100 transition-all duration-200 hover:bg-zinc-700 active:bg-zinc-900"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={profile.headshot}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 768px) 24rem, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-8">
              <p className="text-2xl font-bold text-white">$22,375</p>
              <p className="text-xs text-zinc-400">
                Granted to student founders, EP Venture Fund
              </p>
            </div>
          </FadeIn>
        </div>
      </header>

      <main>
        <section
          id="work"
          className="scroll-mt-20 border-t border-zinc-900 py-20 md:py-32"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeader
                eyebrow="Product work"
                title="Four products, from problem to pitch"
                blurb="Each one has the problem, who it's for, the calls we made, and the numbers, with sources. Where we don't know something yet, it says so."
              />
            </FadeIn>

            <FadeIn delay={0.05}>
              <Link
                href={`/projects/${featured.id}`}
                className="group mt-12 block rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-900 p-6 shadow-xl shadow-indigo-950/40 transition-all duration-200 hover:border-indigo-400/60 md:p-10"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                    {featured.label}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {featured.dates}
                  </span>
                </div>
                <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                      {featured.name}
                    </h3>
                    <p className="mt-3 text-lg text-zinc-300 md:text-xl">
                      {featured.hook}
                    </p>
                    <p className="mt-4 text-sm text-zinc-500">
                      {featured.role}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors duration-200 group-hover:text-white">
                      Read the case study
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-zinc-800">
                    {featured.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-zinc-950/90 px-4 py-5"
                      >
                        <p className="text-2xl font-bold text-white md:text-3xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs tracking-wide text-zinc-500 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {rest.map((study, i) => (
                <FadeIn key={study.id} delay={0.05 * (i + 1)}>
                  <Link
                    href={`/projects/${study.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-200 hover:border-zinc-600"
                  >
                    <p className="text-xs text-zinc-500">
                      {study.label} &middot; {study.dates}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {study.name}
                    </h3>
                    <p className="mt-2 flex-1 leading-relaxed text-zinc-400">
                      {study.hook}
                    </p>
                    <div className="mt-6 flex gap-6 border-t border-zinc-800 pt-4">
                      {study.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label}>
                          <p className="text-lg font-semibold text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs text-zinc-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 transition-colors duration-200 group-hover:text-white">
                      Case study
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <details className="group mt-10 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4">
              <summary className="cursor-pointer list-none text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                AI use statement (ACAD 183)
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {aiUseStatement}
              </p>
            </details>
          </div>
        </section>

        <section
          id="ventures"
          className="scroll-mt-20 border-t border-zinc-900 bg-zinc-900/30 py-20 md:py-32"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeader
                eyebrow="Ventures"
                title="Things I started before USC"
              />
            </FadeIn>

            <div className="mt-12 divide-y divide-zinc-800 border-y border-zinc-800">
              {ventures.map((venture) => (
                <FadeIn key={venture.id}>
                  <article className="grid gap-8 py-10 lg:grid-cols-[1fr_1.4fr]">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {venture.name}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {venture.role} &middot; {venture.dates}
                      </p>
                      <p className="mt-4 border-l-2 border-indigo-500 pl-4 text-lg leading-snug text-zinc-200">
                        {venture.tagline}
                      </p>
                      <p className="mt-4 leading-relaxed text-zinc-400">
                        {venture.body[venture.body.length - 1]}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8 self-center sm:grid-cols-4 lg:grid-cols-2">
                      {venture.highlights.map((item) => (
                        <div key={item.label}>
                          <p className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                            {item.value}
                          </p>
                          <p className="mt-1 text-xs tracking-wide text-zinc-500 uppercase">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-20 border-t border-zinc-900 py-20 md:py-32"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeader
                eyebrow="Experience"
                title="Internships, USC orgs, and research"
              />
            </FadeIn>

            <ol className="mt-12 space-y-12">
              {timeline.map((entry) => (
                <li key={entry.org}>
                  <FadeIn className="grid gap-3 md:grid-cols-[12rem_1fr] md:gap-10">
                    <p className="font-mono text-sm text-zinc-500">
                      {entry.dates}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {entry.org}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">
                        {entry.role} &middot; {entry.location}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {entry.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 leading-relaxed text-zinc-300"
                          >
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ol>

            <FadeIn>
              <div className="mt-16 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    Now
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {education.program}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    {education.degree}
                  </p>
                  <div className="mt-4 flex gap-10">
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {education.gpa}
                      </p>
                      <p className="text-xs text-zinc-500 uppercase">GPA</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {education.grad}
                      </p>
                      <p className="text-xs text-zinc-500 uppercase">
                        Graduating
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {education.honors.map((honor) => (
                      <li key={honor} className="text-sm text-zinc-300">
                        {honor}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                  <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    Before
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {education.priorSchool.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {education.priorSchool.location} &middot; Class of{" "}
                    {education.priorSchool.grad}
                  </p>
                  <div className="mt-4 flex gap-10">
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {education.priorSchool.gpa}
                      </p>
                      <p className="text-xs text-zinc-500 uppercase">GPA</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {education.priorSchool.sat}
                      </p>
                      <p className="text-xs text-zinc-500 uppercase">SAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 px-4 pb-20 sm:px-6 md:pb-32 lg:px-8"
        >
          <FadeIn>
            <div className="mx-auto max-w-4xl rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/70 via-zinc-900 to-zinc-900 px-6 py-16 text-center md:px-16">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Want to talk about any of this?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                I&apos;m looking for product, venture, and finance roles. Email
                is the fastest way to reach me.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-500 active:bg-indigo-700"
              >
                <Mail className="h-5 w-5" />
                {profile.email}
              </a>
              <div className="mt-6 flex justify-center gap-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; 2026 {profile.fullName}. {profile.location}.
          </p>
          <Link
            href="/ipad"
            className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-white"
          >
            Prefer the iPad version?
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
