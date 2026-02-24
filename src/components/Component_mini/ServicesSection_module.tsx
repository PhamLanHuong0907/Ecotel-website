import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

// 1. Định nghĩa kiểu dữ liệu cho một dịch vụ/sản phẩm
export interface ServiceItem {
  id: string | number;
  title: string;
  description: string; // Hỗ trợ xuống dòng bằng ký tự '\n\n'
  image: string;
  icon: LucideIcon;    // Component Icon từ lucide-react
  path: string;        // Đường dẫn khi bấm nút xem chi tiết
}

// 2. Định nghĩa Props cho Component
interface ServicesSectionProps {
  /** Tiêu đề lớn của cả section */
  sectionTitle: string;
  /** Danh sách các dịch vụ cần hiển thị */
  items: ServiceItem[];
  /** (Optional) Text hiển thị trên nút bấm. Mặc định là "Xem chi tiết" */
  buttonText?: string;
}

export const ServicesSection = ({ 
  sectionTitle, 
  items, 
  buttonText = "Xem chi tiết" 
}: ServicesSectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-20 mt-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            {sectionTitle}
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Logic Zig-Zag: Chẵn thì ảnh trái, Lẻ thì ảnh phải
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* --- Image Area --- */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Overlay (Bottom Left) */}
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-primary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* --- Content Area --- */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-heading font-bold  text-primary whitespace-pre-line">
                  {service.title}
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {/* Tách chuỗi description dựa trên \n\n để tạo các đoạn văn riêng biệt */}
                  {service.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <Link to={service.path}>
                  <Button className="group bg-gradient-to-br from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] mt-3">
                    {buttonText}
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