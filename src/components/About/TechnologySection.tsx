import app from "@/assets/image-removebg-preview (3).png";
import cloud from "@/assets/image-removebg-preview (4).png";
import data from "@/assets/image-removebg-preview (5).png";
import repair from "@/assets/image-removebg-preview (6).png";
import iot from "@/assets/image-removebg-preview (7).png"
const technologies = [
  // Item 0: Cột Trái - Dùng Ảnh (biến app)
  { icon: app, title: "PHÁT TRIỂN ỨNG DỤNG", color: "bg-blue-500", items: ["Lập kế hoạch, thiết kế , phát triển ứng dụng gốc và đa nền tảng"] },
  // Item 1: Cột Phải - Dùng Icon Lucide
  { icon: cloud, title: "CHUYỂN ĐỔI SỐ", color: "bg-cyan-500", items: ["Cung cấp các giải pháp chuyển đổi số dựa trên phân tích và hiểu biết về tình hình, nhu cầu, tư duy và văn hóa kinh doanh", "Giúp doanh nghiệp lựa chọn giải pháp công nghệ phù hợp với tầm nhìn dài hạn của mình"] },
  // Item 2: Cột Trái
  { icon: data, title: "DI CHUYỂN DỮ LIỆU", color: "bg-teal-500", items: ["Thực hiện chiến lược di chuyển phần mềm hiệu quả từ các nền tảng thay thế sang công nghệ và cơ sở hạ tầng"] },
  // Item 3: Cột Trái
  { icon: repair, title: "BẢO TRÌ & GIÁM SÁT HỆ THỐNG", color: "bg-emerald-500", items: ["Cung cấp dịch vụ quản lý & giám sát & bảo trì ứng dụng đầu cuối"] },
  // Item 4: Cột Phải
  { icon: iot, title: "IOT & NHÚNG", color: "bg-emerald-500", items: ["Ứng dụng IoT trên nền tảng Cloud", "Phát triển mạng M2M", "Phát triển thiết bị phần cứng", "Tư vấn phần mềm nhúng", "Thiết kế hệ thống & phát triển sản phẩm", "Kiểm thử hệ thống", "Phát triển ứng dụng Firmware & HMI"] },
];

export const TechnologiesSection = () => {
  const leftColumnItems = [technologies[0], technologies[2], technologies[3]]; 
  const rightColumnItems = [technologies[1], technologies[4]]; 

  const renderCard = (tech: any, index: number) => {
    // Kiểm tra xem icon là Component (function) hay đường dẫn ảnh (string/object)
    const isLucideIcon = typeof tech.icon === 'function' || (typeof tech.icon === 'object' && 'render' in tech.icon);

    return (
      <div key={tech.title} className="relative group animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
        <div className="glass-card rounded-2xl overflow-hidden hover-lift h-full border border-white/10 shadow-lg bg-white/5 backdrop-blur-sm">
          <div className="flex justify-center py-6">
            <div className={`w-16 h-16 rounded-2xl ${tech.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              
              {/* --- PHẦN SỬA ĐỔI Ở ĐÂY --- */}
              {isLucideIcon ? (
                // Nếu là Lucide Icon thì render như cũ
                <tech.icon className="w-8 h-8 text-white" />
              ) : (
                // Nếu là Ảnh thì dùng thẻ img
                <img 
                  src={tech.icon} 
                  alt={tech.title} 
                  className="w-8 h-8 object-contain brightness-0 invert scale-150" 
                />
                // Lưu ý: 'brightness-0 invert' để biến ảnh đen thành trắng (nếu cần giống icon). 
                // Nếu ảnh của bạn đã có màu sẵn thì bỏ class 'brightness-0 invert' đi.
              )}
              {/* ------------------------- */}

            </div>
          </div>
          <div className={`${tech.color} py-3 px-4`}>
            <h3 className="text-white font-bold text-center text-sm">{tech.title}</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {tech.items.map((item: string) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  
<span className="text-gray-300 [.light_&]:text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Năng lực công nghệ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Công nghệ <span className="gradient-text">của chúng tôi</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            {leftColumnItems.map((tech, index) => renderCard(tech, index))}
          </div>
          <div className="flex flex-col gap-20 ">
            {rightColumnItems.map((tech, index) => renderCard(tech, index + 3))}
          </div>
        </div>
      </div>
    </section>
  );
};