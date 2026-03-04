import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

// 1. Định nghĩa kiểu dữ liệu cho thẻ Card
export interface HighlightCard {
  id: string | number;
  title: string;
  description: string;
  image: string;
}

// 2. Định nghĩa Props cho toàn bộ Module
interface HeroSectionModuleProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  slogan?: string;
  cardsSectionTitle?: string;
  cards: HighlightCard[];
  heroHeight?: string;
}

export const HeroSectionModule = ({
  backgroundImage,
  title,
  subtitle,
  slogan,
  cardsSectionTitle = "Lợi ích nổi bật",
  cards,
  heroHeight = "70vh"
}: HeroSectionModuleProps) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  // --- Logic theo dõi Theme ---
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isLight = document.documentElement.classList.contains('light');
      const isNoel = document.documentElement.classList.contains('theme-noel');
      
      if (isNoel) setCurrentTheme('noel');
      else if (isLight) setCurrentTheme('light');
      else setCurrentTheme('dark');
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    const initialClass = document.documentElement.className;
    if (initialClass.includes('theme-noel')) setCurrentTheme('noel');
    else if (initialClass.includes('light')) setCurrentTheme('light');

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      
      {/* --- PHẦN 1: HERO BACKGROUND --- */}
      <section 
        className="flex items-center relative overflow-hidden bg-no-repeat bg-cover bg-left"
        style={{ 
          height: heroHeight,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/5 w-100 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-20 right-1/5 w-100 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        <div className="w-full mx-auto px-4 relative z-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-up-delay-1 pt-6 pb-3 gradient-text -mt-12 ">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 pb-6 text-foreground text-[36px] font-bold animate-fade-up-delay-1 pt-3 [.light_&]:text-white">
                {subtitle}
              </p>
            )}
            {slogan && (
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-up-delay-2 font-medium">
                {slogan}
              </p>
            )}
          </motion.div>
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
        </div>
        
        {currentTheme !== 'light' && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
        )}
      </section>

      {/* --- PHẦN 2: HIGHLIGHT CARDS (ĐÃ SỬA) --- */}
      <section className="bg-background flex flex-col items-center w-full">
        <div className="container mx-auto px-4 py-12">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              Lợi ích nổi bật
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2 mt-4">
              {cardsSectionTitle}
            </h2>
          </div>

          {/* Cards Container */}
          {/* SỬA: Bỏ grid ở thẻ cha này, chỉ dùng w-full */}
          <div className="w-full pb-10"> 
            {cards && cards.length > 0 && (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    // Grid chính nằm ở đây: 1 cột trên mobile, 3 cột trên PC
    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
  >
    {cards.map((card) => (
                  <div 
                    key={card.id}
                    // THÊM class glass-card VÀO ĐÂY
                    className="glass-card group relative h-full flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Lớp 3: Content Container */}
                    <div className="relative z-10 flex h-full flex-col p-8">
                      
                      {/* Title */}
                      <h3 className="mb-6 text-2xl font-bold text-white transition-colors group-hover:text-primary drop-shadow-md">
                        {card.title}
                      </h3>

                      {/* Description Bullet List */}
                      <ul className="flex-1 space-y-4">
                        {card.description
                          .split('\n')
                          .filter(line => line.trim() !== '')
                          .map((line, index) => (
                            <li key={index} className="flex items-start  text-justify">
                              <div className="mt-1 mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30 shadow-inner">
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </div>
                              
                              <span className="text-base leading-relaxed text-gray-100 font-medium shadow-black drop-shadow-sm">
                                {line.trim()}
                              </span>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
  </motion.div>
)}
          </div>
        </div>
      </section>

    </div>
  );
};