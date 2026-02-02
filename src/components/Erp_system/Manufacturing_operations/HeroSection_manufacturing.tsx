import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
import manufacturingHero from "@/assets/nganh-cong-nghiep.jpeg.jpg";
export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-24 pb-0 overflow-hidden h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/5 w-100 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-20 right-1/5 w-100 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* THAY ĐỔI 1: Thay 'container' bằng 'w-full max-w-[1480px]' 
        (Mặc định container khoảng 1280px, tăng thêm 200px là 1480px)
      */}
      <div className="w-full  mx-auto px-4 relative z-10 mt-16">
        
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8"
        >
         
        </motion.div>

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Tag */}
          

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-[60px]">
            <span className="gradient-text">Vận hành - Sản xuất</span>
          </h1>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-8 text-left"
        >
          <div className="glass-card p-8 rounded-2xl space-y-4 ">
            <p className="text-lg leading-relaxed">
              <span className="text-primary font-semibold">
                Thiết lập quy trình vận hành đồng bộ và kiểm soát chặt chẽ dây chuyền sản xuất là chìa khóa để doanh nghiệp 
                đảm bảo chất lượng sản phẩm, tối ưu chi phí giá thành và đáp ứng tiến độ giao hàng.
              </span>
            </p>
            <p className="text-muted-foreground leading-relaxed text-[19px]">
             Giải pháp giúp kiến tạo một hệ sinh thái sản xuất thông minh, liên kết chặt chẽ các mắt xích từ Lập kế hoạch, 
             Cung ứng vật tư đến Quản lý kho và Bảo trì thiết bị, giúp loại bỏ hoàn toàn các điểm nghẽn làm gián đoạn dòng chảy 
             công việc.
            
              Thông qua việc số hóa toàn diện nhà máy, Ban lãnh đạo sẽ nắm bắt chính xác năng lực sản xuất thực tế theo thời gian 
              thực để tối ưu hóa nguồn lực, giảm thiểu các lãng phí vô hình và gia tăng năng lực cạnh tranh nhờ tốc độ đáp ứng đơn 
              hàng vượt trội.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      
    </section>
  );
};