import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/MES_system/HeroSection_Industrial";
import {ServicesSection} from "@/components/MES_system/ServicesSection";
import { FeaturesSection } from "@/components/MES_system/FeaturesSection";
import { CTASection } from "@/components/Component_mini/CTASection";
const MES = () => {
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

export default MES;