import { Brief } from "@/components/Brief";
import { CaseMapLoader } from "@/components/CaseMapLoader";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ResultsBand } from "@/components/ResultsBand";
import { SarDiagram } from "@/components/SarDiagram";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StatsPanel } from "@/components/StatsPanel";
import { SwipeView } from "@/components/SwipeView";

const GITHUB_URL = "https://github.com/alisharubab/FloodLens";

const METHOD = [
  {
    n: "01",
    title: "Microwave pulses",
    body: "SAR sends radio pulses to the ground and listens for the echoes that come back.",
    span: "md:col-span-4",
  },
  {
    n: "02",
    title: "Cuts through clouds",
    body: "Clouds don’t block microwaves. Day or night. Rain or shine.",
    span: "md:col-span-5",
  },
  {
    n: "03",
    title: "Water reads dark",
    body: "Smooth water reflects radar away from the satellite, so flooded ground looks black.",
    span: "md:col-span-3",
  },
];

const AHEAD = [
  "Add every major flood event to a growing archive",
  "Extend to Thwaites Glacier retreat — SAR’s other irreplaceable role, through Antarctic polar night",
  "Open onboarding so regional agencies can plug in their own areas of interest",
];

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <main>
        <Hero />

        {/* 01 · The brief: problem, question, finding */}
        <Brief />

        {/* 02 · The event */}
        <section id="event" className="section-normal bg-canvas">
          <div className="wrap">
            <div className="grid-12 items-end gap-y-14">
              <Reveal className="col-span-12 lg:col-span-7">
                <p className="meta">02 · The event</p>
                <h2 className="mt-6 max-w-[14ch]">A third of Pakistan went underwater.</h2>
                <p className="dropcap prose-fl mt-10">
                  Record monsoon rain and melting glaciers swamped Pakistan from June to
                  October 2022. Rivers burst their banks and, by late August, a third of the
                  country was submerged. Understanding where the water had gone, and how far, meant
                  reading it from space.
                </p>
              </Reveal>
              <Reveal className="col-span-12 lg:col-span-5" delay={0.15}>
                <blockquote className="pullquote">
                  The first question after any flood is the simplest one: where is the water?
                </blockquote>
              </Reveal>
            </div>
            <div className="mt-24">
              <StatsPanel />
            </div>
          </div>
        </section>

        {/* 03 · The solution: one frame, two sensors */}
        <section id="solution" className="section-normal bg-canvas-soft">
          <div className="wrap">
            <Reveal>
              <p className="meta">03 · The solution</p>
              <h2 className="mt-6 max-w-[16ch]">One frame, two sensors.</h2>
              <p className="t-lede mt-8 max-w-[50ch] text-fg-dim">
                Drag to compare. On one side, an image you can read at a glance. On the other,
                the same ground as seen by radar, where dark means water.
              </p>
            </Reveal>
          </div>
          <div className="mt-14">
            <SwipeView />
          </div>
        </section>

        {/* 04 · What we found */}
        <ResultsBand />

        {/* 05 · The location */}
        <section id="location" className="bg-canvas pt-[var(--space-normal)]">
          <div className="wrap pb-14">
            <Reveal>
              <p className="meta">05 · The location</p>
              <h2 className="mt-6">Where this happened.</h2>
            </Reveal>
          </div>
          <CaseMapLoader />
        </section>

        {/* 06 · The method */}
        <section id="method" className="section-wide bg-canvas-soft">
          <div className="wrap">
            <Reveal>
              <p className="meta">06 · The method</p>
              <h2 className="mt-6">How radar reads water.</h2>
            </Reveal>
            <Reveal className="mt-16" delay={0.1}>
              <SarDiagram />
            </Reveal>
            <div className="grid-12 mt-20 gap-y-14">
              {METHOD.map((m, i) => (
                <Reveal key={m.n} className={`col-span-12 ${m.span}`} delay={i * 0.12}>
                  <div className="stat">
                    <p className="display text-[clamp(4rem,9vw,8rem)] leading-none text-fg-ghost">
                      {m.n}
                    </p>
                    <h3 className="mt-6 font-sans text-xl font-medium tracking-normal">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-[36ch] text-fg-dim">{m.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 07 · Ahead */}
        <section id="ahead" className="section-normal bg-canvas">
          <div className="wrap">
            <div className="grid-12 gap-y-12">
              <Reveal className="col-span-12 lg:col-span-5">
                <p className="meta">07 · Ahead</p>
                <h2 className="mt-6">From one flood to every flood.</h2>
              </Reveal>
              <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.12}>
                <ul>
                  {AHEAD.map((item) => (
                    <li key={item} className="stat flex gap-4 pb-8 text-fg-dim">
                      <span className="mono text-flood" aria-hidden>
                        →
                      </span>
                      <span className="max-w-[48ch]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* END */}
      <footer className="section-tight bg-canvas-soft">
        <div className="wrap">
          <p className="meta">End</p>
          <div className="grid-12 mt-10 items-end gap-y-12">
            <p className="font-display col-span-12 text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.02em] text-fg italic lg:col-span-6">
              through clouds · through night
            </p>
            <dl className="caption col-span-12 grid gap-y-4 text-fg-dim lg:col-span-6">
              <div>
                <dt className="text-fg-ghost">Team</dt>
                <dd>Despeckle</dd>
              </div>
              <div>
                <dt className="text-fg-ghost">Challenge</dt>
                <dd>Dancing with the SARs · 2026 NASA Space Apps</dd>
              </div>
              <div>
                <dt className="text-fg-ghost">Data</dt>
                <dd>
                  NASA Earth Observatory · Landsat 8/9 (USGS) · Sentinel-1 (ESA Copernicus)
                  via Planetary Computer
                </dd>
              </div>
              <div>
                <dt className="text-fg-ghost">Source</dt>
                <dd>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-flood underline-offset-4 hover:underline"
                  >
                    Source · GitHub ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </footer>
    </SmoothScroll>
  );
}
