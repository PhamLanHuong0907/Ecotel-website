import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Erp_system/ERP&BI_Solutions/HeroSection_ERP&BI_Solutions";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
// Đã thêm BarChart, FileText, Users vào import để có icon phù hợp
import { Cog, Cpu, Zap, Target, Settings, Shield, Wrench, Factory, CheckCircle2, BarChart, FileText, Users } from "lucide-react";
import feature1 from "@/assets/Hethongql1.png";
import { Button } from "@/components/ui/button";// Data
import { motion } from "framer-motion";
import erp_bi from "@/assets/erp&bi2.jpg";

// 1. Data cho phần BI (Báo cáo quản trị)
const biFeatures = [
  { text: "Thu thập & phân tích dữ liệu đa nguồn", icon: Cog },
  { text: "Trực quan hóa dữ liệu (Dashboard)", icon: BarChart },
  { text: "Hỗ trợ ra quyết định nhanh chóng, chính xác", icon: Target },
];

// 2. Data cho phần ERP (Tài chính, Kế toán)
const erpFeatures = [
  { text: "Tích hợp quy trình văn phòng (Kế toán, Nhân sự)", icon: Users },
  { text: "Quản lý tài liệu & Lập kế hoạch tài nguyên", icon: Settings },
  { text: "Kết nối dữ liệu trực tiếp từ khối sản xuất (MES)", icon: Factory },
];

// 3. Data cho phần MDO (Văn phòng số)
const mdoFeatures = [
  { text: "Quản lý công việc & Sáng kiến cải tiến", icon: Zap },
  { text: "Quản lý văn bản & Tài liệu số hóa", icon: FileText },
  { text: "Tích hợp trình ký điện tử", icon: Shield },
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
        <FeatureSection
          tag={{ icon: Cpu, text: "Quản trị nguồn lực", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Hệ thống ERP tích hợp</span>
          }
          description="Xây dựng nền tảng duy nhất tích hợp tất cả quy trình văn phòng (HRM, Tài chính, Kế toán) và kết nối liền mạch với dữ liệu từ khối sản xuất (MES), tạo nên dòng chảy thông tin xuyên suốt."
          features={erpFeatures}
          imageSrc={feature1} // Bạn có thể thay ảnh riêng cho phần ERP tại đây
          imageAlt="Hệ thống ERP"
          floatingBadge={{
            icon: Factory,
            title: "Kết nối MES",
            subtitle: "Office - Factory",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true} // Đảo chiều ảnh và chữ
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />

        {/* SECTION 3: VĂN PHÒNG SỐ (MDO) */}
        <FeatureSection
          tag={{ icon: Wrench, text: "Chuyển đổi số", colorClass: "bg-blue-500/10 text-blue-500" }}
          title={
            <span className="gradient-text">Văn phòng số (MDO)</span>
          }
          description="Số hóa toàn diện môi trường làm việc với các công cụ quản lý nhân sự, công việc, sáng kiến cải tiến và hệ thống ký điện tử, giúp tối ưu hóa hiệu suất vận hành doanh nghiệp."
          features={mdoFeatures}
          imageSrc={feature1} // Bạn có thể thay ảnh riêng cho phần MDO tại đây
          imageAlt="Văn phòng số MDO"
          floatingBadge={{
            icon: CheckCircle2,
            title: "Không giấy tờ",
            subtitle: "Digital Office",
            iconBgClass: "bg-blue-500",
            iconColorClass: "text-white"
          }}
          glowClass="from-blue-500/20 to-purple-500/20"
        />

        <a href="/industrial"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Erp_Bi;