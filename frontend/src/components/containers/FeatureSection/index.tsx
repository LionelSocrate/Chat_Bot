"use client";

import { FeatureCard } from "@/components/containers/FeatureCardContainer"; 
import { Zap, Shield, Users, Globe, BarChart, Sparkles } from "lucide-react";

const features = [
  { icon: <Zap size={32} />, title: "Ultra Rapide", description: "Performances optimisées pour une expérience fluide." },
  { icon: <Shield size={32} />, title: "Sécurisé", description: "Protection avancée de vos données." },
  { icon: <Users size={32} />, title: "Collaboration", description: "Travaillez en équipe en temps réel." },
  { icon: <Globe size={32} />, title: "Accessible partout", description: "Disponible sur tous vos appareils." },
  { icon: <BarChart size={32} />, title: "Analytics", description: "Suivi détaillé et insights intelligents." },
  { icon: <Sparkles size={32} />, title: "IA Intégrée", description: "Fonctionnalités intelligentes automatisées." },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Des fonctionnalités puissantes</h2>
          <p className="text-gray-400 mt-4">Tout ce dont vous avez besoin en un seul endroit</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}