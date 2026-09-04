"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const EMOJI = ["🎮", "💪", "🏋️", "⚔️", "🔥", "⭐", "🍥"];
const CODE_HINT = "↑ ↑ ↓ ↓ ← → ← → B A";

type Particle = {
  id: number;
  left: number;
  emoji: string;
  duration: number;
  delay: number;
  rotate: number;
};

export default function KonamiEasterEgg() {
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    console.log(
      `%cPsst... try the Konami code: ${CODE_HINT}`,
      "color:#64ffda; font-size:14px;"
    );

    let buffer: string[] = [];

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      buffer = [...buffer, key].slice(-SEQUENCE.length);
      if (buffer.join(",") === SEQUENCE.join(",")) {
        trigger();
        buffer = [];
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function trigger() {
    setActive(true);
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        emoji: EMOJI[Math.floor(Math.random() * EMOJI.length)],
        duration: 2.5 + Math.random() * 2,
        delay: Math.random() * 0.8,
        rotate: Math.random() > 0.5 ? 360 : -360,
      }))
    );
    setTimeout(() => setActive(false), 3600);
    setTimeout(() => setParticles([]), 5200);
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-2xl"
          style={{ left: `${p.left}%`, top: -40 }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: "linear" }}
        >
          {p.emoji}
        </motion.span>
      ))}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="absolute left-1/2 top-10 -translate-x-1/2 rounded-2xl border border-mint/40 bg-navy-dark/95 px-6 py-4 text-center shadow-[0_20px_80px_-30px_rgba(100,255,218,0.5)]"
          >
            <p className="text-xs uppercase tracking-[0.1em] text-mint">
              Achievement Unlocked
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-lightest">
              Secret Visitor 🎮
            </p>
            <p className="mt-1 text-sm text-slate-light">
              You know the code. Respect.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="group pointer-events-auto absolute bottom-5 right-5 flex items-center gap-2">
        <span className="pointer-events-none whitespace-nowrap rounded-full border border-mint/30 bg-navy-dark/95 px-3 py-1.5 text-xs text-slate-light opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          try {CODE_HINT}
        </span>
        <span className="flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-navy-lightest bg-navy-light/60 text-base opacity-40 transition-opacity duration-200 hover:opacity-100">
          🎮
        </span>
      </div>
    </div>
  );
}
