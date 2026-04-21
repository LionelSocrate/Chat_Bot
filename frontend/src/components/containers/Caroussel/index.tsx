"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sophie Rakoto",
    role: "CEO chez InnovMad",
    content: "Cette plateforme a transformé notre façon de travailler. Incroyable !",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jean Rakotomalala",
    role: "Product Manager",
    content: "L'outil le plus intuitif que j'ai jamais utilisé. Gain de temps énorme.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aina Raharisoa",
    role: "Designer",
    content: "Les animations et l'UX sont juste magnifiques. Bravo à l'équipe !",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Ce que disent nos utilisateurs</h2>

        <div className="relative h-[280px]">
          <AnimatePresence mode="wait">
            {testimonials.map((t, i) => (
              i === current && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                    <p className="text-2xl italic text-gray-200 mb-8">"{t.content}"</p>
                    <div className="flex items-center justify-center gap-4">
                      <img src={t.avatar} alt="" className="w-14 h-14 rounded-full" />
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-purple-400 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}