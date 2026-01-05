import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/AI_IOT/HeroSection_AI";
import {ServicesSection} from "@/components/AI_IOT/ServicesSection";
import { FeaturesSection } from "@/components/AI_IOT/FeaturesSection";
import { CTASection } from "@/components/CTASection";

const AI_IoT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
      
      </main>

      <Footer />
    </div>
  );
};

export default AI_IoT;