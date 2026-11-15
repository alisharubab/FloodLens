"use client";

import "leaflet/dist/leaflet.css";
import { useMemo, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const PIN: [number, number] = [27.5, 68.5];
const VIEW: [number, number] = [28.6, 68.8];

export default function CaseMap() {
  const [open, setOpen] = useState(false);

  // Pulsing cyan dot + 3 concentric rings + radar sweep (styled in globals.css)
  const icon = useMemo(
    () =>
      L.divIcon({
        className: "fl-pin-wrap",
        html:
          '<span class="sweep"></span><span class="ring"></span><span class="ring"></span><span class="ring"></span><span class="dot"></span>',
        iconSize: [48, 48],
        iconAnchor: [24, 24],
      }),
    [],
  );

  return (
    // isolate: keeps Leaflet's high z-index panes inside this box so the
    // page-wide noise overlay still sits on top of the map.
    <div className="relative isolate h-[70svh] min-h-[420px] w-full">
      <MapContainer
        center={VIEW}
        zoom={6}
        minZoom={4}
        maxZoom={10}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* CARTO Dark Matter now demands an API key (tiles come back watermarked),
            so use keyless OSM tiles and darken them with CSS (.fl-tiles). */}
        <TileLayer
          className="fl-tiles"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
        />
        <Marker
          position={PIN}
          icon={icon}
          title="2022 Pakistan floods"
          eventHandlers={{ click: () => setOpen(true) }}
        />
      </MapContainer>

      <p className="caption pointer-events-none absolute top-4 right-4 z-[1000] bg-ink/80 px-3 py-1.5 text-paper-dim">
        27.5°N · 68.5°E
      </p>

      {open ? (
        <div
          role="dialog"
          aria-label="Case study"
          className="absolute bottom-6 left-4 z-[1000] w-[min(22rem,calc(100%-2rem))] border-t border-flood bg-ink p-5 md:left-8"
        >
          <p className="caption text-paper-ghost">Case 01 · Sindh Province</p>
          <h3 className="mt-3 text-3xl font-semibold">2022 Pakistan floods</h3>
          <p className="mt-3 text-paper-dim">
            About 75,000 km² under water at peak. Scroll up to explore.
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="caption mt-4 cursor-pointer text-flood hover:text-paper"
          >
            Close ×
          </button>
        </div>
      ) : (
        <p className="caption pointer-events-none absolute bottom-4 left-4 z-[1000] bg-ink/80 px-3 py-1.5 text-paper-ghost md:left-8">
          Click the pin
        </p>
      )}
    </div>
  );
}
