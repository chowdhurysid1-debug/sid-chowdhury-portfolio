import { Star, StarHalf } from "lucide-react";
import { cinema, profile, type Film } from "@/data/content";

function Rating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-px text-[#00e054]">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-current" strokeWidth={0} />
      ))}
      {half && <StarHalf className="h-3 w-3 fill-current" strokeWidth={0} />}
    </span>
  );
}

function FilmRow({ film }: { film: Film }) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-zinc-800 py-2.5 first:border-t-0">
      <div>
        <p className="text-sm text-white">{film.title}</p>
        {film.note && (
          <p className="mt-0.5 text-[13px] text-zinc-500 italic">
            &ldquo;{film.note}&rdquo;
          </p>
        )}
      </div>
      <div className="shrink-0 pt-0.5">
        <Rating rating={film.rating} />
      </div>
    </div>
  );
}

export function CinemaApp() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-6 sm:px-8">
      <div className="flex items-center justify-between gap-6 border-b border-zinc-800 pb-5">
        <div>
          <p className="text-xs tracking-widest text-zinc-500 uppercase">
            Letterboxd
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            {profile.name.split(" ")[0]}&rsquo;s Cinema
          </h1>
        </div>
        <div className="flex gap-5">
          {cinema.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-semibold text-white">{stat.value}</p>
              <p className="text-[10px] tracking-wider text-zinc-500 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-6">
        <h2 className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
          Favorites
        </h2>
        <div className="mt-2">
          {cinema.favorites.map((film) => (
            <FilmRow key={film.title} film={film} />
          ))}
        </div>
      </section>

      <section className="mt-7 pb-4">
        <h2 className="text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
          Recent activity
        </h2>
        <div className="mt-2">
          {cinema.recent.map((film) => (
            <FilmRow key={film.title} film={film} />
          ))}
        </div>
      </section>
    </div>
  );
}
