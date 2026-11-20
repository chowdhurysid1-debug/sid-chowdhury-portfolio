// Product case studies for the Product app (ACAD 183 personal portfolio site).
//
// Every number here is copied from a source document, never estimated:
//   Courtside Connect: public/work/Courtside_Connect_PRD.pdf and the team deck
//     in public/work/courtside (which carries its own sources).
//   Veil: the README and evals in github.com/chowdhurysid1-debug/veil.
//   Patientce: the team's pitch and interview notes.
//   Huddle: the prototype itself.
// If a figure changes in the source, change it here too.

export type CaseLink = {
  label: string;
  href: string;
};

export type Decision = {
  title: string;
  body: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  name: string;
  label: string;
  dates: string;
  role: string;
  team: string;
  hook: string;
  problem: string[];
  users?: string[];
  built: string[];
  decisions: Decision[];
  stats: Stat[];
  statsSource: string;
  limits: string[];
  links: CaseLink[];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "epvf",
    name: "EP Venture Fund",
    label: "Venture fund I co-founded",
    dates: "Oct 2025 - Present",
    role: "Co-Founder. Built the fund, ran sourcing and diligence, advise the portfolio.",
    team: "Sid Chowdhury and Aarav Gupta",
    hook: "Real grant money for student founders who are too young to sign for it.",
    problem: [
      "A sixteen-year-old with a real business can't open a bank account or sign a contract. Most programs for young founders hand out a trophy instead of money.",
      "Capital tends to reach people through who they know. We wanted a way for a student with a working idea to get funded on the work itself.",
    ],
    users: [
      "Student founder: a high schooler with a real venture who can't legally sign for money.",
      "Foundation for Eden Prairie Schools: the fiscal sponsor that holds and pays out the grants.",
      "Co-founders: run sourcing, diligence, and advising after the check.",
    ],
    built: [
      "A fiscal sponsorship with the Foundation for Eden Prairie Schools (FEPS), so grants land in a real bank account.",
      "Quarterly pitches and a due-diligence process for student founders.",
      "Non-equity grants, so founders keep all of their company.",
      "Ongoing advising on pricing, go-to-market, and unit economics for every company we fund.",
    ],
    decisions: [
      {
        title: "Run the money through the school foundation",
        body: "Minors can't sign contracts, which was the whole problem. Routing grants through FEPS made the money real without a student ever having to sign for it.",
      },
      {
        title: "Fund proof, not ideas",
        body: "Nobody gets funded for having a good idea. You get funded for showing that somebody already wants what you're making. 22 ventures pitched and 3 were funded.",
      },
      {
        title: "Stay after the check",
        body: "Writing the check was the easy half. I advised the animation studio on go-to-market and pricing, and its average contract value rose 62% with 4 pilot clients. I designed a 15% commission model for the chef marketplace, which onboarded 18 chefs and booked 21 times.",
      },
    ],
    stats: [
      { value: "22", label: "Ventures screened" },
      { value: "3", label: "Funded" },
      { value: "$22,375", label: "Granted" },
      { value: "62%", label: "Contract value lift" },
    ],
    statsSource:
      "Fund records, as listed on my resume. The 62% is the animation studio's average contract value after the pricing work.",
    limits: [
      "The third company, an elder care coordination platform, is funded and still in build, so it has no results yet.",
      "I'm handing the fund to my co-founder now that I'm at USC.",
    ],
    links: [{ label: "Fund website", href: "https://epventurefund.com" }],
  },
  {
    id: "courtside",
    name: "Courtside Connect",
    label: "ACAD 183 final team project",
    dates: "Fall 2026",
    role: "Wrote the PRD. Built the pitch deck.",
    team: "Group 6: JT Lu-Morris, Raphael Rosset, Matt Turner, Sid Chowdhury, Bowden Eley",
    hook: "Live sports, shared from the hospital bed.",
    featured: true,
    problem: [
      "Long hospital stays cut patients off. A fan on week three of a stay can watch the big game on the room TV, but can't feel present or be heard.",
      "Hospitals want better patient experience scores, but they have limited budgets and strict infection-control rules. Anything we sell has to clear both.",
    ],
    users: [
      "Patient: adult inpatient, stay of 3+ days, sports fan. The user.",
      "Patient experience director: owns satisfaction scores and the budget. The buyer.",
      "Nurse: hands out and cleans devices. Needs setup under 2 minutes.",
      "Family member: joins a watch party from a link, no account.",
      "Hospital IT and compliance: approves vendors. HIPAA, network, infection control.",
    ],
    built: [
      "360 degree cameras in end-of-row stadium seats, with a speaker and mic so the patient can be heard.",
      "An app with the live feed, AR chat, a scoreboard and switchable camera angles.",
      "A shared pool of wipeable Quest 3S headsets that nurses check out, plus TV mode for everyone else.",
      "Hospitals subscribe per bed, per month.",
    ],
    decisions: [
      {
        title: "Tablet first, VR second",
        body: "In the PRD, the tablet app, watch party, and device reset are P0. VR mode is P1. VR can cause discomfort, so sessions are capped, staff can turn it off per patient, and the tablet is always the default.",
      },
      {
        title: "Sell to the hospital, not the patient",
        body: "The patient uses it, but the hospital pays. Selling to patients and families, pediatric units, betting, and medical record integration are all written out of scope.",
      },
      {
        title: "Write down what gets us rejected",
        body: "Hospitals will turn the product down if any of these fail, no matter the features: wipeable with standard disinfectants, no patient health data stored, runs on guest Wi-Fi, 99% uptime during live games.",
      },
      {
        title: "Price: $20 or $40 a bed",
        body: "The PRD assumed $20 a bed per month, the price our mock buyer named. The final model charges $40. At $20, breakeven is about 132 hospitals. At $40, it's 46.",
      },
    ],
    stats: [
      { value: "$372M", label: "SAM" },
      { value: "$1.92M", label: "SOM by 2030" },
      { value: "46", label: "Hospitals to break even" },
      { value: "$2.5M", label: "Seed ask" },
    ],
    statsSource:
      "SAM is 775,297 US community hospital beds x $480 a year (AHA Fast Facts 2026). SOM is 40 hospitals x 100 beds x $480 a year. Breakeven and seed come from the team pro forma.",
    limits: [
      "Interview quotes in the deck come from mock expert interviews, not real customers yet.",
      "Content rights at $800 per hospital per month is a placeholder until we have a real quote.",
      "We have no clinical data of our own. The VR research cited is about VR in general.",
    ],
    links: [
      { label: "Pitch deck", href: "/work/courtside/index.html" },
      { label: "PRD (PDF)", href: "/work/Courtside_Connect_PRD.pdf" },
    ],
  },
  {
    id: "veil",
    name: "Veil",
    label: "Hackathon, SEP Hacks",
    dates: "Oct 2026",
    role: "Product, design, and build",
    team: "Sid Chowdhury and Anshul Bihani",
    hook: "Security cameras that forget faces unless there is a reason to remember.",
    problem: [
      "93% of US public schools run security cameras (NCES). Every one of them records every student's face, and stored face data is a liability.",
      "Today's privacy tools blur faces on screen only. Verkada's Live Face Blur keeps real faces in stored footage and only runs on Verkada hardware.",
    ],
    built: [
      "Every face is blurred and encrypted in the browser, each with its own key, before footage leaves the device.",
      "An AI reviews only the blurred frames and flags fights, falls, thefts, and camera tampering.",
      "Unlocking a face needs a written reason, and the audit row is written before the key is released.",
      "Every time an officer marks an alert real or a false alarm, the alert thresholds and examples update for every site.",
    ],
    decisions: [
      {
        title: "Privacy is why it has to learn",
        body: "With faces blurred, the AI can't read expressions, so on day one it can't tell a hug from a fight. Officer labels are what recover that accuracy. We made learning the core of the product instead of an add-on.",
      },
      {
        title: "No new hardware",
        body: "Veil takes any camera's video file. A school doesn't have to replace anything to try it.",
      },
      {
        title: "Demo what the camera can actually see",
        body: "The first false-alarm demo was a high-five. It failed on real footage, because the hands meet at head height, inside the blur. We switched to moments that happen at body level, like a hug.",
      },
    ],
    stats: [
      { value: "5 to 1", label: "False alarms, 4 weeks" },
      { value: "8 of 8", label: "Real incidents caught" },
      { value: "5 to 1", label: "School taught by a store" },
      { value: "16", label: "Frozen test clips" },
    ],
    statsSource:
      "Measured learning curve, 3 runs on the real model, from npm run evals:learning in the Veil repo. Test set written and frozen before the first run.",
    limits: [
      "Test scenarios are written descriptions of blurred frames, not video.",
      "When two sites' labels were pooled, false alarms rose again in week 4, to 2.3. Our best read is that the AI only keeps the 3 newest examples per type.",
    ],
    links: [
      { label: "Live app", href: "https://veil-iota-ten.vercel.app" },
      { label: "Pitch", href: "https://veil-iota-ten.vercel.app/pitch" },
      {
        label: "Learning curve",
        href: "https://veil-iota-ten.vercel.app/learning",
      },
      { label: "Code", href: "https://github.com/chowdhurysid1-debug/veil" },
    ],
  },
  {
    id: "patientce",
    name: "Patientce",
    label: "Hackathon, challenge 3a: the future of vibe coding",
    dates: "Nov 2026",
    role: "Product and build",
    team: "Team project",
    hook: "A therapist builds her own AI intake assistant, in her own voice, by talking to it.",
    problem: [
      "137M Americans live in mental health shortage areas (HRSA, Dec 2025). 29.5M adults with a mental illness got no treatment (SAMHSA, 2024 NSDUH).",
      "The challenge asked what building software looks like for people who aren't engineers. We picked one: an independent therapist running her own practice.",
    ],
    built: [
      "A builder the therapist talks to. She describes how she works, and it becomes her intake assistant.",
      "A rehearsal room where she tests it against six simulated hard clients: crisis, advice seeker, phone grabber, boundary tester, minor, and one-word answers.",
      "Clients talk to the assistant first. She gets a summary.",
      "A directory where clients find a therapist and start a conversation or book.",
    ],
    decisions: [
      {
        title: "Not another AI therapist",
        body: "A plain AI-therapist app fails the challenge's rule against apps that just bolt on AI, and Talkspace and Perspective AI already do AI intake. So the therapist building it became the product, and the client chat is the payoff.",
      },
      {
        title: "Rehearse before going live",
        body: "Nobody should meet a real client in crisis untested. She has to run it against the six hard clients first.",
      },
      {
        title: "A safety floor she can't edit",
        body: "Whatever she builds, the 988 crisis line and the AI disclosure stay in.",
      },
    ],
    stats: [
      { value: "2 of 2", label: "Therapists would use it" },
      { value: "6", label: "Rehearsal clients" },
      { value: "137M", label: "In shortage areas" },
      { value: "29.5M", label: "Adults untreated" },
    ],
    statsSource:
      "Interviews: the team's two therapist interviews. 137M: HRSA, Dec 2025. 29.5M: SAMHSA 2024 NSDUH, 61.5M with a mental illness minus 32.0M treated.",
    limits: [
      "Two interviews is all the primary data there is.",
      "The therapists in the demo directory are fictional, and their fees and bios are sample data.",
    ],
    links: [{ label: "Pitch deck", href: "https://patientce-deck.vercel.app" }],
  },
  {
    id: "huddle",
    name: "Huddle",
    label: "Prototype for a nonprofit pitch",
    dates: "Oct 2026",
    role: "Product, design, and build",
    team: "Sid Chowdhury and Aarav Gupta",
    hook: "Small, safe, in-person hangouts for students in a school's Unified program.",
    problem: [
      "Unified programs bring students together at school. Huddle is about after the bell: local, group-based hangouts in person, with the adults who need to say yes kept in the loop.",
      "Built as a clickable prototype for a pitch to Special Olympics Minnesota staff. It is not affiliated with Special Olympics.",
    ],
    built: [
      "Four roles, each with its own view: Student, Parent, Host, and Staff.",
      "Hangout invites a student can open and answer in one tap.",
      "A mood check-in with a mascot, Pip. When a student says they feel down, a trusted adult gets an alert.",
      "A pilot dashboard for staff, and a 7-step script to demo it live.",
    ],
    decisions: [
      {
        title: "Every person who has to say yes gets a screen",
        body: "A hangout only happens if the student, a parent, a host, and school staff all agree. Each of them has a different job, so each gets a different view instead of one shared app.",
      },
      {
        title: "Sample data says so",
        body: "The pilot dashboard is labeled sample data, and its totals are computed from the weekly rows instead of typed in. Nothing in a pitch should look like a result we don't have.",
      },
      {
        title: "Fictional people only",
        body: "Every student, school, and host in the demo is made up, and there's no logo, so nobody mistakes it for an official program.",
      },
    ],
    stats: [
      { value: "4", label: "Roles" },
      { value: "7", label: "Demo steps" },
      { value: "1", label: "Trusted-adult alert" },
      { value: "0", label: "Real student data" },
    ],
    statsSource: "Counts from the prototype itself.",
    limits: ["It's a prototype with sample data. It hasn't been piloted."],
    links: [
      { label: "Live demo", href: "https://huddle-seven-iota.vercel.app" },
    ],
  },
];

// ACAD 183 requires an AI use statement on any assignment that used AI.
// Sid: edit this so it matches what you actually did before you submit.
export const aiUseStatement =
  "I built this section of the site with Claude Code (Anthropic). I gave it my project files: the Courtside Connect PRD and deck, the Veil repo, and my notes on Patientce and Huddle. It drafted the case study text and the code from those files, and every number was pulled from them, not generated. I reviewed and edited it before publishing. The projects themselves also used AI tools, and each one says how in its own materials.";
