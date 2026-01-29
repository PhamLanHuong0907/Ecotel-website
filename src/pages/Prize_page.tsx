import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { AwardsSection } from "./Prize";
const Award = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AwardsSection />
      
      </main>

      <Footer />
    </div>
  );
};

export default Award;