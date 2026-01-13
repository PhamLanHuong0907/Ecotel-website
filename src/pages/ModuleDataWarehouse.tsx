import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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