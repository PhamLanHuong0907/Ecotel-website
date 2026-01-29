import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/AI_IOT/Smart_survey/HeroSection_Smartsurvey";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
// Bộ icon chuyên dụng cho Băng tải & Máy móc
import { 
  RefreshCcw, // (Lưu ý: Nếu không có icon Conveyor, dùng Factory hoặc RefreshCw)
  Factory, 
  ThermometerSun, // Icon nhiệt độ cao/động cơ
  Eye, // Icon Camera/AI
  Activity, // Icon hoạt động/status
  Settings, // Icon cài đặt/điều chỉnh
  Link, // Icon kết nối hệ thống
  Cpu, // Icon xử lý trung tâm
  Plane, // Icon cho Drone (nếu có, hoặc dùng Activity tạm)
  Map, // Icon cho bản đồ
  Database, // Icon cho dữ liệu
  Search // Icon cho thăm dò
} from "lucide-react";

import feature1 from "@/assets/khaosathamdo1_drone.png"; // Ảnh băng tải vận hành (Cần thay ảnh phù hợp với Drone/Bản đồ)
import feature2 from "@/assets/khaosathamdo2_httd.png"; // Ảnh phân tích Camera AI (Cần thay ảnh phù hợp với Hệ thống/3D)
import feature3 from "@/assets/khaosathamdo3_khoangsan.png";
import feature4 from "@/assets/khaosatthamdo4_3D.png"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import manufacturingHero from "@/assets/khaosatthamdo.webp";

// Feature 1: Drone Khảo sát
const Drone_Features = [
  { 
    text: "Khảo sát địa hình", 
    subText: "Thực hiện khảo sát địa hình, giám sát hoạt động khai thác, khoan phá mìn và khảo sát mỏ với thiết bị bay không người lái kết nối 5G.",
    icon: Activity // Hoặc Plane nếu có
  },
  { 
    text: "Lập bản đồ 3D địa chất cơ bản", 
    subText: "Công nghệ hình ảnh độ phân giải cao và AI phân tích dữ liệu thời gian thực giúp lập bản đồ 3D địa chất, mang lại cái nhìn toàn diện.",
    icon: Map 
  },
  { 
    text: "Hỗ trợ ra quyết định", 
    subText: "Đề xuất các điểm khoan thăm dò tối ưu, hỗ trợ ra quyết định nhanh chóng và hiệu quả hơn trong khai thác khoáng sản.",
    icon: Cpu 
  },
];

// Feature 2: Hệ thống thăm dò phân tích thông minh
const IntelSystem_Features = [
  { 
    text: "Cơ sở dữ liệu tập trung",
    subText: "Nền tảng đám mây tích hợp dữ liệu từ khoan, địa chấn, drone, cảm biến thành một cơ sở dữ liệu tập trung.",
    icon: Database 
  },
  { 
    text: "Minh bạch và bảo mật với Blockchain",
    subText: "Sử dụng Blockchain để đảm bảo tính minh bạch, bảo mật và toàn vẹn dữ liệu, giúp kiểm soát thông tin chặt chẽ.",
    icon: Link 
  },
  { 
    text: "Phân tích chuyên sâu và cộng tác", 
    subText: "Khả năng truy cập từ xa, phân tích chuyên sâu và cộng tác trực tuyến hỗ trợ đưa ra quyết định thăm dò chính xác và tối ưu hóa quy trình.",
    icon: Search 
  },
];

// Feature 3: Lập bản đồ tiềm năng khoáng sản
const MineralsMap_Features = [
  { 
    text: "Phân tích Địa vật lý",
    subText: "Đánh giá từ tính, trọng lực, tính dẫn điện để xác định đặc điểm tầng chứa khoáng sản.",
    icon: Activity 
  },
  { 
    text: "Phân tích Địa chất",
    subText: "Phân tích khoảng cách đến các đứt gãy, giúp dự báo khu vực có trữ lượng cao và giảm rủi ro thăm dò.",
    icon: Map 
  },
];

