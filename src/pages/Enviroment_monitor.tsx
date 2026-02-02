import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/MES_system/Enviroment_monitoring/HeroSection_Enviroment";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Bộ icon chuyên dụng cho Môi trường & An toàn
import { 
  Wind, // Icon gió/không khí
  Thermometer, // Icon nhiệt độ
  CloudFog, // Icon khí độc/bụi
  Wifi, // Icon IoT
  Siren, // Icon cảnh báo/còi hú
  Droplets, // Icon độ ẩm
  ShieldAlert, // Icon badge an toàn
  Radio // Icon trạm quan trắc
} from "lucide-react";

import feature1 from "@/assets/giamsatmoitruong.png"; // Ảnh minh họa trạm quan trắc
import feature2 from "@/assets/giamsatmoitruong_2.png"; // Ảnh minh họa hệ thống cảnh báo
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/giamsatmoitruong_1.png";

// Feature 1: Chỉ số môi trường (Environmental Metrics)
const Environment_Features = [
  { 
    text: "Giám sát vi khí hậu", 
    subText: "Theo dõi liên tục Nhiệt độ, Độ ẩm và Tốc độ gió để duy trì điều kiện làm việc tiêu chuẩn.",
    icon: Thermometer 
  },
  { 
    text: "Phát hiện khí độc hại", 
    subText: "Cảm biến đo lường nồng độ CO, CO2, SO2 giúp phát hiện rò rỉ khí nguy hiểm tức thời.",
    icon: CloudFog 
  },
];

// Feature 2: IoT & Cảnh báo (IoT & Alerts)
const IoT_Features = [
  { 
    text: "Kết nối IoT thời gian thực",
    subText: "Mở rộng khả năng truyền dữ liệu nhanh chóng từ hầm lò về trung tâm điều hành.",
    icon: Wifi 
  },
  { 
    text: "Cảnh báo thông minh",
    subText: "Tự động kích hoạt báo động (Còi/Đèn/App) ngay khi chỉ số vượt ngưỡng an toàn.",
    icon: Siren 
  },
];

const EnvironmentMonitoring = () => {
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
          alt="Giám sát môi trường hầm lò"
          className="w-[95%] h-auto md:h-[500px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Quan trắc chỉ số */}
        <FeatureSection
          tag={{ icon: Wind, text: "Environmental Monitoring", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Giám sát môi trường & An toàn</span>
          }
          // Sử dụng nội dung bạn đã duyệt ở các bước trước
          description="Trong môi trường đặc thù như hầm lò hay nhà máy hóa chất, việc kiểm soát các biến động môi trường là yếu tố sống còn. ECOTEL cung cấp hệ thống quan trắc tích hợp IoT để đo lường liên tục nồng độ khí và điều kiện vi khí hậu, giúp phát hiện những rủi ro vô hình trước khi chúng trở thành sự cố."
          features={Environment_Features}
          imageSrc={feature1}
          imageAlt="Trạm quan trắc môi trường"
          floatingBadge={{
            icon: ShieldAlert,
            title: "An toàn tuyệt đối",
            subtitle: "HSE • Safety First",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Công nghệ cảnh báo */}
        <FeatureSection
          tag={{ icon: Radio, text: "IoT Warning System", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Hệ thống IoT & Cảnh báo sớm</span>
          }
          description="Thiết lập lá chắn an toàn chủ động nhờ mạng lưới cảm biến IoT thông minh. Hệ thống tự động thu thập dữ liệu và kích hoạt cảnh báo khẩn cấp ngay khi phát hiện mức nguy hiểm, hỗ trợ đội ngũ quản lý phản ứng kịp thời và giảm thiểu rủi ro tai nạn."
          features={IoT_Features}
          imageSrc={feature2}
          imageAlt="Sơ đồ cảnh báo IoT"
          floatingBadge={{
            icon: Siren,
            title: "Phản ứng nhanh",
            subtitle: "Real-time Alert",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />
        
        <a href="/mes">
            <Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6]">
                Trở về
            </Button>
        </a>

      </main>

      <Footer />
    </div>
  );
};

export default EnvironmentMonitoring;