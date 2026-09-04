// All profile data for the site lives here. Every fact below comes from Sid's
// own resume (Chowdhury_Siddharth_Resume.pdf, finalized Sep 2, 2026). Nothing
// here is invented, edit this file directly to update the site.

export const profile = {
  name: "Sid Chowdhury",
  fullName: "Siddharth Chowdhury",
  tagline:
    "Building the mechanisms that get capital and access to people who earn it, not just people born near it.",
  location: "Los Angeles, CA",
  email: "siddd2909@gmail.com",
  phone: "612-283-8006",
  linkedin: "https://www.linkedin.com/in/sid-chowdhury0",
  github: "https://github.com/chowdhurysid1-debug",
  headshot: "/images/headshot.png",
};

export const about = {
  intro:
    "I'm an incoming freshman at USC, splitting my degree between the Iovine and Young Academy and the Marshall School of Business.",
  paragraphs: [
    "Most of what I build comes back to one thing: capital and access don't reach people on merit, they reach people on pedigree and network. EP Venture Fund exists because minors legally can't start a company or sign a contract, so I built the structure that lets under-18 founders raise real money anyway.",
    "Outside of that: four years of varsity football under Coach Mike Grant, track, and a summer managing a live investment portfolio at a hedge fund.",
  ],
  interests: [
    "Photography (Tamron 35-150mm lens)",
    "Golf",
    "Fishing",
    "Wakeboarding",
    "Cars and watches",
    "Financial markets",
    "Seattle Seahawks",
  ],
  languages: ["English", "French", "Hindi", "Bengali"],
  quickFacts: [
    { label: "GPA", value: "3.922 / 4.0 (EPHS)" },
    { label: "SAT", value: "1540" },
    { label: "Major", value: "Business of Innovation (BUIN)" },
    { label: "Grad", value: "May 2030" },
  ],
};

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

export type Mentor = {
  name: string;
  role: string;
  note: string;
};

export const mentors: Mentor[] = [
  {
    name: "Coach Mike Grant",
    role: "Football Head Coach, Eden Prairie High School",
    note: 'Source of the team\'s "Men for Others" ethos. Coached Sid across four years of varsity football.',
  },
  {
    name: "Prof. Avijit Gangopadhyay",
    role: "UMass Dartmouth",
    note: "Research mentor for the coastal real-estate climate-risk paper, guided the MLR valuation model.",
  },
  {
    name: "Aarav Gupta",
    role: "Co-Founder, EP Venture Fund",
    note: "EPHS Class of 2027. Now running EP Venture Fund solo as Sid hands off full leadership post-matriculation.",
  },
  {
    name: "Mr. Zach Hanson",
    role: "Math/CS Teacher and Track Coach, EPHS",
    note: "Wrote Sid's recommendation for an EY Entrepreneur of the Year Youth Scholarship application.",
  },
  {
    name: "Anique James",
    role: "USC IYA Academic Advisor",
    note: "Built Sid's four-year BUIN plan at USC.",
  },
];

export type ExternalLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "calendar";
};

export const externalLinks: ExternalLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/chowdhurysid1-debug",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sid-chowdhury0",
    icon: "linkedin",
  },
  { label: "Email", url: "mailto:siddd2909@gmail.com", icon: "mail" },
];

export const organizations = [
  {
    name: "EP Venture Fund",
    role: "Co-Founder",
    description: "$33K venture fund for founders who are legally minors.",
  },
  {
    name: "Junior Sharks",
    role: "Co-Founder",
    description: "Youth entrepreneurship program, 20 to 360+ kids, grades 3-8.",
  },
  {
    name: "DECA, Eden Prairie High School",
    role: "Competition Leader",
    description: "3rd place globally, Financial Services Team Decision Making.",
  },
];
