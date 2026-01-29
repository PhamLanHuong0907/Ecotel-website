import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Leadership/HeroSection_Leadership";

import {TeamSection} from "@/components/Leadership/TeamSection";
import { CTASection } from "@/components/Component_mini/CTASection";

export default function Leadership() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
       
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}