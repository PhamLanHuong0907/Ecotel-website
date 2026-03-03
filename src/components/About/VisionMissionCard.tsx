import { Eye, Target, Heart, Lightbulb, ClipboardList, Scale, Sparkles, Users } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";

const visionMission = [
  { icon: Eye, title: "TẦM NHÌN", content: "Khẳng định vị thế thương hiệu Sản phẩm Việt chất lượng quốc tế. Đưa công nghệ Việt Nam vươn xa thị trường thế giới.", gradient: "from-primary to-blue-400" },
  { icon: Target, title: "SỨ MỆNH", content: "Tiên phong mang đến những giải pháp tiện nghi vượt trội và an toàn cho khách hàng. Giúp vận hành hiệu quả hướng đến cuộc sống bền vững.", gradient: "from-accent to-emerald-400" },
  { icon: Heart, title: "GIÁ TRỊ CỐT LÕI", content: "Cam kết chất lượng. Không ngừng sáng tạo. Tự chủ nghiên cứu xây dựng đội ngũ kỹ sư tài năng đón đầu và làm chủ công nghệ lõi.", gradient: "from-pink-500 to-rose-400" },
];

const coreValues = [
  { icon: Lightbulb, title: "TÍN", subtitle: "Uy tín", color: "from-blue-500 to-blue-600" },
  { icon: ClipboardList, title: "TRÍ", subtitle: "Trí tuệ - Sáng tạo", color: "from-sky-500 to-sky-600" },
  { icon: Scale, title: "NGHĨA", subtitle: "Chính trực", color: "from-cyan-500 to-cyan-600" },
  { icon: Sparkles, title: "LỄ", subtitle: "Tôn trọng", color: "from-teal-500 to-teal-600" },
  { icon: Users, title: "NHÂN", subtitle: "Nhân văn", color: "from-emerald-500 to-emerald-600" },
];

const VisionMissionCard = ({ item, index, isVisible }: { item: typeof visionMission[0]; index: number; isVisible: boolean }) => (
  <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 200}ms` }}>
    <div className="glass-card rounded-3xl p-8 hover-lift group h-full relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
      
      {/* Header: Icon + Title nằm ngang */}
      <div className="flex items-center gap-5 mb-6 relative z-10">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative`}>
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-50 blur-xl group-hover:blur-2xl transition-all`} />
          <item.icon className="w-8 h-8 text-white relative z-10" />
        </div>
        <h3 className="text-2xl font-bold gradient-text">{item.title}</h3>
      </div>

      <p className="text-muted-foreground leading-relaxed relative z-10">{item.content}</p>
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </div>
  </div>
);

export const VisionMissionSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section ref={ref} className="py-11 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Định hướng phát triển</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
             <span className="gradient-text">Tầm nhìn - Sứ mệnh - Giá trị cốt lõi</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {visionMission.map((item, index) => (
            <VisionMissionCard key={item.title} item={item} index={index} isVisible={isVisible} />
          ))}
        </div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">Tập hợp những niềm tin, lý tưởng và định hướng của ECOTEL</h3>
          
        </div>
        <div className="flex justify-center">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] flex items-center justify-center z-10 animate-glow-pulse">
              <span className="text-white font-bold text-xl">ECOTEL</span>
            </div>
            {coreValues.map((value, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const x = Math.cos(angle) * 180;
              const y = Math.sin(angle) * 180;
              return (
                <div key={value.title} className={`absolute transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} style={{ left: `calc(50% + ${x}px - 60px)`, top: `calc(50% + ${y}px - 60px)`, transitionDelay: `${index * 150 + 500}ms` }}>
                  <div className="absolute w-20 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left" style={{ left: "60px", top: "60px", transform: `rotate(${(Math.atan2(-y, -x) * 180) / Math.PI}deg)` }} />
                  <div className="w-[120px] h-[120px] glass-card rounded-2xl flex flex-col items-center justify-center hover-lift group cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-bold text-primary">{value.title}</span>
                    <span className="text-xs text-muted-foreground text-center px-2">{value.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};