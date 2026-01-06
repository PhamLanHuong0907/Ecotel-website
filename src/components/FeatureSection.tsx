import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, ChevronRight } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

// 1. Cập nhật Interface: Thêm subText
interface FeatureItem {
  text: string;      // Tiêu đề chính
  subText?: string;   // Nội dung ngắn (MỚI)
  icon: LucideIcon;
  path?: string;     // Đường dẫn riêng
}

interface FeatureSectionProps {
  tag: { icon: LucideIcon; text: string; colorClass: string };
  title: React.ReactNode;
  description: string;
  features: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
  floatingBadge: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    iconBgClass: string;
    iconColorClass: string;
  };
  reverse?: boolean;
  backgroundClass?: string;
  glowClass?: string;
}

export const FeatureSection = ({
  tag,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  floatingBadge,
  reverse = false,
  backgroundClass = "",
  glowClass = "from-primary/20 to-accent/20",
}: FeatureSectionProps) => {
  const TagIcon = tag.icon;
  const BadgeIcon = floatingBadge.icon;
  const navigate = useNavigate();

  const handleItemClick = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className={`py-24 relative overflow-hidden ${backgroundClass}`}>
      {/* Background Pattern */}
      {!backgroundClass && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjA1KSIvPjwvZz48L3N2Zz4=')] opacity-50" />
      )}
      {backgroundClass && (
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col gap-12 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              {/* Tag Section */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 ${tag.colorClass}`}>
                <TagIcon className="w-4 h-4" />
                <span>{tag.text}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {title}
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onClick={() => handleItemClick(feature.path)}
                  className={`
                    glass-card p-4 rounded-xl flex items-center gap-4 hover-lift group 
                    ${feature.path ? "cursor-pointer hover:border-primary/50" : ""} 
                  `}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${tag.colorClass.replace("text-", "bg-").replace("bg-", "bg-opacity-10 ")} group-hover:scale-110`}>
                    <feature.icon className={`w-6 h-6 transition-colors`} />
                  </div>
                  
                  {/* 2. Cập nhật phần hiển thị Text */}
                  <div className="flex-grow">
                    <h4 className="text-foreground font-semibold text-base group-hover:text-primary transition-colors">
                      {feature.text}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2 leading-snug">
                      {feature.subText}
                    </p>
                  </div>

                  {feature.path && (
                    <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${glowClass} rounded-3xl blur-2xl opacity-50`} />

              <div className="relative overflow-hidden rounded-2xl border border-border/50">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${floatingBadge.iconBgClass}`}>
                      <BadgeIcon className={`w-6 h-6 ${floatingBadge.iconColorClass}`} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{floatingBadge.title}</div>
                      <div className="text-xs text-muted-foreground">{floatingBadge.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};