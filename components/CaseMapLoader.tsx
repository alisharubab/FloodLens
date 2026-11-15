"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window` at import time, so it must never render on the server.
const CaseMap = dynamic(() => import("./CaseMap"), {
  ssr: false,
  loading: () => <div className="h-[70svh] min-h-[420px] w-full bg-canvas-soft" />,
});

export function CaseMapLoader() {
  return <CaseMap />;
}
