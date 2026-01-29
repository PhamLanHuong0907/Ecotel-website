import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/AI_IOT/Vision_sensor/HeroSection_Vision_sensor";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Bộ icon chuyên dụng cho Băng tải & Máy móc
import { 
  RefreshCcw, // (Lưu ý: Nếu không có icon Conveyor, dùng Factory hoặc RefreshCw)
  Factory, 
  ThermometerSun, // Icon nhiệt độ cao/động cơ
  Eye, // Icon Camera/AI
  Activity, // Icon hoạt động/status
  Settings, // Icon cài đặt/điều chỉnh
  Link, // Icon kết nối hệ thống
  Cpu, // Icon xử lý trung tâm
  ScanLine, // Icon cho quét/OCR
  CheckCircle, // Icon cho kiểm tra lỗi
  Layers, // Icon cho phân loại
  BoxSelect // Icon cho chọn vùng/đếm
} from "lucide-react";

import feature1 from "@/assets/cambienhinhanh1.png"; // Ảnh băng tải vận hành (Cần thay ảnh sensor AI)
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/cambienhinhanh.png";

// Feature 1: Cảm biến hình ảnh AI
const VisionSensor_Features = [
  { 
    text: "Xác định & Phân loại bằng AI", 
    subText: "Tự động nhận diện vật thể, phân loại sản phẩm dựa trên hình dạng, màu sắc và đặc điểm với độ chính xác cao.",
    icon: Layers // Hoặc CheckCircle
  },
  { 
    text: "Đếm & Phân biệt bằng AI", 
    subText: "Đếm số lượng sản phẩm chính xác, phân biệt các biến thể sản phẩm (OK/NG) ngay trên dây chuyền.",
    icon: BoxSelect // Hoặc Activity
  },
  { 
    text: "OCR & Đếm thông qua AI", 
    subText: "Đọc ký tự quang học (OCR) để kiểm tra mã vạch, date code và đếm sản phẩm đi qua băng chuyền.",
    icon: ScanLine 
  },
];


const VisionSensor = () => {
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
          alt="Hệ thống cảm biến AI"
          className="w-[95%] h-auto md:h-[500px] object-cover justify-center"
        />
      </motion.div>

        {/* Section 1: Cảm biến hình ảnh AI */}
        <FeatureSection
          tag={{ icon: Eye, text: "AI Vision Sensor", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Cảm biến hình ảnh <br/> với AI tích hợp</span>
          }
          description="IV4 - Thế hệ cảm biến AI tiếp theo được thiết kế đặc biệt để giải quyết các thách thức trong phát hiện và kiểm tra lỗi. Công nghệ AI nâng cao cho phép thiết lập nhanh chóng, dễ dàng, mang lại giải pháp ổn định và đáng tin cậy cho dây chuyền sản xuất."
          features={VisionSensor_Features}
          imageSrc={feature1}
          imageAlt="Cảm biến hình ảnh IV4 AI"
          floatingBadge={{
            icon: Cpu,
            title: "Xử lý AI",
            subtitle: "Stable Solution",
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

export default VisionSensor;