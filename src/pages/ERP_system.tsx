import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Erp_system/HeroSection_Industrial";
import {ServicesSection} from "@/components/Erp_system/ServicesSection";
import { FeaturesSection } from "@/components/Erp_system/FeaturesSection";
import { CTASection } from "@/components/CTASection";

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