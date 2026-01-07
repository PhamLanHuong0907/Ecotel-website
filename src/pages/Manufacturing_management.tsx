import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Erp_system/Manufacturing_operations/HeroSection_manufacturing";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
// Giữ nguyên các icon đã tối ưu cho từng nghiệp vụ
import { 
  Cog, Cpu, Zap, 
  Target, Settings, Shield, Factory, 
  CheckCircle2, 
  CalendarClock, 
  Activity, 
  MonitorCheck, 
  Wrench, 
  Package, 
  ScanBarcode, 
  RefreshCcw, 
  TrendingDown, 
  BarChart4 
} from "lucide-react";
import feature1 from "@/assets/Hethongql1.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/vanhanh_sx.png";

// Data giữ nguyên như đã cập nhật (có subText và icon đúng)
const Plan_Features = [
  { 
    text: "Lập kế hoạch sản xuất thông minh",
    subText: "Tự động xây dựng kế hoạch sản xuất chi tiết theo công đoạn, thiết bị và năng lực thực tế cho từng hoặc nhiều đơn hàng.",
    icon: CalendarClock 
  },
  { 
    text: "Giám sát vận hành sản xuất thời gian thực",
    subText: "Theo dõi lịch sản xuất, tiến độ thực hiện và tình trạng vận hành tại xưởng, giúp điều phối kịp thời và hiệu quả.",
    icon: Activity 
  },
  { 
    text: "Kiểm soát định mức & hiệu suất sản xuất",
    subText: "Quản lý định mức nguyên vật liệu, giám sát chất lượng, truy xuất nguồn gốc và đánh giá hiệu suất máy móc nhằm giảm lãng phí.",
    icon: Zap 
  },
];

const Property_Features = [
  {
    text: "Tích hợp dữ liệu ERP & các hệ thống khác",
    subText: "Kết nối với ERP, kế toán, bảo trì, quản lý kho.. để tổng hợp thông tin tài sản theo thời gian thực.",
    icon: Target 
  },
  {
    text: "Giám sát & Kiểm kê tài sản",
    subText: "Theo dõi vị trí, trạng thái, lịch sử sử dụng, khấu hao tài sản, giảm thất thoát",
    icon: Settings 
  },
  {
    text: "Phân tích & trực quan hóa với BI",
    subText: "Ứng dụng BI để trực quan hóa dữ liệu, hỗ trợ quản lý ra quyết định chính xác",
    icon: Shield
  },
  {
    text: "Quản lý bảo trì & vòng đời tài sản",
    subText: "Lập kế hoạch bảo trì định kỳ, cảnh báo hỏng hóc, tối ưu tuổi thọ thiết bị",
    icon: Wrench 
  }
];

const Database_Features = [
  {
    text: "Gán mã vạch cho từng sản phẩm và vật tư",
    subText: "Tạo và in mã định danh (QR/Barcode) duy nhất cho từng lô hàng ngay khi nhập kho.",
    icon: ScanBarcode, 
  },
  {
    text: "Tự động cập nhật dữ liệu chính xác",
    subText: "Đồng bộ hóa tồn kho tức thời trên hệ thống ngay khi quét mã, loại bỏ sai sót nhập liệu.",
    icon: RefreshCcw, 
  },
  {
    text: "Giảm thất thoát, tối ưu thời gian",
    subText: "Rút ngắn 70% thời gian kiểm kê và tìm kiếm hàng hóa, minh bạch hóa quy trình xuất nhập.",
    icon: TrendingDown, 
  }
];

const Hethongql = () => {
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

        {/* Section 1: Quản lý kế hoạch */}
        <FeatureSection
          // Đã revert colorClass về bg-primary/10 text-primary
          tag={{ icon: CalendarClock, text: "Điều phối sản xuất", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Quản lý kế hoạch và định mức</span>
          }
          description="Xây dựng kế hoạch sản xuất khoa học dựa trên năng lực thực tế, đồng thời kiểm soát chặt chẽ định mức nguyên vật liệu để giảm thiểu lãng phí."
          features={Plan_Features}
          imageSrc={feature1}
          imageAlt="Kế hoạch sản xuất"
          floatingBadge={{
            icon: BarChart4,
            title: "Tối ưu hiệu suất",
            subtitle: "OEE • Lean • JIT",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-blue-500/20 to-cyan-500/20"
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
        />

        {/* Section 2: Quản lý tài sản */}
        <FeatureSection
          // Đã revert colorClass về bg-primary/10 text-primary
          tag={{ icon: MonitorCheck, text: "Quản trị nguồn lực", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Quản lý tài sản</span>
          }
          description="Giải pháp Quản lý tài sản giúp tự động hóa việc theo dõi, kiểm soát và phân tích tài sản doanh nghiệp, đảm bảo sử dụng hiệu quả, giảm hao hụt và tối ưu chi phí."
          features={Property_Features}
          imageSrc={feature1}
          imageAlt="Quản lý tài sản"
          floatingBadge={{
            icon: Wrench,
            title: "Bảo trì thông minh",
            subtitle: "Preventive • ROI • Audit",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          glowClass="from-accent/20 to-primary/20"
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
        />

        {/* Section 3: Quản lý kho vận */}
        <FeatureSection
          // Đã revert colorClass về bg-primary/10 text-primary
          tag={{ icon: Package, text: "Logistics thông minh", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Quản lý kho vật tư</span>
          }
          description="Giải pháp quản lý kho bằng mã vạch (Barcode, QR Code) giúp tự động hóa quy trình nhập - xuất - kiểm kê, nâng cao tốc độ xử lý và độ chính xác trong quản lý hàng hóa."
          features={Database_Features}
          imageSrc={feature1}
          imageAlt="Quản lý kho"
          floatingBadge={{
            icon: ScanBarcode,
            title: "Kho vận 4.0",
            subtitle: "Barcode • RFID • FIFO",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-emerald-500/20 to-teal-500/20"
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
        />

        <a href="/erp"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Hethongql;