import { ExternalLink } from "lucide-react";
import { listening, profile } from "@/data/content";

export function ListeningApp() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
      <div className="rounded-2xl bg-gradient-to-br from-[#1db954] to-emerald-800 p-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-black/70 uppercase">
          {profile.name.split(" ")[0]}&rsquo;s {listening.year} wrapped
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
          Top artists
        </h1>
        <ol className="mt-4 space-y-2">
          {listening.topArtists.map((artist, i) => (
            <li key={artist} className="flex items-baseline gap-3">
              <span className="w-4 text-sm font-bold text-black/60">
                {i + 1}
              </span>
              <span className="text-[17px] font-semibold text-white">
                {artist}
              </span>
            </li>
          ))}
        </ol>

        {(listening.minutes || listening.topGenre) && (
          <div className="mt-5 flex gap-6 border-t border-black/20 pt-4">
            {listening.minutes && (
              <div>
                <p className="text-lg font-bold text-white">
                  {listening.minutes}
                </p>
                <p className="text-[11px] tracking-wider text-black/70 uppercase">
                  Minutes
                </p>
              </div>
            )}
            {listening.topGenre && (
              <div>
                <p className="text-lg font-bold text-white">
                  {listening.topGenre}
                </p>
                <p className="text-[11px] tracking-wider text-black/70 uppercase">
                  Top genre
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="mt-7">
        <h2 className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
          Playlists
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {listening.playlists.map((playlist) => (
            <div
              key={playlist.name}
              className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-200 hover:border-zinc-700"
            >
              <div
                className={`aspect-square w-full bg-gradient-to-br ${playlist.gradient}`}
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-white">
                  {playlist.name}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-zinc-400">
                  {playlist.description}
                </p>
              </div>
            </div>
          ))}
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
