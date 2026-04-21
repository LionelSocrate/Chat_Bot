"use client";

import { motion } from "framer-motion";

export function Glow() {
  return (
    <>
      {/* Glow principal en forme de demi-lune / courbe */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] 
                   bg-gradient-to-t from-purple-600/40 via-indigo-500/30 to-transparent 
                   blur-3xl rounded-full"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      {/* Glow secondaire plus doux */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] 
                   bg-gradient-to-t from-violet-500/30 to-transparent blur-3xl rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
    </>
  );
}