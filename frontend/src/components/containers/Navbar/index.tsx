"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/pieces/button";

export function Navbar() {
  const { scrollY } = useScroll();

  const bg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]
  );

  const border = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(0,0,0,0.08)"]
  );

  return (
    <motion.nav
      style={{
        backgroundColor: bg,
        borderBottom: `1px solid ${border}`,
      }}
      className="fixed top-0 left-0 w-full backdrop-blur-md z-50 px-6 py-5 flex justify-between items-center transition-all"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-xl">D</span>
        </div>
        <h1 className="font-bold text-2xl text-gray-900">Dreams</h1>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        <a href="#">Accueil</a>
        <a href="#">Cours</a>
        <a href="#">Formateurs</a>
        <a href="#">Catégories</a>
        <a href="#">Blog</a>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline">Se connecter</Button>
        <Button>S'inscrire</Button>
      </div>
    </motion.nav>
  );
}