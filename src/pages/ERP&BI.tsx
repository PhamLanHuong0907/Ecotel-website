import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Erp_system/ERP&BI_Solutions/HeroSection_ERP&BI_Solutions";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Đã thêm BarChart, FileText, Users vào import để có icon phù hợp
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2, BarChart, FileText, Users } from "lucide-react";
import feature1 from "@/assets/Hethongql1.png";
import { Button } from "@/components/ui/button";// Data
import { motion } from "framer-motion";
import erp_bi from "@/assets/DashboardBI.png";

// 1. Data cho phần BI (Báo cáo quản trị)
const biFeatures = [
  { text: "Thu thập & phân tích dữ liệu đa nguồn", icon: Cog },
  { text: "Trực quan hóa dữ liệu (Dashboard)", icon: BarChart },
  { text: "Hỗ trợ ra quyết định nhanh chóng, chính xác", icon: Target },
];



const Erp_Bi = () => {
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
        <img
          src={erp_bi}
          alt="Dây chuyền sản xuất công nghiệp"
          className="w-[95%] h-full md:h-[500px] object-fit justify-center"
        />
        
        {/* Floating Stats */}
       
      </motion.div>

        {/* SECTION 1: HỆ THỐNG BI */}
        <FeatureSection
          tag={{ icon: BarChart, text: "Báo cáo thông minh", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Hệ thống báo cáo quản trị (BI)</span>
          }
          description="Sử dụng công cụ BI mạnh mẽ để thu thập, phân tích và trực quan hóa dữ liệu từ ERP và các nguồn khác, giúp khối văn phòng và lãnh đạo đưa ra quyết định chiến lược dựa trên dữ liệu thực."
          features={biFeatures}
          imageSrc={feature1} // Bạn có thể thay ảnh riêng cho phần BI tại đây
          imageAlt="Hệ thống BI"
          floatingBadge={{
            icon: Target,
            title: "Ra quyết định",
            subtitle: "Data-Driven",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* SECTION 2: HỆ THỐNG ERP (Đảo chiều - Reverse) */}
        
        <a href="/erp"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6]">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Erp_Bi;