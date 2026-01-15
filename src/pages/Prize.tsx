import { Award, Trophy, Star, Medal, ChevronRight, X } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";
import image_banquyen from "@/assets/banquyen.png";
import { motion, AnimatePresence } from "framer-motion"; // Thêm AnimatePresence nếu muốn hiệu ứng mượt khi đóng
import { useState } from "react";

// 1. Dữ liệu giải thưởng
const awardsData = [
  { 
    period: "2005", 
    title: "CUP Đồng Phần Mềm Đóng Gói", 
    description: "Đạt CUP Đồng lĩnh vực 'Phần mềm thương phẩm' xuất sắc nhất năm 2005 cho sản phẩm phân tích lương.", 
    icon: Medal,
    color: "from-amber-400 to-yellow-600", 
    textColor: "text-amber-500",
    borderColor: "border-amber-500/30"
  },
  { 
    period: "2006", 
    title: "Giải Sao Khuê 4 Sao", 
    description: "Đạt giải Sao Khuê 4 sao của VINASA tổ chức cho sản phẩm phần mềm tính lương Esoft Financials.", 
    icon: Star,
    color: "from-amber-400 to-yellow-600",
    textColor: "text-amber-500",
    borderColor: "border-amber-500/30"
  },
  { 
    period: "2006", 
    title: "CUP Đồng Phần Mềm Đóng Gói", 
    description: "Đạt CUP Đồng lĩnh vực 'Phần mềm thương phẩm' xuất sắc nhất năm 2005 cho sản phẩm phân tích lương.", 
    icon: Medal,
    color: "from-amber-400 to-yellow-600",
    textColor: "text-amber-500",
    borderColor: "border-amber-500/30"
  },
  { 
    period: "2007", 
    title: "Giải Sao Khuê 4 Sao", 
    description: "Đoạt giải Sao Khuê 4 sao của Hiệp hội doanh nghiệp phần mềm Việt Nam trong lĩnh vực phần mềm tính lương.", 
    icon: Trophy,
    color: "from-amber-400 to-yellow-600",
    textColor: "text-amber-500",
    borderColor: "border-amber-500/30"
  },
];

// 2. Dữ liệu Bản quyền
const copyrightData = {
  title: "Giấy Chứng Nhận Đăng Ký Quyền Tác Giả",
  productName: "Phần mềm Quản lý tài sản",
  author: "Nguyễn Tuấn Anh",
  owner: "CÔNG TY ECOTEL",
  issueDate: "21/10/2025",
  certNumber: "9057/2025/QTG",
  issuer: "Cục Bản Quyền Tác Giả - Bộ VH, TT & DL"
};

