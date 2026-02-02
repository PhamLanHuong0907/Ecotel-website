import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Factory, BarChart3, Cpu, ArrowRight, Wrench } from "lucide-react";
import image_conveyor from "@/assets/giamsatbangtai.png";
import image_enviroment from "@/assets/giamsatmoitruong.png";
import image_oee from "@/assets/qlhstb_big.png";
import image_product from "@/assets/qllenhsanxuat.png";
import image_qms from "@/assets/qlqms.png";
import image_repair from "@/assets/repair.png";
import ScrollToTop from "../Component_mini/Scrolltotop";
import { 
  ClipboardList, 
  Activity, 
  Gauge, 
  ShieldCheck, 
  Wind, 
  Eye 
} from 'lucide-react';
import { Description } from "@radix-ui/react-toast";

const services = [
  {
    id: 1,
    title: "Quản lý lệnh sản xuất & năng suất lao động",
    description: `ECOTEL cung cấp giải pháp quản lý toàn trình lệnh sản xuất, từ lập kế hoạch, phân công đến nghiệm thu. Hệ thống giám sát chặt chẽ năng suất nhân sự theo từng ca kíp, giúp doanh nghiệp đánh giá chính xác hiệu quả vận hành tại hiện trường.`,
    image: image_product,
    icon: ClipboardList, // Biểu tượng cho quản lý, danh sách lệnh
    path: '/mes/production-management'
  },
  {
    id: 2,
    title: "Phần mềm giám sát, vận hành sản xuất",
    description: `ECOTEL ứng dụng công nghệ kết nối sâu rộng (PLC, SCADA, IoT) để thu thập dữ liệu sản xuất theo thời gian thực. Hệ thống tự động tính toán sản lượng và giám sát trạng thái thiết bị, giúp nhà quản lý nắm bắt chính xác mọi diễn biến tại nhà máy.`,
    image: "https://ecotel.com.vn/api.php/api.php/images/800/14590293/dien-cong-nghiep-6.jpg1729586543582",
    icon: Activity, // Biểu tượng cho giám sát hoạt động thời gian thực
    path: '/mes/monitoring-operation'
  },
  {
    id: 3,
    title: "Quản lý hiệu suất thiết bị (OEE)",
    description: `Tối đa hóa năng lực máy móc thông qua việc giám sát ba chỉ số cốt lõi: Mức độ sẵn sàng, Hiệu suất và Chất lượng. ECOTEL cung cấp giải pháp giúp truy vết các điểm nghẽn trong vận hành và hỗ trợ ra quyết định cải thiện năng suất tức thời.`,
    image: image_oee,
    icon: Gauge, // Biểu tượng đồng hồ đo hiệu suất
    path: '/mes/oee-management'
  },
  {
    id: 4,
    title: "Quản lý chất lượng (QMS)",
    description: `Kiểm soát chất lượng không chỉ là kiểm tra sản phẩm cuối cùng, mà là một quy trình xuyên suốt. Đảm bảo tuân thủ tiêu chuẩn ở mọi công đoạn là cách tốt nhất để giảm thiểu lãng phí.

Hệ thống QMS từ ECOTEL giúp số hóa quy trình kiểm tra, giám sát chặt chẽ từ đầu vào đến đầu ra, mang lại sự an tâm tuyệt đối về chất lượng thành phẩm.`,
    image: image_qms,
    icon: ShieldCheck, // Biểu tượng bảo vệ/kiểm tra chất lượng
    path: '/mes/qms'
  },
  {
    id: 5,
    title : "Phần mềm Giám sát, bảo trì & bảo dưỡng thiết bị",
    description: `Việc thiếu kiểm soát về hiệu suất thực tế và tình trạng sức khỏe của máy móc thường dẫn đến những sự cố dừng máy bất ngờ, gây lãng phí năng lượng và gián đoạn dây chuyền sản xuất.
    \n\n Hệ thống cung cấp giải pháp quản lý toàn diện bao gồm: Giám sát hiệu suất tổng thể (OEE), Dự báo lỗi thiết bị (SM), Quản lý tiêu thụ điện năng (EM) và Định vị tài sản thời gian thực (LM). 
    Nền tảng giúp doanh nghiệp chuyển đổi từ bảo trì thụ động sang chủ động, tối ưu hóa 
    vòng đời tài sản.`,
    image: image_repair,
    icon: Wrench,
    path: '/mes/repair'
  },
  {
    id: 6,
    title: "Giám sát môi trường",
    description: `Trong môi trường đặc thù như hầm lò hay nhà máy hóa chất, việc kiểm soát các biến động môi trường là yếu tố sống còn. Những rủi ro vô hình như khí độc hay thay đổi nhiệt độ đột ngột cần được phát hiện trước khi chúng trở thành sự cố.
    \n\nECOTEL cung cấp hệ thống quan trắc môi trường thông minh, tích hợp cảm biến IoT để đo lường liên tục nồng độ khí và điều kiện vi khí hậu. 
    Hệ thống tự động kích hoạt cảnh báo khẩn cấp ngay khi chỉ số vượt ngưỡng an toàn, hỗ trợ ứng phó kịp thời.`,
    image: image_enviroment,
    icon: Wind, // Biểu tượng không khí/môi trường
    path: '/mes/environment-monitoring'
  },
  {
    id: 7,
    title: "Giám sát băng tải",
    description: `Nâng cấp quy trình vận hành với công nghệ giám sát băng tải thông minh. Thay vì kiểm tra thủ công, doanh nghiệp cần một "đôi mắt" công nghệ hoạt động 24/7 để phát hiện các bất thường nhỏ nhất.

\n\nỨng dụng Camera AI và cảm biến IoT, giải pháp của ECOTEL tự động phát hiện tình trạng lệch băng, giám sát nhiệt độ vòng bi/mô-tơ để ngăn ngừa nguy cơ cháy nổ. Dữ liệu được đồng bộ về trung tâm điều hành giúp xử lý sự cố tự động và chính xác.`,
    image: image_conveyor,
    icon: Eye, // Biểu tượng cho "đôi mắt công nghệ"/Camera AI
    path: '/mes/conveyor-monitoring'
  },
];


export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 mt-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary ">
            Các sản phẩm của hệ thống MES
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