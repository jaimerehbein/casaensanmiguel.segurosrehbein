import { HeroSection } from "@/components/organisms/HeroSection";
import { FeaturesGrid } from "@/components/organisms/FeaturesGrid";
import { Gallery } from "@/components/organisms/Gallery";
import { Neighborhood } from "@/components/organisms/Neighborhood";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { FloatingWhatsApp } from "@/components/organisms/FloatingWhatsApp";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light">
      <HeroSection />
      <FeaturesGrid />
      <Gallery />
      <Neighborhood />
      <CtaBanner />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
