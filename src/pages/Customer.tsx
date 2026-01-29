import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Customer/HeroSection_Customer";
import Customer_Card from "@/components/Customer/Customer_card";
import Customer_Testimonials from "@/components/Customer/Testimonials";
import { CTASection } from "@/components/Component_mini/CTASection";

export default function Customers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Customer_Card />
        <Customer_Testimonials/>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}