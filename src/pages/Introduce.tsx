import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/About/HeroSection_About";
import { TimelineSection } from "@/components/About/Timeline";
import { OrganizationSection } from "@/components/About/OrganizationSection";
import { VisionMissionSection } from "@/components/About/VisionMissionCard";
import { TechnologiesSection } from "@/components/About/TechnologySection";
import { BranchesSection } from "@/components/About/BranchesSection";
const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <main className="pt-24">
        <HeroSection />
        <TimelineSection />
        <OrganizationSection />
        <VisionMissionSection />
        <TechnologiesSection />
        <BranchesSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;