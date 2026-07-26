"use client";

import { motion } from "framer-motion";

export default function Ascent() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
      <div className="relative h-16 w-px bg-zinc-500/40">
        <motion.div
          className="absolute -left-[3px] h-2 w-2 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <p className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
        Begin the Ascent
      </p>
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-zinc-400"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
      </motion.svg>
    </div>
  );
}