"use client";

import {
  useRef,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MAX_TILT = 16;

function clamp(value: number, limit: number) {
  return Math.max(-limit, Math.min(limit, value));
}

export function IPadFrame({
  children,
  onPower,
}: {
  children: ReactNode;
  onPower: () => void;
}) {
  const dragging = useRef(false);
  const origin = useRef({ x: 0, y: 0 });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 140, damping: 15, mass: 0.6 });
  const rotateY = useSpring(rawY, { stiffness: 140, damping: 15, mass: 0.6 });

  // The drop shadow leans opposite the tilt, the way a real object's would.
  const shadow = useTransform(
    [rotateX, rotateY],
    ([x, y]: number[]) =>
      `${-y * 2.6}px ${34 + x * 2.2}px 90px -18px rgba(0,0,0,0.85)`,
  );

  function start(e: ReactPointerEvent) {
    // Grabbing the screen itself should scroll and tap, not tilt the device.
    if ((e.target as HTMLElement).closest("[data-screen]")) return;
    dragging.current = true;
    origin.current = { x: e.clientX, y: e.clientY };
  }

  function move(e: ReactPointerEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - origin.current.x;
    const dy = e.clientY - origin.current.y;
    rawY.set(clamp(dx / 9, MAX_TILT));
    rawX.set(clamp(-dy / 9, MAX_TILT));
  }

  function release() {
    dragging.current = false;
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-black p-3 sm:p-8"
      style={{ perspective: 1800 }}
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={release}
      onPointerLeave={release}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          boxShadow: shadow,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[4/3] h-full max-h-[820px] w-full max-w-[1100px] cursor-grab rounded-[2.25rem] bg-zinc-900 p-[10px] ring-1 ring-white/10 active:cursor-grabbing sm:rounded-[2.75rem] sm:p-[14px]"
      >
        {/* Power button on the top edge */}
        <button
          type="button"
          onClick={onPower}
          aria-label="Power"
          className="absolute -top-[7px] right-24 h-[7px] w-16 cursor-pointer rounded-t-md bg-zinc-700 transition-colors duration-200 hover:bg-zinc-600 sm:-top-[9px] sm:h-[9px] sm:w-20"
        />
        {/* Volume buttons, decorative */}
        <span className="absolute top-16 -right-[7px] h-12 w-[7px] rounded-r-md bg-zinc-800 sm:-right-[9px] sm:w-[9px]" />
        <span className="absolute top-32 -right-[7px] h-12 w-[7px] rounded-r-md bg-zinc-800 sm:-right-[9px] sm:w-[9px]" />

        <div
          data-screen
          className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]"
        >
          <div className="pointer-events-none absolute top-2.5 left-1/2 z-50 h-6 w-24 -translate-x-1/2 rounded-full bg-black sm:top-3 sm:h-7 sm:w-28" />
          {children}
          <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-50 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40 sm:bottom-2 sm:w-32" />
        </div>
      </motion.div>
    </div>
  );
}
