"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

const photos: Photo[] = [
  {
    src: "/images/photos/lion-kill.jpg",
    alt: "A lion covered in blood standing over a buffalo carcass, staring into the lens",
    caption: "Kenya",
  },
  {
    src: "/images/photos/giraffes.jpg",
    alt: "Three giraffes standing among trees in green forest light",
    caption: "Kenya",
  },
  {
    src: "/images/photos/deca-icdc.jpg",
    alt: "Sid and his DECA partner holding third place ICDC trophies",
    caption: "DECA ICDC, Orlando",
  },
  {
    src: "/images/photos/golf-storm.jpg",
    alt: "Sid mid golf swing with storm clouds over mountains behind the green",
    caption: "Storm rolling in",
  },
  {
    src: "/images/photos/football.jpg",
    alt: "Sid in an Eden Prairie football jersey and red helmet at practice",
    caption: "Eden Prairie",
  },
  {
    src: "/images/photos/lioness.jpg",
    alt: "A lioness with a bloodied face resting beside a kill in dense brush",
    caption: "Kenya",
  },
  {
    src: "/images/photos/fishing.jpg",
    alt: "Sid holding up a bass on a boat at sunset, giving a thumbs up",
    caption: "Minnesota summer",
  },
  {
    src: "/images/photos/golf-mountains.jpg",
    alt: "Sid finishing a golf swing on a fairway with mountains in the distance",
    caption: "Tee shot",
  },
  {
    src: "/images/photos/snowboarding.jpg",
    alt: "A snowboarder carrying a board at the top of a run under an orange sunset",
    caption: "Last run",
  },
  {
    src: "/images/photos/junior-sharks.jpg",
    alt: "Sid with a classroom of Junior Sharks students in front of a Go Make Waves slide",
    caption: "Junior Sharks",
  },
  {
    src: "/images/photos/boat.jpg",
    alt: "Sid and friends on a boat at sunset after wakeboarding",
    caption: "Lake days",
  },
];

export function PhotosApp() {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <div className="px-3 py-4 sm:px-4">
      <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(photo)}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 240px, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setActive(null)}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors duration-200 hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative h-[80%] w-full max-w-3xl"
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <p className="mt-3 text-sm text-zinc-400">{active.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
