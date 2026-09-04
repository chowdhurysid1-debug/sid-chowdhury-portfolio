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
    "I'm an incoming freshman at USC, splitting my degree between the Iovine and Young Academy and the Marshall School of Business. I grew up in Dubai until I was ten, then moved to Eden Prairie, Minnesota with my mom and sister. My dad stayed in Dubai. Nobody was coming to get me, so I learned how to move.",
  paragraphs: [
    "Most of what I've built comes back to one thing: capital and access don't reach people on merit, they reach people on pedigree and network. EP Venture Fund exists because minors legally can't start a company or sign a contract, so I built the fiscal-sponsorship structure that lets under-18 founders raise real money anyway.",
    "Outside of that, I played varsity football for four years under Coach Mike Grant, ran track (top-10 all-time freshman 200m sprinter at Eden Prairie High School), and spent a summer managing a live investment portfolio at a hedge fund.",
    "I was diagnosed with alopecia freshman year of high school. I spent a while trying to hide it before I stopped and put the energy into what I could actually control instead.",
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
      "Co-founded and led a $33K student-run venture fund for under-18 founders, built on a fiscal-sponsorship structure through the Foundation for Eden Prairie Schools since minors can't legally found a 501(c)(3) or sign contracts.",
      "Built the fund's own infrastructure (domain, DNS, email, website) and a due-diligence process modeled on real VC: quarterly pitches, milestone-based funding, demonstrated demand required before a dollar moves.",
      "Evaluated 22 ventures and selected 3 for funding (14% selection rate), deploying $22,375 in non-equity grant capital. Sits in an advisory capacity on all 3 portfolio companies post-investment.",
      "Managed donor relations with the Eden Prairie Chamber of Commerce, FEPS, Tennant Company, and Flagship Bank to support capital-raising.",
    ],
  },
  {
    org: "Junior Sharks",
    role: "Co-Founder",
    location: "Minneapolis, MN",
    dates: "May 2024 - Aug 2026",
    active: false,
    bullets: [
      "Co-founded and scaled a district-backed youth entrepreneurship initiative from 20 to 360+ students across 5 elementary schools and 1 middle school.",
      "Forged an ongoing partnership with the Eden Prairie Chamber of Commerce, securing a mentorship network of local professionals and coordinating guest speaker sessions.",
      "Built and implemented an 8-workshop curriculum (grades 3-8) covering market research, budgeting, product design, financial planning, and pitch strategy.",
      'Directed the annual "Shark Tank" pitch competition, organizing logistics and judge panels of Chamber of Commerce executives, entrepreneurs, and investors to evaluate 70+ student teams\' ventures.',
    ],
  },
  {
    org: "DECA, Eden Prairie High School",
    role: "Competition Leader",
    location: "Eden Prairie, MN",
    dates: "2023 - 2026",
    active: false,
    bullets: [
      "Placed 3rd Globally at ICDC in Financial Services Team Decision Making after a first-competition loss, building a self-authored notebook documenting every DECA performance indicator.",
      "Ran workshops training 200+ other competitors: example roleplays, test-strategy breakdowns, and distributed copies of the notebook.",
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
      "Managed a live $10,000 investment portfolio, generating a 27.8% return over 12 weeks across 18 trades.",
      "Researched 55 public equities using comparable-company analyses and 10-K/10-Q review, developing investment theses that led to 18 companies advancing to active trading.",
    ],
  },
  {
    org: "CliftonLarsonAllen (CLA)",
    role: "Finance and Accounting Intern",
    location: "Minneapolis, MN",
    dates: "Jun 2025 - Jul 2025",
    active: false,
    bullets: [
      "Selected as 1 of 6 Minnesota interns from 150 regional applicants (4% acceptance rate) among 600+ nationwide candidates.",
      "Led financial modeling for a pro bono case with Black Men Teach nonprofit, presented to C-suite executives in a nationwide intern competition.",
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
      "Co-authored a research paper analyzing financial risks of rising sea levels on Middle East coastal real estate, currently in the publication process.",
      "Developed an MLR valuation model across 1,200+ observations (R² = 0.71), presented to 8 real estate firms in Dubai and across the UAE.",
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
  coursework: [
    "Calculus 1 + 2",
    "AP Macroeconomics",
    "AP Statistics",
    "AP Microeconomics",
    "Innovators Forum",
    "Product Management for Challenge-Based Learning",
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
    description:
      "A $33K student-run venture fund giving under-18 founders access to real, milestone-based capital. Built the fiscal-sponsorship structure that lets minors raise money legally.",
  },
  {
    name: "Junior Sharks",
    role: "Co-Founder",
    description:
      'District-backed youth entrepreneurship program, grades 3-8, grown from 20 to 360+ students across 6 schools. Tagline: "Where little fins make big waves."',
  },
  {
    name: "DECA, Eden Prairie High School",
    role: "Competition Leader",
    description:
      "Competed and coached in Financial Services Team Decision Making. 3rd place globally at ICDC.",
  },
];
