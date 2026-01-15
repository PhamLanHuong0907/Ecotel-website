import { Factory, Home, Globe, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {HashLink} from 'react-router-hash-link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollToTop from "../Scrolltotop";
import image_qtnl from "@/assets/quantringuonluc_outside.png";
import image_vhsx from "@/assets/vanhanh_sx.png";
import image_kddv from "@/assets/KDDV.png";
import image_bi from "@/assets/DashboardBI.png";
import image_conveyor from "@/assets/giamsatbangtai.png";
import image_enviroment from "@/assets/giamsatmoitruong.png";
import image_oee from "@/assets/qlhstb_big.png";
import image_product from "@/assets/qllenhsanxuat.png";
import image_qms from "@/assets/qlqms.png";
import image_repair from "@/assets/repair.png";
import image_centralmanagement from "@/assets/Hethongql.png";
import image_security from "@/assets/giamsoatantoanAI.png";
import image_smartsurvey from "@/assets/khaosatthamdo.webp";
import image_visionsensor from "@/assets/cambienhinhanh.png"

const services = [
  {
    icon: Factory,
    title: "Hệ thống ERP",
    description: <>Cung cấp giải pháp ERP tổng thể cho doanh nghiệp và nhà máy, giúp chuẩn hóa quy trình, tích hợp dữ liệu tập trung và tối ưu hóa quản trị - vận hành trên toàn bộ chuỗi giá trị
                <br/> Giải pháp ERP của ECOTEL hỗ trợ doanh nghiệp từ sản xuất, gia công - chế tạo, quản lý nguồn lực, kiểm soát chi phí, đến phân tích dữ liệu và ra quyết định,
                hướng tới mô hình nhà máy và doanh nghiệp thông minh</>,
    features: ["ERP cho doanh nghiệp và nhà máy sản xuất", 
      "ERP & BI - Phân tích dữ liệu, báo cáo quản trị, hỗ trợ ra quyết định", 
      "Tích hợp hệ thống sản xuất, dây chuyền và tự động hóa (MES/SCADA)",
      "Giải pháp Nhà máy thông minh (Smart Factory)"],
    gradient: "from-blue-500 to-cyan-500",
    images: [
     image_qtnl, image_vhsx, image_kddv, image_bi
    ],
  },
  {
    icon: Home,
    title: "Hệ thống MES",
    description: <>
    ECOTEL cung cấp giải pháp MES (Manufacturing Execution System) giúp doanh nghiệp quản lý, giám sát và điều hành hoạt động sản xuất theo thời gian thực,
    kết nối trực tiếp giữa hệ thống quản trị (ERP) và tầng thiết bị, dây chuyển sản xuất.
    <br/> Hệ thống MES hỗ trợ doanh nghiệp chuẩn hóa quy trình sản xuất, theo dõi tiến độ - năng suất - chất lượng, giảm sai lỗi,
    tối ưu nguồn lực và nâng cao khả năng kiểm soát trong môi trường sản xuất hiện đại, hướng tới mô hình nhà máy thông minh.
    <br/>Chức năng chính của MES
    </>,
    features: ["Quản lý và giám sát lệnh sản xuất theo thời gian thực",
       "Theo dõi tiến độ, năng suất, hiệu quả thiết bị (OEE)",
        "Quản lý chất lượng, truy xuất nguồn gốc sản phẩm"
      , "Kết nối máy móc, dây chuyền (PLC/SCADA/IoT)",
        "Tích hợp ERP, BI và các hệ thống quản trị doanh nghiệp"],
    gradient: "from-emerald-500 to-teal-500",
    images: [
      image_conveyor, image_enviroment, image_oee, 
      image_product, image_qms, image_repair  
    ],
  },
  {
    icon: Globe,
    title: "Hệ thống AIoT",
    description: 
    <>ECOTEL cung cấp giải pháp AIoT tích hợp IoT và trí tuệ nhân tạo (AI), cho phép kết nối thiết bị, thu thập dữ liệu thời gian 
    thực và phân tích thông minh, giúp doanh nghiệp tối ưu vận hành, nâng cao hiệu suất và tăng khả năng ra quyết định.
    <br/> Giải pháp AIoT của ECOTEL được triển khai đồng bộ từ thiết bị - nền tảng IoT - mô hình AI, đóng vai trò nền tảng trong hệ 
    sinh thái ERP - MES - Nhà máy thông minh, đáp ứng yêu cầu mở rộng và tích hợp linh hoạt.
    <br/> Phạm vi giải pháp AIoT:
    </>,
    features: ["Thiết kế, phát triển phần cứng IoT và mạch điện tử (PCB)",
       "Giải pháp IoT tổng thể: thiết bị, kết nối, nền tảng quản lý",
      "Ứng dụng AI trong giám sát, phân tích, dự báo và tối ưu vận hành",
      "Tích hợp với ERP, MES, SCADA và các hệ thống hiện có"],
    gradient: "from-violet-500 to-purple-500",
    images: [
      image_centralmanagement, image_security,
      image_smartsurvey, image_visionsensor
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Dịch vụ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Lĩnh vực </span>
            <span className="gradient-text">chuyên môn</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Đa dạng giải pháp chuyển đổi số và AIoT phù hợp với mọi quy mô và đặc thù doanh nghiệp
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Text Content - 1/3 width */}
              <div className="lg:w-1/3 space-y-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <HashLink
                  smooth
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group"
                >
                
                  Tìm hiểu thêm
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </HashLink>
              </div>

              {/* Image Carousel - 2/3 width */}
              <div className="lg:w-2/3 w-full">
                <Carousel
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 4000,
                      stopOnInteraction: false,
                      stopOnMouseEnter: true,
                    }),
                  ]}
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {service.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-card">
                          <img
                            src={image}
                            alt={`${service.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};