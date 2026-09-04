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

// The About app is a replica of the iPhone Settings app. Each entry below is
// one row on the main Settings list; tapping it pushes a detail screen made of
// the label/value rows in `rows`. `preview` is the gray text on the right of
// the main row, the way Settings shows the current Wi-Fi network.
export type SettingsIcon =
  | "general"
  | "screentime"
  | "music"
  | "tv"
  | "books"
  | "food"
  | "health"
  | "outside"
  | "gear"
  | "opinions"
  | "camera"
  | "car"
  | "wallet";

export type DetailRow = {
  label: string;
  value: string;
};

export type SettingsPage = {
  id: string;
  label: string;
  icon: SettingsIcon;
  preview: string;
  rows: DetailRow[];
  footer?: string;
};

// Each inner array is one visually grouped block, the way Settings separates
// General / Screen Time from the app-specific rows below it.
export const settingsGroups: SettingsPage[][] = [
  [
    {
      id: "general",
      label: "General",
      icon: "general",
      preview: "Los Angeles",
      rows: [
        { label: "Currently", value: "Los Angeles, CA" },
        { label: "Hometown", value: "Eden Prairie, MN, by way of Dubai" },
        { label: "School", value: "USC, Iovine and Young + Marshall" },
        { label: "Studying", value: "Business of Innovation" },
      ],
    },
    {
      id: "screentime",
      label: "Screen Time",
      icon: "screentime",
      preview: "4h 30m",
      rows: [
        { label: "Daily average", value: "4h 30m" },
        { label: "Most used", value: "Instagram" },
        { label: "Up at", value: "8:30 am" },
        { label: "First move", value: "Shower" },
        { label: "Every single day", value: "Wordle" },
      ],
    },
  ],
  [
    {
      id: "music",
      label: "Music",
      icon: "music",
      preview: "Chris Stapleton",
      rows: [
        { label: "Favorite artist", value: "Chris Stapleton" },
        { label: "On repeat", value: "Love Songs, Prospa" },
        { label: "Albums", value: "Thriller, Octane, Open This Wall" },
        { label: "Guilty pleasure", value: "Ella Langley" },
        { label: "Best show", value: "Bruno Mars" },
      ],
    },
    {
      id: "tv",
      label: "TV & Movies",
      icon: "tv",
      preview: "Suits",
      rows: [
        { label: "Favorite movie", value: "Dead Poets Society" },
        { label: "Rewatched most", value: "Suits" },
        { label: "Last real laugh", value: "Standup comedy" },
      ],
    },
    {
      id: "books",
      label: "Books & Podcasts",
      icon: "books",
      preview: "The Visual MBA",
      rows: [
        { label: "Reading", value: "The Visual MBA" },
        { label: "In my ears", value: "Goldman Sachs Exchanges" },
      ],
    },
  ],
  [
    {
      id: "food",
      label: "Food",
      icon: "food",
      preview: "Howlin' Ray's",
      rows: [
        { label: "Best meal", value: "Howlin' Ray's chicken" },
        { label: "First order anywhere", value: "Chicken sandwich" },
        { label: "Never", value: "Pickles" },
        {
          label: "Coffee",
          value: "Iced vanilla latte, or a strawberry acai refresher",
        },
        { label: "2am in LA", value: "Taco Bell" },
      ],
    },
    {
      id: "health",
      label: "Health",
      icon: "health",
      preview: "Push, pull, legs",
      rows: [
        { label: "Split", value: "Push, pull, legs, rest, upper, lower, rest" },
      ],
    },
    {
      id: "outside",
      label: "Outside",
      icon: "outside",
      preview: "Wakeboarding",
      rows: [
        {
          label: "Football",
          value: "Four years varsity under Coach Mike Grant",
        },
        { label: "Track", value: "Top-10 all-time freshman 200m at EPHS" },
        { label: "Biggest fish", value: "37-inch muskie" },
        { label: "Wakeboard or snowboard", value: "Wakeboard. Hurts less" },
        { label: "Behind the decks", value: "DJing" },
        {
          label: "Also",
          value: "Golf, hiking, pickleball, wildlife photography",
        },
      ],
    },
  ],
  [
    {
      id: "gear",
      label: "Gear",
      icon: "gear",
      preview: "Ram TRX",
      rows: [
        { label: "Uniform", value: "America surfing team cutoff" },
        {
          label: "In the bag",
          value: "Laptop, iPad, notebook, Apple Pencil, Mambas",
        },
        { label: "Best buy under $100", value: "Ugreen power bank" },
        { label: "Worst buy", value: "Even Realities G1 glasses" },
        { label: "Dream car", value: "Ram TRX" },
        { label: "Realistic car", value: "2020 BMW X5" },
      ],
    },
    {
      id: "opinions",
      label: "Opinions",
      icon: "opinions",
      preview: "Seahawks",
      rows: [
        {
          label: "Hot take",
          value: "The Seahawks are always Super Bowl contenders",
        },
        { label: "Most overrated in finance", value: "Patagonia vests" },
        { label: "Worst advice", value: '"Play it safe"' },
        { label: "Everyone should know", value: "How to fix a flat tire" },
        {
          label: "On Minnesota",
          value: "Most beautiful place in the country in the summer",
        },
      ],
    },
  ],
];

