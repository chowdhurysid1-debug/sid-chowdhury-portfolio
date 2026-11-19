import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sid Chowdhury",
  description:
    "Sid Chowdhury: USC Iovine and Young / Marshall student and co-founder of EP Venture Fund. Product case studies, ventures, and experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-zinc-50">{children}</body>
    </html>
  );
}
