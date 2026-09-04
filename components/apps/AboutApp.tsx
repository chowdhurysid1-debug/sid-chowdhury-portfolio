"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Settings as SettingsIconGear,
  Hourglass,
  Music,
  Tv,
  BookOpen,
  UtensilsCrossed,
  HeartPulse,
  Trees,
  Backpack,
  MessageSquareQuote,
  Camera,
  Car,
  Wallet,
  ChevronRight,
  ChevronLeft,
  Search,
  type LucideIcon,
} from "lucide-react";
import {
  profile,
  settingsGroups,
  type SettingsIcon,
  type SettingsPage,
} from "@/data/content";

const icons: Record<SettingsIcon, LucideIcon> = {
  general: SettingsIconGear,
  screentime: Hourglass,
  music: Music,
  tv: Tv,
  books: BookOpen,
  food: UtensilsCrossed,
  health: HeartPulse,
  outside: Trees,
  gear: Backpack,
  opinions: MessageSquareQuote,
  camera: Camera,
  car: Car,
  wallet: Wallet,
};

const tints: Record<SettingsIcon, string> = {
  general: "bg-zinc-500",
  screentime: "bg-indigo-500",
  music: "bg-red-500",
  tv: "bg-violet-500",
  books: "bg-orange-500",
  food: "bg-rose-500",
  health: "bg-pink-600",
  outside: "bg-green-600",
  gear: "bg-amber-600",
  opinions: "bg-sky-500",
  camera: "bg-fuchsia-500",
  car: "bg-blue-600",
  wallet: "bg-zinc-800",
};

function RowIcon({ icon }: { icon: SettingsIcon }) {
  const Icon = icons[icon];
  return (
    <div
      className={`flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-[7px] ${tints[icon]}`}
    >
      <Icon className="h-[17px] w-[17px] text-white" strokeWidth={2.2} />
    </div>
  );
}

function SettingsList({ onOpen }: { onOpen: (page: SettingsPage) => void }) {
  const [query, setQuery] = useState("");

  const groups = settingsGroups
    .map((group) =>
      group.filter((page) => {
        if (!query.trim()) return true;
        const haystack = [
          page.label,
          page.preview,
          ...page.rows.flatMap((row) => [row.label, row.value]),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query.trim().toLowerCase());
      }),
    )
    .filter((group) => group.length > 0);

  return (
    <div className="mx-auto max-w-xl px-4 pt-3 pb-8 sm:px-5">
      <h1 className="px-1 text-[32px] leading-tight font-bold tracking-tight text-white">
        Settings
      </h1>

      <div className="mt-2 flex items-center gap-2 rounded-[10px] bg-zinc-800/80 px-2.5 py-1.5">
        <Search className="h-4 w-4 shrink-0 text-zinc-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent text-[15px] text-white placeholder-zinc-500 outline-none"
        />
      </div>

      <button
        type="button"
        onClick={() => onOpen(settingsGroups[0][0])}
        className="mt-4 flex w-full cursor-pointer items-center gap-3.5 rounded-xl bg-zinc-900 px-4 py-3 text-left transition-colors duration-150 hover:bg-zinc-800/80"
      >
        <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full">
          <Image
            src={profile.headshot}
            alt={profile.name}
            fill
            sizes="58px"
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0">
          <p className="text-[17px] font-medium text-white">{profile.name}</p>
          <p className="truncate text-[13px] text-zinc-400">
            USC, Iovine and Young + Marshall
          </p>
        </div>
        <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-zinc-600" />
      </button>

      {groups.map((group, gi) => (
        <div key={gi} className="mt-5 overflow-hidden rounded-xl bg-zinc-900">
          {group.map((page, i) => (
            <button
              key={page.id}
              type="button"
              onClick={() => onOpen(page)}
              className="flex w-full cursor-pointer items-center gap-3 py-1.5 pr-3.5 pl-3.5 text-left transition-colors duration-150 hover:bg-zinc-800/70"
            >
              <RowIcon icon={page.icon} />
              <div
                className={`flex flex-1 items-center gap-3 py-1.5 ${
                  i > 0 ? "border-t border-zinc-800" : ""
                }`}
                style={i > 0 ? { marginTop: "-1px" } : undefined}
              >
                <span className="text-[16px] text-white">{page.label}</span>
                <span className="ml-auto truncate pl-3 text-[15px] text-zinc-500">
                  {page.preview}
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-zinc-600" />
              </div>
            </button>
          ))}
        </div>
      ))}

      {groups.length === 0 && (
        <p className="mt-10 text-center text-sm text-zinc-500">
          Nothing matches &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
}

function SettingsDetail({
  page,
  onBack,
}: {
  page: SettingsPage;
  onBack: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl px-4 pt-3 pb-8 sm:px-5">
      <button
        type="button"
        onClick={onBack}
        className="flex cursor-pointer items-center gap-0.5 text-[17px] text-indigo-400 transition-colors duration-150 hover:text-indigo-300"
      >
        <ChevronLeft className="h-5 w-5" />
        Settings
      </button>

      <div className="mt-3 flex items-center gap-3 px-1">
        <RowIcon icon={page.icon} />
        <h1 className="text-[28px] leading-tight font-bold tracking-tight text-white">
          {page.label}
        </h1>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl bg-zinc-900">
        {page.rows.map((row, i) => (
          <div key={row.label} className="px-3.5">
            <div
              className={`flex items-start gap-3 py-2.5 ${
                i > 0 ? "border-t border-zinc-800" : ""
              }`}
            >
              <span className="shrink-0 text-[16px] text-white">
                {row.label}
              </span>
              <span className="ml-auto text-right text-[15px] text-zinc-400">
                {row.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {page.footer && (
        <p className="mt-2 px-4 text-[13px] leading-relaxed text-zinc-500">
          {page.footer}
        </p>
      )}
    </div>
  );
}

export function AboutApp() {
  const [page, setPage] = useState<SettingsPage | null>(null);

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait" initial={false}>
        {page ? (
          <motion.div
            key={page.id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="absolute inset-0 overflow-y-auto bg-black"
          >
            <SettingsDetail page={page} onBack={() => setPage(null)} />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ x: "-25%", opacity: 0.6 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-25%", opacity: 0.6 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="absolute inset-0 overflow-y-auto bg-black"
          >
            <SettingsList onOpen={setPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
