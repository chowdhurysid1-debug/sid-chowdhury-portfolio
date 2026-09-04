"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Play, Pause } from "lucide-react";
import { listening, profile, spotifyStats } from "@/data/content";

function Equalizer({ playing }: { playing: boolean }) {
  const bars = [0.4, 0.9, 0.6, 1, 0.5];
  return (
    <div className="flex h-4 items-end gap-[3px]">
      {bars.map((peak, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-[#1db954]"
          animate={
            playing
              ? { height: [`${peak * 30}%`, "100%", `${peak * 45}%`] }
              : { height: "25%" }
          }
          transition={
            playing
              ? {
                  duration: 0.5 + i * 0.12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              : { duration: 0.2 }
          }
        />
      ))}
    </div>
  );
}

export function ListeningApp() {
  const [open, setOpen] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);
  const [tab, setTab] = useState<"artists" | "tracks">("artists");
  const [range, setRange] = useState<string>("4 weeks");
  const openPlaylist = listening.playlists.find((p) => p.name === open);

  return (
    <div className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
      <div className="rounded-2xl bg-gradient-to-br from-[#1db954] to-emerald-800 p-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-black/70 uppercase">
          {profile.name.split(" ")[0]}&rsquo;s listening
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <div className="flex rounded-full bg-black/25 p-0.5">
            {(["artists", "tracks"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`cursor-pointer rounded-full px-3.5 py-1 text-[13px] font-semibold capitalize transition-colors duration-200 ${
                  tab === t ? "bg-white text-black" : "text-white/80"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex rounded-full bg-black/25 p-0.5">
            {spotifyStats.ranges.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={`cursor-pointer rounded-full px-3 py-1 text-[12px] font-medium transition-colors duration-200 ${
                  range === r ? "bg-white/90 text-black" : "text-white/70"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <ol className="mt-4 space-y-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${tab}-${range}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-2"
            >
              {tab === "artists"
                ? spotifyStats.artists[range].map((artist, i) => (
                    <li key={artist} className="flex items-baseline gap-3">
                      <span className="w-4 text-sm font-bold text-black/60 tabular-nums">
                        {i + 1}
                      </span>
                      <span className="text-[16px] font-semibold text-white">
                        {artist}
                      </span>
                    </li>
                  ))
                : spotifyStats.tracks[range].map((track, i) => (
                    <li key={track.title} className="flex items-baseline gap-3">
                      <span className="w-4 shrink-0 text-sm font-bold text-black/60 tabular-nums">
                        {i + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] font-semibold text-white">
                          {track.title}
                        </span>
                        <span className="block truncate text-[13px] text-white/70">
                          {track.artist}
                        </span>
                      </span>
                    </li>
                  ))}
            </motion.div>
          </AnimatePresence>
        </ol>
      </div>

      {/* Now playing bar */}
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-transform duration-200 hover:scale-105"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <Pause className="h-4 w-4 fill-current" strokeWidth={0} />
          ) : (
            <Play
              className="h-4 w-4 translate-x-px fill-current"
              strokeWidth={0}
            />
          )}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">
            {listening.onRepeat}
          </p>
          <p className="text-[13px] text-zinc-500">On repeat</p>
        </div>
        <Equalizer playing={playing} />
      </div>

      {openPlaylist?.embedUrl && (
        <div className="mt-4 overflow-hidden rounded-xl">
          <iframe
            src={openPlaylist.embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={openPlaylist.name}
          />
        </div>
      )}

      <section className="mt-7">
        <h2 className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
          Playlists
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {listening.playlists.map((playlist) => {
            const isOpen = open === playlist.name;
            return (
              <button
                key={playlist.name}
                type="button"
                onClick={() => setOpen(isOpen ? null : playlist.name)}
                className={`cursor-pointer overflow-hidden rounded-xl border text-left transition-all duration-200 ${
                  isOpen
                    ? "border-[#1db954] bg-zinc-900"
                    : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
                }`}
              >
                <div
                  className={`relative aspect-square w-full bg-gradient-to-br ${playlist.gradient}`}
                >
                  <motion.div
                    animate={{
                      scale: isOpen ? 1 : 0.8,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1db954] shadow-lg"
                  >
                    <Play
                      className="h-3.5 w-3.5 translate-x-px fill-black"
                      strokeWidth={0}
                    />
                  </motion.div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-white">
                    {playlist.name}
                  </p>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.p
                        key="desc"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden text-[13px] leading-snug text-zinc-400"
                      >
                        <span className="block pt-1">
                          {playlist.description}
                        </span>
                      </motion.p>
                    ) : (
                      <motion.p
                        key="hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pt-1 text-[13px] text-zinc-600"
                      >
                        Tap to open
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <p className="mt-7 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
        {listening.funStat}
      </p>

      {listening.spotifyUrl && (
        <a
          href={listening.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 mb-4 flex items-center justify-center gap-2 rounded-xl bg-[#1db954] px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#1ed760]"
        >
          Open Spotify profile
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
