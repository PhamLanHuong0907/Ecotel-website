import { Lightbulb, TrendingUp, Award, Globe, Zap, ChevronRight } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";

const timelineData = [
  { period: "1991 - 1993", title: "Khởi đầu AFsys", description: "Sản phẩm bắt được được nghiên cứu và phát triển với thương hiệu AFsys.", icon: Lightbulb },
  { period: "1993 - 1999", title: "Gia nhập CET", description: "Các tác giả của AFsys đã gia nhập vào trung tâm CET với mục đích thương mại các sản phẩm phần mềm đang phát triển. Sau đó, thành lập Công ty cổ phần thương mại và phần mềm tin học ISC.", icon: TrendingUp },
  { period: "1999 - 2003", title: "Thành lập ESOFT", description: "Công ty Cổ phần giải pháp phần mềm ESOFT chính thức được thành lập do ông Vũ Quốc Kỳ là Chủ tịch Hội đồng quản trị kiêm Tổng giám đốc ESOFT.", icon: Award },
  { period: "2003 - Nay", title: "Mở rộng & EcoTel", description: "Thành lập văn phòng đại diện tại thành phố Hồ Chí Minh. Năm 2024, EcoTel được thành lập với vai trò trung tâm nghiên cứu phát triển.", icon: Globe },
];

const TimelineItem = ({ item, index, isVisible, totalItems }: { item: typeof timelineData[0]; index: number; isVisible: boolean; totalItems: number }) => {
  return (
    <div className="flex-1 flex flex-col items-center relative group">
      {/* Horizontal Connector Arrow (Đường mũi tên sang ngang) */}
      {index < totalItems - 1 && (
        <div className={`hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-primary to-primary/30 transition-all duration-1000 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"} origin-left z-0`} style={{ transitionDelay: `${index * 200 + 300}ms` }}>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-primary/50">
               <ChevronRight size={20} />
            </div>
        </div>
      )}

      {/* Icon Section (Dạng bóng đèn/que kẹo như ảnh) */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Glowing Circle Icon */}
        <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] flex items-center justify-center shadow-lg transition-all duration-500 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} style={{ transitionDelay: `${index * 200}ms` }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] animate-pulse-slow opacity-50 blur-md" />
          <item.icon className="w-10 h-10 text-white relative z-10" />
        </div>
        
        {/* Vertical Line connecting Icon to Card */}
        <div className={`w-1 h-12 bg-gradient-to-b from-primary to-primary/10 transition-all duration-500 ${isVisible ? "scale-y-100" : "scale-y-0"} origin-top`} style={{ transitionDelay: `${index * 200 + 150}ms` }} />
      </div>

      {/* Content Card */}
      <div className={`w-full mt-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 200 + 300}ms` }}>
        <div className="glass-card rounded-2xl p-6 hover-lift relative overflow-hidden h-full border-t-4 border-t-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">{item.period}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm text-center">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export const TimelineSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Hành trình phát triển</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Lịch sử <span className="gradient-text">hình thành</span>
          </h2>
        </div>
        
        {/* Container chuyển sang flex-row (ngang) trên màn hình lớn */}
        <div ref={ref} className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-start max-w-7xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem 
                key={item.period} 
                item={item} 
                index={index} 
                isVisible={isVisible} 
                totalItems={timelineData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};