import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/MES_system/HeroSection_Industrial";
import {ServicesSection} from "@/components/MES_system/ServicesSection";
import { FeaturesSection } from "@/components/MES_system/FeaturesSection";
import { CTASection } from "@/components/CTASection";
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