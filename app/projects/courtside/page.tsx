import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Download,
  ExternalLink,
  Globe,
  MessageCircle,
} from "lucide-react";
import { ScrollNav } from "@/components/portfolio/ScrollNav";
import { FadeIn } from "@/components/portfolio/FadeIn";
import { aiUseStatement } from "@/data/caseStudies";

// Every figure on this page is copied from the group's BoF presentation
// (public/work/Courtside_Connect_BoF_Deck.pdf) or the PRD. Do not add numbers
// that are not in those files.

export const metadata: Metadata = {
  title: "Courtside Connect, ACAD 183 semester project",
  description:
    "Live sports, shared from the hospital bed. Sid Chowdhury's ACAD 183 Birds of a Feather semester project with Group 6.",
};

const team = [
  "JT Lu-Morris",
  "Raphael Rosset",
  "Matt Turner",
  "Sid Chowdhury",
  "Bowden Eley",
];

const myRole = [
  "Wrote the product requirements doc: personas, user stories, P0 and P1 scope, the requirements hospitals would reject us over, risks, and milestones.",
  "Built the interactive web version of our pitch deck, with speaker notes and a live breakeven calculator.",
];

const problemPoints = [
  {
    title: "Isolation is a clinical problem",
    body: "Hospitalized patients report more loneliness, which is linked to higher anxiety, depression and worse recovery.",
  },
  {
    title: "Immersion already works in hospitals",
    body: "A 2025 meta-analysis found VR is safe and can reduce in-hospital anxiety and pain.",
  },
  {
    title: "Today's options are passive",
    body: "Hospital TV, one-off sports-cart cameras and relaxation VR don't let patients feel present or be heard.",
  },
];

const phases = [
  {
    when: "2027",
    title: "Prove it",
    body: "One launch venue and 3 free hospital pilots from May. 3 paid hospitals by December.",
  },
  {
    when: "2028 to 2029",
    title: "Scale in sports metros",
    body: "Sell to patient experience teams, starting with long-stay units. 22 hospitals and 5 venues.",
  },
  {
    when: "2030 and beyond",
    title: "Expand the audience",
    body: "40 hospitals and 8 venues, then military morale programs and corrections.",
  },
];

const customers = [
  {
    tag: "Buyer",
    who: "Patient experience director",
    need: "Wants to engage long-stay units within an existing entertainment budget.",
    quote:
      "$20 a bed works if it fits our entertainment budget. Start with pediatrics and oncology.",
  },
  {
    tag: "User",
    who: "Long-stay patient and family",
    need: "A fan who can't get to live events and wants to belong, not only to watch.",
    quote:
      "He didn't just want to watch. He wanted his team to know he was there.",
  },
  {
    tag: "Gatekeeper",
    who: "Nurses on the unit",
    need: "Hand out and clean the headsets, so it must be simple and infection safe.",
    quote:
      "Kids on long stays get withdrawn by week two. Anything on their face must be wipeable.",
  },
];

const solution = [
  {
    icon: Globe,
    title: "In the stadium",
    body: "End-of-row 360 degree camera poles in designated seats, with a speaker, mic and fan signage.",
  },
  {
    icon: MessageCircle,
    title: "On the app",
    body: "The live feed with AR chat, a scoreboard and switchable camera angles.",
  },
  {
    icon: BedDouble,
    title: "At the bedside",
    body: "A shared pool of wipeable Quest 3S headsets checked out by nurses, plus TV mode for everyone else.",
  },
];

const competitors = [
  { name: "Courtside Connect", note: "design intent" },
  { name: "Rendever", note: "senior-care VR" },
  { name: "Get Well", note: "bedside TV" },
  { name: "Apple Vision Pro", note: "consumer" },
  { name: "Meta Quest + Xtadium", note: "consumer" },
];

const competition: { factor: string; cells: string[] }[] = [
  {
    factor: "Live sports",
    cells: [
      "Full: live, interactive",
      "None: wellness content",
      "Partial: passive TV",
      "Partial: select Lakers games",
      "Partial: 52 NBA games a season",
    ],
  },
  {
    factor: "Talk and chat",
    cells: [
      "Full: mic, speaker, chat",
      "Full: shared VR sessions",
      "Partial: care-team messages",
      "None",
      "None",
    ],
  },
  {
    factor: "Angles and AR",
    cells: [
      "Full: angles, AR overlays",
      "None listed",
      "None",
      "Full: multiview",
      "Partial: single 180 degree feed",
    ],
  },
  {
    factor: "Built for hospitals",
    cells: [
      "Full",
      "Full: senior living, hospitals",
      "Full: bedside TV",
      "None: consumer",
      "None: consumer",
    ],
  },
  {
    factor: "Cost to add a patient",
    cells: [
      "Partial: $40/bed/mo, shared kit",
      "Partial: $1,000 kit, $300 to $400/mo",
      "Not published",
      "None: $3,499 headset",
      "Partial: headset, games free",
    ],
  },
];
const coverage = ["4.5", "2.5", "2.0", "1.5", "1.5"];

