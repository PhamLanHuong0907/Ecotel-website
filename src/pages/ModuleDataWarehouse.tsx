import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/DataWarehouse/HeroSection_ModuleDataWarehouse";
import {ServicesSection} from "@/components/DataWarehouse/ServicesSection";
const MoudleDataWarehouse = () => {
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

export default MoudleDataWarehouse;