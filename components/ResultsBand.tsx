"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "./StatsPanel";
import { Reveal } from "./Reveal";

// Measured on one shared 188 x 118 km window (22,124 km2) of Sindh.
// See the method note below the bars for how each number was produced.
const BARS = [
  { label: "Landsat · 4 Aug", sub: "before the peak", pct: 8, shown: "≥ 8%", tone: "bg-canvas/40" },
  { label: "Landsat · 28 Aug", sub: "optical", pct: 42, shown: "42%", tone: "bg-flood-lit" },
  { label: "Sentinel-1 · 30 Aug", sub: "radar", pct: 42, shown: "42%", tone: "bg-alert-lit" },
] as const;

function Bar({ pct, tone, delay }: { pct: number; tone: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="bar-track">
      <motion.div
        className={`h-full ${tone}`}
        initial={reduce ? false : { width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
        style={reduce ? { width: `${pct}%` } : undefined}
      />
    </div>
  );
}

export function ResultsBand() {
  return (
    <section id="results" className="section-wide bg-fg text-canvas">
      <div className="wrap">
        <Reveal>
          <p className="meta-lit">04 · What we found</p>
          <h2 className="mt-6 max-w-[12ch]">Radar and optical agree.</h2>
          <p className="t-lede mt-8 max-w-[46ch] text-canvas/75">
            We measured how much of one 22,000 km² scene of Sindh was under water, twice, with two
            independent sensors.
          </p>
        </Reveal>

        <div className="grid-12 mt-24 gap-y-16">
          <div className="col-span-12 lg:col-span-6">
            <div className="rule-lit pt-5">
              <p className="caption text-canvas/70">Water mapped by radar alone</p>
              <p className="result-num result-num-xl mt-6 text-alert-lit">
                <Counter value={9300} prefix="~" />
              </p>
              <p className="brief-head mt-4">km² under water</p>
              <p className="mt-4 max-w-[38ch] text-canvas/70">
                Landsat, mapped independently, measures 9,400 km². The two are within 2% of each
                other.
              </p>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="rule-lit pt-5">
              <p className="caption text-canvas/70">Pixel-by-pixel match</p>
              <p className="result-num mt-6 text-flood-lit">
                <Counter value={76} suffix="%" />
              </p>
              <p className="mt-5 max-w-[26ch] text-canvas/70">
                of the ground classified the same by radar and optical. Chance alone gives 51%.
              </p>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <div className="rule-lit pt-5">
              <p className="caption text-canvas/70">Growth in 24 days</p>
              <p className="result-num mt-6 text-flood-lit">
                <Counter value={2} suffix="×+" />
              </p>
              <p className="mt-5 max-w-[26ch] text-canvas/70">
                more water between 4 and 28 Aug, at least doubling under every setting we tried.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <p className="meta-lit">Share of the scene under water</p>
          <div className="mt-8 grid gap-8">
            {BARS.map((b, i) => (
              <div key={b.label} className="grid items-center gap-3 md:grid-cols-[14rem_1fr_5rem] md:gap-8">
                <p className="caption text-canvas">
                  {b.label}
                  <span className="block text-canvas/55">{b.sub}</span>
                </p>
                <Bar pct={b.pct} tone={b.tone} delay={i * 0.18} />
                <p className="result-num text-right text-[1.75rem]! md:text-[2rem]!">{b.shown}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mono mt-16 max-w-[110ch] text-sm leading-relaxed text-canvas/55">
          Method: one 188 × 118 km window (22,124 km²), same frame for every image. Radar: Sentinel-1A
          VV backscatter, ~130 m, water below −13 dB (a threshold chosen from the data, not tuned).
          Optical: Landsat 8/9 false colour, low-SWIR non-vegetation pixels. Simple threshold
          classifiers, shown for illustration, not an operational flood product. Figures move a few
          points with the thresholds: Landsat 28 Aug 42–50%, radar 37–48% for −14 to −12 dB. The 4
          Aug figure is a floor, since the simple optical rule misses narrow channels (8–21%).
        </p>
      </div>
    </section>
  );
}
