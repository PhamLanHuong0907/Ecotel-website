import { motion } from "framer-motion";
import erpDiagram from "@/assets/hethongmes.png";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import image_giamsat from "@/assets/Giamsat_mes.jpg"
import image_ketnoi from "@/assets/ketnoi2_mes.png"
import image_toiuuhoa from "@/assets/toiuuhoa_mes.jpg"
const highlightCards = [
  {
    id: 1,
    title: "Giám sát toàn diện",
    description: "Giám sát và điều hành sản xuất theo thời gian thực.\n Theo dõi chặt chẽ lệnh sản xuất, tiến độ, năng suất và chất lượng.",
    image: image_giamsat,
  },
  {
    id: 2,
    title: "Kết nối chặt chẽ",
    description: "Tạo sự liên kết liền mạch \n giữa hệ thống quản trị (ERP) \n và tầng thiết bị.\n Đồng bộ dữ liệu trực tiếp \n từ dây chuyền sản xuất.",
    image: image_ketnoi,
  },
  {
    id: 3,
    title: "Tối ưu hóa hiệu quả",
    description: "Giảm thiểu sai lỗi, tối ưu hóa \n nguồn lực và hiệu suất thiết bị.\n Nâng cao hiệu quả vận hành, \n hiện thực hóa mô hình nhà máy thông minh.",
    image: image_toiuuhoa,
  },
];

export const HeroSection = () => {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      
      {/* --- PHẦN 1: HERO BACKGROUND (65vh) --- */}
      <section 
        className="h-[65vh] flex items-center relative overflow-hidden bg-no-repeat bg-cover bg-left"
        style={{ 
          backgroundImage: `url(${erpDiagram})`, // Chèn ảnh vào đây
        }}
      >
        {/* Lớp Overlay tối: Giúp chữ trắng dễ đọc hơn trên nền ảnh */}
        <div className="absolute inset-0 bg-[#1a3a5c]/80" /> 
        
        {/* Background Effects: Giữ lại để tạo hiệu ứng ánh sáng lung linh */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/5 w-100 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-20 right-1/5 w-100 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        <div className="w-full mx-auto px-4 relative z-10 mt-16">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
              HỆ THỐNG MES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md">
              (Manufacturing Execution System)
            </p>
            <p className="text-2xl md:text-3xl text-white/80 italic drop-shadow-md">
              Giám sát - Kết nối - Tối ưu hóa
            </p>
          </motion.div>
        </div>

        {/* Gradient mờ dần ở đáy để chuyển tiếp mượt sang Section 2 */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* --- PHẦN 2: HIGHLIGHT CARDS (50vh) --- */}
      <section className="bg-background flex items-start ">
        <div className="container mx-auto px-4 h-full py-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary items-center justify-center mb-10 mt-10 text-center">
            Lợi ích nổi bật
          </h2>
          <div className="grid md:grid-cols-3 gap-6 h-full">
            {highlightCards.map((card, index) => (
  <motion.div
    key={card.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="relative h-full rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-white/10 "
  >

  
  {/* Layer 1: Background Image (Luôn hiện) */}
  <div
    className="absolute inset-0 bg-cover bg-left transition-transform duration-700 group-hover:scale-110"
    style={{ backgroundImage: `url(${card.image})` }}
  />

  {/* Layer 2: Gradient Overlay (Ẩn, hiện khi hover) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#1e5c8b]/90 via-[#1e5c8b]/40 to-transparent transition-opacity duration-500 opacity-100 " />

  {/* Layer 3: Content (Ẩn, hiện khi hover) */}
  <div className="relative h-full flex flex-col justify-start p-6 w-full z-10 transition-opacity duration-500 whitespace-pre-line opacity-100 ">
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