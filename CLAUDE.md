# CLAUDE.md — FloodLens build instructions (2-HOUR SPRINT)

You are Claude Code, helping build **FloodLens** — a web tool for the 2026 NASA Space Apps Challenge, challenge "Dancing with the SARs". Team name: **Despeckle**. Local event: Islamabad.

**You have 2 hours. Hard deadline: Sun Nov 15 2026, 11:59 PM PKT.** Every decision is ship-first. No polish until the site is live and submittable.

---

## What we are building

FloodLens is a single-page web app that shows how SAR (synthetic aperture radar) satellites map flood disasters *through clouds and darkness*, when optical satellites can't see a thing.

Ships with **one deep case study**: the **2022 Pakistan floods**, where monsoon cloud cover blinded every optical satellite but Sentinel-1 SAR mapped around 75,000 km² of flooding in near-real-time.

Tagline: *through clouds · through night*

Scope cut for v1: Thwaites Glacier case study is out — it shows up as "what's next" on the final slide.

---

## Hard rules

- Must use at least one NASA data source (list them on submission)
- Site must be publicly accessible, no login/password/signup
- No NASA logos, flags, or mission identifiers in UI
- SI declaration goes in SUBMISSION.md — handle at submit time
- All UI text in English

---

## Tech stack

- **Framework**: Next.js 14 (app router) + TypeScript + Tailwind
- **Map**: Leaflet via `react-leaflet` (no API key)
- **Swipe compare**: `react-compare-image`
- **Deploy**: Vercel (push to GitHub, connect in Vercel web UI — one click)
- **Node**: 20+
- **Package manager**: pnpm

```bash
pnpm add react-leaflet leaflet react-compare-image framer-motion lenis
pnpm add -D @types/leaflet
```

**READ THEME.md BEFORE WRITING ANY UI CODE.** It defines fonts (Fraunces + Space Grotesk + JetBrains Mono via next/font), color palette (semantic CSS vars, not Tailwind defaults), layout rhythm, component patterns, and interaction specs. Every section's polish checklist is in THEME.md. Skipping it = the site looks AI-generated = loses the Presentation score. Non-negotiable.

### Project structure (minimal)

```
floodlens/
├── app/
│   ├── layout.tsx       # dark theme, Georgia serif + Inter
│   ├── page.tsx         # SINGLE PAGE — everything lives here
│   └── globals.css      # tailwind + a few custom vars
├── components/
│   ├── Hero.tsx         # title + tagline + scroll indicator
│   ├── CaseMap.tsx      # leaflet map with one pin (pakistan)
│   ├── SwipeView.tsx    # before/after SAR imagery
│   └── StatsPanel.tsx   # 4 big stat tiles
├── public/
│   └── data/pakistan-floods/
│       ├── before.png
│       ├── after.png
│       └── optical-context.png
├── README.md
├── CLAUDE.md
└── SUBMISSION.md
```

**It is one page.** No routing beyond `/`. No about page. No multi-case nav. One page, one story, done.

---

## Build order (2 hours, every minute counted)

### Phase 0 — Setup + empty deploy (0:00 → 0:15) — 15 min

```bash
pnpm create next-app@latest floodlens --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd floodlens
pnpm add react-leaflet leaflet react-compare-image framer-motion lenis
pnpm add -D @types/leaflet
git init && git add . && git commit -m "scaffold"
```

**Then, before touching `app/page.tsx`:** set up fonts in `app/layout.tsx` per THEME.md (Fraunces + Space Grotesk + JetBrains Mono via `next/font/google`). Set up the CSS variables and noise overlay in `globals.css` per THEME.md. 10 min of setup now saves hours of "why does this look generic" later.

Create a GitHub repo "floodlens", push.
Go to vercel.com, import the GitHub repo, deploy with defaults.
**You now have a public URL.** Note it. This is your submission fallback even if everything else breaks.

### Phase 1 — Data download (0:15 → 0:35) — 20 min

Download these three images into `public/data/pakistan-floods/`:

1. **before.png** — a Sentinel-1 or MODIS scene of Sindh province, Pakistan, pre-monsoon (early June 2022).
   Source: https://earthobservatory.nasa.gov/images/150370 (or similar pre-flood Earth Observatory image). Right-click → save-as.

2. **after.png** — the same region during peak flooding (late August / September 2022). Use the Sentinel-1 flood extent map from NASA Disasters.
   Source: https://disasters.nasa.gov/pakistan-flooding-2022 — scroll to the imagery gallery, download a Sentinel-1 flood extent PNG.

3. **optical-context.png** — a true-color MODIS or Landsat image showing the flooded area for context.
   Source: https://earthobservatory.nasa.gov/images/150395

**Critical**: before.png and after.png must be the SAME dimensions or the swipe compare looks broken. Crop them to match if needed (any image editor).

If you can't find a good matched pair fast, this is a reasonable shortcut: use the ARIA JPL flood proxy map (https://aria-share.jpl.nasa.gov/) which gives you before/after Sentinel-1 scenes pre-aligned.

### Phase 2 — Build the page (0:35 → 1:25) — 50 min

Build `app/page.tsx` as a single scrollable page with these sections top to bottom:

