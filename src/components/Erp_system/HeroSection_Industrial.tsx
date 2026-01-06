import { motion } from "framer-motion";
import { Factory } from "lucide-react";
// Đừng quên import file video của bạn vào đây
import industrialVideo from "@/assets/erp_bi1.png"; 
import { TitleBanner } from "./TitleBanner";
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
           <div className="h-20"/>
           <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent pt-5">HỆ THỐNG ERP</span>
            <br/>
            <span className="text-white pt-5 text-4xl">(Enterprise Resource Planning)</span>
          </h1>
          
          <div className="glass-card p-8 rounded-2xl text-left space-y-4 bg-background/60 backdrop-blur-md border border-white/10 shadow-xl">
            <p className="text-foreground/90 leading-relaxed">
              ECOTEL cung cấp <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400  bg-clip-text text-transparent font-semibold">giải pháp ERP tổng thể </span> giúp doanh nghiệp 
            <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400  bg-clip-text text-transparent font-semibold"> chuẩn hóa quy trình quản trị, tích hợp dữ liệu tập trung và tối ưu hóa hoạt động vận hành</span>
            trên toàn bộ hệ thống.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Hệ thống ERP cho phép doanh nghiệp <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold">quản lý hiệu quả các nguồn lực </span> 
              như nhân sự, tài chính, sản xuất, kho vận và chuỗi cung ứng, đồng thời 
              <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400  bg-clip-text text-transparent font-semibold"> kết nối liền mạch với các hệ thống MES, AIoT, BI, </span>
            hỗ trợ phân tích dữ liệu và ra quyết định chính xác theo thời gian thực.
            </p>
            <p className="text-foreground/90 leading-relaxed">
            Giải pháp ERP của ECOTEL được thiết kế 
            <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400  bg-clip-text text-transparent font-semibold"> linh hoạt, dễ mở rộng, </span>
            phù hợp với nhiều mô hình doanh nghiệp và sẵn sàng đồng hành cùng quá trình
            <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400  bg-clip-text text-transparent font-semibold"> chuyển đổi số và phát triển bền vững. </span>
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