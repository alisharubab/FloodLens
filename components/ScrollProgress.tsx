"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin cyan bar at the top that fills as you scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[110] h-[2px] origin-left bg-flood"
      style={{ scaleX }}
    />
  );
}
