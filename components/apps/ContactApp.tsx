"use client";

import { useState } from "react";
import { Mail, Copy, Check, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/content";

export function ContactApp() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can be unavailable, the mailto link below still works.
    }
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-10 sm:px-10">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
          <Mail className="h-7 w-7" strokeWidth={1.75} />
        </div>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-white">
          Reach out
        </h1>
        <p className="mt-1.5 text-sm text-zinc-400">
          If any of this made you want to talk to me, that&rsquo;s the whole
          point. Email is fastest.
        </p>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:bg-indigo-500 active:bg-indigo-700"
      >
        <Mail className="h-4 w-4" />
        Email {profile.name.split(" ")[0]}
      </a>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-zinc-500" />
            <span className="text-sm text-zinc-200">{profile.email}</span>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
          <Phone className="h-4 w-4 text-zinc-500" />
          <span className="text-sm text-zinc-200">{profile.phone}</span>
        </div>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 transition-all duration-200 hover:border-zinc-700"
        >
          <LinkedinIcon className="h-4 w-4 text-zinc-500" />
          <span className="text-sm text-zinc-200">
            linkedin.com/in/sid-chowdhury0
          </span>
        </a>
      </div>
    </div>
  );
}
