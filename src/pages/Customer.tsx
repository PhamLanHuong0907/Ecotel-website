import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Customer/HeroSection_Customer";
import Customer_Card from "@/components/Customer/Customer_card";
import Customer_Testimonials from "@/components/Customer/Testimonials";
import { ContactSection } from "@/components/Home/ContactSection";

export default function Customers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Customer_Card />
        <Customer_Testimonials/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}