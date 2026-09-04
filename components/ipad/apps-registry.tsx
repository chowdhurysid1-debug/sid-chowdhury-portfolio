import {
  User,
  Images,
  Mail,
  Sparkles,
  FileText,
  Clapperboard,
  AudioLines,
  Anchor,
  CloudSun,
  Radar,
  Rocket,
} from "lucide-react";
import type { ComponentType } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export type AppKind = "internal" | "external";

export type AppDefinition = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  gradient: string;
  kind: AppKind;
  href?: string;
  inDock?: boolean;
};

export const apps: AppDefinition[] = [
  {
    id: "about",
    label: "About",
    icon: User,
    gradient: "from-zinc-500 to-zinc-700",
    kind: "internal",
    inDock: true,
  },
  {
    id: "photos",
    label: "Photos",
    icon: Images,
    gradient: "from-fuchsia-500 to-pink-600",
    kind: "internal",
    inDock: true,
  },
  {
    id: "mail",
    label: "Mail",
    icon: Mail,
    gradient: "from-blue-500 to-cyan-600",
    kind: "internal",
    inDock: true,
  },
  {
    id: "asksid",
    label: "Ask Sid",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-700",
    kind: "internal",
    inDock: true,
  },
  {
    id: "ventures",
    label: "Ventures",
    icon: Rocket,
    gradient: "from-indigo-500 to-violet-700",
    kind: "internal",
  },
  {
    id: "cinema",
    label: "Letterboxd",
    icon: Clapperboard,
    gradient: "from-[#00e054] to-emerald-700",
    kind: "internal",
  },
  {
    id: "listening",
    label: "Spotify",
    icon: AudioLines,
    gradient: "from-[#1db954] to-green-800",
    kind: "internal",
  },
  {
    id: "garage",
    label: "Garage",
    icon: Anchor,
    gradient: "from-sky-500 to-blue-800",
    kind: "internal",
  },
  {
    id: "weather",
    label: "Weather",
    icon: CloudSun,
    gradient: "from-sky-400 to-indigo-600",
    kind: "internal",
  },
  {
    id: "findmy",
    label: "Find My",
    icon: Radar,
    gradient: "from-emerald-500 to-green-700",
    kind: "internal",
  },
  {
    id: "resume",
    label: "Resume",
    icon: FileText,
    gradient: "from-slate-500 to-slate-700",
    kind: "external",
    href: "/Chowdhury_Siddharth_Resume.pdf",
  },
  {
    id: "github",
    label: "GitHub",
    icon: GithubIcon,
    gradient: "from-zinc-700 to-zinc-900",
    kind: "external",
    href: "https://github.com/chowdhurysid1-debug",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: LinkedinIcon,
    gradient: "from-blue-600 to-blue-800",
    kind: "external",
    href: "https://www.linkedin.com/in/sid-chowdhury0",
  },
];

export const internalApps = apps.filter((app) => app.kind === "internal");
export const dockApps = apps.filter((app) => app.inDock);
export const gridApps = apps.filter((app) => !app.inDock);
