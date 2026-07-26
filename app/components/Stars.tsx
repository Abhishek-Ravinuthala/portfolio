"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

function Sparkle({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0 C12.5 8, 15.5 11, 24 12 C15.5 13, 12.5 16, 12 24 C11.5 16, 8.5 13, 0 12 C8.5 11, 11.5 8, 12 0Z"
        fill={color}
      />
    </svg>
  );
}

export default function Stars() {
  const dots = useMemo(() => {
    return Array.from({ length: 2600 }, (_, index) => ({
      id: index,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 4,
      opacity: 0.2 + Math.random() * 0.8,
    }));
  }, []);

  const sparkles = useMemo(() => {
    const colors = ["#ffffff", "#bfd7ff", "#ffe9c7"];
    return Array.from({ length: 30 }, (_, index) => ({
      id: index,
      size: Math.random() * 10 + 8,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {dots.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          initial={{ opacity: star.opacity }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {sparkles.map((s) => (
        <motion.div
          key={`sparkle-${s.id}`}
          className="absolute"
          style={{ top: `${s.top}%`, left: `${s.left}%` }}
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkle size={s.size} color={s.color} />
        </motion.div>
      ))}
    </div>
  );
}