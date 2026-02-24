import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 1. Định nghĩa kiểu dữ liệu cho thẻ Card
export interface HighlightCard {
  id: string | number;
  title: string;
  description: string; // Hỗ trợ xuống dòng bằng \n
  image: string;
}

// 2. Định nghĩa Props cho toàn bộ Module
interface HeroSectionModuleProps {
  /** Ảnh nền chính cho phần Hero (Banner lớn) */
  backgroundImage: string;
  /** Tiêu đề chính (VD: HỆ THỐNG AIoT) */
  title: string;
  /** Phụ đề nằm trong ngoặc đơn (VD: Artificial Intelligence of Things) */
  subtitle?: string;
  /** Câu Slogan in nghiêng bên dưới */
  slogan?: string;
  /** Tiêu đề cho phần danh sách card (Mặc định: "Lợi ích nổi bật") */
  cardsSectionTitle?: string;
  /** Danh sách các card lợi ích */
  cards: HighlightCard[];
  /** Chiều cao của phần Hero (Mặc định: "75vh" hoặc "65vh" tùy chỉnh) */
  heroHeight?: string; 
}

export const HeroSectionModule = ({
  backgroundImage,
  title,
  subtitle,
  slogan,
  cardsSectionTitle = "Lợi ích nổi bật",
  cards,
  heroHeight = "50vh" // Giá trị trung bình giữa 65vh và 75vh
}: HeroSectionModuleProps) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  // --- Logic theo dõi Theme (Giữ nguyên từ code cũ) ---
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
        {/* Lớp Overlay tối */}
        <div className="absolute inset-0 bg-[#1a3a5c]/80" /> 
        
        {/* Background Effects (Giữ nguyên hiệu ứng) */}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg uppercase">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md">
                ({subtitle})
              </p>
            )}
            {slogan && (
              <p className="text-2xl md:text-3xl text-white/80 italic drop-shadow-md">
                {slogan}
              </p>
            )}
          </motion.div>
        </div>

        {/* Gradient mờ dần ở đáy (Ẩn khi light mode) */}
        {currentTheme !== 'light' && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
        )}
      </section>

      {/* --- PHẦN 2: HIGHLIGHT CARDS --- */}
      <section className="bg-background flex items-start flex-1">
        <div className="container mx-auto px-4 h-full py-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary items-center justify-center mb-10 mt-10 text-center">
            {cardsSectionTitle}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 h-full pb-10">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative  min-h-[250px] rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-white/10 "
              >
                {/* Layer 1: Background Image */}
                <div
                  className="absolute inset-0 bg-cover h-[35vh] bg-left transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />

                {/* Layer 2: Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e5c8b]/90 via-[#1e5c8b]/40 to-transparent transition-opacity duration-500 opacity-100" />

                {/* Layer 3: Content */}
                <div className="relative h-full flex flex-col justify-start p-6 w-full z-10 transition-opacity duration-500 whitespace-pre-line opacity-100">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md max-w-[250px]">
                    {card.title}
                  </h3>
                  <p className="text-slate-50 text-sm md:text-base mb-6 line-clamp-none max-w-[280px]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};