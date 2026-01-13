import { motion } from "framer-motion";
import { Factory } from "lucide-react";
// Đừng quên import file video của bạn vào đây
import industrialVideo from "@/assets/hethongmes.png"; 
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
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 drop-shadow-lg">
    <div className="h-5" />
    <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent pt-5">
      HỆ THỐNG MES
    </span>
    <br />
    <span className="text-white pt-5 text-3xl md:text-4xl">
      (Manufacturing Execution System)
    </span>
  </h1>

  {/* Nội dung Card */}
  <div className="glass-card p-8 rounded-2xl text-left space-y-4 bg-background/60 backdrop-blur-md border border-white/10 shadow-xl">
    
    {/* Đoạn 1: Định nghĩa & Kết nối */}
    <p className="text-foreground/90 leading-relaxed text-lg">
      ECOTEL cung cấp giải pháp MES giúp doanh nghiệp{" "}
      <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold">
        giám sát, điều hành và tối ưu hoạt động sản xuất theo thời gian thực
      </span>
      , tạo sự kết nối chặt chẽ giữa hệ thống quản trị (ERP) và tầng thiết bị – dây chuyền sản xuất.
    </p>

    {/* Đoạn 2: Chức năng & Lợi ích */}
    <p className="text-foreground/90 leading-relaxed text-lg">
      Hệ thống cho phép doanh nghiệp{" "}
      <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold">
        theo dõi lệnh sản xuất, tiến độ, năng suất, chất lượng và hiệu suất thiết bị
      </span>
      . Từ đó giúp giảm thiểu sai lỗi, tối ưu nguồn lực và nâng cao hiệu quả vận hành,{" "}
      <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold">
        hướng tới mô hình nhà máy thông minh.
      </span>
    </p>
  </div>
          
      
        </motion.div>
      </div>
<div className="absolute bottom-0 w-full z-20">
        <TitleBanner />
      </div>
      
    </section>
  );
};