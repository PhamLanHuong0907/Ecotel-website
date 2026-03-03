import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integration/client"; 
import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { ContactSection } from "@/components/Home/ContactSection";
import { HeroSectionModule } from "@/components/Component_mini/HeroSection_Module";
import { ServicesSection } from "@/components/Component_mini/ServicesSection_module";
import { Database } from "@/integration/types"; 
import { Package } from "lucide-react";
import * as LucideIcons from "lucide-react";
type Service = Database['public']['Tables']['services']['Row'];
type HeroSection = Database['public']['Tables']['hero_sections']['Row'];
// Khai báo type cho bảng product_services
type ProductService = Database['public']['Tables']['product_services']['Row'];

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>(); 
  
  const [service, setService] = useState<Service | null>(null);
  const [heroData, setHeroData] = useState<HeroSection | null>(null);
  
  // Đổi state sang lưu trữ mảng JSONB lấy từ product_services
  const [productsData, setProductsData] = useState<unknown[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Hàm xử lý URL ảnh
  const getImageUrl = (imagePath: string | null | undefined) => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("data:")) {
      return imagePath;
    }
    const { data } = supabase.storage.from("uploads").getPublicUrl(imagePath);
    return data.publicUrl;
  };

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceSlug) return;
      
      setLoading(true);
      const targetHref = `/${serviceSlug}`; 

      try {
        // 1. Lấy thông tin Dịch vụ/Hệ thống
        const { data: serviceData, error: serviceError } = await supabase
          .from("services")
          .select("*")
          .eq("href", targetHref)
          .single();

        if (serviceError || !serviceData) throw new Error("Không tìm thấy dịch vụ");
        setService(serviceData);

        // 2. Lấy thông tin Hero Section
        const { data: heroRes } = await supabase
          .from("hero_sections")
          .select("*")
          .eq("service_id", serviceData.id)
          .maybeSingle(); // Dùng maybeSingle phòng khi chưa tạo Hero data
        
        if (heroRes) setHeroData(heroRes);

        // 3. Lấy dữ liệu sản phẩm từ bảng product_services (cột JSONB)
        const { data: psRes } = await supabase
          .from("product_services")
          .select("*")
          .eq("service_id", serviceData.id)
          .maybeSingle(); 

        // Nếu có data trong cột products (dạng jsonb), gán vào state
        if (psRes && psRes.products) {
          const parsedProducts = Array.isArray(psRes.products) ? psRes.products : [];
          setProductsData(parsedProducts);
        }

      } catch (error) {
        console.error("Lỗi tải dữ liệu trang dịch vụ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-xl">Đang tải dữ liệu...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Header />
        <h1 className="text-3xl font-bold mt-20">404 - Không tìm thấy trang</h1>
        <p className="mt-4">Hệ thống hoặc dịch vụ này không tồn tại.</p>
        <Footer />
      </div>
    );
  }

  // Define a type for the product items stored in JSONB
  type ProductItem = {
    id: number | string;
    title: string;
    description: string;
    image: string;
    path: string;
    icon: string | null;
    [key: string]: unknown;
  };

  // Import all Lucide icons you want to support here
 

  // Helper to map icon string to LucideIcon component
  const getLucideIcon = (iconName: string | null | undefined) => {
    if (!iconName) return Package;
    return LucideIcons[iconName] || Package;
  };

  // 4. Map dữ liệu từ cột JSONB để hiển thị
  const mappedServices = productsData.map((prod, index) => {
    // Kiểm tra cấu trúc item lưu trong JSONB (object hay text)
    const isObject = typeof prod === 'object' && prod !== null;
    const prodObj = prod as ProductItem;
    
    return {
      id: isObject && prodObj.id ? prodObj.id : index + 1,
      title: isObject ? (prodObj.title || "") : String(prod), // Fallback nếu chỉ lưu tên dạng text
      description: isObject ? (prodObj.description || "") : "",
      image: isObject ? getImageUrl(prodObj.image) : "",
      path: isObject ? (prodObj.path || "#") : "#",
      icon: isObject ? getLucideIcon(prodObj.icon) : Package,
    };
  });

  // Define a type for hero cards
  type HeroCard = {
    id?: string | number;
    image?: string;
    title?: string;
    description?: string;
    [key: string]: unknown;
  };

  const processedHeroCards = heroData?.cards 
    ? (heroData.cards as HeroCard[]).map((card: HeroCard, idx: number) => ({
        id: card.id ?? idx + 1,
        title: card.title ?? "",
        description: card.description ?? "",
        image: getImageUrl(card.image),
      }))
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {heroData && (
          <HeroSectionModule
            backgroundImage={getImageUrl(heroData.background_image)} 
            title={heroData.title}
            subtitle={heroData.subtitle || ""}
            slogan={heroData.slogan || ""}
            cardsSectionTitle="Lợi ích nổi bật"
            cards={processedHeroCards} 
          />
        )}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Danh sách sản phẩm
          </span>
        </div>
        {productsData.length > 0 && (
          <ServicesSection 
            sectionTitle={`Các sản phẩm của ${service.title}`}
            items={mappedServices} 
          />
        )}
        
      </main>
      <div className="h-11" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServicePage;