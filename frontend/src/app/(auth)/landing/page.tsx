import { HeroSection } from "@/components/containers/heroSection"
import {Navbar} from "@/components/containers/Navbar"
import { TestimonialCarousel } from "@/components/containers/Caroussel";
import { FeaturesSection } from "@/components/containers/FeatureSection";
import { Footer } from "@/components/containers/Footers";

export default function LandingPage() {
  return (
    <main className="bg-[#0B0120] text-white min-h-screen">
      <Navbar />
      <HeroSection 
        title="One Platform,"
        highlightText="Endless Possibilities"
        subtitle="From automation to collaboration, empower your team like never before."
        primaryBtnText="Commencer gratuitement"
      />
      
      <FeaturesSection />
      <TestimonialCarousel />
      <Footer></Footer>
    </main>
  );
}