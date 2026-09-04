import Image from "next/image";
import {
  MapPin,
  Home,
  GraduationCap,
  Trophy,
  Timer,
  Flag,
  Fish,
  Waves,
  Camera,
  Car,
  TrendingUp,
  Music,
  Disc3,
  Headphones,
  Mic,
  Film,
  Tv,
  BookOpen,
  Radio,
  UtensilsCrossed,
  Sandwich,
  Ban,
  Coffee,
  Moon,
  Sunrise,
  Droplets,
  Dumbbell,
  Smartphone,
  LayoutGrid,
  Backpack,
  Shirt,
  BatteryCharging,
  Glasses,
  Flame,
  ThumbsDown,
  Wrench,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { aboutSections, profile, type SettingsIcon } from "@/data/content";

const icons: Record<SettingsIcon, LucideIcon> = {
  pin: MapPin,
  home: Home,
  school: GraduationCap,
  football: Trophy,
  run: Timer,
  golf: Flag,
  fish: Fish,
  waves: Waves,
  camera: Camera,
  car: Car,
  chart: TrendingUp,
  music: Music,
  album: Disc3,
  headphones: Headphones,
  mic: Mic,
  film: Film,
  tv: Tv,
  book: BookOpen,
  podcast: Radio,
  food: UtensilsCrossed,
  sandwich: Sandwich,
  never: Ban,
  coffee: Coffee,
  moon: Moon,
  sunrise: Sunrise,
  shower: Droplets,
  gym: Dumbbell,
  phone: Smartphone,
  game: LayoutGrid,
  bag: Backpack,
  shirt: Shirt,
  battery: BatteryCharging,
  glasses: Glasses,
  flame: Flame,
  overrated: ThumbsDown,
  wrench: Wrench,
  trees: Trees,
};

const iconTints: Record<SettingsIcon, string> = {
  pin: "bg-red-500",
  home: "bg-orange-500",
  school: "bg-blue-500",
  football: "bg-emerald-600",
  run: "bg-amber-500",
  golf: "bg-green-600",
  fish: "bg-sky-500",
  waves: "bg-cyan-500",
  camera: "bg-fuchsia-500",
  car: "bg-zinc-600",
  chart: "bg-indigo-500",
  music: "bg-pink-500",
  album: "bg-purple-500",
  headphones: "bg-rose-500",
  mic: "bg-violet-600",
  film: "bg-violet-500",
  tv: "bg-indigo-600",
  book: "bg-teal-600",
  podcast: "bg-amber-600",
  food: "bg-rose-500",
  sandwich: "bg-orange-600",
  never: "bg-red-600",
  coffee: "bg-amber-700",
  moon: "bg-indigo-700",
  sunrise: "bg-orange-400",
  shower: "bg-sky-600",
  gym: "bg-red-500",
  phone: "bg-zinc-600",
  game: "bg-emerald-500",
  bag: "bg-yellow-700",
  shirt: "bg-blue-600",
  battery: "bg-green-600",
  glasses: "bg-zinc-500",
  flame: "bg-orange-500",
  overrated: "bg-red-700",
  wrench: "bg-slate-600",
  trees: "bg-green-700",
};

export function AboutApp() {
  return (
    <div className="mx-auto max-w-xl px-4 py-6 sm:px-6">
      <div className="flex items-center gap-4 rounded-2xl bg-zinc-900 p-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10">
          <Image
            src={profile.headshot}
            alt={profile.name}
            fill
            sizes="64px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-zinc-400">{profile.location}</p>
        </div>
      </div>

      {aboutSections.map((section) => (
        <div key={section.title} className="mt-7">
          <h2 className="mb-2 px-4 text-[13px] font-normal tracking-wide text-zinc-500 uppercase">
            {section.title}
          </h2>
          <div className="overflow-hidden rounded-2xl bg-zinc-900">
            {section.rows.map((row, i) => {
              const Icon = icons[row.icon];
              return (
                <div
                  key={row.label}
                  className={`flex items-center gap-3 px-4 py-2.5 ${
                    i > 0 ? "border-t border-zinc-800" : ""
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] ${iconTints[row.icon]}`}
                  >
                    <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-[15px] text-white">{row.label}</span>
                  {row.value && (
                    <span className="ml-auto pl-4 text-right text-[15px] text-zinc-400">
                      {row.value}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
