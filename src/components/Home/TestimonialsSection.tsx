// components/Home_Testimonials.tsx
import { Loader2, AlertCircle } from "lucide-react";
import { TestimonialsSection } from "../Component_mini/Testimonials";
import { useTestimonials } from "@/hooks/useTestimonials"; // Import hook vừa tạo

export default function Home_Testimonials() {
  // 1. Gọi hook để lấy dữ liệu
  const { data: testimonials, isLoading, isError, error } = useTestimonials();

  // 2. Xử lý trạng thái đang tải (Loading)
  if (isLoading) {
    return (
      <div className="w-full py-20 flex justify-center items-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // 3. Xử lý trạng thái lỗi (Error) - Optional
  if (isError) {
    console.error("Lỗi tải testimonials:", error);
    return (
      <div className="w-full py-20 flex justify-center items-center text-red-500 gap-2">
        <AlertCircle className="w-5 h-5" />
        <span>Không thể tải dữ liệu khách hàng.</span>
      </div>
    );
  }

  // 4. Nếu không có dữ liệu hoặc mảng rỗng thì có thể return null hoặc vẫn render section trống
  const safeTestimonials = testimonials || [];

  return (
    <TestimonialsSection
      title="Khách hàng"
      testimonials={safeTestimonials}
    />
  );
}