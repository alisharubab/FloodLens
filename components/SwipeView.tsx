"use client";

import ReactCompareImage from "react-compare-image";

const OPTICAL = "/data/pakistan-floods/optical-context.png";
const SAR = "/data/pakistan-floods/after.png";

export function SwipeView() {
  return (
    <figure>
      <div className="sar-frame-y relative mx-auto max-w-[var(--max-w)]">
        <ReactCompareImage
          leftImage={OPTICAL}
          leftImageAlt="Optical satellite view of the flooded region, obscured by monsoon cloud"
          rightImage={SAR}
          rightImageAlt="Sentinel-1 SAR flood extent map where dark pixels show flooded land"
          sliderLineColor="var(--flood)"
          sliderLineWidth={2}
          sliderPositionPercentage={0.5}
          skeleton={<div className="h-full w-full bg-ink-soft" />}
          handle={
            <div
              className="mono flex h-14 w-14 items-center justify-center rounded-full border border-flood bg-ink text-sm whitespace-nowrap text-flood"
              aria-hidden
            >
              ← →
            </div>
          }
        />
        {/* Static corner labels; pointer-events off so dragging is never blocked */}
        <span className="caption pointer-events-none absolute top-4 left-4 bg-ink/80 px-3 py-1.5 text-paper">
          Optical<span className="hidden sm:inline"> · cloud-blocked</span>
        </span>
        <span className="caption pointer-events-none absolute top-4 right-4 bg-ink/80 px-3 py-1.5 text-flood">
          SAR<span className="hidden sm:inline"> · flood extent</span>
        </span>
      </div>
      <figcaption className="wrap mt-6">
        <p className="caption text-paper-dim">
          Sentinel-1 · C-band · Sindh Province · August 2022 · Dark = flooded land
        </p>
      </figcaption>
    </figure>
  );
}
