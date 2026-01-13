import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/MES_system/Conveyor_monitoring/HeroSection_Conveyor";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
// Bộ icon chuyên dụng cho Băng tải & Máy móc
import { 
  RefreshCcw, // (Lưu ý: Nếu không có icon Conveyor, dùng Factory hoặc RefreshCw)
  Factory, 
  ThermometerSun, // Icon nhiệt độ cao/động cơ
  Eye, // Icon Camera/AI
  Activity, // Icon hoạt động/status
  Settings, // Icon cài đặt/điều chỉnh
  Link, // Icon kết nối hệ thống
  Cpu // Icon xử lý trung tâm
} from "lucide-react";

import feature1 from "@/assets/giamsatbangtai_1.png"; // Ảnh băng tải vận hành
import feature2 from "@/assets/giamsatbangtai_2.jpg"; // Ảnh phân tích Camera AI
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/giamsatbangtai.png";

// Feature 1: Vận hành cơ khí (Mechanical Operation)
const Operation_Features = [
  { 
    text: "Giám sát trạng thái chạy/dừng", 
    subText: "Theo dõi thời gian thực hoạt động của băng tải, phát hiện lỗi dừng đột ngột.",
    icon: Activity 
  },
  { 
    text: "Đo nhiệt độ động cơ", 
    subText: "Cảm biến giám sát nhiệt độ mô-tơ và vòng bi, cảnh báo sớm nguy cơ quá tải hoặc cháy nổ.",
    icon: ThermometerSun 
  },
];

// Feature 2: Công nghệ thông minh (Smart Tech)
const Tech_Features = [
  { 
    text: "Camera AI phát hiện lệch băng",
    subText: "Phân tích hình ảnh để phát hiện độ lệch, tự động kích hoạt cơ chế điều chỉnh.",
    icon: Eye 
  },
  { 
    text: "Tích hợp SOC & ERP",
    subText: "Kết nối dữ liệu vận hành với hệ thống quản trị để tối ưu hóa kế hoạch bảo trì.",
    icon: Link 
  },
];

const ConveyorMonitoring = () => {
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
          alt="Hệ thống băng tải công nghiệp"
          className="w-[95%] h-auto md:h-[500px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Giám sát vận hành */}
        <FeatureSection
          tag={{ icon: Factory, text: "Conveyor Operation", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Giám sát vận hành băng tải</span>
          }
          // Sử dụng nội dung bạn đã duyệt ở các bước trước
          description="Nâng cấp quy trình vận hành với công nghệ giám sát băng tải thông minh. Thay vì kiểm tra thủ công, doanh nghiệp cần một 'đôi mắt' công nghệ hoạt động 24/7 để phát hiện các bất thường nhỏ nhất, đảm bảo vận hành ổn định và giảm thiểu sự cố."
          features={Operation_Features}
          imageSrc={feature1}
          imageAlt="Hệ thống băng tải thông minh"
          floatingBadge={{
            icon: Settings,
            title: "Vận hành ổn định",
            subtitle: "Monitoring 24/7",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Công nghệ AI & Tích hợp */}
        <FeatureSection
          tag={{ icon: Cpu, text: "AI & Integration", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Camera AI & Tích hợp hệ thống</span>
          }
          description="Ứng dụng Camera AI và cảm biến IoT, giải pháp của ECOTEL tự động phát hiện tình trạng lệch băng, giám sát nhiệt độ vòng bi/mô-tơ để ngăn ngừa nguy cơ cháy nổ. Dữ liệu được đồng bộ về trung tâm điều hành (SOC/ERP) giúp xử lý sự cố tự động và chính xác."
          features={Tech_Features}
          imageSrc={feature2}
          imageAlt="Phân tích lệch băng bằng AI"
          floatingBadge={{
            icon: Eye,
            title: "Công nghệ AI",
            subtitle: "Vision Analysis",
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
      </main>

      <Footer />
    </div>
  );
};

export default ConveyorMonitoring;