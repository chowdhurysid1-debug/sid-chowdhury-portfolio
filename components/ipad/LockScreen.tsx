"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { ChevronUp } from "lucide-react";
import { profile } from "@/data/content";

export function LockScreen({
  onUnlock,
  wallpaper,
}: {
  onUnlock: () => void;
  wallpaper: string;
}) {
  const [now, setNow] = useState<Date | null>(null);
  const dragY = useMotionValue(0);
  const opacity = useTransform(dragY, [0, -140], [1, 0]);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.y < -90 || info.velocity.y < -400) {
      onUnlock();
    }
  }

  return (
    <motion.div
      className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-zinc-950 px-6 pt-16 pb-12 text-center select-none"
      style={{ opacity }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: wallpaper }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <div className="relative">
        <p className="text-lg font-medium text-zinc-300">
          {now?.toLocaleDateString([], {
            weekday: "long",
            month: "long",
            day: "numeric",
          }) ?? ""}
        </p>
        <p className="mt-1 text-8xl font-semibold tracking-tight text-white tabular-nums">
          {now?.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          }) ?? ""}
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-6">
        <div>
          <p className="text-2xl font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-400">{profile.tagline}</p>
        </div>

        <motion.div
          drag="y"
          dragConstraints={{ top: -160, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          onClick={onUnlock}
          style={{ y: dragY }}
          className="flex cursor-grab flex-col items-center gap-1 text-zinc-300 active:cursor-grabbing"
        >
          <ChevronUp className="h-6 w-6 animate-bounce" />
          <span className="text-sm font-medium tracking-wide">
            Swipe up to unlock
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
