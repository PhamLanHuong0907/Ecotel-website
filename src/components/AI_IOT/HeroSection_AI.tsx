import { motion } from "framer-motion";
// 1. Import component TitleBanner (đảm bảo đường dẫn đúng)
import { TitleBanner } from "./TitleBanner"; 
import industrialVideo from "@/assets/AIot.jpg"; 

export const HeroSection = () => {
  return (
    // Container chính: h-screen để full màn hình
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      {/* --- PHẦN BACKGROUND (VIDEO/IMAGE) --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={industrialVideo}
          alt="Background Camera AI"
          className="w-full h-full object-cover"
        />
        {/* Overlay tối màu */}
        <div className="absolute inset-0 bg-background/80 md:bg-black/60" />
      </div>

      {/* Gradient trang trí nền */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent z-0 pointer-events-none" />
      
      {/* --- NỘI DUNG CHÍNH (CENTER) --- */}
      {/* Thêm pb-20 hoặc pb-32 để nội dung không bị TitleBanner che mất nếu màn hình quá thấp */}
      <div className="container mx-auto px-4 relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 drop-shadow-lg flex flex-col gap-2">
            <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent pt-11 pb-3">
              HỆ THỐNG AIoT<br className="hidden md:block" />
              <div className="h-5"/>  
            </span>
            <span className="text-white text-4xl">(Artificial Intelligence of Things)</span>
          </h1>
          
          <div className="glass-card p-8 rounded-2xl text-left space-y-4 bg-background/60 backdrop-blur-md border border-white/10 shadow-xl">
            <p className="text-foreground/90 leading-relaxed text-sm md:text-base lg:text-lg">
              Hệ thống 
              <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> AIoT của ECOTEL</span> là nền tảng tích hợp
              <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> IoT và trí tuệ nhân tạo (AI)</span>
              , cho phép 
              <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> kết nối thiết bị - thu thập dữ liệu thời gian thực - phân tích thông minh, </span>
              giúp doanh nghiệp
              <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> giám sát, dự báo và tối ưu vận hành </span>
                trong môi trường sản xuất và công nghiệp hiện đại.
            </p>
            <p className="text-foreground/90 leading-relaxed text-sm md:text-base lg:text-lg">
            Giải pháp AIoT đóng vai trò hạ tầng dữ liệu quan trọng trong hệ sinh thái 
            <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> ERP - MES - Nhà máy thông minh, </span>
            hỗ trợ doanh nghiệp ra quyết định chính xác và nâng cao hiệu quả vận hành.
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- TÍCH HỢP TITLE BANNER Ở ĐÁY --- */}
      {/* absolute bottom-0: Dính chặt xuống đáy
          w-full: Rộng full màn hình
          z-20: Nằm đè lên trên background và các layer thấp hơn */}
      <div className="absolute bottom-0 w-full z-20">
        <TitleBanner />
      </div>

    </section>
  );
};