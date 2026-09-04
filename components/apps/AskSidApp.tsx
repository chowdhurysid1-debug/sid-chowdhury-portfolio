"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import { Sparkles, Send } from "lucide-react";
import { profile } from "@/data/content";

const suggestions = [
  "What is EP Venture Fund?",
  "Where has Sid interned?",
  "What is Sid studying at USC?",
  "How do I get in touch with Sid?",
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
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-10">
        {messages.length === 0 ? (
          <div className="mx-auto flex max-w-md flex-col items-center pt-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg">
              <Sparkles className="h-7 w-7 text-white" strokeWidth={1.75} />
            </div>
            <h1 className="mt-4 text-xl font-semibold text-white">Ask Sid</h1>
            <p className="mt-1.5 text-sm text-zinc-400">
              Ask about {profile.name.split(" ")[0]}&rsquo;s work, school, or
              background. Answers come straight from his own resume.
            </p>
            <div className="mt-6 flex w-full flex-col gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-left text-sm text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:text-white"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-xl flex-col gap-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "border border-zinc-800 bg-zinc-900 text-zinc-200"
                  }`}
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
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500 [animation-delay:300ms]" />
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
        className="border-t border-white/10 bg-zinc-950/95 px-4 py-3 sm:px-8"
      >
        <div className="mx-auto flex max-w-xl items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Sid's work, school, or background"
            disabled={isBusy}
            className="w-full flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isBusy || !input.trim()}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-indigo-600 text-white transition-all duration-200 hover:bg-indigo-500 active:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
