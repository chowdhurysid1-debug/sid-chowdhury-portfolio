"use client";

import { motion } from "framer-motion";
import { Sun, Image as ImageIcon, Wifi, Bluetooth, Moon } from "lucide-react";

export type Wallpaper = {
  id: string;
  label: string;
  css: string;
};

export const wallpapers: Wallpaper[] = [
  { id: "abstract", label: "Abstract", css: "url(/images/wallpaper.svg)" },
  {
    id: "sunset",
    label: "Last run",
    css: "url(/images/photos/snowboarding.jpg)",
  },
  { id: "kenya", label: "Kenya", css: "url(/images/photos/giraffes.jpg)" },
  { id: "storm", label: "Storm", css: "url(/images/photos/golf-storm.jpg)" },
];

export function ControlCenter({
  brightness,
  onBrightness,
  wallpaper,
  onWallpaper,
  onClose,
}: {
  brightness: number;
  onBrightness: (value: number) => void;
  wallpaper: string;
  onWallpaper: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="absolute inset-0 z-[60] flex items-start justify-end bg-black/40 p-4 backdrop-blur-xl sm:p-6"
    >
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm space-y-3"
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-4 backdrop-blur-2xl">
            <Wifi className="h-5 w-5 text-white" />
            <span className="text-sm text-white">Wi-Fi</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-4 backdrop-blur-2xl">
            <Bluetooth className="h-5 w-5 text-white" />
            <span className="text-sm text-white">Bluetooth</span>
          </div>
        </div>

        {/* Brightness actually dims the screen */}
        <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-2xl">
          <div className="mb-2.5 flex items-center gap-2">
            <Sun className="h-4 w-4 text-white" />
            <span className="text-sm text-white">Brightness</span>
            <span className="ml-auto text-sm text-white/60">
              {Math.round(brightness * 100)}%
            </span>
          </div>
          <input
            type="range"
            min={0.25}
            max={1}
            step={0.01}
            value={brightness}
            onChange={(e) => onBrightness(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-white"
          />
        </div>

        {/* Wallpaper switcher */}
        <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-2xl">
          <div className="mb-3 flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-white" />
            <span className="text-sm text-white">Wallpaper</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {wallpapers.map((paper) => (
              <button
                key={paper.id}
                type="button"
                onClick={() => onWallpaper(paper.id)}
                className={`cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  wallpaper === paper.id
                    ? "border-white"
                    : "border-transparent hover:border-white/40"
                }`}
              >
                <span
                  className="block h-12 w-full bg-cover bg-center"
                  style={{ backgroundImage: paper.css }}
                />
                <span className="block bg-black/40 py-1 text-[10px] text-white">
                  {paper.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white/15 py-3 text-sm text-white backdrop-blur-2xl transition-colors duration-200 hover:bg-white/25"
        >
          <Moon className="h-4 w-4" />
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
