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
  heroHeight = "50vh"
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
      {/* --- PHẦN 1: HERO BACKGROUND --- */}
      <section 
        // 1. Giữ overflow-hidden cho hiệu ứng blur, nhưng đổi sang dùng padding-y để nội dung luôn có khoảng thở
        className="flex items-center relative overflow-hidden bg-no-repeat bg-cover bg-left py-16 md:py-24"
        style={{ 
          // 2. QUAN TRỌNG: Đổi 'height' thành 'minHeight' để section có thể tự động giãn ra nếu chữ quá dài
          minHeight: heroHeight,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/5 w-100 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-20 right-1/5 w-100 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* 3. Đổi mt-20 thành relative padding để không bóp méo container trên mobile */}
        <div className="w-full mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* 4. Responsive cỡ chữ mượt hơn (thêm sm, md) và thêm leading-tight, text-balance để ngắt dòng đẹp, không tốn diện tích */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-up-delay-1 pb-3 pt-4 gradient-text leading-tight text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 md:mt-3 pb-4 md:pb-6 text-foreground text-2xl md:text-[36px] font-bold animate-fade-up-delay-1 [.light_&]:text-white text-balance">
                {subtitle}
              </p>
            )}
            {slogan && (
              <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-4 md:mb-10 animate-fade-up-delay-2 font-medium">
                {slogan}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* --- PHẦN 2: HIGHLIGHT CARDS --- */}
      <section className="bg-background flex flex-col items-center w-full">
        <div className="container mx-auto px-4 py-8">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 pb-1 pt-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4 shadow-[0_0_15px_rgba(34,211,238,0.4)] 
                 backdrop-blur-sm">
              Lợi ích
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary ">
              {cardsSectionTitle}
            </h2>
          </div>

          {/* Cards Container */}
          <div className="w-full pb-10"> 
            {cards && cards.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
              >
                {cards.map((card) => (
                  <div 
                    key={card.id}
                    // THÊM: border, shadow glow khi hover, background gradient nhẹ
                    className="glass-card group relative h-full flex flex-col overflow-hidden rounded-2xl   backdrop-blur-md transition-all duration-500 -translate-y-2 border-primary/40 border-[2px] shadow-[0_8px_30px_-5px_rgba(34,211,238,0.3)] [.light_&]:bg-neutral-100"
                  >
                    {/* THÊM: Gradient overlay mờ ảo xuất hiện khi hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10  to-transparent  transition-opacity duration-500 opacity-100" />

                    {/* Lớp Content Container - Đã bỏ p-8 ở đây để dải màu tràn viền */}
                    <div className="relative z-10 flex h-full flex-col">
                      
                      {/* Title: Khối nền màu xanh, chữ trắng giống ảnh */}
                      {/* Lưu ý: Bạn có thể thay đổi bg-[#12b3d8] thành bg-primary nếu muốn đồng bộ với màu theme hiện tại */}
                      <div className="w-full bg-primary py-4 px-6">
                        <h3 className="text-xl md:text-2xl font-bold text-center tracking-wide text-white ">
                          {card.title}
                        </h3>
                      </div>

                      {/* Description Bullet List - Thêm lại padding p-8 ở khu vực nội dung này */}
                      <div className="flex-1 p-8">
                        <ul className="flex-1 space-y-5">
                          {card.description
                            .split('\n')
                            .filter(line => line.trim() !== '')
                            .map((line, index) => (
                              <li key={index} className="flex items-start text-justify group/item">
                                
                                {/* Nút Tick: Làm sáng hơn, to ra một chút khi hover card, thêm shadow glow */}
                                <div className="mt-1 mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full  text-primary border  transition-all duration-500 bg-primary/30 border-primary shadow-[0_0_15px_rgba(34,211,238,0.6)] ">
                                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                                </div>
                                
                                {/* Text content: Đổi màu xám sáng, hover sáng trắng */}
                                <span className="text-base leading-relaxed  font-medium transition-colors duration-300 text-white drop-shadow-sm [.light_&]:text-gray-600">
                                  {line.trim()}
                                </span>
                              </li>
                          ))}
                        </ul>
                      </div>
                      
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