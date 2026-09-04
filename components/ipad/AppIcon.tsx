"use client";

import { motion } from "framer-motion";
import type { AppDefinition } from "./apps-registry";

export function AppIcon({
  app,
  onOpen,
}: {
  app: AppDefinition;
  onOpen: (app: AppDefinition) => void;
}) {
  const Icon = app.icon;

  function handleClick() {
    if (app.kind === "external" && app.href) {
      window.open(app.href, "_blank", "noopener,noreferrer");
      return;
    }
    onOpen(app);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex cursor-pointer flex-col items-center gap-1.5 outline-none"
    >
      <motion.div
        whileTap={{ scale: 0.88 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className={`flex h-14 w-14 items-center justify-center rounded-[16px] bg-gradient-to-br shadow-lg sm:h-16 sm:w-16 sm:rounded-[18px] ${app.gradient}`}
      >
        <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" strokeWidth={1.75} />
      </motion.div>
      <span className="text-[11px] font-medium text-white drop-shadow-sm sm:text-xs">
        {app.label}
      </span>
    </button>
  );
}