// Bar widths are each value as a share of TAM ($435M).
const market = [
  {
    value: "$435M",
    label: "TAM: all US hospital beds",
    math: "907,216 staffed beds x $480 per year",
    barClass: "w-full",
  },
  {
    value: "$372M",
    label: "SAM: US community hospital beds",
    math: "775,297 beds x $480 per year, excluding federal and psychiatric",
    barClass: "w-[85.5%]",
  },
  {
    value: "$1.92M",
    label: "SOM: 40 partner hospitals by Dec 2030",
    math: "40 hospitals x 100 long-stay beds x $480 per year, about 0.5% of SAM",
    barClass: "w-[0.5%] min-w-1.5",
  },
];

const unitRows = [
  { item: "100 beds x $40 x 12 months", amount: "$48,000" },
  { item: "Content rights (placeholder)", amount: "($9,600)" },
  { item: "Streaming and hosting", amount: "($1,800)" },
];

const mustBeTrue = [
  {
    title: "Content rights",
    body: "$800 per hospital per month is a placeholder until we have a real quote.",
  },
  {
    title: "Price",
    body: "At the $20 our mock buyer named, breakeven jumps to about 132 hospitals.",
  },
  {
    title: "Sales speed",
    body: "We assume 10 months to the first paid deal. Hospital cycles often run 6 to 18.",
  },
];

const proFormaYears = ["2027", "2028", "2029", "2030"];
const proForma: { metric: string; values: string[]; isTotal?: boolean }[] = [
  { metric: "Paid hospitals", values: ["3", "10", "22", "40"] },
  { metric: "Stadium venues", values: ["1", "3", "5", "8"] },
  { metric: "Year-end ARR", values: ["$144K", "$480K", "$1.06M", "$1.92M"] },
  { metric: "Revenue", values: ["$28K", "$330K", "$798K", "$1.53M"] },
  { metric: "Gross margin", values: ["-12%", "70%", "71%", "72%"] },
  { metric: "EBITDA", values: ["($419K)", "($703K)", "($619K)", "($459K)"] },
  {
    metric: "Net cash flow",
    values: ["($470K)", "($820K)", "($810K)", "($754K)"],
  },
  {
    metric: "Cumulative cash need",
    values: ["($470K)", "($1.29M)", "($2.10M)", "($2.85M)"],
    isTotal: true,
  },
];

// Bar widths are each line as a share of the largest line ($705K, 28.2%).
const funds = [
  {
    label: "Sales and customer success",
    detail: "1 to 3 reps, clinical liaison, conferences",
    amount: "$705K (28.2%)",
    barClass: "w-full bg-indigo-500",
  },
  {
    label: "Product and engineering",
    detail: "Engineers, MVP build, streaming and hosting",
    amount: "$546K (21.8%)",
    barClass: "w-[77%] bg-indigo-500",
  },
  {
    label: "Founders, compliance and ops",
    detail: "HIPAA, SOC 2, insurance, legal",
    amount: "$509K (20.4%)",
    barClass: "w-[72%] bg-indigo-500",
  },
  {
    label: "Stadium and headset hardware",
    detail: "Camera kits at 5 venues, Quest 3S, venue ops",
    amount: "$180K (7.2%)",
    barClass: "w-[26%] bg-indigo-500",
  },
  {
    label: "Sports content rights",
    detail: "$800 per hospital per month, placeholder",
    amount: "$160K (6.4%)",
    barClass: "w-[23%] bg-indigo-500",
  },
  {
    label: "Cash reserve",
    detail: "Slower hospital sales or higher rights costs",
    amount: "$400K (16.0%)",
    barClass: "w-[57%] bg-amber-500",
  },
];

const milestones = [
  { when: "May '27", what: "3 free pilots, first venue" },
  { when: "Dec '27", what: "3 paid hospitals, $144K ARR" },
  { when: "Dec '28", what: "10 paid hospitals, $480K ARR" },
  { when: "Dec '29", what: "22 paid hospitals, $1.06M ARR" },
];

