import { useSectionInView } from "@/hooks/useSectionInView";
export interface Data{
    name: string;
    logo: string;
    industry?: string;
}
interface HumansGridSectionProps{
    Humans: Data[];
    title: string;
}
const HumanCard = ({ Human, index, isVisible }: { Human: Data;  index: number; isVisible: boolean,  }) => (
  <div
    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="glass-card rounded-2xl p-8 hover-lift group relative overflow-hidden h-48 flex flex-col items-center justify-center shadow-lg shadow-gray-500/30">
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500" />
      
      {/* Logo Container */}
      <div className="relative z-10 w-full h-24 flex items-center justify-center mb-4">
        {/* THAY ĐỔI TẠI ĐÂY:
            - Thay 'max-w-full max-h-full' bằng 'w-40 h-20' (hoặc kích thước bạn muốn).
            - Thêm 'grayscale' để mặc định là đen trắng (nếu muốn hiệu ứng hover có màu).
        */}
        <img 
          src={Human.logo} 
          alt={Human.name}
          className="w-[400px] h-[100px] object-contain filter  group-hover: transition-all duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Name & Industry - shown on hover */}
      <div className="relative z-10 text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="font-bold text-foreground text-sm">{Human.name}</h3>
        <span className="text-xs text-muted-foreground">{Human.industry}</span>
      </div>
    </div>
  </div>
);

export const HumansGridSection = ({Humans}: HumansGridSectionProps ) => {
  const { ref, isVisible } = useSectionInView();
  
  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Khách hàng tiêu biểu</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Những doanh nghiệp hàng đầu đã tin tưởng và lựa chọn giải pháp của ECOTEL
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Humans.map((Human, index) => (
            <HumanCard
              key={index} // Tốt nhất nên dùng Human.id nếu backend có trả về
              Human={Human}
              index={index}
              isVisible={isVisible}
            />
          ))}
       
        </div>
      </div>
    </section>
  );
};