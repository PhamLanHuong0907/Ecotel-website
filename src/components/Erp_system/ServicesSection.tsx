import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, BarChart3, Cpu, ArrowRight } from "lucide-react";
import image_qlsx from "@/assets/Quanlysxtongthe.png";
import image_qlsx1 from "@/assets/qlsx1.png";
import image_erp from "@/assets/erp&bi1.png";
import ScrollToTop from "../Scrolltotop";
const services = [
  {
    id: 1,
    title: "Giải pháp kho dữ liệu tập trung",
    description: `Giải pháp Data Lakehouse được thiết kế mục đích đồng bộ dữ liệu tại một nơi giúp khai thác tối đa giá trị dữ liệu trong quá trình chuyển đổi số`,
    image: "https://vdigital.vn/wp-content/uploads/2022/11/nha-may-thong-minh-1.png",
    icon: Factory,
    path: '/erp/giaiphapkho'
  },
  {
    id: 2,
    title: "Hệ thống quản lý tập trung",
    description: `Trung tâm quản lý điều hành thông minh SOC (Smart Operation Center) là giải pháp tích hợp và tổng hợp dữ liệu tập trung từ tất cả các hệ thống trong doanh nghiệp ngành than.`,
    image: "https://cncvina.com.vn/uploads/2548/day-chuyen-san-xuat-tu-dong-su-dung-robot-1-scaled.jpg",
    icon: Factory,
    path: '/erp/hethongql'
  },

  
  {
    id: 4,
    title: "Hệ thống quản trị doanh nghiệp ERP-BI",
    description:`Trong kỷ nguyên số, việc áp dụng hệ thống ERP (Enterprise Resource Planning) và BI (Business Intelligence) trở thành yếu tố quyết định giúp doanh nghiệp tối ưu hóa quy trình vận hành, tăng cường khả năng quản lý dữ liệu và ra quyết định chính xác dựa trên thông tin thời gian thực.\n\nECOTEL mang đến giải pháp ERP & BI toàn diện, giúp doanh nghiệp chuẩn hóa quy trình, đồng bộ dữ liệu và nâng cao hiệu suất hoạt động.`,
    image: image_erp,
    icon: BarChart3,
    path: '/erp/erp_bi'
  },
    {
    id: 5,
    title: "Phần mềm kế hoạch và định mức sản xuất",
    description:``,
    image: image_erp,
    icon: BarChart3,
    path: '/industrial/eco_mes'
  },
   {
    id: 6,
    title: "Hệ thống quản lý tài sản",
    description:``,
    image: image_erp,
    icon: BarChart3,
    path: '/industrial/eco_mes'
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
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary whitespace-pre-line text-teal-500">
                  {service.title}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <Link to={service.path}>
                    <Button className="group bg-gradient-to-br from-emerald-500 via-teal-400 to-teal-600mt-3">
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