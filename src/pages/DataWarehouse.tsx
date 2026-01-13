import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/DataWarehouse/HeroSection_DataWarehouse";
import { FeatureSection } from "@/components/FeatureSection";
// Cập nhật bộ icon cho phù hợp với Data Warehouse
import { 
  Factory, 
  Activity, 
  Settings, 
  Cpu,
  // Các icon mới thêm cho phù hợp ngữ cảnh dữ liệu
  Database,   // Cho lưu trữ
  Brain,      // Cho AI/ML
  FileCheck,  // Cho dữ liệu sạch
  BarChart3,  // Cho BI
  Target,     // Cho ra quyết định chính xác
  Eye         // Giữ lại nếu cần dùng
} from "lucide-react";

import feature1 from "@/assets/datawarehouse1 (2).png"; // Ảnh băng tải vận hành
import feature2 from "@/assets/datawarehouse2.jpg"; // Ảnh phân tích Camera AI
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/datawarehouse.png";

// Feature 1: Đối với chuyên gia dữ liệu (Data Experts)
const Operation_Features = [
  { 
    text: "Cung cấp hệ thống lưu trữ linh hoạt", 
    icon: Database // Đổi icon thành Database
  },
  { 
    text: "Hỗ trợ AI/ML, phân tích dữ liệu lớn", 
    icon: Brain // Đổi icon thành Brain (AI) hoặc Cpu
  },
  { 
    text: "Đảm bảo dữ liệu sạch, có cấu trúc và dễ truy xuất", 
    icon: FileCheck // Đổi icon thành FileCheck
  },
];

// Feature 2: Đối với người kinh doanh (Business Experts)
const Feature2 = [
  {
    text: "Tích hợp công cụ BI (Business Intelligence)",
    icon: BarChart3 // Đổi icon thành Biểu đồ
  },
  {
    text: "Phân tích dữ liệu thời gian thực",
    icon: Activity // Icon Activity thể hiện tính realtime
  },
  {
    text: "Hỗ trợ đưa ra quyết định nhanh chóng, chính xác",
    icon: Target // Icon Target thể hiện sự chính xác/mục tiêu
  }
]

const DataWarehouse = () => {
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
          alt="Hệ thống băng tải công nghiệp"
          className="w-[95%] h-auto md:h-[600px] object-fit justify-center"
        />
      </motion.div>

        {/* Section 1: Chuyên gia dữ liệu */}
        <FeatureSection
          tag={{ icon: Factory, text: "Data Warehouse", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Đối với chuyên gia dữ liệu</span>
          }
          // Đã chỉnh sửa description khớp với feature con
          description="Cung cấp nền tảng hạ tầng dữ liệu mạnh mẽ, tối ưu hóa cho việc lưu trữ linh hoạt và xử lý Big Data. Đây là môi trường lý tưởng để huấn luyện các mô hình AI/ML tiên tiến, đồng thời đảm bảo nguồn dữ liệu luôn sạch, có cấu trúc và dễ dàng truy xuất phục vụ kỹ thuật."
          features={Operation_Features}
          imageSrc={feature1}
          imageAlt="Hệ thống dữ liệu thông minh"
          floatingBadge={{
            icon: Database,
            title: "Dữ liệu tập trung",
            subtitle: "Centralized Data",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Người kinh doanh */}
        <FeatureSection
          tag={{ icon: Cpu, text: "AI & Analytics", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Đối với người kinh doanh</span>
          }
          // Đã chỉnh sửa description khớp với feature con
          description="Biến dữ liệu thô thành tài sản giá trị thông qua việc tích hợp các công cụ BI trực quan. Hệ thống phân tích thời gian thực giúp nhà quản lý nắm bắt toàn cảnh hoạt động doanh nghiệp, từ đó đưa ra các quyết định chiến lược nhanh chóng và chính xác dựa trên số liệu thực tế."
          features={Feature2}
          imageSrc={feature2}
          imageAlt="Phân tích dữ liệu kinh doanh"
          floatingBadge={{
            icon: Eye,
            title: "Thông tin chi tiết",
            subtitle: "Business Insights",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />
        
        <a href="/datawarehouse">
            <Button className="w-[100px] h-[50px] ml-[47%] mb-6 group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 ">
                Trở về
            </Button>
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default DataWarehouse;