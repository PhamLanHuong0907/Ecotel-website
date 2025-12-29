import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Erp_system/Giaiphapkho/HeroSection_Giaiphapkho";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2 } from "lucide-react";
import feature1 from "@/assets/giaiphapkho.png";
import feature2 from "@/assets/giaiphapkho1.png";
import { Button } from "@/components/ui/button";// Data
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/khodulieutaptrung.png";
const designFeatures = [
  { text: "Cung cấp hệ thống lưu trữ linh hoạt", icon: Cog },
  { text: "Hỗ trợ AI/ML, phân tích dữ liệu lớn", icon: Cpu },
  { text: "Đảm bảo dữ liệu sạch, có cấu trúc và dễ truy xuất", icon: Zap },
];

const setupFeatures = [
  { text: "Tích hợp công cụ BI", icon: Target },
  { text: "Phân tích dữ liệu thời gian thực", icon: Settings },
  { text: "Đưa ra quyết định nhanh chóng, chính xác dựa trên dữ liệu đáng tin cậy", icon: Shield },
];

const Giaiphapkho = () => {
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
        
        {/* Floating Stats */}
       
      </motion.div>

        {/* Section 1: Thiết kế & Chế tạo máy */}
        <FeatureSection
          tag={{ icon: Wrench, text: "Tính năng kho dữ liệu", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Đối với chuyên gia dữ liệu</span>
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
        <FeatureSection
          tag={{ icon: Factory, text: "Tính ứng dụng", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Đối với chuyên gia kinh doanh</span>
          }
          description="Tối ưu hóa hiệu quả quản trị thông qua việc tích hợp các công cụ báo cáo thông minh (BI), cho phép theo dõi chỉ số thời gian thực và ra quyết định chiến lược dựa trên nguồn dữ liệu chuẩn xác."
          features={setupFeatures}
          imageSrc={feature2}
          imageAlt="Set-up nhà máy thông minh"
          floatingBadge={{
            icon: Cpu,
            title: "Công nghệ 4.0",
            subtitle: "MES • PLC • SCADA",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />
        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Giaiphapkho;