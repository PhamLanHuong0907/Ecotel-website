import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// Giả định đường dẫn component Hero mới, bạn có thể chỉnh lại cho đúng cấu trúc thư mục
import { HeroSection } from "@/components/MES_system/Maintenance/HeroSection_Maintenance"; 
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection"; // Nếu cần dùng
// Bộ icon chuyên dụng cho Bảo trì & Giám sát
import { 
  Activity, // Dùng cho OEE (Hiệu suất)
  Zap, // Dùng cho Điện năng (cần thêm vào từ lucide-react)
  MapPin, // Dùng cho Vị trí (cần thêm vào từ lucide-react)
  AlertTriangle, // Dùng cho Cảnh báo lỗi (cần thêm vào từ lucide-react)
  Wrench, // Icon cờ lê cho tiêu đề (cần thêm vào từ lucide-react)
  Settings, // Icon cài đặt
  Cpu // Icon xử lý
} from "lucide-react";

import feature1 from "@/assets/qlhstb.png"; // Ảnh giao diện giám sát OEE (Cần thay ảnh thực tế)
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/qlhstb_big.png";

// Feature List: Dựa trên 4 tính năng trong ảnh (OEE, SM, EM, LM)
const Maintenance_Features = [
  { 
    text: "Giám sát hiệu suất máy (OEE)", 
    subText: "Theo dõi chi tiết thời gian chạy, dừng và các lỗi của máy để tính toán hiệu suất vận hành thực tế.",
    icon: Activity 
  },
  { 
    text: "Giám sát trạng thái lỗi (SM)", 
    subText: "Dự đoán tình trạng sức khỏe thiết bị để cảnh báo sớm, hỗ trợ bảo trì chủ động trước khi hỏng hóc.",
    icon: AlertTriangle 
  },
  { 
    text: "Giám sát điện năng (EM)", 
    subText: "Đo lường và tính toán mức tiêu thụ điện năng trên từng đầu máy để tối ưu chi phí năng lượng.",
    icon: Zap 
  },
  { 
    text: "Giám sát vị trí (LM)", 
    subText: "Định vị chính xác vị trí tài sản và thiết bị di động trong nhà máy theo thời gian thực.",
    icon: MapPin 
  },
];

const MaintenanceMonitor = () => {
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
          alt="Hệ thống giám sát bảo trì"
          className="w-[95%] h-auto md:h-[600px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Giám sát & Bảo trì thiết bị */}
        <FeatureSection
          tag={{ icon: Wrench, text: "Smart Maintenance", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Giám sát & Bảo trì <br/> Thiết bị toàn diện</span>
          }
          description="Hệ thống cung cấp giải pháp quản lý vòng đời tài sản khép kín: từ giám sát hiệu suất (OEE), dự báo lỗi (SM) đến quản lý năng lượng (EM) và định vị (LM). Giúp doanh nghiệp chuyển đổi từ bảo trì thụ động sang chủ động, tối đa hóa thời gian uptime của dây chuyền."
          features={Maintenance_Features}
          imageSrc={feature1} // Thay ảnh Dashboard giám sát OEE tại đây
          imageAlt="Giao diện phần mềm giám sát thiết bị"
          floatingBadge={{
            icon: Settings,
            title: "Vận hành tối ưu",
            subtitle: "Predictive Maint.",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        <a href="/AI&IoT">
            <Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">
                Trở về
            </Button>
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default MaintenanceMonitor;