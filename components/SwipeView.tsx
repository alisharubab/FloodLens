"use client";

import { useState } from "react";
import ReactCompareImage from "react-compare-image";

const DIR = "/data/pakistan-floods";
const SAR = `${DIR}/sentinel1-vv.jpg`;

// Both Landsat frames and the SAR image share the same 16:10 window, so the swipe aligns.
const OPTICAL = {
  flood: {
    src: `${DIR}/landsat-after.jpg`,
    chip: "28 Aug · flood",
    label: "Landsat 9 · 28 Aug",
    caption: "Landsat 9 OLI · 28 Aug 2022 · SWIR-NIR-red false colour",
    alt: "Landsat 9 false-colour view of flooded Sindh on 28 August 2022; floodwater is blue, with patches of cloud",
  },
  before: {
    src: `${DIR}/landsat-before.jpg`,
    chip: "4 Aug · before",
    label: "Landsat 8 · 4 Aug",
    caption: "Landsat 8 OLI · 4 Aug 2022 · SWIR-NIR-red false colour",
    alt: "Landsat 8 false-colour view of the same area on 4 August 2022, before the peak flooding",
  },
} as const;

type Key = keyof typeof OPTICAL;

export function SwipeView() {
  const [key, setKey] = useState<Key>("flood");
  const optical = OPTICAL[key];

  return (
    <figure>
      <div className="wrap mb-5 flex flex-wrap items-center gap-3">
        <span className="caption text-fg-ghost">Optical layer</span>
        {(Object.keys(OPTICAL) as Key[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKey(k)}
            aria-pressed={key === k}
            className={`caption cursor-pointer rounded-full border px-4 py-1.5 transition-colors ${
              key === k
                ? "border-fg bg-fg text-canvas"
                : "border-fg-dim text-fg hover:border-fg"
            }`}
          >
            {OPTICAL[k].chip}
          </button>
        ))}
      </div>

      <div className="sar-frame-y relative mx-auto max-w-[var(--max-w)]">
        <ReactCompareImage
          leftImage={optical.src}
          leftImageAlt={optical.alt}
          rightImage={SAR}
          rightImageAlt="Sentinel-1 radar backscatter of the same area on 30 August 2022; dark areas are open water"
          sliderLineColor="var(--flood)"
          sliderLineWidth={2}
          sliderPositionPercentage={0.5}
          skeleton={<div className="h-full w-full bg-canvas-soft" />}
          handle={
            <div
              className="mono flex h-14 w-14 items-center justify-center rounded-full border border-flood bg-canvas text-sm whitespace-nowrap text-flood"
              aria-hidden
            >
              ← →
            </div>
          }
        />
        {/* Static corner labels; pointer-events off so dragging is never blocked */}
        <span className="caption pointer-events-none absolute top-4 left-4 bg-canvas/80 px-3 py-1.5 text-fg">
          <span className="hidden sm:inline">{optical.label}</span>
          <span className="sm:hidden">Optical</span>
        </span>
        <span className="caption pointer-events-none absolute top-4 right-4 bg-canvas/80 px-3 py-1.5 text-flood">
          SAR<span className="hidden sm:inline"> · Sentinel-1A · 30 Aug</span>
        </span>
      </div>

      <figcaption className="wrap mt-6">
        <p className="caption text-fg-dim">
          {optical.caption} · Sentinel-1A · C-band · VV · descending · dark = water
        </p>
        <p className="mt-4 max-w-[75ch] text-sm leading-relaxed text-fg-ghost">
          Sindh Province, Pakistan. Optical and radar scenes were acquired two days apart and
          resampled into one frame. Landsat data courtesy of the U.S. Geological Survey and NASA
          Earth Observatory. Sentinel-1 data: contains modified Copernicus Sentinel data 2022,
          terrain-corrected (RTC) and accessed via Microsoft Planetary Computer, averaged to ~130
          m pixels and stretched in decibels. Permanent water bodies also read dark.
        </p>
      </figcaption>
    </figure>
  );
}
