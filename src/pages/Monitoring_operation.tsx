import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/MES_system/Monitoring_operation/HeroSection_Monitor";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
// Bộ icon chuyên dụng cho Giám sát & IoT
import { 
  Cpu, // Icon cho PLC/Controller
  Radio, // Icon cho SCADA/Tín hiệu
  Wifi, // Icon cho IoT/Kết nối
  BarChart3, // Icon biểu đồ sản lượng
  Timer, // Icon thời gian chạy dừng
  Activity, // Icon hoạt động/nhịp tim hệ thống
  Server, // Icon badge hệ thống trung tâm
  Zap // Icon badge hiệu suất/tức thì
} from "lucide-react";

import feature1 from "@/assets/giamsatvhsx1.png"; // Nên dùng ảnh sơ đồ kết nối IoT/SCADA
import feature2 from "@/assets/giamsatvhsx2.png"; // Nên dùng ảnh Dashboard biểu đồ sản lượng
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/giamsatvhsx.png";

// Feature 1: Thu thập dữ liệu (Data Collection)
const Data_Features = [
  { 
    text: "Kết nối PLC & SCADA", 
    subText: "Tích hợp trực tiếp với bộ điều khiển máy móc, xóa bỏ việc ghi chép thủ công.",
    icon: Cpu 
  },
  { 
    text: "Mạng lưới IoT thời gian thực", 
    subText: "Truyền tải dữ liệu hoạt động của toàn bộ nhà máy liên tục, không độ trễ.",
    icon: Wifi 
  },
  { 
    text: "Giám sát tập trung", 
    subText: "Hiển thị trực quan trạng thái hoạt động của mọi dây chuyền trên một nền tảng duy nhất.",
    icon: Radio 
  },
];

// Feature 2: Vận hành & Sản lượng (Operation & Output)
const Operation_Features = [
  { 
    text: "Tự động tính toán sản lượng",
    subText: "Tổng hợp chính xác số lượng thành phẩm/phế phẩm theo từng khung giờ thực tế.",
    icon: BarChart3 
  },
  { 
    text: "Theo dõi trạng thái Chạy - Dừng",
    subText: "Phân tích chi tiết thời gian hoạt động (Uptime) và cảnh báo ngay khi máy dừng đột ngột.",
    icon: Timer 
  },
];

const ManufacturingMonitoring = () => {
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
          alt="Hệ thống giám sát sản xuất"
          className="w-[95%] h-auto md:h-[600px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Thu thập dữ liệu & Kết nối */}
        <FeatureSection
          tag={{ icon: Activity, text: "Real-time Monitoring", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Giám sát trung tâm & Kết nối IoT</span>
          }
          // Sử dụng đoạn văn 1 bạn cung cấp làm mô tả chính
          description="Hệ thống giám sát trung tâm dựa trên nền tảng IoT và SCADA mang lại dữ liệu chính xác và khả năng cập nhật tức thì. Việc kết nối trực tiếp giúp doanh nghiệp quản lý hiệu quả toàn bộ hoạt động sản xuất theo thời gian thực."
          features={Data_Features}
          imageSrc={feature1}
          imageAlt="Sơ đồ kết nối IoT SCADA"
          floatingBadge={{
            icon: Server,
            title: "Kết nối sâu rộng",
            subtitle: "PLC • SCADA • IoT",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Vận hành & Sản lượng */}
        <FeatureSection
          tag={{ icon: BarChart3, text: "Operation Management", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Quản lý vận hành & Sản lượng</span>
          }
          // Sử dụng đoạn văn 2 bạn cung cấp, biên tập lại một chút để mượt hơn
          description="Thay thế quy trình giám sát truyền thống bằng hệ thống tự động hóa. Phần mềm không chỉ tổng hợp sản lượng chính xác mà còn giám sát chặt chẽ trạng thái vận hành, giúp ban quản lý phát hiện ngay các bất thường và nắm bắt tình hình sản xuất tại từng thời điểm mà không cần chờ báo cáo cuối ngày."
          features={Operation_Features}
          imageSrc={feature2}
          imageAlt="Dashboard giám sát vận hành"
          floatingBadge={{
            icon: Zap,
            title: "Phản ứng tức thì",
            subtitle: "Alerts • Uptime • OEE",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />
        
        <a href="/mes">
            <Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">
                Trở về
            </Button>
        </a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ManufacturingMonitoring;