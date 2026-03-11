import { useSectionInView } from "@/hooks/useSectionInView";
import customer from "@/assets/background-home7.jpg";
import Customer_StatsSection from "./StatsSection";
import { Quote } from "lucide-react"; // --- BỔ SUNG: Import icon Quote ---

export const HeroSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
      <section ref={ref} className="relative min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-"
        style={{ backgroundImage: `url(${customer})` }}
      />
      <div className="absolute inset-0 bg-black/5"></div>
        {/* Animated background - Giống file Leadership */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 ">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-12">
              <span className="gradient-text">Khách hàng tin cậy</span>
              <br className="hidden md:block" />{" "}
              <span className="gradient-text">của chúng tôi</span>
            </h1>

            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed [.light_&]:text-white">
              ECOTEL tự hào được đồng hành cùng hàng trăm doanh nghiệp hàng đầu trong
              nhiều lĩnh vực khác nhau, từ công nghiệp đến dân sinh.
            </p>
          </div>

          {/* --- BỔ SUNG: Decorative quote giống file Leadership --- */}
          <div
            className={`mt-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="glass-card rounded-2xl p-6 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
              <blockquote className="text-center italic text-foreground pl-8">
                "Thành công của chúng tôi được đo đếm bằng sự hài lòng và giá trị bền vững
                mà chúng tôi mang lại cho từng khách hàng, từng đối tác."
              </blockquote>
            </div>
          </div>
          {/* ----------------------------------------------------- */}
        </div>
        
        <div className="h-20" />
        <Customer_StatsSection />
      
      </section>
    
  );
};