// ---------------------------------------------------------------------------
// Resume facts, from Chowdhury_Sid_Resume.pdf. Not rendered as an app. Ask Sid
// reads these so it can answer questions without the site turning into a
// resume dump. The PDF itself is in public/.
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
    location: "Minneapolis, MN",
    dates: "Oct 2025 - Present",
    active: true,
    bullets: [
      "Founded a student-run venture fund from scratch, building the fiscal sponsorship structure through the Foundation for Eden Prairie Schools and all operating infrastructure.",
      "Sourced and screened 22 student ventures and funded 3: an animation studio, a chef marketplace platform, and a coordination platform for families managing an aging parent's care. Deployed $22,375 in non-equity grant capital.",
      "Advised the animation studio on pricing and go-to-market, raising projected average contract value 62% and generating 11 qualified leads and 4 pilot clients. Advised the chef marketplace on a 15% commission model, onboarding 18 chefs and driving 21 pilot bookings.",
    ],
  },
  {
    org: "Junior Sharks",
    role: "Co-Founder",
    location: "Minneapolis, MN",
    dates: "May 2024 - Aug 2026",
    active: false,
    bullets: [
      "Scaled a district-backed youth entrepreneurship initiative from 20 to 360+ students across 5 elementary schools and 1 middle school, building the curriculum and program structure from scratch.",
      "Built an 8-workshop startup curriculum for grades 3-8 taking students from idea to pitch, and directed the annual Shark Tank competition judged by Chamber of Commerce executives, entrepreneurs, and investors across 70+ student teams.",
      "Drove a 42% increase in high school business class enrollment district-wide.",
    ],
  },
  {
    org: "DECA, Eden Prairie High School",
    role: "Competition Leader",
    location: "Eden Prairie, MN",
    dates: "Oct 2023 - Apr 2026",
    active: false,
    bullets: [
      "Led Eden Prairie's #1-ranked chapter of 4,364 to national recognition. Placed 3rd globally at ICDC in 2025, then top-20 globally in 2026, after building a self-authored study system that became the team's core prep resource.",
      "Trained 80+ competitors through 8 workshops and 100+ practice roleplays. Average scores rose from 64 to 85+, and 32 advanced to state, double the prior year.",
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
      "Managed a live $10,000 portfolio to a 27.8% return over 12 weeks across 18 trades, using Bollinger Bands, RSI, Fibonacci retracements, and options strategies.",
      "Executed one options trade that returned 450%, driven by analysis of volatility, pricing, and risk-reward dynamics.",
      "Researched 55 public equities using comparable-company analyses and 10-K/10-Q review, presenting theses to senior investors that led to 18 companies advancing to active trading.",
    ],
  },
  {
    org: "CliftonLarsonAllen (CLA)",
    role: "Finance and Accounting Intern",
    location: "Minneapolis, MN",
    dates: "Jun 2025 - Jul 2025",
    active: false,
    bullets: [
      "Selected as 1 of 6 Minnesota interns from 150 regional applicants, a 4% acceptance rate, among 600+ nationwide candidates at the nation's 8th-largest accounting and consulting firm.",
      "Rotated through Wealth Advisory, Digital/Cybersecurity, Audit, and Tax: client meetings, portfolio analysis, audit procedures, multi-state tax research, and cybersecurity risk assessments.",
      "Led financial modeling for a pro bono case with the Black Men Teach nonprofit, building multi-year budget projections presented to C-suite executives in a nationwide intern competition.",
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
      "Co-authored a paper on the financial risks of rising sea levels to Middle East coastal real estate, integrating environmental science, economics, and valuation methodology. In the publication process.",
      "Reviewed 20+ peer-reviewed papers and analyzed satellite-derived oceanographic data across Middle Eastern coastlines.",
      "Built an MLR valuation model across 1,200+ observations (R² = 0.71) projecting up to 18% value deterioration in high-risk zones, presented to 8 real estate firms in Dubai and the UAE and contributing to updated risk disclosure processes.",
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
    "DECA ICDC 3rd Place Globally (top 0.06%)",
  ],
  coursework: [
    "Calculus 1+2",
    "AP Macroeconomics",
    "AP Statistics",
    "AP Microeconomics",
    "Innovators Forum",
    "PM for Challenge-Based Learning",
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
    "Startup evaluation",
    "Go-to-market strategy",
    "Market research",
    "Financial modeling",
    "Product strategy",
    "Data analysis",
    "Excel",
  ],
  languages: ["English", "French", "Hindi", "Bengali"],
  interests: [
    "Golf",
    "Fishing",
    "Wakeboarding",
    "Wildlife photography",
    "Seattle Seahawks",
    "DJing",
    "Hiking",
    "Pickleball",
  ],
};