function Slide({
  id,
  number,
  eyebrow,
  title,
  children,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-zinc-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
            <span className="font-mono text-zinc-600">{number}</span>
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </FadeIn>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Sources({ children }: { children: string }) {
  return (
    <p className="mt-6 text-xs leading-relaxed text-zinc-600">{children}</p>
  );
}

const primaryButton =
  "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-500 active:bg-indigo-700";
const secondaryButton =
  "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-2.5 font-medium text-zinc-100 transition-all duration-200 hover:bg-zinc-700 active:bg-zinc-900";
const bigNumber =
  "bg-gradient-to-r from-white to-zinc-400 bg-clip-text font-bold tracking-tight text-transparent";

export default function CourtsidePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <ScrollNav />

      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.28),transparent_65%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6 md:pt-20 md:pb-28 lg:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>

          <FadeIn>
            <p className="mt-10 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
              ACAD 183 &middot; Birds of a Feather semester project &middot;
              Group 6
            </p>
            <h1 className={`mt-6 text-5xl md:text-7xl ${bigNumber}`}>
              Courtside Connect
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-zinc-300 md:text-2xl">
              Live sports, shared from the hospital bed.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              {team.join(", ")} &middot; Fall 2026
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/work/Courtside_Connect_BoF_Deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButton}
              >
                <Download className="h-4 w-4" />
                Our presentation (PDF)
              </a>
              <a
                href="/work/courtside/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                <ExternalLink className="h-4 w-4" />
                Interactive deck
              </a>
              <a
                href="/work/Courtside_Connect_PRD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                <ExternalLink className="h-4 w-4" />
                PRD
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-14 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 via-zinc-900 to-zinc-900 p-6 md:p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-indigo-300 uppercase">
                My role
              </p>
              <ul className="mt-4 space-y-3">
                {myRole.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-relaxed text-zinc-200"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-zinc-500">
                The rest of this page walks through the presentation our group
                gave, slide by slide.
              </p>
            </div>
          </FadeIn>
        </div>
      </header>

      <main>
        <Slide
          id="problem"
          number="01"
          eyebrow="Problem"
          title="Long hospital stays cut patients off"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              {problemPoints.map((point) => (
                <div
                  key={point.title}
                  className="border-l-2 border-indigo-500 pl-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-zinc-400">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className={`text-5xl ${bigNumber}`}>33M+</p>
                <p className="mt-2 text-sm text-zinc-400">
                  US community hospital admissions a year
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className={`text-5xl ${bigNumber}`}>$5.9B</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Projected sports AR/VR market by 2032, up from $727M in 2024
                </p>
              </div>
            </div>
          </div>
          <Sources>
            Sources: AHA Fast Facts 2026; Lassen et al., European Journal of
            Pain (2025); PMC cohort research (2025); Credence Research.
          </Sources>
        </Slide>

        <Slide
          id="vision"
          number="02"
          eyebrow="Vision and strategy"
          title="No fan misses the game because of a hospital bed."
        >
          <ol className="grid gap-4 md:grid-cols-3">
            {phases.map((phase) => (
              <li
                key={phase.when}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <p className="font-mono text-xs text-indigo-400">
                  {phase.when}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {phase.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-400">
                  {phase.body}
                </p>
              </li>
            ))}
          </ol>
        </Slide>

        <Slide
          id="customers"
          number="03"
          eyebrow="Customer profile"
          title="Who buys, who uses, and who has to say yes"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {customers.map((customer) => (
              <div
                key={customer.tag}
                className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase">
                  {customer.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {customer.who}
                </h3>
                <p className="mt-2 flex-1 leading-relaxed text-zinc-400">
                  {customer.need}
                </p>
                <blockquote className="mt-6 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-300 italic">
                  &ldquo;{customer.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
          <Sources>
            Quotes are from our mock expert interviews, not yet real customers.
          </Sources>
        </Slide>

        <Slide
          id="solution"
          number="04"
          eyebrow="Solution"
          title="A seat in the stadium, from bed"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {solution.map((part) => {
              const Icon = part.icon;
              return (
                <div
                  key={part.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                >
                  <div className="inline-flex rounded-xl bg-indigo-500/10 p-2.5 text-indigo-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {part.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-400">
                    {part.body}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 px-6 py-5 text-zinc-200">
            <span className="font-semibold text-white">Business model:</span>{" "}
            hospitals subscribe per bed, at $40 per bed per month. Teams and
            venues gain a new way to reach fans.
          </div>
        </Slide>

        <Slide
          id="vvp"
          number="05"
          eyebrow="Visual value proposition"
          title="Pick an angle, talk with real fans, see AR stats, all from bed"
        >
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#f7f4ee]">
            <Image
              src="/work/courtside/assets/vvp.png"
              alt="Diagram: a patient in a hospital bed wearing a headset, connected to a live game with AR stats, a choice of camera angles, and a crowd of fans cheering together."
              width={2463}
              height={1017}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Slide>

        <Slide
          id="uvp"
          number="06"
          eyebrow="Unique value proposition"
          title="Patients don't only watch. They're heard."
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-lg leading-relaxed text-zinc-200">
                For hospitals serving long-stay patients who can&apos;t get to
                live events,{" "}
                <span className="font-semibold text-white">
                  Courtside Connect
                </span>{" "}
                is a patient engagement platform that streams live sports from
                in-stadium 360 degree cameras.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-indigo-300">
                Patients don&apos;t only watch. They talk with other patients
                and with fans in the stadium.
              </p>
            </div>
            <figure>
              <div className="overflow-hidden rounded-2xl border border-zinc-800">
                <Image
                  src="/work/courtside/assets/value-map.png"
                  alt="Strategy canvas comparing hospital TV, fixed sports cart cameras, generic relaxation VR and Courtside Connect. Courtside Connect rates high on live authenticity, viewer control, two-way interaction, AR overlays and synced presence."
                  width={1518}
                  height={783}
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-xs text-zinc-500">
                Strategy canvas: what we eliminate, reduce, raise, and create
                compared with hospital TV, sports cart cameras, and relaxation
                VR.
              </figcaption>
            </figure>
          </div>
        </Slide>

        <Slide
          id="competition"
          number="07"
          eyebrow="Competitive analysis"
          title="Live sports, two-way talk, and a hospital fit in one product"
        >
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full min-w-[48rem] text-left text-sm">
              <thead className="bg-zinc-900 text-zinc-300">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Factor
                  </th>
                  {competitors.map((competitor, i) => (
                    <th
                      key={competitor.name}
                      scope="col"
                      className={`px-4 py-3 font-semibold ${i === 0 ? "text-indigo-300" : ""}`}
                    >
                      {competitor.name}
                      <span className="block text-xs font-normal text-zinc-500">
                        {competitor.note}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {competition.map((row) => (
                  <tr key={row.factor}>
                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-zinc-300"
                    >
                      {row.factor}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={`${row.factor}-${competitors[i].name}`}
                        className={`px-4 py-3 ${i === 0 ? "bg-indigo-500/5 text-indigo-200" : "text-zinc-400"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-zinc-900">
                  <th
                    scope="row"
                    className="px-4 py-3 font-semibold text-white"
                  >
                    Coverage (of 5)
                  </th>
                  {coverage.map((score, i) => (
                    <td
                      key={competitors[i].name}
                      className={`px-4 py-3 text-lg font-bold ${i === 0 ? "text-indigo-300" : "text-zinc-300"}`}
                    >
                      {score}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <Sources>
            Full = 1, partial = 0.5, none = 0. The Courtside column is design
            intent, not a shipped product. Rendever price is 2020 data. Sources:
            Rendever, SPEEDA, URMC, Tom&apos;s Guide, UploadVR.
          </Sources>
        </Slide>

        <Slide
          id="market"
          number="08"
          eyebrow="TAM, SAM and SOM"
          title="Sized at $480 per bed per year"
        >
          <div className="space-y-4">
            {market.map((ring) => (
              <div
                key={ring.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                  <p className={`w-36 shrink-0 text-4xl ${bigNumber}`}>
                    {ring.value}
                  </p>
                  <div>
                    <p className="font-semibold text-white">{ring.label}</p>
                    <p className="mt-1 text-sm text-zinc-400">{ring.math}</p>
                  </div>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className={`h-full rounded-full bg-indigo-500 ${ring.barClass}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <Sources>
            Sources: AHA Fast Facts on U.S. Hospitals 2026; team pro forma. $480
            per year is $40 per bed per month. Bars are drawn to scale against
            TAM.
          </Sources>
        </Slide>

        <Slide
          id="economics"
          number="09"
          eyebrow="Unit economics"
          title="What must be true"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-zinc-300">
                Per hospital, per year
              </p>
              <div className="mt-3 overflow-hidden rounded-2xl border border-zinc-800">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-zinc-800">
                    {unitRows.map((row) => (
                      <tr key={row.item}>
                        <td className="px-4 py-3 text-zinc-400">{row.item}</td>
                        <td className="px-4 py-3 text-right font-mono text-zinc-200">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-zinc-900">
                      <td className="px-4 py-3 font-semibold text-white">
                        Contribution (76%)
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-white">
                        $36,600
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-zinc-300">
                <span className="text-2xl font-bold text-white">About 46</span>{" "}
                paid hospitals reach EBITDA breakeven on the 2030 cost base.
              </p>
            </div>
            <div className="space-y-4">
              {mustBeTrue.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
                >
                  <h3 className="font-semibold text-indigo-300">
                    {item.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Sources>
            Sources: team pro forma; hospital sales cycle benchmarks from
            Stacker and PulseRevOps.
          </Sources>
        </Slide>

        <Slide
          id="pro-forma"
          number="10"
          eyebrow="Pro forma summary"
          title="Four years to 40 hospitals and $1.92M in ARR"
        >
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full min-w-[36rem] text-sm">
              <thead className="bg-zinc-900 text-zinc-300">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">
                    Year-end or full year
                  </th>
                  {proFormaYears.map((year) => (
                    <th
                      key={year}
                      scope="col"
                      className="px-4 py-3 text-right font-semibold"
                    >
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {proForma.map((row) => (
                  <tr
                    key={row.metric}
                    className={row.isTotal ? "bg-zinc-900" : ""}
                  >
                    <th
                      scope="row"
                      className={`px-4 py-3 text-left ${row.isTotal ? "font-semibold text-white" : "font-medium text-zinc-300"}`}
                    >
                      {row.metric}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={`${row.metric}-${proFormaYears[i]}`}
                        className={`px-4 py-3 text-right font-mono ${row.isTotal ? "font-semibold text-white" : "text-zinc-400"}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Sources>
            2027 margin is negative because pilots are free. Full monthly 2027
            and annual 2028 to 2030 model is in the Courtside Connect pro forma
            spreadsheet.
          </Sources>
        </Slide>

        <Slide
          id="funds"
          number="11"
          eyebrow="Use of funds"
          title="Raising a $2.5M seed"
        >
          <p className="-mt-6 mb-8 text-zinc-400">
            Funds the plan through Dec &apos;29 plus a $400K reserve, about 42
            months of runway.
          </p>
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-5">
              {funds.map((line) => (
                <div key={line.label}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="text-sm text-zinc-300">
                      <span className="font-semibold text-white">
                        {line.label}:
                      </span>{" "}
                      {line.detail}
                    </p>
                    <p className="font-mono text-sm text-zinc-200">
                      {line.amount}
                    </p>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div className={`h-full rounded-full ${line.barClass}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-lg font-semibold text-white">
                What the money buys
              </h3>
              <ol className="mt-5 space-y-5 border-l border-zinc-800 pl-5">
                {milestones.map((step) => (
                  <li key={step.when} className="relative">
                    <span className="absolute top-1.5 -left-[1.6rem] h-2.5 w-2.5 rounded-full bg-indigo-500" />
                    <p className="font-mono text-xs text-indigo-300">
                      {step.when}
                    </p>
                    <p className="mt-0.5 text-zinc-300">{step.what}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <Sources>
            Spend is shown net of $979K in hospital receipts through 2029
            ($3.08M gross). A Series A is needed before mid-2030.
          </Sources>
        </Slide>

        <section className="border-t border-zinc-900 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <p className={`text-3xl md:text-5xl ${bigNumber}`}>
                A fan in a hospital bed gets to be there tonight.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="/work/Courtside_Connect_BoF_Deck.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryButton}
                >
                  <Download className="h-4 w-4" />
                  Download the presentation
                </a>
              </div>
            </div>
          </FadeIn>

          <div className="mx-auto mt-16 max-w-4xl space-y-6">
            <details className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4">
              <summary className="cursor-pointer list-none text-sm text-zinc-400 transition-colors duration-200 hover:text-white">
                AI use statement (ACAD 183)
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {aiUseStatement}
              </p>
            </details>

            <Link
              href="/projects/veil"
              className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-200 hover:border-zinc-600"
            >
              <div>
                <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                  Next project
                </p>
                <p className="mt-1 text-xl font-semibold text-white">Veil</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Security cameras that forget faces unless there is a reason to
                  remember.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-zinc-500 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
