"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => {
      return {
        left: (i * 37) % 100,
        top: (i * 53) % 70,
        duration: ((i * 13) % 400) / 100 + 3,
        delay: ((i * 29) % 500) / 100,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}