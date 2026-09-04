// All profile data for the site lives here.
//
// Two kinds of content in this file:
//   1. What the site actually renders (profile, aboutSections, interests).
//   2. Resume facts that no longer appear as apps, kept only so the Ask Sid
//      assistant can answer factual questions. The resume itself lives in
//      public/Chowdhury_Siddharth_Resume.pdf.
//
// Nothing here is invented. Edit this file directly to update the site.

export const profile = {
  name: "Sid Chowdhury",
  fullName: "Siddharth Chowdhury",
  tagline:
    "Building the mechanisms that get capital and access to people who earn it, not just people born near it.",
  location: "Los Angeles, CA",
  email: "sidchowd@usc.edu",
  phone: "612-283-8006",
  linkedin: "https://www.linkedin.com/in/sid-chowdhury0",
  github: "https://github.com/chowdhurysid1-debug",
  headshot: "/images/headshot.png",
};

// The About app renders as an iPhone Settings screen: grouped rows, each with
// an icon, a label, and a value. Add rows here and they show up in the UI.
export type SettingsRow = {
  icon: SettingsIcon;
  label: string;
  value: string;
};

export type SettingsIcon =
  | "pin"
  | "home"
  | "school"
  | "football"
  | "run"
  | "golf"
  | "fish"
  | "waves"
  | "camera"
  | "car"
  | "chart"
  | "music"
  | "album"
  | "headphones"
  | "mic"
  | "film"
  | "tv"
  | "book"
  | "podcast"
  | "food"
  | "sandwich"
  | "never"
  | "coffee"
  | "moon"
  | "sunrise"
  | "shower"
  | "gym"
  | "phone"
  | "game"
  | "bag"
  | "shirt"
  | "battery"
  | "glasses"
  | "flame"
  | "overrated"
  | "wrench"
  | "trees";

export type SettingsSection = {
  title: string;
  rows: SettingsRow[];
};

