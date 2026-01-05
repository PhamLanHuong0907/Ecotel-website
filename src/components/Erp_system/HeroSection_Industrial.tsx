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
            
          </h1>
          
          <div className="glass-card p-8 rounded-2xl text-left space-y-4 bg-background/60 backdrop-blur-md border border-white/10 shadow-xl">
            <p className="text-foreground/90 leading-relaxed">
              <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400  bg-clip-text text-transparent font-semibold">Tự động hóa công nghiệp</span> là quá trình kết nối và tối ưu hóa hệ thống thiết bị trong nhà máy nhằm nâng cao hiệu suất vận hành và độ tin cậy của quy trình sản xuất. Việc ứng dụng các công nghệ tự động hóa không chỉ giúp giảm chi phí, cải thiện chất lượng sản phẩm mà còn tăng tính linh hoạt trong sản xuất và giảm thiểu tác động đến môi trường.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Trong bối cảnh ngành công nghiệp khai thác và chế biến tiếp tục đóng vai trò quan trọng trong nền kinh tế, <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent font-semibold">ECOTEL</span> tự hào là đối tác đáng tin cậy của các nhà máy sản xuất tại Việt Nam. Chúng tôi cung cấp những giải pháp tự động hóa tiên tiến, giúp doanh nghiệp nâng cao hiệu quả sản xuất, tối ưu hóa vận hành và tạo lợi thế cạnh tranh bền vững.
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