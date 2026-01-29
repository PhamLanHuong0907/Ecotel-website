import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, BarChart3, Cpu, ArrowRight } from "lucide-react";
import ScrollToTop from "../Component_mini/Scrolltotop";
import image_centralmanagement from "@/assets/Hethongql.png";
import image_security from "@/assets/giamsoatantoanAI.png";
import image_smartsurvey from "@/assets/khaosatthamdo.webp";
import image_visionsensor from "@/assets/cambienhinhanh.png"
import { Map, ShieldCheck, ScanEye, LayoutDashboard } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Khảo sát & Thăm dò thông minh",
    description: "ECOTEL tiên phong ứng dụng tổ hợp công nghệ Drone và hệ thống phân tích dữ liệu địa lý để hiện đại hóa quy trình khảo sát. Giải pháp của chúng tôi cho phép lập bản đồ 3D giám sát thực thể và đánh giá tiềm năng khoáng sản với độ chính xác cao, giúp doanh nghiệp tối ưu hóa công tác quy hoạch cũng như quản lý tài nguyên hiệu quả.",
    image: image_smartsurvey, // Cần đổi ảnh minh họa phù hợp (Drone/Bản đồ)
    icon: Map,
    path: '/AI&IoT/smart-survey'
  },
  {
    id: 2,
    title: "Giám sát & An toàn ứng dụng AI",
    description: "Nâng tầm hệ thống an ninh truyền thống với công nghệ AI tiên tiến, giải pháp của ECOTEL không chỉ kiểm soát chặt chẽ phương tiện và nhân sự ra vào mà còn tự động phát hiện các vi phạm về bảo hộ lao động. Đây là chìa khóa để kiến tạo môi trường sản xuất an toàn tuyệt đối và giảm thiểu rủi ro tai nạn trong các khu công nghiệp.",
    image: image_security, // Cần đổi ảnh minh họa phù hợp (Camera AI/An ninh)
    icon: ShieldCheck,
    path: '/AIoT/safety_security'
  },
  {
    id: 3,
    title: "Cảm biến hình ảnh với AI tích hợp",
    description: "Sở hữu dòng cảm biến IV4 thế hệ mới, chúng tôi mang đến giải pháp kiểm tra chất lượng tự động với khả năng phân loại, đếm sản phẩm và đọc ký tự (OCR) vượt trội. Hệ thống tích hợp AI giúp doanh nghiệp phát hiện lỗi sai hỏng nhanh chóng, đảm bảo tính ổn định cho dây chuyền sản xuất mà không đòi hỏi quy trình thiết lập phức tạp.",
    image: image_visionsensor,
    icon: ScanEye,
    path: '/AI&IoT/vision-sensor'
  },
  {
    id: 4,
    title: "Hệ thống quản lý tập trung",
    description: "Trung tâm điều hành thông minh (SOC) là giải pháp cốt lõi giúp số hóa toàn diện quy trình quản trị. Bằng cách tích hợp dữ liệu đa nguồn từ IoT, Drone đến Camera và ứng dụng Big Data để phân tích, hệ thống cung cấp bức tranh toàn cảnh trực quan theo thời gian thực, hỗ trợ ban lãnh đạo ra quyết định chính xác và kịp thời.",
    image: image_centralmanagement, // Cần đổi ảnh minh họa phù hợp (Dashboard SOC)
    icon: LayoutDashboard,
    path: '/AI&IoT/central-management'
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 mt-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary ">
            Các sản phẩm của hệ thống AIoT
          </h2>
        </div>
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-primary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary whitespace-pre-line text-blue-500">
                  {service.title}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <Link to={service.path}>
                    <Button className="group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 mt-3">
                      <ScrollToTop/>
                      Xem chi tiết
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};