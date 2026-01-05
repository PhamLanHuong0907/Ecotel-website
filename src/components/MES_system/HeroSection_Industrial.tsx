import { motion } from "framer-motion";
import { Factory } from "lucide-react";
// Đừng quên import file video của bạn vào đây
import industrialVideo from "@/assets/backgroundmes.avif"; 
import { TitleBanner } from "./TitleBanner";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden h-screen">
      
      {/* --- PHẦN BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Video tag */}
        <img
          src={industrialVideo}
          className="w-full h-full object-cover "
        />
        {/* Lớp phủ tối màu để làm nổi bật text (Overlay) */}
        <div className="absolute inset-0 bg-background/80 md:bg-black/60" />
      </div>

      {/* Giữ lại gradient cũ nhưng để z-index thấp để hòa trộn với video */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent z-0 pointer-events-none" />
      
      {/* Nội dung chính (z-10 để nổi lên trên video) */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-8 mb-8 drop-shadow-lg">
            <div className="h-16"/>
           <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 pt-3bg-clip-text text-transparent "></span>
            <div className="h-5"/>
          </h1>
          
      
        </motion.div>
      </div>
<div className="absolute bottom-0 w-full z-20">
        <TitleBanner />
      </div>
      
    </section>
  );
};