// ---------------------------------------------------------------------------
// Letterboxd, Spotify, and Garage apps.
// Anything with an empty string is waiting on a real answer from Sid and the
// UI hides it rather than showing a made-up value.
// ---------------------------------------------------------------------------

export type Film = {
  title: string;
  rating: number;
  note?: string;
};

export const cinema = {
  favorites: [
    { title: "Dead Poets Society", rating: 5 },
    { title: "The Social Network", rating: 5 },
    { title: "Interstellar", rating: 5 },
    { title: "The Wolf of Wall Street", rating: 4.5 },
    { title: "Ford v Ferrari", rating: 4.5 },
  ] as Film[],
  recent: [
    {
      title: "Moneyball",
      rating: 4.5,
      note: "Somehow made on-base percentage cinematic.",
    },
    { title: "The Big Short", rating: 4.5 },
    { title: "Whiplash", rating: 5 },
    { title: "The Hangover", rating: 4 },
  ] as Film[],
};

// Real Stats for Spotify export. Range labels follow the order Sid pasted
// them in; confirm the mapping if it matters.
export type Track = { title: string; artist: string };

export const spotifyStats = {
  ranges: ["4 weeks", "6 months", "12 months"] as const,
  artists: {
    "4 weeks": [
      "Drake",
      "Zach Bryan",
      "Morgan Wallen",
      "Michael Jackson",
      "Chris Stapleton",
      "Don Toliver",
      "Bruno Mars",
      "Travis Scott",
      "Kanye West",
      "J. Cole",
    ],
    "6 months": [
      "Drake",
      "Zach Bryan",
      "Morgan Wallen",
      "Michael Jackson",
      "Chris Stapleton",
      "Don Toliver",
      "Bruno Mars",
      "Travis Scott",
      "Kanye West",
      "J. Cole",
    ],
    "12 months": [
      "Drake",
      "Don Toliver",
      "Michael Jackson",
      "Morgan Wallen",
      "Kanye West",
      "Travis Scott",
      "America",
      "Eagles",
      "Pop Smoke",
      "George Strait",
    ],
  } as Record<string, string[]>,
  tracks: {
    "4 weeks": [
      { title: "Love Songs", artist: "Prospa, Kosmo Kint" },
      { title: "Livin' The Dream", artist: "Morgan Wallen" },
      { title: "TOO COOL TO BE CARELESS", artist: "PAWSA" },
      { title: "Jamaican (Bam Bam) X Talk To You", artist: "Lunazer" },
      { title: "Bulletproof", artist: "La Roux" },
      { title: "Classic", artist: "Drake" },
      { title: "You Are In My System (Club Mix)", artist: "Kerri Chandler" },
      { title: "Dreams", artist: "Prospa" },
      { title: "Heartache Medication", artist: "Jon Pardi" },
      { title: "More Than My Hometown", artist: "Morgan Wallen" },
    ],
    "6 months": [
      { title: "Classic", artist: "Drake" },
      { title: "4Me 4Me", artist: "Malcolm Todd" },
      { title: "2 Hard 4 The Radio", artist: "Drake" },
      { title: "Earrings", artist: "Malcolm Todd" },
      {
        title: "It Never Rains in Southern California",
        artist: "Albert Hammond",
      },
      { title: "4X4", artist: "Travis Scott" },
      { title: "Don't Stop 'Til You Get Enough", artist: "Michael Jackson" },
      { title: "Friday Night Fever", artist: "George Strait" },
      { title: "Liberian Girl", artist: "Michael Jackson" },
      { title: "Sister Golden Hair", artist: "America" },
    ],
    "12 months": [
      { title: "DIE TRYING", artist: "PARTYNEXTDOOR, Drake, Yebba" },
      { title: "Choosin' Texas", artist: "Ella Langley" },
      { title: "Over My Dead Body", artist: "Drake" },
      { title: "Southern Nights", artist: "Glen Campbell" },
      {
        title: "Right Back Where We Started From",
        artist: "Maxine Nightingale",
      },
      { title: "Talkin' Tennessee", artist: "Morgan Wallen" },
      { title: "Mr. Brightside", artist: "The Killers" },
      { title: "Overture (from Whiplash)", artist: "Justin Hurwitz" },
      { title: "My Way", artist: "Frank Sinatra" },
      { title: "Say You Love Me", artist: "Fleetwood Mac" },
    ],
  } as Record<string, Track[]>,
};