const AwardItem = ({ item, index, isVisible, totalItems }: { item: typeof awardsData[0]; index: number; isVisible: boolean; totalItems: number }) => {
  return (
    <div className="flex-1 flex flex-col items-center relative group min-w-[280px]">
      {/* Đường nối ngang */}
      {index < totalItems - 1 && (
        <div className={`hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-amber-500 to-amber-500/30 transition-all duration-1000 ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"} origin-left z-0`} style={{ transitionDelay: `${index * 200 + 300}ms` }}>
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-amber-500/50`}>
               <ChevronRight size={20} />
            </div>
        </div>
      )}

      {/* Icon Section */}
      <div className="relative z-10 flex flex-col items-center">
        <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transition-all duration-500 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} style={{ transitionDelay: `${index * 200}ms` }}>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} animate-pulse-slow opacity-50 blur-md`} />
          <item.icon className="w-10 h-10 text-white relative z-10" />
        </div>
        
        {/* Đường nối dọc */}
        <div className={`w-1 h-12 bg-gradient-to-b from-amber-500 to-amber-500/10 transition-all duration-500 ${isVisible ? "scale-y-100" : "scale-y-0"} origin-top`} style={{ transitionDelay: `${index * 200 + 150}ms` }} />
      </div>

      {/* Content Card */}
      <div className={`w-full mt-2 px-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 200 + 300}ms` }}>
        <div className={`glass-card rounded-2xl p-6 hover-lift relative overflow-hidden h-full border-t-4 border-t-amber-500`}>
          <div className="flex justify-center mb-4">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${item.borderColor} bg-white backdrop-blur-sm`}>
              <Award className={`w-4 h-4 ${item.textColor}`} />
              <span className={`text-sm font-bold ${item.textColor}`}>{item.period}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors min-h-[56px] flex items-center justify-center">
            {item.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm text-center">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AwardsSection = () => {
  const { ref, isVisible } = useSectionInView();
  const [showCert, setShowCert] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* === PHẦN 1: HEADER & TIMELINE GIẢI THƯỞNG === */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 mb-4">
             Thành tựu & Ghi nhận
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Giải Thưởng <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Tiêu Biểu</span>
          </h2>
        </div>
        
        <div className="overflow-x-auto pb-4 hide-scrollbar mb-24">
            <div ref={ref} className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-stretch min-w-[300px] md:min-w-0 max-w-7xl mx-auto">
            {awardsData.map((item, index) => (
                <AwardItem 
                    key={index} 
                    item={item} 
                    index={index} 
                    isVisible={isVisible} 
                    totalItems={awardsData.length}
                />
            ))}
            </div>
        </div>

        {/* === PHẦN 2: BẢN QUYỀN MỚI (Trigger Card) === */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            
            <div className="text-center mb-10">
                 <h3 className="text-3xl font-bold text-foreground">
                   Bản Quyền & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Sở Hữu Trí Tuệ</span>
                 </h3>
                 <p className="text-muted-foreground mt-2">Dấu ấn công nghệ mới nhất năm 2025</p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* THẺ ĐỂ BẤM (TRIGGER) */}
                <div 
                    onClick={() => setShowCert(true)}
                    className="w-full glass-card p-6 md:p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 cursor-pointer hover:shadow-blue-500/20 hover:scale-[1.01] transition-all duration-300 relative group"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Thumbnail ảnh nhỏ bên trái */}
                        <div className="relative w-32 h-24 md:w-40 md:h-28 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-md">
                            <img 
                                src={image_banquyen} 
                                alt="Thumbnail" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded">Xem</span>
                            </div>
                        </div>

                        {/* Thông tin văn bản */}
                        <div className="flex-1 text-center md:text-left space-y-2">
                            <h4 className="text-xl font-bold text-blue-500">{copyrightData.title}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground">
                                <p><span className="font-semibold text-foreground">Tác phẩm:</span> {copyrightData.productName}</p>
                                <p><span className="font-semibold text-foreground">Số GCN:</span> {copyrightData.certNumber}</p>
                                <p><span className="font-semibold text-foreground">Tác giả:</span> {copyrightData.author}</p>
                                <p><span className="font-semibold text-foreground">Ngày cấp:</span> {copyrightData.issueDate}</p>
                            </div>
                        </div>
                        
                        <ChevronRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1 transition-transform hidden md:block" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* === PHẦN MODAL POPUP (ĐƯA RA NGOÀI CÙNG) === */}
      {/* Nằm ngoài các div transform để fixed hoạt động đúng */}
      <AnimatePresence>
      {showCert && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(8px)' }} // Inline style để chắc chắn đè CSS khác
            onClick={() => setShowCert(false)}
        >
            {/* Nút đóng nổi bật */}
            <button
                onClick={() => setShowCert(false)}
                className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-red-500 hover:rotate-90 transition-all duration-300 z-50 border border-white/20 backdrop-blur-md"
            >
                <X className="w-6 h-6" />
            </button>
            
            {/* Ảnh phóng to */}
            <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()} // Chặn click xuyên qua
                className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            >
                <img
                    src={image_banquyen}
                    alt="Giấy chứng nhận bản quyền"
                    className="w-auto h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border-4 border-white/10 bg-white"
                />
                <p className="text-white/80 mt-4 text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    {copyrightData.title} - {copyrightData.certNumber}
                </p>
            </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </section>
  );
};