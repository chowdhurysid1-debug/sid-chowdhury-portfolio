# Sid Chowdhury: Personal Portfolio

A personal portfolio site built as an interactive iPad simulator: lock screen, home
screen, dock, and a set of apps covering work, education, organizations, mentors,
photos, and a way to reach out.

## Apps

| App               | What it shows                                                            |
| ----------------- | ------------------------------------------------------------------------ |
| About             | Bio, quick facts, interests, languages                                   |
| Work              | Founding & leadership, internships, academic research                    |
| Education         | USC (Marshall + Iovine and Young Academy) and Eden Prairie High School   |
| Organizations     | EP Venture Fund, Junior Sharks, DECA                                     |
| Photos            | Photography                                                              |
| Mentors           | People who shaped the work above                                         |
| Mail              | Direct ways to get in touch                                              |
| Ask Sid           | An AI assistant that answers questions using only the facts on this site |
| Resume            | Opens the PDF resume                                                     |
| GitHub / LinkedIn | External links, open in a new tab                                        |

## Tech stack

| Layer      | Technology                         |
| ---------- | ---------------------------------- |
| Framework  | Next.js (App Router, Turbopack)    |
| Language   | TypeScript                         |
| UI         | React, Tailwind CSS                |
| Animation  | Framer Motion                      |
| AI         | Vercel AI SDK + Anthropic (Claude) |
| Deployment | Vercel                             |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### The "Ask Sid" assistant

The chat app calls `app/api/chat/route.ts`, which needs an Anthropic API key. Create
a `.env.local` file in the project root with:

```
ANTHROPIC_API_KEY=your-key-here
```

Get a key at [console.anthropic.com](https://console.anthropic.com/). Without it, the
route returns a friendly 503 instead of crashing. The assistant only answers from the
facts in `data/content.ts`, it's instructed never to invent a number, date, or claim
that isn't already on the site.

## Project structure

```
data/
  content.ts              All profile data: bio, work, education, mentors, links

components/
  IPadPage.tsx             Root orchestrator: lock/unlock, open app state
  ipad/
    IPadFrame.tsx           Hardware shell (bezel, Dynamic Island, home indicator)
    HomeScreen.tsx          App grid + dock
    LockScreen.tsx          Swipe-up-to-unlock lock screen
    StatusBar.tsx           Time, wifi, battery
    apps-registry.tsx       App metadata: icon, gradient, internal vs external
    AppIcon.tsx             A single home-screen icon
  apps/
    AppWindow.tsx            Shared wrapper: header, back button, animation
    AboutApp.tsx / WorkApp.tsx / EducationApp.tsx / OrganizationsApp.tsx
    PhotosApp.tsx / MentorsApp.tsx / ContactApp.tsx / AskSidApp.tsx

app/
  page.tsx                 Renders <IPadPage />
  layout.tsx                Fonts, metadata
  api/chat/route.ts         AI assistant backend
```

## Updating content

Everything about Sid lives in [data/content.ts](data/content.ts). Edit that file to
change any bio, work history, education detail, or link, the UI reads from it
directly.

To add more photos, drop files in `public/images/` and add them to the `photos` array
in `components/apps/PhotosApp.tsx`.

## Deployment

Deployed on Vercel. Push to `main` and Vercel builds automatically. Set
`ANTHROPIC_API_KEY` in the Vercel project's environment variables for the Ask Sid app
to work in production.

---

Built by Sid Chowdhury
