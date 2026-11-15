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
FloodLens is a web app that shows how synthetic aperture radar (SAR) satellites map flood disasters through clouds and darkness — when every optical satellite is blind. Using NASA SAR data from the NISAR mission and Sentinel-1, it turns radar observations into a visual story anyone can read.

The flagship case is the 2022 Pakistan floods — the deadliest flood event of the past decade, where monsoon cloud cover blocked every passive sensor but Sentinel-1 SAR mapped around 75,000 km² of inundation in near-real-time. FloodLens shows what SAR saw when nothing else could, side-by-side with the optical view, and explains why radar remote sensing matters most when the stakes are highest.
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
FloodLens is a single-page web application that lets anyone see what SAR (synthetic aperture radar) satellites captured during the 2022 Pakistan floods — the deadliest flood event of the past decade, where 33 million people were displaced and 1,700+ died under monsoon cloud cover that blinded every optical satellite. Visitors scroll through the story, compare optical vs SAR imagery with a swipe view, see where the event occurred on an interactive map, and read a short explainer on how SAR works.

How does it work?
SAR satellites send out microwave pulses and record what reflects back. Because microwaves penetrate clouds and don't depend on sunlight, SAR works day or night, clear or stormy — the only reliable way to monitor disasters as they unfold. For the Pakistan floods case, we used publicly released Sentinel-1 flood extent products from NASA's Disasters Program and NASA Earth Observatory imagery. Flooded water appears dark in SAR imagery because smooth water surfaces reflect microwaves away from the satellite. We display the before/after comparison with an interactive swipe control so users can see exactly what changed during the event.

What benefits does it have?
- Emergency responders see flood extent during the exact hours cloud cover would hide it
- Journalists, educators, and the public understand why SAR matters, with a case that makes the stakes concrete
- Open-source, so any region can be added as another case study
- Framed for a non-specialist audience — no GIS knowledge required

What do you hope to achieve?
To make radar data as legible as a weather map. If someone opens FloodLens and understands why SAR matters within 30 seconds, we have succeeded. Longer term: an archive of every major flood event, Thwaites Glacier retreat (SAR's other irreplaceable role, through Antarctic polar night), live NISAR integration as the mission's data archive grows, alert thresholds for disaster responders, and regional partner onboarding.

What tools, coding languages, hardware, or software did you use?
- Frontend: Next.js 14, TypeScript, Tailwind CSS, React Leaflet, react-compare-image
- Deployment: Vercel
- Mapping: Leaflet.js with CartoDB Dark Matter tiles
- Data sources: NASA Disasters Program (Pakistan 2022 flooding), NASA Earth Observatory, Sentinel-1 via Alaska Satellite Facility (ASF), ARIA JPL Flood Proxy Maps, NASA Worldview
- AI assistance: Claude Code (Anthropic) — see SI declaration below

GitHub: [FILL IN GitHub repo URL]
```

---

## Use of Super Intelligence (SI)

```
Yes. We used Claude Code (Anthropic) for code scaffolding, documentation drafting, and copy editing throughout the build. All case study selection, scientific framing, narrative writing, and design decisions were made by the team. SI-assisted code contributions are noted in Git commit messages. No SI-generated images appear in the final UI — the team badge was produced manually, and all map and radar imagery comes from NASA and ESA archives.
```

---

## NASA Data

```
- NISAR (NASA-ISRO Synthetic Aperture Radar) mission — referenced for scientific framing of the tool and planned future integration as its data archive grows
- Sentinel-1 SAR scenes accessed via NASA's Alaska Satellite Facility (ASF Vertex), the SAR data archive for NASA's Earth Science Data and Information System
- NASA Disasters Program — Pakistan 2022 Flooding event page and Sentinel-1 flood extent products
- ARIA JPL (Jet Propulsion Laboratory) Flood Proxy Maps — Pakistan 2022
- NASA Earth Observatory imagery of the 2022 Pakistan floods
- NASA Worldview for baseline optical context imagery
- NASA ARSET SAR training materials — reference for interpretation approach
```

---

## Space Agency Partner Data and Other References

```
Space agency partner data used:
- ESA Sentinel-1 mission (scenes accessed through NASA's ASF archive) — primary SAR imagery

Other references:
- OpenStreetMap / CartoDB — base map tiles
- React Leaflet, react-compare-image, Next.js — open-source frontend libraries
- UNOSAT (UNITAR) flood extent products — referenced for Pakistan 2022 cross-validation
- Published literature on SAR flood mapping — cited in the How SAR Works section of the deployed app
```

---

## 7-Slide Deck Outline

Dark template in Google Slides. Max 15 words per slide. Screenshots from the deployed FloodLens site for slides 4, 5, 6.

### Slide 1 — Title
- **FloodLens**
- *through clouds · through night*
- Team Despeckle
- 2026 NASA Space Apps Challenge · Dancing with the SARs · Islamabad

### Slide 2 — The problem
- Headline: "When floods strike, optical satellites go blind."
- Visual: a MODIS optical image fully covered by monsoon cloud over Pakistan, August 2022
- Caption: "33 million people needed to be found under those clouds."

### Slide 3 — Why SAR
- Headline: "Radar sees through clouds and darkness."
- Visual: simple diagram — arrows of SAR pulses punching through a cloud layer to a flooded field
- Caption: "Microwave pulses reflect off the ground regardless of weather or daylight."

### Slide 4 — What we built
- Headline: "FloodLens — a radar's-eye view of a disaster."
- Visual: full-page screenshot of the deployed FloodLens hero section
- Caption: "A one-scroll story of what SAR saw when nothing else could."

### Slide 5 — The imagery
- Headline: "What optical saw. What SAR saw."
- Visual: the before/after swipe screenshot from the site, side-by-side
- Caption: "Sentinel-1 SAR mapped ~75,000 km² of flood in near-real-time."

### Slide 6 — Why it matters
- Headline: "33M displaced. $40B damage. 1,739 dead."
- Visual: screenshot of the stats panel from the site
- Caption: "The deadliest flood of the past decade — monitored because SAR could."

### Slide 7 — What's next
- Headline: "From one flood to every flood — and beyond."
- Three bullets:
  - A growing archive of every major flood event
  - Thwaites Glacier retreat (SAR's other irreplaceable role, through Antarctic polar night)
  - Live NISAR integration as the mission archive grows

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
