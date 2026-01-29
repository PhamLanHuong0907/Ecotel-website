import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/MES_system/Qms/HeroSection_Qms";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Bộ icon chuyên dụng cho QMS (Quality Management System)
import { 
  ShieldCheck, // Icon khiên bảo vệ/chất lượng
  ClipboardCheck, // Icon kiểm tra đầu vào/checklist
  ScanEye, // Icon giám sát/soi lỗi
  FileCheck, // Icon tiêu chuẩn/ISO
  AlertOctagon, // Icon cảnh báo lỗi
  BadgeCheck, // Icon chứng nhận/đạt chuẩn
  Microscope, // Icon kiểm định chi tiết
  CheckCircle2 // Icon hoàn thành/pass
} from "lucide-react";

import feature1 from "@/assets/qms_1.jpg"; // Ảnh minh họa quy trình QMS
import feature2 from "@/assets/qms_2.jpg"; // Ảnh minh họa kiểm tra sản phẩm
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/qlqms.png";

// Feature 1: Kiểm soát toàn trình (Process Control)
const Control_Features = [
  { 
    text: "Kiểm soát nguyên liệu (IQC)", 
    subText: "Đánh giá chất lượng đầu vào, ngăn chặn nguyên liệu lỗi ngay từ cửa kho.",
    icon: ClipboardCheck 
  },
  { 
    text: "Giám sát công đoạn (PQC)", 
    subText: "Theo dõi chất lượng bán thành phẩm tại từng công đoạn (In-process) để xử lý tức thời.",
    icon: ScanEye 
  },
  { 
    text: "Kiểm định thành phẩm (OQC)", 
    subText: "Đảm bảo 100% sản phẩm xuất xưởng đáp ứng tiêu chuẩn kỹ thuật đã cam kết.",
    icon: ShieldCheck 
  },
];

// Feature 2: Tiêu chuẩn & Giảm lỗi (Standards & Defect Reduction)
const Compliance_Features = [
  { 
    text: "Tuân thủ tiêu chuẩn (ISO/TCVN)",
    subText: "Tự động hóa quy trình kiểm tra theo các bộ tiêu chuẩn thiết lập sẵn.",
    icon: FileCheck 
  },
  { 
    text: "Cảnh báo & Giảm thiểu sai lỗi",
    subText: "Phát hiện sớm các xu hướng lỗi (Defect trends) để điều chỉnh quy trình sản xuất.",
    icon: AlertOctagon 
  },
];

const QualityManagement = () => {
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
          alt="Quản lý chất lượng QMS"
          className="w-[95%] h-auto md:h-[600px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Tổng quan QMS */}
        <FeatureSection
          tag={{ icon: ShieldCheck, text: "Quality Management System", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Kiểm soát chất lượng toàn diện</span>
          }
          // Sử dụng đoạn văn 1 (text-primary) bạn cung cấp
          description="Số hóa quy trình quản lý chất lượng (QMS): Kiểm soát toàn diện, Giảm thiểu sai lỗi và Nâng cao uy tín thương hiệu. Hệ thống thay thế các quy trình kiểm tra thủ công rời rạc bằng một nền tảng số hóa thống nhất."
          features={Control_Features}
          imageSrc={feature1}
          imageAlt="Sơ đồ quy trình QMS"
          floatingBadge={{
            icon: CheckCircle2,
            title: "Quy trình khép kín",
            subtitle: "IQC • PQC • OQC",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Chi tiết & Tuân thủ */}
        <FeatureSection
          tag={{ icon: BadgeCheck, text: "Standard Compliance", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Tuân thủ tiêu chuẩn & Giảm lãng phí</span>
          }
          // Sử dụng đoạn văn 2 (text-muted-foreground) bạn cung cấp
          description="ECOTEL cung cấp công cụ giám sát chất lượng xuyên suốt vòng đời sản xuất. Từ việc kiểm định nguyên liệu đầu vào đến nghiệm thu thành phẩm, hệ thống đảm bảo mọi khâu đều đáp ứng tiêu chuẩn kỹ thuật, giúp doanh nghiệp tự tin cam kết chất lượng tốt nhất với khách hàng."
          features={Compliance_Features}
          imageSrc={feature2}
          imageAlt="Kiểm tra chất lượng sản phẩm"
          floatingBadge={{
            icon: Microscope,
            title: "Độ chính xác cao",
            subtitle: "Zero Defects Goal",
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

export default QualityManagement;