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
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-zinc-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/wallpaper.svg)" }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative flex h-full w-full flex-col">
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
    </div>
  );
}
