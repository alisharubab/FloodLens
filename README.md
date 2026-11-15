# FloodLens

> *through clouds · through night*

A radar's-eye view of the floods cameras couldn't see.

FloodLens is a web app that shows how NASA SAR (synthetic aperture radar) data mapped the 2022 Pakistan floods through monsoon cloud cover — when every optical satellite was blind. Built for the **2026 NASA Space Apps Challenge**, challenge *Dancing with the SARs*.

Team **Despeckle** · Islamabad Local Event

## What it does

Scroll through a single story of the deadliest flood of the past decade — 33 million people displaced, 1,700+ dead — and see what synthetic aperture radar captured when optical satellites couldn't see through the monsoon:

- Before/after SAR imagery with a swipe comparison
- Interactive map of the flood extent in Sindh province
- Plain-English explainer of how SAR works and why it matters
- Stats panel with the human and economic cost of the event

## Why it matters

When disasters strike in cloudy or dark conditions, optical satellites fail. SAR is the only reliable way to monitor what's happening on the ground. FloodLens makes radar data legible to anyone — scientists, emergency responders, educators, the public — using the 2022 Pakistan floods as the flagship example.

Future scope: more flood events in a growing archive, Thwaites Glacier retreat (SAR's other irreplaceable role), live NISAR integration.

## Tech

- Next.js 14 + TypeScript + Tailwind CSS
- React Leaflet for mapping
- Pre-processed SAR imagery from NASA's public archives
- Deployed on Vercel

## Data

All imagery is NASA-sourced or NASA-archived (ESA Sentinel-1 via Alaska Satellite Facility). See SUBMISSION.md for the full source list.

## Running locally

```bash
pnpm install
pnpm dev
```

Opens at http://localhost:3000.

## Team

Ely — data science, ML, full-stack
[Teammate name] — [role]

## License

MIT
