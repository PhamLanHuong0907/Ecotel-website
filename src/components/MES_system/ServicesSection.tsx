import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, BarChart3, Cpu, ArrowRight } from "lucide-react";
import image_iot from "@/assets/iot_tong_the.jpg"
import image_ecome from "@/assets/ecomes.png";
import image_ecovision from "@/assets/ecovision.png"
import ScrollToTop from "../Scrolltotop";
const services = [
  {
    id: 1,
    title: "Quản lý sản xuất tổng thể - ECO-MES",
    description: `ECOTEL cung cấp giải pháp IoT toàn diện, từ thiết kế mạch in PCB, phát triển phần cứng, phần mềm nhúng, đến xây dựng hệ thống kết nối IoT giúp các doanh nghiệp và nhà máy tự động hóa, giám sát và quản lý thiết bị từ xa.`,
    image: "https://ecotel.com.vn/api.php/api.php/images/800/14590293/dien-cong-nghiep-6.jpg1729586543582",
    icon: Factory,
    path: '/iot/pcb'
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
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-blue-900 whitespace-pre-line">
                  {service.title}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <Link to={service.path}>
                    <Button className="group bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400  mt-3">
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