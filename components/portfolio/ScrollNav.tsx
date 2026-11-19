"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

function useScrollNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollY + window.innerHeight >= docHeight - 200;
      setIsVisible(scrollY > 80 && !nearBottom);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}

export function ScrollNav() {
  const isVisible = useScrollNav();

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md transition-all duration-300 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white transition-colors duration-200 hover:text-indigo-300"
        >
          Sid Chowdhury
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden rounded-lg px-3 py-2 text-sm text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white sm:block"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Chowdhury_Siddharth_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-500 active:bg-indigo-700"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
