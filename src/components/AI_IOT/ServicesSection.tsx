import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, BarChart3, Cpu, ArrowRight } from "lucide-react";
import ScrollToTop from "../Scrolltotop";
import image_kiemsoatxe from "@/assets/kiemsoatxe.png"
import image_sacxe from "@/assets/sacxe.jpg"
import image_camera from "@/assets/cameraAI.jpg"
const services = [
  {
    id: 1,
    title: "Hệ thống giám sát phương tiện ứng dụng Camera AI",
    description: `Với sự phát triển nhanh chóng của đô thị và nhu cầu tối ưu không gian đỗ xe, ECOTEL cung cấp các giải pháp đỗ xe tự động & kiểm soát phương tiện hiện đại, giúp nâng cao hiệu suất vận hành, tiết kiệm diện tích và đảm bảo an toàn cho các bãi đỗ xe tại khu đô thị, tòa nhà, trung tâm thương mại, khu công nghiệp.`,
    image: image_kiemsoatxe ,
    icon: Factory,
    path: '/AI&IoT/garagage'
  },
  {
    id: 2,
    title: "Hệ thống giám sát thực thể",
    description: `Với sự phát triển mạnh mẽ của xe điện (EV), nhu cầu về hạ tầng trạm sạc trở nên cấp thiết hơn bao giờ hết. ECOTEL cung cấp giải pháp sạc pin xe điện thông minh, giúp tối ưu hóa trải nghiệm sạc, tăng hiệu suất vận hành, đảm bảo an toàn và hỗ trợ các doanh nghiệp, khu đô thị, trung tâm thương mại, bãi đỗ xe, nhà máy triển khai hệ thống sạc hiện đại, linh hoạt và tiết kiệm chi phí.`,
    image: image_sacxe,
    icon: Factory,
    path: '/AI&IoT/electric_power'
  },
  {
    id: 3,
    title: "Cảm biến hình ảnh với AI tích hợp",
    description: `Trong bối cảnh công nghệ 4.0, việc áp dụng trí tuệ nhân tạo (AI) vào hệ thống giám sát an ninh đã trở thành xu hướng tất yếu, giúp nâng cao hiệu quả quản lý và đảm bảo an toàn cho các khu vực quan trọng như nhà máy, khu công nghiệp, tòa nhà, trường học, bệnh viện, trung tâm thương mại.

ECOTEL mang đến giải pháp Camera AI với công nghệ phân tích hình ảnh tiên tiến, giúp phát hiện nhanh chóng các mối nguy hiểm, cảnh báo kịp thời, giám sát chặt chẽ 24/7, hỗ trợ ra quyết định chính xác trong thời gian thực.`,
    image: image_camera,
    icon: BarChart3,
    path: '/AI&IoT/cameraAI'
  },
  {
    id: 4,
    title: "Phần mềm nhân sự, tiền lương tích hợp AI",
    description: `Trong bối cảnh công nghệ 4.0, việc áp dụng trí tuệ nhân tạo (AI) vào hệ thống giám sát an ninh đã trở thành xu hướng tất yếu, giúp nâng cao hiệu quả quản lý và đảm bảo an toàn cho các khu vực quan trọng như nhà máy, khu công nghiệp, tòa nhà, trường học, bệnh viện, trung tâm thương mại.

ECOTEL mang đến giải pháp Camera AI với công nghệ phân tích hình ảnh tiên tiến, giúp phát hiện nhanh chóng các mối nguy hiểm, cảnh báo kịp thời, giám sát chặt chẽ 24/7, hỗ trợ ra quyết định chính xác trong thời gian thực.`,
    image: image_camera,
    icon: BarChart3,
    path: '/AI&IoT/cameraAI'
  },
  {
    id: 5,
    title: "Giải pháp kết nối máy móc thiết bị IoT - ECOMES",
    description: '',
    image: image_camera,
    icon: BarChart3,
    path: '/iot/ecomes'
  },
   {
    id: 6,
    title: "Quản lý, giám sát tài sản và hiệu suất",
    description: `ECOTEL cung cấp giải pháp IoT toàn diện, từ tư vấn, thiết kế, triển khai hệ thống IoT đến tích hợp với hệ thống hiện có, giúp doanh nghiệp tối ưu vận hành, giám sát thông minh và nâng cao năng suất.`,
    image: image_camera,
    icon: Factory,
    path: '/iot/ecovision'
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
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
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-blue-500 whitespace-pre-line">
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