import background_logo from "@/assets/Picture2.png";
import background_about1 from "@/assets/background-about1.png";
import { useSectionInView } from "@/hooks/useSectionInView";

export const HeroSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <div
      style={{
        backgroundImage: `url(${background_about1})`,
        height: "auto",
        width: "100%",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <section ref={ref} className="py-24 relative overflow-hidden h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-rotate-slow opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent/10 animate-rotate-slow opacity-20" style={{ animationDirection: "reverse" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <img src={background_logo} alt="ECOTEL Background" className="mx-auto mt-[-40px] mb-[-10px] w-48 h-auto" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text animate-text-glow inline-block">ECOTEL</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl [.light&]: text-white ">Connected Ecosystem</span>
            </h1>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full mb-10 animate-shimmer" />
            <p className="text-xl text-white leading-relaxed mb-12 max-w-3xl mx-auto">
              Công ty TNHH ECOTEL là đơn vị hàng đầu tại Việt Nam trong lĩnh vực cung cấp giải pháp chuyển đổi số tổng thể, giúp doanh nghiệp tối ưu hóa vận hành, <br /> nâng cao hiệu suất và giảm thiểu chi phí với 3 lĩnh vực: <br />
              <span className="text-accent font-semibold text-[25px]">Hệ thống ERP,</span>,<span className="text-accent font-semibold text-[25px]"> Hệ thống MES,</span>,<span className="text-accent font-semibold text-[25px]"> Hệ thống tích hợp AI & IoT</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};