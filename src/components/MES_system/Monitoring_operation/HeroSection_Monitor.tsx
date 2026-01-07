import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
            <span className="gradient-text">Phần mềm Giám sát</span> 
            <div className="h-5"/> 
            <span className="gradient-text">& Vận hành sản xuất </span>

          </h1>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-8 text-center"
        >
          <div className="glass-card p-8 rounded-2xl space-y-4">
    <p className="text-primary font-semibold text-[21px] leading-relaxed ">
       Hệ thống giám sát trung tâm dựa trên nền tảng IoT và SCADA: <br/><p className="text-primary font-semibold text-[21px] leading-relaxed">Dữ liệu chính xác, Cập nhật tức thì, Quản lý hiệu quả.</p>
    </p>
    <p className="text-muted-foreground leading-relaxed text-[19px]">
       Thay thế quy trình giám sát truyền thống bằng hệ thống thu thập dữ liệu tự động từ các bộ điều khiển công nghiệp, 
       phần mềm không chỉ tổng hợp sản lượng chính xác mà còn giám sát chặt chẽ trạng thái vận hành của từng thiết bị. 
       Nhờ đó, ban quản lý có thể phát hiện ngay các bất thường và nắm bắt tình hình sản xuất tại từng thời điểm mà không cần chờ báo cáo cuối ngày.
    </p>
</div>
        </motion.div>
      </div>

      {/* Hero Image */}
      
    </section>
  );
};