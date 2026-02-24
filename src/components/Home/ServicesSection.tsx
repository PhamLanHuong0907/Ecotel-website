import { Factory, Home, Globe, ArrowRight, Activity, Settings, Cpu, ShieldCheck } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { HashLink } from 'react-router-hash-link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useServices } from "@/hooks/useServices"; 
import { Loader2 } from "lucide-react";

// Định nghĩa kiểu dữ liệu cho ảnh khớp với file Admin
interface ServiceImage {
  id: string;
  url: string;
  alt: string;
}

// 1. Tạo Map để ánh xạ tên icon từ Database sang Component Lucide
const IconMap: Record<string, any> = {
  Factory: Factory,
  Home: Home,
  Globe: Globe,
  Activity: Activity,
  Settings: Settings,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  // Icon mặc định nếu không tìm thấy tên khớp
  Default: Factory 
};

export const ServicesSection = () => {
  // 2. Lấy dữ liệu từ Supabase
  const { data: services, isLoading } = useServices();

  if (isLoading) {
    return (
      <section className="py-24 flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </section>
    );
  }

  // Nếu không có dữ liệu
  if (!services || services.length === 0) {
    return null; 
  }

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
          {services.map((service, index) => {
            // Xử lý Icon
            const IconComponent = (service.icon && IconMap[service.icon]) 
              ? IconMap[service.icon] 
              : IconMap.Default;

            // Xử lý mảng features
            const features = Array.isArray(service.features) 
              ? (service.features as unknown as string[]) 
              : [];
            
            // --- SỬA ĐỔI: Xử lý mảng images theo cấu trúc ServiceImage object ---
            const images = Array.isArray(service.images)
              ? (service.images as unknown as ServiceImage[])
              : [];

            return (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Text Content - 1/3 width */}
                <div className="lg:w-1/3 space-y-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient || 'from-blue-500 to-cyan-500'} flex items-center justify-center`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
                  
                  {/* Xử lý hiển thị mô tả có xuống dòng */}
                  <div className="text-muted-foreground leading-relaxed">
                    {service.description?.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient || 'from-blue-500 to-cyan-500'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <HashLink
                    smooth
                    to={service.href || "/#contact"} 
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium group"
                  >
                    Tìm hiểu thêm
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </HashLink>
                </div>

                {/* Image Carousel - 2/3 width */}
                <div className="lg:w-2/3 w-full">
                  {images.length > 0 ? (
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
                        {images.map((imgObj, imgIndex) => (
                          <CarouselItem key={imgObj.id || imgIndex}>
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-card">
                              <img
                                src={imgObj.url} 
                                alt={imgObj.alt || `${service.title} ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback nếu ảnh lỗi
                                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x450?text=No+Image';
                                }}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                  ) : (
                    <div className="aspect-[16/9] rounded-2xl bg-muted/20 flex items-center justify-center border border-dashed border-muted-foreground/30">
                      <p className="text-muted-foreground">Chưa có hình ảnh</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};