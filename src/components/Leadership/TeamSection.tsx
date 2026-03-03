import { Linkedin, Mail, Briefcase, Sparkles, Quote } from "lucide-react";
import { useSectionInView } from "@/hooks/useSectionInView";
import image_leader from "@/assets/Leadership.png"

const leadershipData = [
  {
    name: "Nguyễn Tuấn Anh",
    position: "Giám đốc",
    company: "EcoTel", 
    bio: "Lãnh đạo trung tâm nghiên cứu phát triển và thử nghiệm sản phẩm lõi EcoTel. Với tầm nhìn chiến lược, ông đang dẫn dắt đội ngũ kế thừa công nghệ cũ, cập nhật công nghệ mới.",
  },
];

const LeaderCard = ({ leader, index, isVisible }: { leader: typeof leadershipData[0]; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* items-stretch: QUAN TRỌNG - Ép 2 cột (Text và Ảnh) phải cao bằng nhau
         gap-6: Khoảng cách giữa 2 cột
      */}
      <div className="flex flex-col-reverse md:flex-row items-stretch gap-6">
        
        {/* === PHẦN 1: CARD THÔNG TIN === */}
        <div className="w-full md:flex-[1.5]">
          {/* h-full: Để card kính giãn hết chiều cao của cột cha */}
          <div className="glass-card rounded-3xl p-8 relative border border-border/50 shadow-sm flex flex-col justify-between group hover:border-primary/30 transition-colors duration-500 h-full">
             
             {/* Decor icon */}
             <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
                <Quote className="w-12 h-12 text-primary" />
            </div>

            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                  <Briefcase className="w-3 h-3" />
                  {leader.company}
                </span>
                <h3 className="text-3xl font-bold text-foreground mt-2">{leader.name}</h3>
                <p className="text-primary font-medium text-lg">{leader.position}</p>
              </div>
              
              {/* Bio */}
              <p className="text-muted-foreground text-base leading-relaxed mb-6 border-b border-border/30 pb-4">
                {leader.bio}
              </p>
            </div>
            
            {/* Social Actions */}
            <div className="flex items-center justify-start gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all border border-border/50 shadow-sm">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all border border-border/50 shadow-sm">
                    <Mail className="w-5 h-5" />
                </a>
            </div>

          </div>
        </div>

        {/* === PHẦN 2: ẢNH === */}
        {/* - md:h-auto: Trên máy tính, chiều cao tự động theo cha (do items-stretch)
            - min-h-[300px]: Trên điện thoại, đặt chiều cao tối thiểu để ảnh không bị mất
            - relative: Để chứa ảnh absolute bên trong
        */}
        <div className="w-full md:flex-1 relative min-h-[300px] md:h-auto group overflow-hidden rounded-3xl shadow-lg border-2 border-border/50">
           
           {/* absolute inset-0 + h-full: Ảnh sẽ tự căng ra để lấp đầy khung container */}
          

          {/* Overlay gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* Icon trang trí */}
          <div className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg animate-pulse-slow">
             <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>

      </div>
    </div>
  );
};

export const TeamSection = () => {
  const { ref, isVisible } = useSectionInView();

  return (
    <section ref={ref} className="py-11 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Đội ngũ lãnh đạo</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Ban lãnh đạo</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl text-center">
            Những người đứng đầu với tầm nhìn chiến lược và kinh nghiệm dày dặn
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {leadershipData.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};