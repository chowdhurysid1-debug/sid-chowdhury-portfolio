"use client";

import type { ReactNode } from "react";

export function IPadFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black p-3 sm:p-8">
      <div className="relative aspect-[4/3] h-full max-h-[820px] w-full max-w-[1100px] rounded-[2.25rem] bg-zinc-900 p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_100px_-20px_rgba(0,0,0,0.8)] sm:rounded-[2.75rem] sm:p-[14px]">
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
          {/* Dynamic Island */}
          <div className="pointer-events-none absolute top-2.5 left-1/2 z-50 h-6 w-24 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7 sm:w-28" />
          {children}
          {/* Home indicator */}
          <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-50 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40 sm:bottom-2 sm:w-32" />
        </div>
      </div>
    </div>
  );
}
