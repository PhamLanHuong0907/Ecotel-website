import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Smart_Factory/HeroSection_SmartFactory";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/smart_factory2.png";
import { Button } from "@/components/ui/button";
// Data
const designFeatures = [
  { text: "Hệ thống quản trị doanh nghiệp ERP & BI", icon: Cog , path: '/industrial/erp_bi'},
  { text: "Hệ thống thực thi điều hành sản xuất (MES-Manufacturing Execution System)", icon: Zap, path: '/industrial/eco_mes' },
  { text: "Hệ thống IoT và thực thi sản xuất (IoT)", icon: Cog, path: '/'},
];
const Smart_Factory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Factory, text: "Thiết kế hệ sinh thái", colorClass: "bg-primary/10 text-primary" }}
          title={
            <> <span className="gradient-text">Nhà máy thông minh <br/> (Smart Factory)</span></>
          }
          description="Hệ sinh thái nhà thông minh gồm:"
          features={designFeatures}
          imageSrc={feature1}
          imageAlt="Thiết kế và chế tạo máy"
          floatingBadge={{
            icon: CheckCircle2,
            title: "Công nghệ tiên tiến",
            subtitle: "•BI • ERP • MES • IoT",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          
          glowClass="from-primary/20 to-accent/20"
        />
        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 " >Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Smart_Factory;