"use client";

import type { ReactNode, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 250,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 250,
    damping: 20,
  });
  const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(100,255,218,0.18), transparent 60%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative overflow-hidden rounded-3xl border border-navy-lightest bg-navy-light/40 p-6 shadow-[0_20px_80px_-55px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:border-mint/40 hover:bg-navy-light"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glareBackground }}
      />
      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-2xl font-semibold text-slate-lightest">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-light">{description}</p>
      </div>
    </motion.article>
  );
}
