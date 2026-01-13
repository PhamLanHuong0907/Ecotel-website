import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Erp_system/Resource_management/HeroSection_resource";
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
import feature1 from "@/assets/quanlynhansu_luong.png";
import feature2 from "@/assets/ketoan.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/quantringuonluc.png";
import { sub } from "date-fns";

const designFeatures = [
  { text: "Chấm công và quản lý thời gian tự động", subText: "Theo dõi giờ làm việc, tăng ca, đi muộn – về sớm và nghỉ phép theo thời gian thực.",icon: Clock },
  { text: "Tính lương chính xác, linh hoạt", 
    subText:"Tự động tổng hợp chấm công, KPI, phụ cấp và khấu trừ theo nhiều chính sách lương.",
    icon: Calculator },
  { text: "Quy trình lương và báo cáo tập trung", 
    subText:"Chuẩn hóa quy trình duyệt – chi trả lương, cung cấp báo cáo trực quan cho nhà quản lý.",
    icon: FileCheck },
];

const setupFeatures = [
  { text: "Quản lý dòng tiền và ngân sách hiệu quả",
    subText: "Kiểm soát thu - chi theo thời gian thực, cảnh báo vượt ngân sách và tối ưu dòng vốn.",
    icon: Wallet },
  { text: "Tự động hóa nghiệp vụ kế toán",
    subText:"Kết nối Thuế, hóa đơn điện tử và ngân hàng, tự động hạch toán, giảm mạnh thao tác thủ công.",
     icon: RefreshCw },
  { text: "Báo cáo tài chính & quản trị đa chiều", 
    subText:"Cung cấp tức thì P&L, cân đối kế toán và các báo cáo phân tích phục vụ quyết định chiến lược.",
    icon: BarChart3 },
];

const Giaiphapkho = () => {
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
        
        {/* Floating Stats */}
       
      </motion.div>

        {/* Section 1: Quản lý nhân sự - Badge cập nhật về HRM */}
        <FeatureSection
          tag={{ icon: Users, text: "Phần mềm quản lý", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Quản lý nhân sự, tiền lương</span>
          }
          description="Chuyển đổi số toàn diện công tác quản trị nguồn nhân lực, giúp tự động hóa quy trình chấm công - tính lương phức tạp và xây dựng đội ngũ gắn kết."
          features={designFeatures}
          imageSrc={feature1}
          imageAlt="Quản lý nhân sự"
          floatingBadge={{
            icon: UserCheck,
            title: "Tối ưu nguồn lực",
            subtitle: "HRM • KPI • Payroll",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Quản lý kế toán - Badge cập nhật về Tài chính */}
        <FeatureSection
          tag={{ icon: PieChart, text: "Phần mềm quản lý", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Quản lý tài chính, kế toán</span>
          }
          description="Đảm bảo tính minh bạch và chính xác tuyệt đối trong dòng chảy tài chính, cung cấp số liệu thực giúp ban lãnh đạo đưa ra các quyết định chiến lược kịp thời."
          features={setupFeatures}
          imageSrc={feature2}
          imageAlt="Quản lý tài chính"
          floatingBadge={{
            icon: TrendingUp,
            title: "Tài chính thông minh",
            subtitle: "Cashflow • ROI • VAS",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />
        <a href="/erp"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Giaiphapkho;