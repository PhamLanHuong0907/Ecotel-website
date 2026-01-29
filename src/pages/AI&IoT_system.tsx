import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/AI_IOT/HeroSection_AI";
import {ServicesSection} from "@/components/AI_IOT/ServicesSection";
import { FeaturesSection } from "@/components/AI_IOT/FeaturesSection";
import { CTASection } from "@/components/Component_mini/CTASection";

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