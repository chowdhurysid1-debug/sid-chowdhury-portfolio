"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";
import type { AppDefinition } from "@/components/ipad/apps-registry";

export function AppWindow({
  app,
  onClose,
  children,
}: {
  app: AppDefinition;
  onClose: () => void;
  children: ReactNode;
}) {
  const Icon = app.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 8 }}
      transition={{ type: "spring", stiffness: 320, damping: 30 }}
      className="absolute inset-0 flex flex-col overflow-hidden bg-zinc-950"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-950/95 px-4 pt-4 pb-3 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="flex cursor-pointer items-center gap-1 rounded-full py-1.5 pr-3 pl-1.5 text-sm font-medium text-indigo-400 transition-colors duration-200 hover:bg-white/5 hover:text-indigo-300"
          >
            <ChevronLeft className="h-5 w-5" />
            Home
          </button>
          <div className="flex flex-1 items-center justify-center gap-2 pr-16">
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${app.gradient}`}
            >
              <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2} />
            </div>
            <span className="text-sm font-semibold text-zinc-100">
              {app.label}
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
