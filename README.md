# FloodLens

> *through clouds · through night*

Radar flood data, made readable by anyone.

**The problem.** Satellite radar (SAR) can map floodwater across whole provinces, but a raw radar image is grey speckle that only specialists can read, so the people who need the answer rarely get to see it.

**What FloodLens does.** For one real event, the 2022 Pakistan floods, it puts Sentinel-1 radar and Landsat optical imagery of the same ground into a single frame, with plain-language guides. Built for the **2026 NASA Space Apps Challenge**, challenge *Dancing with the SARs*.

Team **Despeckle** · Islamabad Local Event

## What we found

Over one 22,000 km² scene of Sindh, radar and optical independently agree:

- Radar alone maps about **9,300 km²** of water; Landsat maps about **9,400 km²**, within 2%
- The two maps classify the same ground identically on **76%** of pixels (51% would be chance)
- Landsat water coverage **more than doubled** between 4 and 28 August 2022

These are simple threshold classifiers shown for illustration, not an operational flood product. The site states each method and how much the numbers move with the thresholds.

## What's on the page

- A three-part brief: the problem, what we set out to find, what we found
- A swipe comparison of Landsat (before / during the flood) and Sentinel-1 radar, aligned to one frame
- The results, with method and uncertainty
- An interactive map of the location and an animated diagram of how radar reads water

Future scope: more flood events in a growing archive, Thwaites Glacier retreat (SAR's other irreplaceable role), live NISAR integration.

## Tech

- Next.js (App Router) + TypeScript + Tailwind CSS
- React Leaflet for mapping
- Python (rasterio, NumPy) to read, register and measure the Sentinel-1 scene against the Landsat frame
- Deployed on Vercel

## Data

Imagery: NASA Earth Observatory Landsat 8/9 (USGS) and ESA Sentinel-1A (via Microsoft Planetary Computer). See SUBMISSION.md for the full source list.

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
