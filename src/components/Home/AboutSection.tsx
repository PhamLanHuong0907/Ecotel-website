import { CheckCircle2, Zap, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Tiên phong công nghệ",
    description: "Ứng dụng công nghệ hiện đại trong chuyển đổi số và tự động hóa công nghiệp",
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên nghiệp",
    description: "Quy tụ hơn 50 kỹ sư, cử nhân có trình độ chuyên môn cao và kinh nghiệm thực tiễn",
  },
  {
    icon: Award,
    title: "Uy tín hàng đầu",
    description: "Đối tác tin cậy của Tập đoàn Than - Khoáng sản Việt Nam (TKV) và nhiều doanh nghiệp lớn ",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-7 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
              Về chúng tôi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Đơn vị </span>
              <span className="gradient-text">hàng đầu</span>
              <br />
              <span className="text-foreground">chuyển đổi số tại Việt Nam</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-justify">
              ECOTEL - doanh nghiệp tiên phong trong chuyển đổi số ngành khai thác, sản xuất và chế biến, tối ưu hóa quy trình 
              vận hành và quản lý dữ liệu. Ứng dụng AI, IoT và Big Data, chúng tôi mang đến giải pháp thông minh, giúp doanh nghiệp
              nâng cao hiệu suất, giảm chi phí và đảm bảo an toàn.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-justify">
              Với kinh nghiệm sâu rộng triển khai các dự án quy mô lớn, độ phức tạp cao, 
              ECOTEL cam kết mang đến những giải pháp chất lượng, tối ưu chi phí và đảm bảo tiến độ thực hiện.
            </p>

            <div className="space-y-4">
              {["Giải pháp chuyển đổi số toàn diện", "Tùy chỉnh linh hoạt theo nhu cầu khách hàng", "Khả năng mở rộng quy mô, đáp ứng quy mô phát triển dài hạn"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
