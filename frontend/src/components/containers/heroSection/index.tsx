"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/pieces/button";
import { ArrowRight } from "lucide-react";
import { Stars } from "../Starts";
import { Glow } from "../Glows";
interface HeroSectionProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle: string;
  primaryBtnText: string;
  secondaryBtnText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroSection({
  badge = "NEW",
  title,
  highlightText,
  subtitle,
  primaryBtnText,
  secondaryBtnText = "Learn more",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#7c3aed33,transparent)]" />
      
      <Stars />
      <Glow />

      <div className="relative z-10 max-w-5xl mx-auto">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm mb-6"
          >
            {badge}
          </motion.div>
        )}

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {title}{" "}
          {highlightText && (
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              {highlightText}
            </span>
          )}
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={onPrimaryClick}
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-7 rounded-full text-lg flex items-center gap-3"
            >
              {primaryBtnText} <ArrowRight />
            </Button>
          </motion.div>

          {secondaryBtnText && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={onSecondaryClick}
                variant="outline"
                className="px-8 py-7 rounded-full text-lg border-white/30 hover:bg-white/10"
              >
                {secondaryBtnText}
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        ↓
      </motion.div>
    </section>
  );
}