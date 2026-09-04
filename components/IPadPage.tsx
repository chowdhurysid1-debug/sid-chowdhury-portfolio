"use client";

import { useState, type ComponentType } from "react";
import { AnimatePresence } from "framer-motion";
import { IPadFrame } from "@/components/ipad/IPadFrame";
import { LockScreen } from "@/components/ipad/LockScreen";
import { HomeScreen } from "@/components/ipad/HomeScreen";
import { AppWindow } from "@/components/apps/AppWindow";
import type { AppDefinition } from "@/components/ipad/apps-registry";
import { AboutApp } from "@/components/apps/AboutApp";
import { WorkApp } from "@/components/apps/WorkApp";
import { EducationApp } from "@/components/apps/EducationApp";
import { OrganizationsApp } from "@/components/apps/OrganizationsApp";
import { PhotosApp } from "@/components/apps/PhotosApp";
import { MentorsApp } from "@/components/apps/MentorsApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { AskSidApp } from "@/components/apps/AskSidApp";

const appComponents: Record<string, ComponentType> = {
  about: AboutApp,
  work: WorkApp,
  education: EducationApp,
  organizations: OrganizationsApp,
  photos: PhotosApp,
  mentors: MentorsApp,
  mail: ContactApp,
  asksid: AskSidApp,
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
