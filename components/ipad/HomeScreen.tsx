"use client";

import { gridApps, dockApps, type AppDefinition } from "./apps-registry";
import { AppIcon } from "./AppIcon";
import { StatusBar } from "./StatusBar";

export function HomeScreen({
  onOpenApp,
}: {
  onOpenApp: (app: AppDefinition) => void;
}) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.28),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.22),_transparent_50%)] bg-zinc-950">
      <StatusBar />

      <div className="flex flex-1 flex-wrap content-center items-center justify-center gap-x-8 gap-y-8 overflow-y-auto px-6 py-6 sm:gap-x-12">
        {gridApps.map((app) => (
          <AppIcon key={app.id} app={app} onOpen={onOpenApp} />
        ))}
      </div>

      <div className="mx-4 mb-4 flex items-center justify-around rounded-3xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl sm:mx-8 sm:mb-6 sm:px-8">
        {dockApps.map((app) => (
          <AppIcon key={app.id} app={app} onOpen={onOpenApp} />
        ))}
      </div>
    </div>
  );
}