export const listening = {
  year: "2026",
  onRepeat: "Love Songs, Prospa",
  topArtists: [
    "Chris Stapleton",
    "Prospa",
    "Ella Langley",
    "Bruno Mars",
    "Michael Jackson",
  ],
  minutes: "",
  topGenre: "",
  spotifyUrl: "",
  funStat: "Most dangerous privilege: being handed the aux.",
};

export type LogEntry = {
  problem: string;
  status: "SOLVED" | "UPGRADED";
  detail: string;
};

export const garage = {
  vessel: "2009 Malibu Wakesetter VLX",
  status: "Running (for now)",
  hoursAdded: "60+",
  relationship: "Complicated",
  log: [
    {
      problem: "Starter won't crank",
      status: "SOLVED",
      detail: "Battery, then relay, then starter. Diagnosed in that order.",
    },
    {
      problem: "Starboard ballast won't drain",
      status: "SOLVED",
      detail: "",
    },
    {
      problem: "Anchor won't hold",
      status: "SOLVED",
      detail: "Mud and rock need completely different setups.",
    },
    {
      problem: "Bluetooth and audio",
      status: "UPGRADED",
      detail: "Installed a Fusion head unit.",
    },
  ] as LogEntry[],
  lessons: [
    {
      number: "01",
      title: "Diagnose before replacing",
      body: "The obvious broken part isn't always the broken part.",
    },
    {
      number: "02",
      title: "Learn the system",
      body: "Knowing why something works beats knowing which button fixes it.",
    },
    {
      number: "03",
      title: "Ask stupid questions",
      body: "Half of troubleshooting is testing the thing that obviously isn't the problem.",
    },
  ],
  rabbitHole:
    "Figuring out exactly how much bilge-pump capacity a 21-foot boat actually needs.",
};

