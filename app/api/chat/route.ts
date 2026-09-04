import { anthropic } from "@ai-sdk/anthropic";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { z } from "zod";
import {
  aboutSections,
  academicProjects,
  education,
  experience,
  founding,
  profile,
  skills,
} from "@/data/content";

export const maxDuration = 30;

const requestSchema = z.object({
  messages: z.array(z.unknown()).max(50),
});

function buildSystemPrompt() {
  const facts = {
    profile,
    about: aboutSections,
    founding,
    experience,
    academicProjects,
    education,
    skills,
  };

  return [
    `You are "Ask Sid," an assistant embedded on ${profile.name}'s personal portfolio site.`,
    "Answer questions about Sid using only the facts in the JSON block below. Never invent a number, date, title, or outcome that isn't in it.",
    "If someone asks something the facts don't cover, say you don't have that on hand and point them to the Mail app or " +
      profile.email +
      " to ask Sid directly.",
    "Keep answers short, direct, and specific. No filler, no hedging.",
    "Plain text only: no markdown (no **bold**, no bullet characters, no headers), and never use an em dash, use a period or comma instead.",
    "Speak about Sid in the third person, you are his assistant, not Sid himself.",
    "FACTS:",
    JSON.stringify(facts),
  ].join("\n\n");
}

export async function POST(req: Request) {
  const body: unknown = await req.json();
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Malformed chat request." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "Ask Sid isn't configured yet. Set ANTHROPIC_API_KEY in the environment.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  const messages = parsed.data.messages as UIMessage[];

  const result = streamText({
    model: anthropic("claude-sonnet-5"),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