export const aboutSections: SettingsSection[] = [
  {
    title: "Basics",
    rows: [
      { icon: "pin", label: "Currently", value: "Los Angeles, CA" },
      {
        icon: "home",
        label: "Hometown",
        value: "Eden Prairie, MN, by way of Dubai",
      },
      {
        icon: "school",
        label: "School",
        value: "USC, Iovine and Young + Marshall",
      },
    ],
  },
  {
    title: "Listening",
    rows: [
      { icon: "music", label: "Artist", value: "Chris Stapleton" },
      { icon: "headphones", label: "On repeat", value: "Love Songs, Prospa" },
      {
        icon: "album",
        label: "Albums",
        value: "Thriller, Octane, Open This Wall",
      },
      { icon: "flame", label: "Guilty pleasure", value: "Ella Langley" },
      { icon: "mic", label: "Best show", value: "Bruno Mars" },
    ],
  },
  {
    title: "Watching and reading",
    rows: [
      { icon: "film", label: "Movie", value: "Dead Poets Society" },
      { icon: "tv", label: "Rewatch", value: "Suits" },
      { icon: "book", label: "Reading", value: "The Visual MBA" },
      {
        icon: "podcast",
        label: "In my ears",
        value: "Goldman Sachs Exchanges",
      },
    ],
  },
  {
    title: "Eating",
    rows: [
      { icon: "food", label: "Best meal", value: "Howlin' Ray's chicken" },
      { icon: "sandwich", label: "First order", value: "Chicken sandwich" },
      { icon: "never", label: "Never", value: "Pickles" },
      {
        icon: "coffee",
        label: "Coffee",
        value: "Iced vanilla latte, or a strawberry acai refresher",
      },
      { icon: "moon", label: "2am in LA", value: "Taco Bell" },
    ],
  },
  {
    title: "A normal day",
    rows: [
      { icon: "sunrise", label: "Up at", value: "8:30 am" },
      { icon: "shower", label: "First move", value: "Shower" },
      {
        icon: "gym",
        label: "Training",
        value: "Push, pull, legs, rest, upper, lower, rest",
      },
      { icon: "phone", label: "Screen time", value: "4h30m, mostly Instagram" },
      { icon: "game", label: "Every single day", value: "Wordle" },
      {
        icon: "bag",
        label: "In the bag",
        value: "Laptop, iPad, notebook, Apple Pencil, Mambas",
      },
    ],
  },
  {
    title: "Outside",
    rows: [
      {
        icon: "football",
        label: "Football",
        value: "Four years varsity under Coach Mike Grant",
      },
      {
        icon: "run",
        label: "Track",
        value: "Top-10 all-time freshman 200m at EPHS",
      },
      { icon: "fish", label: "Biggest fish", value: "37-inch muskie" },
      {
        icon: "waves",
        label: "Wakeboarding",
        value: "Over snowboarding. Hurts less",
      },
      { icon: "golf", label: "Golf", value: "" },
      { icon: "camera", label: "Photography", value: "" },
    ],
  },
  {
    title: "Gear",
    rows: [
      {
        icon: "shirt",
        label: "Uniform",
        value: "America surfing team cutoff",
      },
      {
        icon: "battery",
        label: "Best buy under $100",
        value: "Ugreen power bank",
      },
      {
        icon: "glasses",
        label: "Worst buy",
        value: "Even Realities G1 glasses",
      },
      { icon: "car", label: "Dream car", value: "Ram TRX" },
      { icon: "car", label: "Realistic car", value: "2020 BMW X5" },
    ],
  },
  {
    title: "Opinions",
    rows: [
      {
        icon: "football",
        label: "Hot take",
        value: "The Seahawks are always Super Bowl contenders",
      },
      {
        icon: "overrated",
        label: "Most overrated in finance",
        value: "Patagonia vests",
      },
      { icon: "never", label: "Worst advice", value: '"Play it safe"' },
      {
        icon: "wrench",
        label: "Everyone should know",
        value: "How to fix a flat tire",
      },
      {
        icon: "trees",
        label: "On Minnesota",
        value: "Most beautiful place in the country in the summer",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Resume facts. Not rendered anywhere in the UI. Ask Sid reads these so it can
// answer questions without the site itself turning into a resume dump.
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  org: string;
  role: string;
  location: string;
  dates: string;
  active: boolean;
  bullets: string[];
};

export const founding: ExperienceEntry[] = [
  {
    org: "EP Venture Fund",
    role: "Co-Founder",
    location: "Eden Prairie, MN",
    dates: "Oct 2025 - Present",
    active: true,
    bullets: [
      "Built a $33K venture fund for founders who are legally minors: real fiscal sponsorship, real due diligence, real capital.",
      "Evaluated 22 ventures, funded 3, deployed $22,375 in grants. Still advises all three.",
    ],
  },
  {
    org: "Junior Sharks",
    role: "Co-Founder",
    location: "Minneapolis, MN",
    dates: "May 2024 - Aug 2026",
    active: false,
    bullets: [
      "Scaled a youth entrepreneurship program from 20 to 360+ kids across 6 schools.",
      'Ran the annual "Shark Tank" competition, judged by real Chamber of Commerce executives and investors.',
    ],
  },
  {
    org: "DECA, Eden Prairie High School",
    role: "Competition Leader",
    location: "Eden Prairie, MN",
    dates: "2023 - 2026",
    active: false,
    bullets: [
      "Placed 3rd globally in Financial Services Team Decision Making at ICDC.",
      "Trained 200+ other competitors using a notebook I wrote after losing my first competition.",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    org: "Bidwell Investment Group",
    role: "Hedge Fund Intern",
    location: "Minneapolis, MN",
    dates: "May 2025 - Aug 2025",
    active: false,
    bullets: [
      "Ran a live $10,000 portfolio to a 27.8% return over 12 weeks, 18 trades.",
      "Researched 55 public equities, 18 made it to active trading.",
    ],
  },
  {
    org: "CliftonLarsonAllen (CLA)",
    role: "Finance and Accounting Intern",
    location: "Minneapolis, MN",
    dates: "Jun 2025 - Jul 2025",
    active: false,
    bullets: [
      "1 of 6 Minnesota interns picked from 150 applicants, a 4% acceptance rate.",
      "Led financial modeling for a nonprofit case, presented to C-suite execs in a nationwide intern competition.",
    ],
  },
];

export const academicProjects: ExperienceEntry[] = [
  {
    org: "Coastal Real Estate Risk Research",
    role: "Co-Author, with Prof. Avijit Gangopadhyay (UMass Dartmouth)",
    location: "Middle East, sea-level rise",
    dates: "Jun 2025 - Aug 2026",
    active: true,
    bullets: [
      "Co-authored a paper on sea-level-rise risk to Middle East coastal real estate, in publication.",
      "Built the valuation model (1,200+ observations, R² = 0.71), presented to 8 real estate firms in the UAE.",
    ],
  },
];

export const education = {
  school: "University of Southern California",
  program: "Marshall School of Business + Iovine and Young Academy",
  degree: "B.S., Business of Innovation (BUIN)",
  location: "Los Angeles, CA",
  grad: "May 2030",
  honors: [
    "IYA Faculty Scholar (top 6%)",
    "Holasek-Griffiths Scholarship in Business (top 0.13%)",
    "DECA ICDC 3rd Place Globally (top 0.0043%)",
  ],
  priorSchool: {
    name: "Eden Prairie High School",
    location: "Eden Prairie, MN",
    gpa: "3.922 / 4.0",
    sat: "1540",
    grad: "2026",
  },
};

export const skills = {
  technical: [
    "Website / DNS infrastructure (Netlify, Namecheap)",
    "Excel (pivot tables, VLOOKUP, scenario analysis)",
    "Multiple Linear Regression modeling",
    "Technical analysis (Bollinger Bands, RSI, Fibonacci retracements)",
  ],
};
