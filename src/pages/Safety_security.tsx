import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/AI_IOT/Security_safety/HeroSection_Securitysafety";
import { FeatureSection } from "@/components/FeatureSection";
import { CTASection } from "@/components/CTASection";
// Bộ icon chuyên dụng
import { 
  RefreshCcw, 
  Factory, 
  ThermometerSun, 
  Eye, 
  Activity, 
  Settings, 
  Link, 
  Cpu 
} from "lucide-react";

import feature1 from "@/assets/Cloudera.png"; // Ảnh minh họa
import feature2 from "@/assets/Cloudera.png"; // Ảnh minh họa
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/quantringuonluc.png";

// Feature 1: Giám sát phương tiện
const Vehicle_Features = [
  { 
    text: "Giám sát thông tin và ghi nhận lượt xe ra vào", 
    subText: "Hệ thống nhận diện biển số xe, thời gian vào / ra, loại phương tiện, tự động lưu trữ dữ liệu để kiểm soát và truy xuất khi cần",
    icon: Activity 
  },
  { 
    text: "Giám sát loại đất đá trên xe", 
    subText: "Ứng dụng AI phân tích hình ảnh, xác định loại khoáng sản, đất đá trên xe, đảm bảo quản lý tài nguyên hiệu quả và tránh thất thoát",
    icon: ThermometerSun 
  },
  {
    text: "Giám sát chỉ số cân của xe",
    subText: "Tích hợp với cân điện tử, đối chiếu trọng lượng thực tế với dữ liệu đăng ký, phát hiện sai lệch và gian lận trong quá trình vận chuyển.",
    icon: Eye
  }
];

// Feature 2: Giám sát thực thể
const Human_Features = [
  { 
    text: "Giám sát nhân viên theo lịch sản xuất ",
    subText: "Tự động kiểm tra lịch làm việc, xác định nhân viên vào / ra , hỗ trợ tính lương minh bạch",
    icon: Eye 
  },
  { 
    text: "Chấm công tự động",
    subText: "Nhận diện khuôn mặt / ký hiệu sinh trắc, tích hợp với hệ thống ERP, HRM, hỗ trợ tính lương minh bạch",
    icon: Link 
  },
  {
    text: "Kiểm soát khu vực hạn chế",
    subText:"Cấp quyền truy cập theo vai trò, phát hiện và cảnh báo trường hợp ra vào trái phép",
    icon: Link
  }
];

// Feature 3: An toàn lao động
const SafeEquipment_Features = [
  { 
    text: "Nhận diện các loại PPE",
    subText: "Ví dụ như: mũ bảo hộ, kính bảo hộ, găng tay, áo phản quang, khẩu trang,....",
    icon: Eye 
  },
  { 
    text: "Phát hiện các sự việc bất thường",
    subText: "Ví dụ như: người đi vào khu vực cấm, tai nạn lao động, hành động bạo lực, mang vật thể cấm, ...",
    icon: Link 
  },
  {
    text: "Hỗ trợ phản ứng nhanh đến ban an ninh và an toàn lao động",
    subText:"Cảnh bảo, kích hoạt quy trình ứng phó khẩn cấp...",
    icon: Activity
  }
];

const Safety_security = () => {
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
          alt="Hệ thống giám sát an ninh"
          className="w-[95%] h-auto md:h-[500px] object-cover justify-center"
        />
      </motion.div>

        {/* Section 1: Giám sát vận hành (Phương tiện) */}
        <FeatureSection
          tag={{ icon: Factory, text: "Vehicle Control", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Giám sát phương tiện</span>
          }
          // Đã chỉnh sửa Description phù hợp với xe cộ
          description="Tối ưu hóa quy trình kiểm soát logistics tại cổng ra vào. Hệ thống tự động ghi nhận biển số, phân tích loại hàng hóa và đối chiếu tải trọng, giúp doanh nghiệp ngăn chặn gian lận thương mại và thất thoát tài nguyên khoáng sản."
          features={Vehicle_Features}
          imageSrc={feature1}
          imageAlt="Hệ thống giám sát phương tiện"
          // Đã chỉnh sửa Badge
          floatingBadge={{
            icon: Activity,
            title: "Kiểm soát chặt chẽ",
            subtitle: "Logistics Data",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Công nghệ AI & Tích hợp (Con người) */}
        <FeatureSection
          tag={{ icon: Cpu, text: "Smart HR & Security", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Giám sát nhân viên ra vào</span>
          }
          // Đã chỉnh sửa Description phù hợp với nhân sự
          description="Số hóa quy trình quản lý nhân sự và an ninh khu vực. Công nghệ nhận diện khuôn mặt kết hợp dữ liệu ERP giúp chấm công chính xác tuyệt đối, đồng thời phát hiện và cảnh báo tức thời các hành vi xâm nhập trái phép vào khu vực hạn chế."
          features={Human_Features}
          imageSrc={feature2}
          imageAlt="Nhận diện khuôn mặt AI"
          // Đã chỉnh sửa Badge
          floatingBadge={{
            icon: Link,
            title: "Kết nối ERP",
            subtitle: "Auto Sync",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />

        {/* Section 3: Giám sát bảo hộ lao động (PPE) */}
        <FeatureSection
          tag={{ icon: Eye, text: "AI Safety Vision", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Giám sát bảo hộ lao động</span>
          }
          // Đã chỉnh sửa Description phù hợp với an toàn/PPE
          description="Đảm bảo an toàn lao động là ưu tiên hàng đầu. Hệ thống Vision AI hoạt động 24/7 để tự động phát hiện vi phạm trang bị bảo hộ (mũ, áo, kính) và các hành vi gây mất an toàn, giúp giảm thiểu rủi ro tai nạn lao động đáng tiếc."
          features={SafeEquipment_Features} // Đã sửa từ Vehicle_Features thành SafeEquipment_Features
          imageSrc={feature1}
          imageAlt="Hệ thống giám sát an toàn"
          // Đã chỉnh sửa Badge
          floatingBadge={{
            icon: ThermometerSun, // Dùng icon này đại diện cho môi trường/sức khỏe
            title: "An toàn tuyệt đối",
            subtitle: "Real-time Alert",
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

export default Safety_security;