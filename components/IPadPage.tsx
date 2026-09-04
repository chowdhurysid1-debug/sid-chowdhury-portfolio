"use client";

import { useState, useEffect, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IPadFrame } from "@/components/ipad/IPadFrame";
import { BootScreen } from "@/components/ipad/BootScreen";
import {
  ControlCenter,
  wallpapers,
} from "@/components/ipad/ControlCenter";
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
  const [booting, setBooting] = useState(true);
  const [screenOn, setScreenOn] = useState(true);
  const [controlCenter, setControlCenter] = useState(false);
  const [brightness, setBrightness] = useState(1);
  const [wallpaperId, setWallpaperId] = useState("abstract");

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  // Pressing power sleeps the device. Waking it returns to the lock screen,
  // and closes whatever app was open, the way a real one does.
  function togglePower() {
    setScreenOn((on) => {
      if (on) {
        setActiveApp(null);
        setLocked(true);
      }
      return !on;
    });
  }

  const ActiveComponent = activeApp ? appComponents[activeApp.id] : null;
  const activeWallpaper =
    wallpapers.find((w) => w.id === wallpaperId) ?? wallpapers[0];

  return (
    <div className="h-dvh w-dvw">
      <IPadFrame onPower={togglePower}>
        {/* Swipe-down corner, the way Control Center opens on a real iPad */}
        {!booting && screenOn && (
          <button
            type="button"
            onClick={() => setControlCenter(true)}
            aria-label="Open Control Center"
            className="absolute top-0 right-0 z-[55] h-10 w-24 cursor-pointer"
          />
        )}

        {/* Brightness dims everything below Control Center */}
        {brightness < 1 && (
          <div
            className="pointer-events-none absolute inset-0 z-[58] bg-black"
            style={{ opacity: 1 - brightness }}
          />
        )}

        <AnimatePresence>
          {controlCenter && (
            <ControlCenter
              key="cc"
              brightness={brightness}
              onBrightness={setBrightness}
              wallpaper={wallpaperId}
              onWallpaper={setWallpaperId}
              onClose={() => setControlCenter(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {booting && <BootScreen key="boot" />}
        </AnimatePresence>

        <AnimatePresence>
          {!screenOn && (
            <motion.button
              key="asleep"
              type="button"
              onClick={togglePower}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              aria-label="Wake"
              className="absolute inset-0 z-40 cursor-pointer bg-black"
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {locked ? (
            <LockScreen
              key="lock"
              onUnlock={() => setLocked(false)}
              wallpaper={activeWallpaper.css}
            />
          ) : (
            <HomeScreen
              key="home"
              onOpenApp={setActiveApp}
              wallpaper={activeWallpaper.css}
            />
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
