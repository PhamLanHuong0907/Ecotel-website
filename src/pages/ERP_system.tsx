import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Erp_system/HeroSection_Industrial";
import {ServicesSection} from "@/components/Erp_system/ServicesSection";
import { FeaturesSection } from "@/components/Erp_system/FeaturesSection";
import { CTASection } from "@/components/Component_mini/CTASection";

const ERP = () => {
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

export default ERP;