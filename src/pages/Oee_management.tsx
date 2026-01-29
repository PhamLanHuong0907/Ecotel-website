import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/MES_system/Oee-management/HeroSection_Oee";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Bộ icon chuyên dụng cho OEE và Hiệu suất
import { 
  Gauge, // Icon đồng hồ đo OEE tổng thể
  Timer, // Icon cho Availability (Thời gian)
  Zap, // Icon cho Performance (Tốc độ/Hiệu suất)
  ShieldCheck, // Icon cho Quality (Chất lượng)
  Search, // Icon tìm kiếm nguyên nhân/điểm nghẽn
  Wrench, // Icon bảo trì/sửa chữa
  TrendingUp, // Icon cải thiện/tăng trưởng
  Microscope // Icon phân tích sâu
} from "lucide-react";

import feature1 from "@/assets/Screenshot 2025-12-10 154157.png"; // Ảnh minh họa Dashboard OEE (cần thay thế ảnh thực tế)
import feature2 from "@/assets/qlhstb.png"; // Ảnh minh họa Phân tích lỗi/Bảo trì
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/qlhstb_big.png";

// Feature 1: Ba chỉ số cốt lõi (The 3 OEE Metrics)
const OEE_Metrics_Features = [
  { 
    text: "Availability (Mức độ sẵn sàng)", 
    subText: "Đo lường thời gian máy chạy thực tế so với kế hoạch, loại bỏ thời gian chết (Downtime).",
    icon: Timer 
  },
  { 
    text: "Performance (Hiệu suất vận hành)", 
    subText: "So sánh tốc độ chạy máy thực tế với tốc độ thiết kế lý tưởng (Cycle time).",
    icon: Zap 
  },
  { 
    text: "Quality (Chất lượng sản phẩm)", 
    subText: "Tỷ lệ sản phẩm đạt chuẩn (Good Count) so với tổng sản phẩm sản xuất ra.",
    icon: ShieldCheck 
  },
];

// Feature 2: Phân tích & Cải thiện (Analysis & Improvement)
const Optimization_Features = [
  { 
    text: "Xác định điểm nghẽn (Bottlenecks)",
    subText: "Tự động chỉ ra công đoạn hoặc thiết bị nào đang làm chậm toàn bộ dây chuyền.",
    icon: Search 
  },
  { 
    text: "Đề xuất bảo trì dự đoán",
    subText: "Dựa trên xu hướng hiệu suất để cảnh báo bảo trì trước khi máy hỏng hóc.",
    icon: Wrench 
  },
];

const OEEManagement = () => {
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
          alt="Quản lý hiệu suất thiết bị OEE"
          className="w-[95%] h-auto md:h-[500px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Phân tích OEE (A-P-Q) */}
        <FeatureSection
          tag={{ icon: Gauge, text: "OEE Analysis", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Phân tích hiệu suất toàn diện</span>
          }
          // Sử dụng đoạn văn 1 bạn cung cấp
          description="Đánh giá sức khỏe dây chuyền sản xuất minh bạch dựa trên bộ ba chỉ số vàng: Availability (Sẵn sàng) – Performance (Hiệu suất) – Quality (Chất lượng). Hệ thống cung cấp cái nhìn khách quan nhất về năng lực sản xuất thực tế."
          features={OEE_Metrics_Features}
          imageSrc={feature1}
          imageAlt="Biểu đồ phân tích OEE"
          floatingBadge={{
            icon: Microscope,
            title: "Tiêu chuẩn vàng",
            subtitle: "A • P • Q Metrics",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Cải tiến & Bảo trì */}
        <FeatureSection
          tag={{ icon: TrendingUp, text: "Continuous Improvement", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Tối ưu hóa & Bảo trì dự đoán</span>
          }
          // Sử dụng đoạn văn 2 bạn cung cấp
          description="Để cải thiện năng suất, trước tiên cần hiểu rõ nguồn gốc của sự sụt giảm. Phần mềm giúp số hóa việc tính toán OEE, tự động chỉ ra các điểm nghẽn trong vận hành mà mắt thường khó nhận thấy. Dựa trên dữ liệu phân tích này, nhà quản lý có cơ sở vững chắc để đưa ra các quyết định bảo trì dự đoán và cải tiến quy trình, đảm bảo thiết bị luôn hoạt động ở trạng thái lý tưởng nhất."
          features={Optimization_Features}
          imageSrc={feature2}
          imageAlt="Báo cáo nguyên nhân dừng máy"
          floatingBadge={{
            icon: Wrench,
            title: "Khắc phục sự cố",
            subtitle: "Root Cause • Predictive",
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

export default OEEManagement;