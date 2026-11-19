import type { Metadata } from "next";
import { IPadPage } from "@/components/IPadPage";

export const metadata: Metadata = {
  title: "Sid Chowdhury, the iPad version",
  description: "The same portfolio, browsed as an interactive iPad.",
};

export default function IPadRoute() {
  return <IPadPage />;
}
