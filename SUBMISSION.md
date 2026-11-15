# SUBMISSION.md — NASA Space Apps submission page copy

Paste directly into the Project tab of your Space Apps team page. Replace `[FILL IN]` placeholders before submitting.

Team: **Despeckle** · Project: **FloodLens** · Challenge: **Dancing with the SARs** · Local event: **Islamabad**

---

## Project Name

```
FloodLens
```

---

## High-Level Project Summary

```
The problem: satellite radar (SAR) can map floodwater across whole provinces, but a raw radar image is grey speckle that only specialists can read, so the people who need the answer rarely get to see it.

FloodLens is a web app that makes radar flood data readable by anyone. For one real event, the 2022 Pakistan floods, it puts Sentinel-1 radar and Landsat optical imagery of the same ground into a single frame, with plain-language guides and a how-it-works diagram.

What we found: measured over one 22,000 km² scene of Sindh, radar and optical independently agree. Radar alone maps about 9,300 km² of water; Landsat maps about 9,400 km², within 2% of each other, and the two classify the same ground identically on 76% of pixels (51% would be chance).
```

---

## Link to Project Demo

```
[FILL IN Google Slides link — must be "anyone with link"]
```

---

## Link to Final Project

```
[FILL IN Vercel URL]
```

Also add your GitHub repo URL inside the Detailed Description below.

---

## Detailed Project Description

```
What exactly does it do?
FloodLens is a single-page web application that makes radar flood data legible to non-specialists. The problem: SAR satellites can map floodwater at scale, but raw radar imagery looks like noise to most people. Our solution: for the 2022 Pakistan floods (33 million people affected, 1,700+ deaths), we place real Sentinel-1 radar and Landsat optical imagery of the same ground in one aligned frame. Visitors read a three-part brief (problem, question, finding), drag a swipe control to compare the two views, switch the optical layer between before and during the flood, see the results, find the location on an interactive map, and learn how radar reads water from an animated diagram.

What did we set out to find, and what did we find?
We asked: can a radar flood map be read at a glance, and does it hold up against what the eye can see? Over one 188 × 118 km window of Sindh (22,124 km²), radar and optical agree. Radar alone maps about 9,300 km² of water and Landsat about 9,400 km² (within 2%). The two maps classify the same ground identically on 76% of pixels, against 51% expected by chance. Landsat shows water coverage more than doubling between 4 and 28 August (at least 2.4x under every setting we tried). These are simple threshold classifiers shown for illustration, not an operational flood product, and the page states the method and the sensitivity of each number.

How does it work?
SAR satellites send microwave pulses and record what reflects back. Smooth water reflects the pulse away from the satellite, so flooded ground appears dark. We used NASA Earth Observatory Landsat 8 and 9 imagery (4 and 28 August 2022) and a Sentinel-1A radar scene from 30 August 2022 (terrain-corrected, VV polarization, accessed through Microsoft Planetary Computer). The Landsat images are tilted about 12 degrees relative to north, so we solved the rotation and offset by correlating water masks and checked the overlay by eye, then resampled the radar scene into the Landsat frame at about 130 m. Radar water is backscatter below -13 dB (a threshold chosen from the data with Otsu's method, not tuned); optical water is low-SWIR non-vegetation pixels in the false-colour composite.

What benefits does it have?
- Makes radar flood data understandable to journalists, educators, students and planners with no GIS background
- Shows, with a measurable case, that radar and optical flood maps agree
- Open source and extensible: another region or event is another case study
- Every figure on the page comes with its method and its uncertainty

What do you hope to achieve?
To make radar flood maps as legible as a weather map. Longer term: an archive of every major flood event, Thwaites Glacier retreat (SAR's other irreplaceable role, through Antarctic polar night), live NISAR integration as the mission's data archive grows, and onboarding for regional agencies to add their own areas of interest.

What tools, coding languages, hardware, or software did you use?
- Frontend: Next.js (App Router), TypeScript, Tailwind CSS, React Leaflet, react-compare-image, Framer Motion, Lenis
- Deployment: Vercel
- Mapping: Leaflet.js with OpenStreetMap tiles (muted with CSS)
- Image processing and analysis: Python (rasterio, NumPy, SciPy, Pillow) to read, register, crop and measure the Sentinel-1 scene against the Landsat frame
- Data sources: NASA Earth Observatory Landsat 8/9 imagery (USGS/NASA), Sentinel-1A RTC radar data (ESA/Copernicus) via Microsoft Planetary Computer
- AI assistance: Claude Code (Anthropic) — see SI declaration below

GitHub: [FILL IN GitHub repo URL]
```