// Feature 4: Lập bản đồ 3D giám sát thực thể
const Map3D_Features = [
  { 
    text: "Lập bản đồ 3D độ chính xác cao",
    subText: "Sử dụng công nghệ quét 3D, drone, LiDAR để tái tạo mỏ, công trình, khu vực khai thác với độ chính xác cao.",
    icon: Map 
  },
  { 
    text: "Giám sát thực thể thời gian thực",
    subText: "Đếm số lượng, theo dõi sự di chuyển, trạng thái hoạt động của các đối tượng trong môi trường thực tế theo thời gian thực.",
    icon: Eye 
  },
];

const SmartSurvey= () => {
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
          alt="Hệ thống khảo sát thông minh"
          className="w-[95%] h-auto md:h-[500px] object-cover justify-center"
        />
      </motion.div>

        {/* Section 1: Drone khảo sát*/}
        <FeatureSection
          tag={{ icon: Activity, text: "Aerial Survey", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Drone Khảo sát</span>
          }
          description="ECOTEL ứng dụng thiết bị bay không người lái (drone) kết nối 5G để thực hiện khảo sát địa hình, giám sát hoạt động khai thác. Hệ thống cung cấp hình ảnh độ phân giải cao và lập bản đồ 3D địa chất cơ bản thời gian thực."
          features={Drone_Features}
          imageSrc={feature1}
          imageAlt="Drone khảo sát địa hình"
          floatingBadge={{
            icon: Cpu,
            title: "Kết nối 5G",
            subtitle: "Real-time Data",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 2: Hệ thống thăm dò*/}
        <FeatureSection
          tag={{ icon: Database, text: "Smart Analytics", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Hệ thống thăm dò <br/> Phân tích thông minh</span>
          }
          description="Xây dựng nền tảng đám mây tích hợp dữ liệu đa nguồn thành một cơ sở dữ liệu tập trung. Hệ thống sử dụng Blockchain để bảo mật và hỗ trợ các nhóm kỹ sư phân tích chuyên sâu, đưa ra quyết định chính xác."
          features={IntelSystem_Features}
          imageSrc={feature2}
          imageAlt="Hệ thống phân tích dữ liệu khoáng sản"
          floatingBadge={{
            icon: Link,
            title: "Blockchain",
            subtitle: "Secure Data",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
        />
        
         {/* Section 3: Bản đồ khoáng sản*/}
        <FeatureSection
          tag={{ icon: Map, text: "Mineral Potential", colorClass: "bg-primary/10 text-primary" }}
          title={
            <span className="gradient-text">Lập bản đồ <br/> Tiềm năng khoáng sản</span>
          }
          description="Hệ thống giúp doanh nghiệp khai thác tối ưu tài nguyên bằng cách phân tích địa vật lý và địa chất. Dự báo khu vực có trữ lượng cao thông qua đánh giá từ tính, tính dẫn điện và phân tích đứt gãy."
          features={MineralsMap_Features}
          imageSrc={feature3}
          imageAlt="Bản đồ tiềm năng khoáng sản"
          floatingBadge={{
            icon: Search,
            title: "Tối ưu hóa",
            subtitle: "Resource Analysis",
            iconBgClass: "bg-primary",
            iconColorClass: "text-primary-foreground"
          }}
          glowClass="from-primary/20 to-accent/20"
        />

        {/* Section 4: Bản đồ 3D thực thể*/}
        <FeatureSection
          tag={{ icon: Eye, text: "3D Monitoring", colorClass: "bg-accent/10 text-accent" }}
          title={
            <span className="gradient-text">Lập bản đồ 3D <br/> Giám sát thực thể</span>
          }
          description="Ứng dụng công nghệ hiện đại để mô phỏng không gian, theo dõi và phân tích các đối tượng trong môi trường thực tế. Tái tạo mỏ và công trình với độ chính xác cao nhờ công nghệ quét 3D và LiDAR."
          features={Map3D_Features}
          imageSrc={feature4}
          imageAlt="Bản đồ 3D giám sát thực thể"
          floatingBadge={{
            icon: Activity,
            title: "Giám sát thực",
            subtitle: "Live Tracking",
            iconBgClass: "bg-accent",
            iconColorClass: "text-accent-foreground"
          }}
          reverse={true}
          backgroundClass="bg-gradient-to-b from-secondary/30 to-background"
          glowClass="from-accent/20 to-primary/20"
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

export default SmartSurvey;