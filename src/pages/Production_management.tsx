import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/MES_system/Production_management/HeroSection_Production";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
// Đã cập nhật lại bộ icon phù hợp với Quản lý sản xuất (Production Management)
import { 
  ClipboardList, // Icon quản lý lệnh/kế hoạch (thay cho Users/Clock cũ)
  CalendarClock, // Icon tiến độ/thời gian
  CheckCircle2, // Icon hoàn thành/đảm bảo
  Activity, // Icon năng suất/hoạt động
  Users, // Icon nhân sự (giữ lại cho phần đánh giá nhân sự)
  BarChart4, // Icon đánh giá hiệu quả
  Settings2, // Icon badge cấu hình/tối ưu
  Timer // Icon badge thời gian thực
} from "lucide-react";

import feature1 from "@/assets/qllenhsanxuat.png"; // Lưu ý: Nên thay ảnh này bằng ảnh dashboard sản xuất nếu có
import feature2 from "@/assets/qllenhsx1.png"; // Lưu ý: Nên thay ảnh này bằng ảnh báo cáo năng suất nếu có
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/quanly.png";

// Feature 1: Quản lý lệnh sản xuất (Work Order Management)
const Work_Features = [
  { 
    text: "Lập kế hoạch & Phân công", 
    subText: "Số hóa quy trình tạo lập lệnh sản xuất và phân bổ nguồn lực tự động, giảm thiểu sai sót thủ công.",
    icon: ClipboardList 
  },
  { 
    text: "Giám sát tiến độ 24/7", 
    subText: "Theo dõi trạng thái thực hiện đơn hàng theo thời gian thực (Real-time), đảm bảo bám sát Deadline.",
    icon: CalendarClock 
  },
  { 
    text: "Nghiệm thu & Hoàn thành", 
    subText: "Quy trình nghiệm thu chặt chẽ, đảm bảo sản phẩm đầu ra đạt chất lượng trước khi đóng lệnh.",
    icon: CheckCircle2 
  },
];

// Feature 2: Theo dõi năng suất (Productivity Monitoring)
const Productivity_Features = [
  { 
    text: "Đo lường năng suất đa chiều",
    subText: "Tự động tổng hợp dữ liệu sản lượng theo từng Ca làm việc, Tổ đội và Dây chuyền cụ thể.",
    icon: Activity 
  },
  { 
    text: "Đánh giá hiệu quả nhân sự",
    subText: "Cung cấp báo cáo minh bạch về hiệu suất làm việc của từng công nhân tại hiện trường (Shop-floor).",
    icon: Users 
  },
];

const ProductionManagement = () => {
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

        {/* Section 1: Quản lý lệnh sản xuất */}
        <FeatureSection
          tag={{ icon: ClipboardList, text: "Work Order Management", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Quản lý vòng đời lệnh sản xuất</span>
          }
          description="Chức năng cụ thể :"
          features={Work_Features}
          imageSrc={feature1}
          imageAlt="Giao diện quản lý lệnh sản xuất"
          floatingBadge={{
            icon: Settings2,
            title: "Tối ưu quy trình",
            subtitle: "Planning • Scheduling • Tracking",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Theo dõi năng suất */}
        <FeatureSection
          tag={{ icon: BarChart4, text: "Productivity Monitoring", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Theo dõi năng suất & Hiệu quả</span>
          }
          description="Chức năng cụ thể :"
          features={Productivity_Features}
          imageSrc={feature2}
          imageAlt="Báo cáo năng suất lao động"
          floatingBadge={{
            icon: Timer,
            title: "Giám sát thực tế",
            subtitle: "Performance • KPI • Real-time",
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

export default ProductionManagement;