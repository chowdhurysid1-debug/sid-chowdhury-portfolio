import Image from "next/image";
import { profile } from "@/data/content";

const photos = [{ src: profile.headshot, alt: profile.name }];

export function PhotosApp() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-8 sm:px-10">
      <p className="mb-5 text-sm text-zinc-400">
        Shoot on a Tamron 35-150mm. More going up here soon.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 transition-all duration-200 hover:border-zinc-600"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
