import { motion } from "framer-motion";
import { Factory } from "lucide-react";
// Đừng quên import file video của bạn vào đây
import industrialVideo from "@/assets/datawarehousemodule.png"; 
import { TitleBanner } from "../Component_mini/TitleBanner";
export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden h-screen">
      
      {/* --- PHẦN BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Video tag */}
        <img
          src={industrialVideo}
          className="w-full h-full object-cover opacity-75"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold  mb-8 drop-shadow-lg">
           <div className="h-5"/>
           <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent pt-5">KHO DỮ LIỆU TẬP TRUNG</span>
            <br/>
            <span className="text-white pt-5 text-4xl">(Data Warehouse)</span>
          </h1>
          
          <div className="glass-card p-8 rounded-2xl text-left space-y-4 bg-background/60 backdrop-blur-md border border-white/10 shadow-xl">
  <p className="text-foreground/90 leading-relaxed">
    ECOTEL cung cấp <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold">giải pháp Kho dữ liệu tập trung (Data Lakehouse) </span> 
    được thiết kế để <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> đồng bộ dữ liệu đa nguồn tại một nơi duy nhất và khai thác tối đa giá trị dữ liệu</span>
    trong quá trình chuyển đổi số.
  </p>
  <p className="text-foreground/90 leading-relaxed">
    Hệ thống mang đến khả năng lưu trữ linh hoạt để <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold">xử lý Big Data và hỗ trợ các mô hình AI/ML, </span> 
    đồng thời tích hợp mạnh mẽ với công cụ BI để
    <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> phân tích trực quan và hỗ trợ ra quyết định kinh doanh chính xác </span>
    dựa trên dữ liệu thời gian thực đáng tin cậy.
  </p>
  <p className="text-foreground/90 leading-relaxed">
    Giải pháp đảm bảo nguồn dữ liệu luôn 
    <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> sạch, có cấu trúc và dễ dàng truy xuất, </span>
    giúp doanh nghiệp loại bỏ các điểm nghẽn thông tin và sẵn sàng cho sự
    <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold"> đổi mới sáng tạo và tăng trưởng bền vững. </span>
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