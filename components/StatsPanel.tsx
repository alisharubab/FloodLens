"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  tone: "alert" | "flood";
};

// Shocking numbers in --alert, context numbers in --flood (THEME.md)
const STATS: Stat[] = [
  { label: "People affected", value: 33, suffix: "M", tone: "alert" },
  { label: "Deaths", value: 1739, tone: "alert" },
  { label: "km² flooded at peak", value: 75000, prefix: "~", tone: "flood" },
  { label: "Economic damage · est.", value: 40, prefix: "$", suffix: "B", tone: "flood" },
];

function Counter({ value, prefix = "", suffix = "" }: Pick<Stat, "value" | "prefix" | "suffix">) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  // Server + first paint show the real value; once hydrated and off-screen,
  // reset to 0 so the count-up starts clean when it scrolls into view.
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!reduce) setN(0);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function StatsPanel() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <p className="caption text-fg-dim">{s.label}</p>
            <p className={`stat-num mt-5 ${s.tone === "alert" ? "text-alert" : "text-flood"}`}>
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
          </div>
        ))}
      </div>
      <p className="caption mt-10 text-fg-ghost">
        Figures approximate · 2022 official and UN estimates
      </p>
    </div>
  );
}
