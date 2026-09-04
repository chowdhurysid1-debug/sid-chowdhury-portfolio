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
        { label: "Also", value: "Golf, photography" },
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
  stats: [
    { label: "Films", value: "147" },
    { label: "This year", value: "38" },
    { label: "Lists", value: "6" },
  ],
  favorites: [
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
  lists: [
    "Movies that make me want to build something",
    "Perfect plane movies",
    "Movies I will defend way too aggressively",
    "Actually worth the 2.5+ hour runtime",
  ],
};

export type Playlist = {
  name: string;
  description: string;
  gradient: string;
  // Paste a Spotify playlist share link's embed form here and the card turns
  // into a real player: https://open.spotify.com/embed/playlist/<id>
  embedUrl?: string;
};

// Real Stats for Spotify exports. Ranges are labeled in the order Sid pasted
// them; confirm the mapping before treating the labels as exact.
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
  playlists: [
    {
      name: "Windows Down",
      description: "Songs for driving around LA.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      name: "Boat Aux",
      description: "What gets played on the Malibu.",
      gradient: "from-sky-500 to-blue-700",
    },
    {
      name: "1:37 AM",
      description: "What plays while building something.",
      gradient: "from-violet-600 to-indigo-800",
    },
  ] as Playlist[],
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