---

## Use of Super Intelligence (SI)

```
Yes. We used Claude Code (Anthropic) for code scaffolding, documentation drafting, and copy editing throughout the build. All case study selection, scientific framing, narrative writing, and design decisions were made by the team. No SI-generated images appear in the final UI — the team badge was produced manually, and all map and radar imagery comes from NASA and ESA archives.
```

---

## NASA Data

```
- NISAR (NASA-ISRO Synthetic Aperture Radar) mission — referenced for scientific framing of the tool and planned future integration as its data archive grows
- NASA Earth Observatory, "Devastating Floods in Pakistan" — Landsat 8 (4 Aug 2022) and Landsat 9 (28 Aug 2022) OLI imagery, credit USGS / NASA Earth Observatory
- NASA ARSET SAR training materials — reference for interpretation approach
```

---

## Space Agency Partner Data and Other References

```
Space agency partner data used:
- ESA Sentinel-1A (Copernicus), scene of 30 Aug 2022, RTC product accessed via Microsoft Planetary Computer — primary SAR imagery

Other references:
- OpenStreetMap contributors — base map tiles
- Microsoft Planetary Computer — Sentinel-1 RTC data access
- React Leaflet, react-compare-image, Next.js — open-source frontend libraries
```

---

## 7-Slide Deck Outline

Light template in Google Slides. Max 15 words per slide. Screenshots from the deployed FloodLens site for slides 2 to 6.

### Slide 1 — Title
- **FloodLens**
- *through clouds · through night*
- Team Despeckle
- 2026 NASA Space Apps Challenge · Dancing with the SARs · Islamabad

### Slide 2 — The problem
- Headline: "Flood radar is powerful, and unreadable."
- Visual: the raw grey Sentinel-1 image, uncaptioned (the 'brief' section also works)
- Caption: "Only specialists can read it, so most people never see it."

### Slide 3 — What we set out to find
- Headline: "Can a radar flood map be read at a glance?"
- Visual: screenshot of the swipe, mid-drag, optical on one side and radar on the other
- Caption: "One real event: the 2022 Pakistan floods, one frame, two sensors."

### Slide 4 — What we built
- Headline: "FloodLens: radar flood data, made readable."
- Visual: screenshot of the hero plus the three-part brief
- Caption: "A one-scroll guide: problem, comparison, results, method."

### Slide 5 — What we found
- Headline: "Radar and optical agree."
- Visual: screenshot of the dark results band (9,300 km², 76%, 2x+, and the three bars)
- Caption: "Two independent sensors, same answer: within 2%, 76% pixel match."

### Slide 6 — How it works
- Headline: "Smooth water reflects radar away, so floods read dark."
- Visual: screenshot of the animated SAR diagram
- Caption: "Pulses, echoes, and why flooded ground goes black."

### Slide 7 — What's next
- Headline: "From one flood to every flood."
- Three bullets:
  - A growing archive of every major flood event
  - Thwaites Glacier retreat (SAR's other irreplaceable role, through Antarctic polar night)
  - Open onboarding so regional agencies add their own areas

---

## Pre-submission checklist

- [ ] Vercel site loads in a private/incognito browser with no login
- [ ] GitHub repo is public
- [ ] Google Slides deck is set to "anyone with link"
- [ ] Deck is 7 slides or fewer
- [ ] All NASA data sources listed in the submission form
- [ ] SI declaration pasted into the SI field
- [ ] "Terms and Conditions" and "Confirm All Work is Original" boxes checked
- [ ] "Submit for Judging" clicked before midnight PKT

---

## If something breaks at submit time

- **No deployed site**: submit the GitHub repo URL as the Final Project link with a note in the description: "Live deployment in progress — repo contains the full build and a one-command run guide in README.md."
- **No slide deck**: record a 30-second phone screen capture of the site, upload to Google Drive, make public, use that link instead.
- **Either way, hit Submit before 11:59 PM PKT.** You can keep editing until the deadline; only the last saved submission is judged.
