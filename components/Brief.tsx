import { Reveal } from "./Reveal";

/** The whole project in one glance: problem -> question -> finding. */
export function Brief() {
  return (
    <section id="brief" className="section-normal bg-canvas-soft">
      <div className="wrap">
        <Reveal>
          <p className="meta">01 · The brief</p>
          <h2 className="mt-6 max-w-[20ch]">What FloodLens is, and what it found.</h2>
        </Reveal>

        <div className="grid-12 mt-16 gap-y-14">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="stat h-full">
              <p className="caption text-fg-ghost">The problem</p>
              <p className="brief-head mt-5">Flood radar is powerful, and unreadable.</p>
              <p className="mt-5 max-w-[40ch] text-fg-dim">
                Satellite radar (SAR) can map floodwater across whole provinces. But a raw radar
                image is grey speckle that only specialists can interpret, so the people who need
                the answer rarely get to see it.
              </p>
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-3" delay={0.12}>
            <div className="stat h-full">
              <p className="caption text-fg-ghost">What we set out to find</p>
              <p className="brief-head mt-5">Can a radar flood map be read at a glance?</p>
              <p className="mt-5 max-w-[34ch] text-fg-dim">
                We took one real event, the 2022 Pakistan floods, and put radar and optical
                imagery of the same ground into one frame, with plain-language guides.
              </p>
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-5" delay={0.24}>
            <div className="h-full border-t-2 border-alert pt-4">
              <p className="caption text-alert">What we found</p>
              <p className="brief-head brief-head-xl mt-5">
                Radar and optical agree: <span className="text-alert">over 40%</span> of the
                scene was under water.
              </p>
              <p className="mt-5 max-w-[44ch] text-fg-dim">
                The two independent sensors measured the same flooded area to within 2%, and
                match pixel by pixel on 76% of the ground.
              </p>
              <a
                href="#results"
                className="caption mt-6 inline-block text-flood underline-offset-4 hover:underline"
              >
                See the results ↓
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
