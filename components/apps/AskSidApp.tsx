"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";

const suggestions = [
  "What is EP Venture Fund?",
  "Where has he interned?",
  "What is he listening to?",
  "What does he do for fun?",
  "What are his goals?",
  "How do I contact him?",
];

export function AskSidApp() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex items-center gap-2.5 border-b border-zinc-900 px-5 py-2.5">
        <div className="relative h-7 w-7 overflow-hidden rounded-full">
          <Image
            src={profile.headshot}
            alt=""
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
        <span className="text-[15px] font-medium text-white">Ask Sid</span>
        <span className="rounded-md border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 text-[11px] font-medium text-zinc-400">
          Sonnet
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        {messages.length === 0 ? (
          <div className="mx-auto flex max-w-lg flex-col items-center pt-8 text-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10">
              <Image
                src={profile.headshot}
                alt={profile.name}
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-4 text-xl font-semibold text-white">
              What do you want to know about Sid?
            </h1>
            <p className="mt-1.5 text-sm text-zinc-400">
              Ask about his ventures, school, taste, or what he does for fun.
              Answers come from his own words.
            </p>

            <div className="mt-7 grid w-full gap-2 sm:grid-cols-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-left text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-2xl flex-col gap-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "gap-3"}`}
              >
                {message.role !== "user" && (
                  <div className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={profile.headshot}
                      alt=""
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div
                  className={
                    message.role === "user"
                      ? "max-w-[80%] rounded-2xl bg-zinc-800 px-4 py-2.5 text-sm leading-relaxed text-white"
                      : "max-w-[85%] text-sm leading-relaxed text-zinc-200"
                  }
                >
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <span key={i} className="whitespace-pre-wrap">
                        {part.text}
                      </span>
                    ) : null,
                  )}
                </div>
              </div>
            ))}
            {status === "submitted" && (
              <div className="flex gap-3">
                <div className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={profile.headshot}
                    alt=""
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-1 pt-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-600" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-600 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-600 [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="px-4 pb-4 sm:px-6"
      >
        <div className="mx-auto flex max-w-2xl items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Ask Sid..."
            disabled={isBusy}
            className="w-full flex-1 bg-transparent py-1.5 text-sm text-white placeholder-zinc-500 outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isBusy || !input.trim()}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-all duration-200 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </form>
    </div>
  );
}
