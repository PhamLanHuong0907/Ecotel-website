import { useState } from "react";
import { ArrowRight, Cpu, Network, Shield, TrendingUp, Briefcase, Users2, Trophy } from "lucide-react";
import heroBackground from "@/assets/background-home7.webp";
import Home_StatsSection from "./StatsSection";
import heroVideo from "@/assets/Media3.mp4"; 
import AnimatedLogo from "@/components/Component_mini/Logo"; 

export const HeroSection = () => {
  // Chỉ cần state này để ẩn ảnh nền ban đầu ngay khi video thực sự bắt đầu phát
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. ẢNH NỀN: Chỉ hiện khi video đang tải/chưa bắt đầu chạy */}
      {!isVideoPlaying && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
      )}
      
      {/* 2. VIDEO BACKGROUND: 
          Bỏ điều kiện showVideo và sự kiện onEnded. 
          Khi chạy xong, video sẽ tự động đứng im ở khung hình cuối. */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
        poster={heroBackground}
        onPlaying={() => setIsVideoPlaying(true)} 
      >
        <source src={heroVideo} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>

      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black/5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="flex items-center justify-center md:gap-6 text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-up-delay-1 pt-6">
            <span className="gradient-text -ml-8 ">ECOTEL</span>
          </h1>  
          
          <br/>
          <span className="mt-3 pb-6 text-foreground text-[30px] font-bold animate-fade-up-delay-1 pt-3 [.light_&]:text-white">
            TIÊN PHONG CHUYỂN ĐỔI SỐ DOANH NGHIỆP
          </span>
          <div className="h-6"/>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 font-medium">
            ECOTEL đồng hành cùng doanh nghiệp trong hành trình số hóa, <br className="hidden md:block" />
            tối ưu vận hành và nâng cao năng lực cạnh tranh.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fade-up-delay-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] text-white font-semibold hover-lift shadow-lg shadow-primary/20"
            >
              Khám phá dịch vụ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground font-semibold hover:bg-secondary/80 transition-all"
            >
              Tìm hiểu thêm
            </a>
          </div>

          <section className="relative z-10 mt-3"> 
             <Home_StatsSection />
          </section>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};