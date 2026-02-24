import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integration/client"; 
import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { HeroSection } from "@/components/Component_mini/HeroSection_page";
import { FeatureSection } from "@/components/Component_mini/FeatureSection";
import { CTASection } from "@/components/Component_mini/CTASection";
import { Button } from "@/components/ui/button";
import { Database } from "@/integration/types";

import { 
  ShieldCheck, ClipboardCheck, ScanEye, FileCheck, 
  AlertOctagon, BadgeCheck, Microscope, CheckCircle2, Package,
  LucideIcon,
} from "lucide-react";

type Product = Database['public']['Tables']['products']['Row'];
type Service = Database['public']['Tables']['services']['Row'];

// MỚI: Cập nhật Interface để bao trùm cả cấu trúc cũ và cấu trúc DB hiện tại của bạn
interface FeatureItemData {
  text?: string;
  subText?: string;
  iconName?: string;
  path?: string;
}

interface ProductFeatureSectionData {
  // Khớp với code cũ
  tagText?: string;
  tagColorClass?: string;
  imageSrc?: string;
  
  // MỚI: Khớp với dữ liệu DB bạn vừa cung cấp
  tag?: {
    icon?: string;
    text?: string;
    colorClass?: string;
  };
  image?: string; 
  
  title?: string;
  description?: string;
  imageAlt?: string;
  reverse?: boolean;
  backgroundClass?: string;
  glowClass?: string;
  floatingBadge?: {
    title?: string;
    subtitle?: string;
  };
  items?: FeatureItemData[];
}

const ProductsPage = () => {
  const { serviceSlug, productSlug } = useParams<{ serviceSlug: string; productSlug: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [parentService, setParentService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getImageUrl = (imagePath?: string | null): string => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("data:")) {
      return imagePath;
    }
    const { data } = supabase.storage.from("uploads").getPublicUrl(imagePath);
    return data.publicUrl;
  };

  const resolveIcon = (iconName?: string): LucideIcon => {
    const iconMap: Record<string, LucideIcon> = {
      ShieldCheck, ClipboardCheck, ScanEye, FileCheck, 
      AlertOctagon, BadgeCheck, Microscope, CheckCircle2, Package
    };
    return iconName && iconMap[iconName] ? iconMap[iconName] : Package; 
  };

  useEffect(() => {
    const fetchProductData = async () => {
      if (!serviceSlug || !productSlug) return;
      setLoading(true);

      const targetPath = `/${serviceSlug}/${productSlug}`;

      try {
        const { data: productData, error: productError } = await supabase
          .from("products")
          .select("*")
          .eq("path", targetPath)
          .single();

        if (productError || !productData) throw new Error("Không tìm thấy sản phẩm");
        setProduct(productData);

        if (productData.service_id) {
          const { data: serviceData } = await supabase
            .from("services")
            .select("*")
            .eq("id", productData.service_id)
            .single();
          
          if (serviceData) setParentService(serviceData);
        }

      } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [serviceSlug, productSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-xl">Đang tải dữ liệu sản phẩm...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Header />
        <h1 className="text-3xl font-bold mt-20">404 - Không tìm thấy sản phẩm</h1>
        <p className="mt-4">Sản phẩm này không tồn tại hoặc đường dẫn bị sai.</p>
        <Button className="mt-6" onClick={() => navigate(-1)}>Quay lại</Button>
        <Footer />
      </div>
    );
  }

  // MỚI: Logic xử lý JSON thông minh để chống lỗi Stringified JSON
  let featureSections: ProductFeatureSectionData[] = [];
  try {
    if (product.features) {
      // Nếu là chuỗi string thì dùng JSON.parse, nếu đã là object/array thì giữ nguyên
      const parsedFeatures = typeof product.features === 'string' 
        ? JSON.parse(product.features) 
        : product.features;
        
      if (Array.isArray(parsedFeatures)) {
        featureSections = parsedFeatures;
      }
    }
  } catch (e) {
    console.error("Lỗi Parse JSON tính năng:", e);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection 
          title={product.title || "Chi tiết sản phẩm"}
          highlight={product.highlight || ""}
          description={product.description || ""}
        />

        {product.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex justify-center items-center mt-8"
          >
            <img
              src={getImageUrl(product.image)}
              alt={product.title}
              className="w-[95%] h-auto md:h-[600px] object-cover rounded-xl"
            />
          </motion.div>
        )}

        {featureSections.map((section, idx) => {
          // MỚI: Map linh hoạt cả trường hợp dùng tagText hoặc tag.text
          const safeTagText = section.tagText || section.tag?.text || "";
          const safeTagColorClass = section.tagColorClass || section.tag?.colorClass || "bg-primary/10 text-primary";
          // Ưu tiên dùng imageSrc, nếu không có thì lấy image (từ DB của bạn)
          const targetImage = section.imageSrc || section.image || "";
          
          const safeSubtitle = section.floatingBadge?.subtitle || "";

          // Tính toán Icon hiển thị
          const TagIcon = section.tag?.icon 
            ? resolveIcon(section.tag.icon) 
            : resolveIcon(safeTagText.includes("Compliance") ? "BadgeCheck" : "ShieldCheck");
            
          const BadgeIcon = resolveIcon(safeSubtitle.includes("Zero") ? "Microscope" : "CheckCircle2");

          const mappedItems = section.items?.map(item => ({
            text: item.text || "Tên tính năng",
            subText: item.subText || "",
            icon: resolveIcon(item.iconName) ,
            path: item.path
          })) || [];

          return (
            <FeatureSection
              key={idx}
              tag={{ 
                icon: TagIcon, 
                text: safeTagText || "Tính năng nổi bật",
                colorClass: safeTagColorClass 
              }}
              title={<span className="gradient-text">{section.title || product.title}</span>}
              description={section.description || ""}
              features={mappedItems}
              // Sử dụng targetImage đã map ở trên
              imageSrc={getImageUrl(targetImage)}
              imageAlt={section.imageAlt || section.title || "Hình ảnh"}
              floatingBadge={{
                icon: BadgeIcon,
                title: section.floatingBadge?.title || "Hệ thống",
                subtitle: section.floatingBadge?.subtitle || "Hoạt động",
                iconBgClass: section.reverse ? "bg-accent" : "bg-primary",
                iconColorClass: section.reverse ? "text-accent-foreground" : "text-primary-foreground"
              }}
              reverse={section.reverse || false}
              backgroundClass={section.backgroundClass || ""}
              glowClass={section.glowClass || "from-primary/20 to-accent/20"}
            />
          );
        })}
        
        <div className="flex justify-center mt-12 mb-6">
          <Button 
            onClick={() => navigate(`/${serviceSlug}`)}
            className="w-[120px] h-[50px] group bg-gradient-to-br from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6]"
          >
            Trở về
          </Button>
        </div>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;