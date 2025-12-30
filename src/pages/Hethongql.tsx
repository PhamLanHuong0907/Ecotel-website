import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Erp_system/Hethongqltaptrung/HeroSection_Hethongql";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/Hethongql1.png";
import { Button } from "@/components/ui/button";// Data
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/Hethongql2.png";
const designFeatures = [
  { text: "Tích hợp dữ liệu đa nguồn: cảm biến, IoT, drone, AI,...", icon: Cog },
  { text: "Phân tích & xử lý thông minh", icon: Cpu },
  { text: "Hỗ trợ giám sát & điều hành", icon: Zap },
];
const Hethongql = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 text-center justify-center flex items-center" />
        <img
          src={manufacturingHero}
          alt="Dây chuyền sản xuất công nghiệp"
          className="w-[95%] h-auto md:h-[500px] object-cover justify-center"
        />
        </motion.div>

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Wrench, text: "Tính năng hệ thống", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Tính năng hệ thống</span>
          }
          description="Cung cấp hạ tầng lưu trữ linh hoạt và mạnh mẽ, giúp đội ngũ kỹ thuật dễ dàng làm sạch, cấu trúc hóa dữ liệu lớn và triển khai các mô hình phân tích chuyên sâu hiệu quả."
          features={designFeatures}
          imageSrc={feature1}
          imageAlt="Thiết kế và chế tạo máy"
          floatingBadge={{
            icon: CheckCircle2,
            title: "Công nghệ tiên tiến",
            subtitle: "IoT • AI • SCADA",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Set-up nhà máy */}
        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Hethongql;

        
        {/* Floating Stats */}
    