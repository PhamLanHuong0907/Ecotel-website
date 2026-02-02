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
            <span className="gradient-text">Quản trị nguồn lực</span>
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
            <p className="text-muted-foreground leading-relaxed text-[19px]">
             Tối ưu hóa nguồn lực là nền tảng cốt lõi giúp doanh nghiệp vận hành hiệu quả, giảm thiểu lãng phí và duy trì lợi thế cạnh tranh bền vững trong môi trường kinh doanh số.</p>
            <p className="text-muted-foreground leading-relaxed text-[19px]">
              Hệ thống giúp doanh nghiệp kiểm soát tập trung hai nguồn lực huyết mạch là Nhân sự và Tài chính trên một nền tảng duy nhất, thay thế hoàn toàn các phương thức quản lý thủ công rời rạc để đảm bảo dòng tiền thông suốt.
            Ngoài ra, việc minh bạch hóa dữ liệu toàn hệ thống sẽ cung cấp cho Ban lãnh đạo các chỉ số đo lường chính xác, tạo tiền đề vững chắc cho việc ra quyết định điều phối ngân sách và hoạch định chiến lược mở rộng quy mô.</p>
          </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      
    </section>
   
  );
};