// Find My. People are labeled by relationship, not by name, and pinned at
// city level only. That is deliberate: they did not sign up to be on a
// public site.
export type Person = {
  id: string;
  label: string;
  place: string;
  detail: string;
  lat: number;
  lon: number;
  color: string;
};

export const people: Person[] = [
  {
    id: "sid",
    label: "Sid",
    place: "Los Angeles, CA",
    detail: "USC. Where the next four years happen.",
    lat: 34.0224,
    lon: -118.2851,
    color: "#6366f1",
  },
  {
    id: "dad",
    label: "Dad",
    place: "Dubai, UAE",
    detail: "Stayed when the rest of us moved. Where the first ten years were.",
    lat: 25.2048,
    lon: 55.2708,
    color: "#f59e0b",
  },
  {
    id: "mom",
    label: "Mom",
    place: "Minneapolis, MN",
    detail: "Home base.",
    lat: 44.9778,
    lon: -93.265,
    color: "#10b981",
  },
  {
    id: "sister",
    label: "Sister",
    place: "Minneapolis, MN",
    detail: "Also home base.",
    lat: 44.9695,
    lon: -93.2415,
    color: "#ec4899",
  },
  {
    id: "girlfriend",
    label: "Girlfriend",
    place: "Minneapolis, MN",
    detail: "1,900 miles from campus.",
    lat: 44.9886,
    lon: -93.2955,
    color: "#f43f5e",
  },
  {
    id: "bestfriend",
    label: "Best friend",
    place: "Madison, WI",
    detail: "Different school, same group chat.",
    lat: 43.0731,
    lon: -89.4012,
    color: "#38bdf8",
  },
  {
    id: "boat",
    label: "The Malibu",
    place: "A lake in Minnesota",
    detail: "Last seen running. See the Garage app.",
    lat: 44.9,
    lon: -93.6,
    color: "#0ea5e9",
  },
];

// The rest of the Garage: things built, and the virtual fleet.
export const builds = [
  {
    name: "Racing sim rig",
    material: "Wood, built from scratch",
    detail:
      "Cut, drilled, and assembled a full sim racing rig out of wood instead of buying an aluminum profile kit.",
  },
];

// Sid owns every car in Forza Horizon, so this is a shortlist of what is
// actually worth driving, not a claim about a rare collection.
export const forzaGarage = [
  { car: "Ferrari F40 Competizione", year: "1989", tag: "Loud" },
  { car: "Porsche 911 GT2 RS", year: "2018", tag: "Fastest point to point" },
  { car: "Lamborghini Countach LPI 800-4", year: "2022", tag: "Poster car" },
  { car: "Ford GT", year: "2017", tag: "Track" },
  { car: "Koenigsegg Jesko", year: "2020", tag: "Top speed runs" },
  { car: "Ram TRX", year: "2021", tag: "The one I actually want" },
  { car: "Nissan Skyline GT-R V-Spec", year: "1999", tag: "Never gets old" },
  { car: "Mercedes-AMG One", year: "2021", tag: "Hypercar" },
];

// Ventures. Every sentence here is built from the resume or from things Sid
// has said directly. The detail pages are prose, not bullets, because the
// bullets already live in the PDF.
export type PortfolioCompany = {
  name: string;
  what: string;
  outcome: string;
};

