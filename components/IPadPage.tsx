"use client";

import { useState, type ComponentType } from "react";
import { AnimatePresence } from "framer-motion";
import { IPadFrame } from "@/components/ipad/IPadFrame";
import { LockScreen } from "@/components/ipad/LockScreen";
import { HomeScreen } from "@/components/ipad/HomeScreen";
import { AppWindow } from "@/components/apps/AppWindow";
import type { AppDefinition } from "@/components/ipad/apps-registry";
import { AboutApp } from "@/components/apps/AboutApp";
import { PhotosApp } from "@/components/apps/PhotosApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { AskSidApp } from "@/components/apps/AskSidApp";
import { CinemaApp } from "@/components/apps/CinemaApp";
import { ListeningApp } from "@/components/apps/ListeningApp";
import { GarageApp } from "@/components/apps/GarageApp";
import { WeatherApp } from "@/components/apps/WeatherApp";
import { FindMyApp } from "@/components/apps/FindMyApp";

const appComponents: Record<string, ComponentType> = {
  about: AboutApp,
  photos: PhotosApp,
  mail: ContactApp,
  asksid: AskSidApp,
  cinema: CinemaApp,
  listening: ListeningApp,
  garage: GarageApp,
  weather: WeatherApp,
  findmy: FindMyApp,
};

export function IPadPage() {
  const [locked, setLocked] = useState(true);
  const [activeApp, setActiveApp] = useState<AppDefinition | null>(null);

  const ActiveComponent = activeApp ? appComponents[activeApp.id] : null;

  return (
    <div className="h-dvh w-dvw">
      <IPadFrame>
        <AnimatePresence mode="wait">
          {locked ? (
            <LockScreen key="lock" onUnlock={() => setLocked(false)} />
          ) : (
            <HomeScreen key="home" onOpenApp={setActiveApp} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!locked && activeApp && ActiveComponent && (
            <AppWindow
              key={activeApp.id}
              app={activeApp}
              onClose={() => setActiveApp(null)}
            >
              <ActiveComponent />
            </AppWindow>
          )}
        </AnimatePresence>
      </IPadFrame>
    </div>
  );
}
