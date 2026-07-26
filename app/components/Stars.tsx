"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 180 }, (_, index) => ({
      id: index,
      size: Math.random() * 2.5 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 4,
      opacity: 0.2 + Math.random() * 0.8,
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star) => (
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
    </div>
  );
}