export type Venture = {
  id: string;
  name: string;
  role: string;
  dates: string;
  location: string;
  hook: string;
  tagline: string;
  body: string[];
  highlights: { value: string; label: string }[];
  portfolio?: PortfolioCompany[];
  active?: boolean;
};

export const ventures: Venture[] = [
  {
    id: "epvf",
    name: "EP Venture Fund",
    role: "Co-Founder",
    dates: "Oct 2025 - Present",
    location: "Minneapolis, MN",
    active: true,
    hook: "Money that actually shows up, for founders too young to sign for it.",
    tagline: "Minors can't sign contracts. That was the whole problem.",
    body: [
      "A sixteen-year-old with a real idea cannot open a business bank account or sign anything. Most programs for young founders skip past that part and hand out a trophy instead. I wanted the money to be actual money.",
      "So we ran it through the school foundation. Real paperwork, real account, grants that land in a real bank. Kids pitch quarterly, and nobody gets funded for a good idea. They get funded for proving somebody already wants the thing.",
      "The part nobody warns you about is that writing the check is the easy half. All three still call. Most of what I do now is argue about pricing and tell founders the thing they were hoping I would not say.",
    ],
    highlights: [
      { value: "22", label: "Screened" },
      { value: "3", label: "Funded" },
      { value: "$22,375", label: "Deployed" },
      { value: "3", label: "Still advising" },
    ],
    portfolio: [
      {
        name: "Animation studio",
        what: "Advised on pricing and go-to-market.",
        outcome:
          "Projected average contract value up 62%, 11 qualified leads, 4 pilot clients.",
      },
      {
        name: "Chef marketplace",
        what: "Advised on a 15% commission model.",
        outcome: "18 chefs onboarded, 21 pilot bookings.",
      },
      {
        name: "Elder care coordination",
        what: "A platform for families managing an aging parent's care.",
        outcome: "Funded and in build.",
      },
    ],
  },
  {
    id: "junior-sharks",
    name: "Junior Sharks",
    role: "Co-Founder",
    dates: "May 2024 - Aug 2026",
    location: "Minneapolis, MN",
    hook: "Twenty kids turned into 360, and the district's numbers moved.",
    tagline: "Where little fins make big waves.",
    body: [
      "We started with twenty kids and no curriculum, so I wrote the curriculum.",
      "Eight workshops, third through eighth grade, ending in a Shark Tank where the judges are actual investors and Chamber people rather than teachers being polite. Watching a fourth grader take a real question from a real investor is the entire point of it.",
      "The number I care about is not even ours. Business class enrollment at the high school went up 42%. The kids we taught got older and signed up on their own.",
    ],
    highlights: [
      { value: "20 to 360+", label: "Students" },
      { value: "6", label: "Schools" },
      { value: "70+", label: "Teams judged" },
      { value: "42%", label: "Enrollment lift" },
    ],
  },
  {
    id: "deca",
    name: "DECA",
    role: "Competition Leader",
    dates: "Oct 2023 - Apr 2026",
    location: "Eden Prairie High School",
    hook: "Lost the first one badly. Fixed it with a notebook.",
    tagline: "Lost the first one. Wrote the book after.",
    body: [
      "I lost my first competition. It was not close.",
      "So I wrote down every performance indicator they could possibly test, all in one place, and kept adding to it until it stopped being my notebook and became the thing the whole chapter studied from.",
      "Third in the world the next year. But the part I would actually put on a wall is the eighty people I trained going from a 64 average to 85 and up, and thirty-two of them making state, double what we sent the year before.",
    ],
    highlights: [
      { value: "3rd", label: "Globally, 2025" },
      { value: "#1 of 4,364", label: "Chapter rank" },
      { value: "80+", label: "Trained" },
      { value: "64 to 85+", label: "Their scores" },
    ],
  },
];
