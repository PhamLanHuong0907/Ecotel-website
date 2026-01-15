import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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