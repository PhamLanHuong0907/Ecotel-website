import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Erp_system/Sales_services/HeroSection_sales";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Đã cập nhật lại bộ icon phù hợp với HR và Kế toán
import { 
  Users, // Icon cho nhân sự/khách hàng
  Clock, // Icon chấm công
  Calculator, // Icon tính lương
  FileCheck, // Icon báo cáo/hợp đồng
  PieChart, // Icon tài chính/phân tích
  Wallet, // Icon ngân sách
  RefreshCw, // Icon tự động hóa
  BarChart3, // Icon báo cáo đa chiều
  UserCheck, // Icon badge nhân sự/CSKH
  TrendingUp // Icon badge tài chính/tăng trưởng
} from "lucide-react";

import feature1 from "@/assets/quanlyhopdong.png";
// Giả định bạn có ảnh cho phần CRM, nếu chưa có hãy đổi tên file ảnh tương ứng
import feature2 from "@/assets/kinhdoanhdv_crm.png"; 

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/KDDV.png";

// Dữ liệu cho phần Quản lý hợp đồng
const Feature1 = [
  { text: "Soạn thảo & lưu trữ hợp đồng tập trung", 
    subText: "Quản lý toàn bộ hợp đồng theo mẫu chuẩn, lưu trữ điện tử an toàn, dễ tìm kiếm và tra cứu.",
    icon: FileCheck }, 
  { text: "Phê duyệt & theo dõi tiến độ hợp đồng", 
    subText:"Thiết lập quy trình phê duyệt linh hoạt, theo dõi trạng thái ký kết và thực hiện hợp đồng theo thời gian thực.",
    icon: RefreshCw }, 
  { text: "Tích hợp chữ ký điện tử", 
    subText:"Cho phép chèn chữ ký viết tay hoặc chữ ký số lên hợp đồng",
    icon: Clock }, 
  { text: "Quản lý rủi ro & cảnh báo pháp lý", 
    subText:"Tự động nhắc hạn hiệu lực, thanh toán, gia hạn hợp đồng, giúp giảm thiểu rủi ro và sai sót pháp lý.",
    icon: Clock }, 
];

// Dữ liệu MỚI: Quản lý quan hệ khách hàng (CRM)
const Feature2 = [
  { text: "Quản lý thông tin khách hàng ", 
    subText: "Lưu trữ tập trung thông tin liên hệ, lịch sử giao dịch và tương tác, giúp thấu hiểu khách hàng toàn diện.",
    icon: Users }, // Sử dụng icon Users cho khách hàng
  { text: "Quản lý cơ hội & Pipeline bán hàng", 
    subText:"Theo dõi hành trình khách hàng từ tiềm năng (Lead) đến chốt đơn, trực quan hóa quy trình bán hàng (Sales Pipeline).",
    icon: TrendingUp }, // Sử dụng TrendingUp cho cơ hội/doanh số
  { text: "Chăm sóc khách hàng tự động", 
    subText:"Tự động hóa gửi Email/SMS chăm sóc, nhắc lịch hẹn và tiếp nhận phản hồi để nâng cao trải nghiệm khách hàng.",
    icon: RefreshCw }, // Sử dụng RefreshCw cho tự động hóa
  { text: "Phân tích hiệu quả kinh doanh", 
    subText:"Báo cáo chi tiết về doanh số, tỷ lệ chuyển đổi và hiệu suất nhân viên kinh doanh theo thời gian thực.",
    icon: PieChart }, // Sử dụng PieChart cho báo cáo
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
      </motion.div>

        {/* Section 1: Quản lý hợp đồng */}
        <FeatureSection
          tag={{ icon: FileCheck, text: "Phần mềm quản lý", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Quản lý hợp đồng</span>
          }
          description="Số hóa toàn diện quy trình soạn thảo, phê duyệt và lưu trữ hợp đồng, giúp doanh nghiệp dễ dàng theo dõi tiến độ thực hiện và quản lý rủi ro pháp lý."
          features={Feature1} // Đã sửa từ designFeatures thành Feature1
          imageSrc={feature1}
          imageAlt="Quản lý hợp đồng"
          floatingBadge={{
            icon: FileCheck,
            title: "Tối ưu pháp lý",
            subtitle: "Contract • Sign • Store",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Quản lý quan hệ khách hàng (CRM) - MỚI THÊM VÀO */}
        <FeatureSection
          tag={{ icon: Users, text: "Giải pháp kinh doanh", colorClass: "bg-blue-500/10 text-blue-600" }}
          title={
            <span className="gradient-text">Quản lý quan hệ khách hàng (CRM)</span>
          }
          description="Tối ưu hóa quy trình bán hàng và chăm sóc khách hàng, giúp doanh nghiệp gia tăng tỷ lệ chuyển đổi và xây dựng mối quan hệ bền vững."
          features={Feature2} // Sử dụng dữ liệu Feature2
          imageSrc={feature2 || feature1} // Fallback về feature1 nếu chưa có ảnh feature2
          imageAlt="Quản lý quan hệ khách hàng CRM"
           // Đảo ngược vị trí ảnh và chữ để bố cục so le đẹp mắt
          floatingBadge={{
            icon: UserCheck,
            title: "Thúc đẩy doanh số",
            subtitle: "CRM • Leads • Support",
            iconBgClass: "bg-blue-600",
            iconColorClass: "text-white"
          }}
          reverse = {true}
          glowClass="from-blue-500/20 to-cyan-500/20"
        />

        <a href="/erp"><Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">Trở về</Button></a>
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default KDDV;