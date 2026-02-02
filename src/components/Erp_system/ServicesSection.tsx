import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import image_qtnl from "@/assets/quantringuonluc_outside.png";
import image_vhsx from "@/assets/vanhanh_sx.png";
import image_kddv from "@/assets/KDDV.png";
import image_bi from "@/assets/DashboardBI.png";
import ScrollToTop from "../Component_mini/Scrolltotop";
import { 
  Briefcase,   // Dùng cho Quản trị nguồn lực (Hành chính/Tổng hợp)
  Factory,     // Dùng cho Vận hành - Sản xuất (Nhà máy)
  ShoppingCart,// Dùng cho Kinh doanh (Bán hàng)
  BarChart3,    // Dùng cho BI (Biểu đồ/Báo cáo)
  ArrowRight
} from 'lucide-react';


const services = [
  {
    id: 1,
    title: "Quản trị nguồn lực",
    description: `Sự phân tán dữ liệu giữa Nhân sự, Tài chính và Kho vận thường dẫn đến lãng phí nguồn lực và thiếu cái nhìn tổng quan. Tối ưu hóa nguồn lực là bài toán sống còn để duy trì lợi thế cạnh tranh.

\n\nECOTEL cung cấp nền tảng quản trị hợp nhất, giúp doanh nghiệp quy hoạch và phân bổ nguồn lực chính xác. Hệ thống đảm bảo dòng chảy thông tin xuyên suốt, giảm thiểu chi phí ẩn và tối đa hóa hiệu quả sử dụng tài sản doanh nghiệp.`,
    image: image_qtnl,
    icon: Briefcase,
    path: '/erp/resource-management'
  },
  {
    id: 2,
    title: "Vận hành - Sản xuất",
    description: `Quy trình vận hành rời rạc là nguyên nhân chính gây ra chậm tiến độ và khó kiểm soát chi phí giá thành. Để mở rộng quy mô, doanh nghiệp cần một hệ thống kiểm soát chặt chẽ từng công đoạn.

\n\nECOTEL thiết lập quy trình sản xuất số hóa, kết nối đồng bộ từ nguyên vật liệu đầu vào đến thành phẩm đầu ra. Giải pháp giúp tự động hóa điều phối, giảm thiểu thời gian chết và đảm bảo chất lượng sản phẩm ổn định theo tiêu chuẩn.`,
    image: image_vhsx,
    icon: Factory,
    path: '/erp/manufacturing-operations'
  },
  {
    id: 3,
    title: "Kinh doanh & Dịch vụ",
    description: `Trong thị trường cạnh tranh, tốc độ phản hồi và trải nghiệm khách hàng là yếu tố then chốt. Các quy trình bán hàng thủ công dễ dẫn đến sai sót trong hợp đồng và bỏ lỡ cơ hội kinh doanh tiềm năng.

\n\nGiải pháp của ECOTEL chuẩn hóa toàn bộ phễu bán hàng (Sales Pipeline) và dịch vụ sau bán. Hệ thống hỗ trợ quản lý chặt chẽ tính pháp lý trong giao dịch, giúp đội ngũ kinh doanh chốt đơn nhanh chóng và nâng cao sự hài lòng của khách hàng.`,
    image: image_kddv,
    icon: ShoppingCart,
    path: '/erp/sales-services'
  },
  {
    id: 4,
    title: "Dashboard & BI",
    description: `Trong kỷ nguyên số, dữ liệu phân mảnh là rào cản lớn nhất cho việc ra quyết định. Lãnh đạo doanh nghiệp cần nhìn thấy bức tranh toàn cảnh về sức khỏe tài chính và vận hành ngay tại thời điểm thực.

\n\nECOTEL mang đến giải pháp ERP & BI toàn diện, biến dữ liệu thô thành thông tin chiến lược. Hệ thống Dashboard trực quan giúp chuẩn hóa báo cáo, hỗ trợ phân tích xu hướng và ra quyết định kinh doanh chính xác, kịp thời.`,
    image: image_bi,
    icon: BarChart3,
    path: '/erp/dashboard-bi'
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 mt-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary ">
            Các sản phẩm của hệ thống ERP
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
                    <Button className="group bg-gradient-to-br from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6]mt-3">
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