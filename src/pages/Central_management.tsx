import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/AI_IOT/Central_management/HeroSection_Central_management";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Bộ icon chuyên dụng
import { 
  Activity,
  Cpu,
  Database, // Thêm Database cho dữ liệu tập trung
  BarChart, // Thêm BarChart cho phân tích/xử lý
  MonitorCheck // Thêm MonitorCheck cho giám sát/điều hành
} from "lucide-react";

import feature1 from "@/assets/Hethongql1.png"; // Ảnh minh họa (Cần thay ảnh phù hợp với SOC)
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/Hethongql.png";

// Feature List: Dựa trên nội dung ảnh "HỆ THỐNG QUẢN LÝ TẬP TRUNG"
const System_Features = [
  { 
    text: "Tích hợp dữ liệu đa nguồn", 
    subText: "Thu thập thông tin từ hệ thống giám sát, cảm biến, IoT, drone, AI, hệ thống cân, camera, dữ liệu khai thác...",
    icon: Database // Icon Database phù hợp với tích hợp dữ liệu
  },
  { 
    text: "Phân tích & xử lý thông minh", 
    subText: "Ứng dụng AI, Big Data để giám sát, dự báo và tối ưu vận hành.",
    icon: Cpu // Icon Cpu phù hợp với xử lý thông minh/AI
  },
   { 
    text: "Hỗ trợ giám sát & điều hành", 
    subText: "Cung cấp bảng điều khiển trực quan (dashboard) giúp nhà quản lý nắm bắt tình hình theo thời gian thực, ra quyết định nhanh chóng.",
    icon: MonitorCheck // Icon Monitor phù hợp với giám sát/điều hành
  },
];


const Central_management = () => {
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
          src={manufacturingHero}
          alt="Trung tâm điều hành thông minh SOC"
          className="w-[95%] h-auto md:h-[500px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Hệ thống quản lý tập trung */}
        <FeatureSection
          tag={{ icon: Activity, text: "Centralized Management", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Hệ thống quản lý tập trung</span>
          }
          // Description lấy từ đoạn mở đầu trong ảnh
          description="Trung tâm quản lý điều hành thông minh SOC (Smart Operation Center) là giải pháp tích hợp và tổng hợp dữ liệu tập trung từ tất cả các hệ thống trong doanh nghiệp ngành than."
          features={System_Features}
          imageSrc={feature1}
          imageAlt="Màn hình trung tâm điều hành SOC"
          floatingBadge={{
            icon: BarChart, // Icon biểu đồ cho dashboard/báo cáo
            title: "Điều hành thông minh",
            subtitle: "Real-time Dashboard",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        <a href="/AI&IoT">
            <Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6]">
                Trở về
            </Button>
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default Central_management;