#### Section 1 — Hero (full viewport height)
- Dark purple → magenta gradient background
- Centered: "FloodLens" in large serif (Georgia/Playfair, ~5rem)
- Below: tagline *"through clouds · through night"* in italic, cream-white, letter-spaced
- Below that: 1-sentence sub-headline: "A radar's-eye view of the floods cameras couldn't see."
- Scroll indicator (chevron down + "see what SAR saw" text)

#### Section 2 — The Story (narrative block)
Background: deep navy. 2-column layout on desktop, stacked on mobile.
- Left: a big quote block: "In summer 2022, a third of Pakistan went underwater. Monsoon clouds blocked every optical satellite. SAR was the only thing that could see."
- Right: 4 stat tiles (StatsPanel.tsx)
  - 33M people displaced
  - 1,739 deaths
  - ~75,000 km² flooded at peak
  - $40B economic damage

#### Section 3 — The Imagery (the swipe)
Full-width section, deep purple background.
- Headline: "What optical satellites saw. What SAR saw."
- Below: a left/right swipe compare showing optical (cloud-covered, mostly white/grey) vs SAR (clear flood map)
- Caption under: "Sentinel-1 C-band SAR, Sindh Province, August 2022. Dark pixels = flooded land."

#### Section 4 — The Map
Full-width.
- Headline: "Where this happened."
- Leaflet map with CartoDB Dark Matter tiles
- Single pin at ~27.5°N, 68.5°E
- Click pin → popup with the case title + "scroll up to explore"
- Map height ~60vh

#### Section 5 — How SAR works (explainer)
Dark background, 3-column grid on desktop (icon + title + 2 lines each):
- "Microwave pulses" — SAR sends radio pulses to the ground and listens for echoes
- "Cuts through clouds" — Clouds don't block microwaves. Day or night. Rain or shine.
- "Water reads dark" — Smooth water reflects radar away from the satellite. Flooded ground that used to be rough looks black.

#### Section 6 — What's next
- Headline: "From one flood to every flood — and beyond."
- 3 small bullets:
  - Add every major flood event into a growing archive
  - Extend to Thwaites Glacier retreat — SAR's other irreplaceable role, through Antarctic polar night
  - Open onboarding so regional agencies can plug in their own areas of interest

#### Section 7 — Footer
- Team: Despeckle
- Challenge: Dancing with the SARs · 2026 NASA Space Apps
- Data: list the NASA sources used (NASA Disasters Program, Sentinel-1 via ASF, NASA Earth Observatory)
- GitHub link

### Phase 3 — Deploy final (1:25 → 1:35) — 10 min

```bash
git add -A
git commit -m "ship v1"
git push
```

Vercel auto-deploys. Test the URL in an incognito window. If anything is broken, fix the ONE thing that's most visibly wrong and re-push.

### Phase 4 — Deck (1:35 → 1:55) — 20 min

Open Google Slides, use a dark template, build 7 slides from the outline in SUBMISSION.md. Each slide: one headline (≤8 words) + one visual + one caption. Do NOT write paragraphs. Screenshots from your deployed site for slides 4, 5.

Share → anyone with link → viewer → copy link.

### Phase 5 — Submit (1:55 → 2:00) — 5 min

Go to your Space Apps team Project tab. Paste the fields from SUBMISSION.md. Fill in:
- Vercel URL as Final Project link
- Google Slides URL as Demo link
- GitHub URL in the Detailed Description

Check both agreement boxes. **Hit Submit for Judging.**

---

## Design cheatsheet

- Background gradient: `from-[#2d1b5e] via-[#8b1e7a] to-[#e94584]`
- Accent cyan: `#00ffcc`
- Accent pink: `#ff006e`
- Accent amber: `#ffd166`
- Cream text: `#fff8e7`
- Deep navy (secondary bg): `#1a1038`
- Title font: `Georgia, serif` (Tailwind: `font-serif`)
- Body font: default Inter

Tailwind example classes for the hero:
```jsx
<section className="min-h-screen bg-gradient-to-br from-[#2d1b5e] via-[#8b1e7a] to-[#e94584] flex flex-col items-center justify-center text-[#fff8e7] px-6">
  <h1 className="font-serif text-7xl md:text-8xl font-bold tracking-tight">FloodLens</h1>
  <p className="italic text-xl md:text-2xl mt-6 tracking-[0.2em] opacity-90">through clouds · through night</p>
  <p className="mt-10 text-lg opacity-70 max-w-xl text-center">A radar's-eye view of the floods cameras couldn't see.</p>
</section>
```

---

## Shortcuts and bailouts

- **If Leaflet is being painful**: skip the map entirely, replace with a static image of the region with a pulsing CSS dot. Nobody will care.
- **If react-compare-image won't install**: use two side-by-side images with labels "BEFORE (optical)" and "AFTER (SAR)". Not as cool but works.
- **If you can't find the right SAR image**: use any NASA Earth Observatory image of the flood and label it clearly. Judges won't scrutinize the exact scene provenance in 2 hours.
- **If Vercel deploy fails**: use GitHub Pages or Netlify Drop (drag-and-drop a folder). Any public URL counts.
- **If you run over at 1:55**: stop whatever you're doing. Submit what you have. You can keep editing until 11:59 PM PKT — only the last saved submission is judged.

**The single most important thing: a deployed site + a submitted form before midnight.** Everything else is optional.
