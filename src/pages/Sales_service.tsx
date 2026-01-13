import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Erp_system/Sales_services/HeroSection_sales";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
// Đã cập nhật lại bộ icon phù hợp với HR và Kế toán
import { 
  Users, // Icon cho nhân sự
  Clock, // Icon chấm công
  Calculator, // Icon tính lương
  FileCheck, // Icon báo cáo
  PieChart, // Icon tài chính
  Wallet, // Icon ngân sách
  RefreshCw, // Icon tự động hóa
  BarChart3, // Icon báo cáo đa chiều
  UserCheck, // Icon badge nhân sự
  TrendingUp // Icon badge tài chính
} from "lucide-react";
import feature1 from "@/assets/quanlyhopdong.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/KDDV.png";
import { sub } from "date-fns";

const designFeatures = [
  { text: "Soạn thảo & lưu trữ hợp đồng tập trung", 
    subText: "Quản lý toàn bộ hợp đồng theo mẫu chuẩn, lưu trữ điện tử an toàn, dễ tìm kiếm và tra cứu.",
    icon: FileCheck }, // Đổi từ Clock -> FileCheck (Hợp đồng/Tài liệu)
  { text: "Phê duyệt & theo dõi tiến độ hợp đồng", 
    subText:"Thiết lập quy trình phê duyệt linh hoạt, theo dõi trạng thái ký kết và thực hiện hợp đồng theo thời gian thực.",
    icon: RefreshCw }, // Đổi từ Calculator -> RefreshCw (Quy trình/Tiến độ)
  { text: "Tích hợp chữ ký điện tử", 
    subText:"Cho phép chèn chữ ký viết tay hoặc chữ ký số lên hợp đồng",
    icon: Clock }, // Đổi từ FileCheck -> Clock (Thời gian/Hạn)
    { text: "Quản lý rủi ro & cảnh báo pháp lý", 
    subText:"Tự động nhắc hạn hiệu lực, thanh toán, gia hạn hợp đồng, giúp giảm thiểu rủi ro và sai sót pháp lý.",
    icon: Clock }, // Đổi từ FileCheck -> Clock (Thời gian/Hạn)

];

const KDDV = () => {
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
          className="w-[95%] h-auto md:h-[600px] object-fit justify-center"
        />
        
        {/* Floating Stats */}
       
      </motion.div>

        {/* Section 1: Quản lý nhân sự - Badge cập nhật về HRM */}
        <FeatureSection
          tag={{ icon: Users, text: "Phần mềm quản lý", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Quản lý hợp đồng</span>
          }
          description="Số hóa toàn diện quy trình soạn thảo, phê duyệt và lưu trữ hợp đồng, giúp doanh nghiệp dễ dàng theo dõi tiến độ thực hiện và quản lý rủi ro pháp lý."
          features={designFeatures}
          imageSrc={feature1}
          imageAlt="Quản lý nhân sự"
          floatingBadge={{
            icon: FileCheck,
            title: "Tối ưu nguồn lực",
            subtitle: "HRM • KPI • Payroll",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Quản lý kế toán - Badge cập nhật về Tài chính */}
        
        <a href="/erp"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default KDDV;