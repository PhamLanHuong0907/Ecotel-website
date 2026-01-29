import { Header } from "@/components/Component_mini/Header";
import { HeroSection } from "@/components/Home/HeroSection";
import { AboutSection } from "@/components/Home/AboutSection";
import { ServicesSection } from "@/components/Home/ServicesSection";
import { ProjectsSection } from "@/components/Home/ProjectsSection";
import Customer_Testimonials from "@/components/Customer/Testimonials";
import { ContactSection } from "@/components/Home/ContactSection";
import { Footer } from "@/components/Component_mini/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Customer_Testimonials/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
