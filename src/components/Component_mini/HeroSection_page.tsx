import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  /** Tiêu đề chính của trang (Hỗ trợ thẻ <br/> nếu cần xuống dòng) */
  title: ReactNode;
  /** Đoạn text điểm nhấn (màu xanh/primary, in đậm) */
  highlight: ReactNode;
  /** Đoạn mô tả chi tiết (màu xám/muted) */
  description: ReactNode;
}

export const HeroSection = ({ title, highlight, description }: HeroSectionProps) => {
  return (
    // CHANGE 1: min-h-screen để đảm bảo chiều cao, nhưng flex layout để căn chỉnh tốt hơn
    <section className="relative pt-20 md:pt-24 pb-0 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* --- Background Effects (Responsive size cho các khối mờ) --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      {/* Gradient Layer 1: Màu Primary */}
<div className="absolute top-0 left-0 w-full h-64 md:h-96 bg-gradient-to-b from-primary/20 to-transparent blur-3xl animate-pulse-slow" />

{/* Gradient Layer 2: Màu Accent */}
<div 
  className="absolute top-20 left-0 w-full h-48 md:h-64 bg-gradient-to-b from-accent/10 to-transparent blur-3xl animate-pulse-slow" 
  style={{ animationDelay: '1s' }} 
/>
      
      {/* Container */}
      {/* CHANGE 2: mt-10 cho mobile thay vì mt-16 để đỡ trống phía trên */}
      <div className="w-full mx-auto px-4 relative z-10 mt-10 md:mt-16 mb-auto">
        
        {/* Breadcrumb Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4 md:mb-8"
        >
        </motion.div>

        {/* --- Heading Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* CHANGE 3: Responsive Font Size & Margin Bottom */}
          {/* text-3xl (Mobile) -> sm:text-4xl -> md:text-5xl -> lg:text-6xl */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 md:mb-12 lg:mb-[60px] px-2">
            <span className="gradient-text leading-tight block">
              {title}
            </span>
          </h1>
        </motion.div>

        {/* --- Intro Text (Glass Card) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-4 md:mt-8 text-left"
        >
          {/* CHANGE 4: Padding Responsive (p-5 cho mobile, p-8 cho desktop) */}
          <div className="glass-card p-5 md:p-8 rounded-2xl space-y-3 md:space-y-4 shadow-sm border border-white/10">
            {/* Phần Highlight */}
            {/* CHANGE 5: Text size responsive (text-base -> text-lg -> text-xl) */}
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              <span className="text-primary font-semibold">{highlight}</span>
            </p>
            
            {/* Phần Description */}
            {/* CHANGE 6: Thay text-[19px] cứng thành text-base md:text-lg để dễ đọc trên mọi màn hình */}
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg text-justify md:text-left">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="h-10 md:h-20"/>
    </section>
  );
};