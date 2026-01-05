import { Users } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";
import customer from "@/assets/khachhang.jpg"
import Customer_StatsSection from "./StatsSection";
export const HeroSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <div
      style={{
        backgroundImage: `url(${customer})`,
        height: "auto",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "1",
      }}
    >
    <div className="absolute inset-0 bg-black/60"></div>
    <section ref={ref} className="relative pt-32 pb-20 overflow-hidden mb-5 min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2  mb-6">
            <div className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary"></span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mt-[3%] mb-6">
          
            <span className="gradient-text">Khách hàng tin cậy</span>
            <br />
            <div style={{ height: '10px' }}></div>
            <span className="text-foreground [.light_&]:text-white">của chúng tôi</span>
          </h1>
          
          <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed [.light_&]:text-white">
            ECOTEL tự hào được đồng hành cùng hàng trăm doanh nghiệp hàng đầu trong nhiều lĩnh vực khác nhau, từ công nghiệp đến dân sinh.
          </p>
        </div>
      </div>
      <div className="h-24"/>
      <Customer_StatsSection />
    </section>
    </div>
  );
};