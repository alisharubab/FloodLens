const MARQUEE =
  "SENTINEL-1 · C-BAND SAR · ~5.5 CM WAVELENGTH · PENETRATES CLOUD · DAY AND NIGHT · SINDH PROVINCE · AUGUST 2022 · DARK PIXELS = OPEN WATER · ";

export function Hero() {
  return (
    <section className="hero-glow relative flex min-h-svh flex-col overflow-hidden">
      <div className="rings" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="wrap relative flex flex-1 flex-col items-center justify-center pt-24 pb-12 text-center">
        <h1
          className="t-hero font-bold"
          style={{ fontVariationSettings: '"SOFT" 30, "WONK" 1' }}
        >
          FloodLens
        </h1>
        <p className="font-display mt-6 text-[clamp(1.5rem,3.4vw,2.75rem)] leading-tight tracking-[-0.02em] text-paper italic">
          through clouds · through night
        </p>
        <p className="t-lede mt-10 max-w-[34ch] text-paper-dim">
          A radar&rsquo;s-eye view of the floods cameras couldn&rsquo;t see.
        </p>
      </div>

      <div className="wrap relative flex flex-col items-center gap-8 pb-8 md:grid md:grid-cols-3 md:items-end md:gap-6">
        <p className="caption text-center text-paper-ghost md:text-left">
          02 · Pakistan floods · August 2022 · Sentinel-1 SAR
        </p>
        <div className="flex flex-col items-center gap-3">
          <span className="caption text-paper-dim">Scroll</span>
          <span className="scroll-line" aria-hidden />
        </div>
        <p className="caption hidden text-right text-paper-ghost md:block">
          27.5°N · 68.5°E
        </p>
      </div>

      <div className="marquee caption relative py-3 text-paper-ghost" aria-hidden>
        <div className="marquee-track">
          <span>{MARQUEE.repeat(3)}</span>
          <span>{MARQUEE.repeat(3)}</span>
        </div>
      </div>
    </section>
  );
}
