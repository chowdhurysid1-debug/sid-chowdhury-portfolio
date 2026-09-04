"use client";

import { motion } from "framer-motion";

// Shown once on first load, the way a device boots before it shows a lock
// screen. Deliberately not the Apple logo, that mark is not ours to use.
export function BootScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15"
      >
        <span className="text-lg font-semibold tracking-tight text-white">
          SC
        </span>
      </motion.div>

      <div className="mt-8 h-[3px] w-32 overflow-hidden rounded-full bg-white/15">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-white"
        />
      </div>
    </motion.div>
  );
}
