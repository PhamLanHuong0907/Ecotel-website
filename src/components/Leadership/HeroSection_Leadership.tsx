import { Sparkles, Quote } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";
import leader from "@/assets/Screenshot 2026-03-01 155032.png"
import Value_StatsSection from "./ValuesSection";
export const HeroSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <div
      style={{
        backgroundImage: `url(${leader})`,
        height: "auto",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="absolute inset-0 bg-black/30"></div>
    <section ref={ref} className="relative overflow-hidden min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        {/* Grid pattern */}
        
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-32">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
           
            <span className="gradient-text">Đội ngũ lãnh đạo</span>
    
          </h1>
          
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed [.light_&]:text-white">
            Đội ngũ lãnh đạo giàu kinh nghiệm và tâm huyết, luôn nỗ lực không ngừng để đưa <br/> công ty phát triển vững mạnh và mang đến những giải pháp công nghệ tốt nhất.
          </p>
        </div>
        
        {/* Decorative quote */}
        <div className={`mt-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card rounded-2xl p-6 relative">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
            <blockquote className="text-center italic text-foreground pl-8">
              "Thành công của chúng tôi được xây dựng trên nền tảng của sự đổi mới không ngừng và cam kết mang đến giá trị thực sự cho khách hàng."
            </blockquote>
          </div>
        </div>
      </div>
      <div className="h-20"/>
       <Value_StatsSection />
    </section>
   
    </div>
  );
};