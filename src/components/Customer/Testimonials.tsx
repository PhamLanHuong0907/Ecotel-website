import { useState, useEffect, useCallback } from "react";
import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useSectionInView } from "@/hooks/useSectionInView";
import { TestimonialsSection } from "../Component_mini/Testimonials";

const testimonials = [
  {
    content: "ECOTEL đã mang đến cho chúng tôi giải pháp IoT hoàn hảo, giúp tối ưu hóa quy trình vận hành và tiết kiệm chi phí đáng kể.",
    author: "Dương Văn Hoàng", position: "Trưởng phòng kế toán", company: "Công ty Than Uông Bí - TKB"
  },
  {
    content: "Đội ngũ kỹ thuật chuyên nghiệp và hỗ trợ tận tình. Chúng tôi rất hài lòng với dịch vụ của ECOTEL.",
    author: "Nguyễn Ngọc Toàn", position: "Phó giám đốc", company: "Công ty Than Cao Sơn - TKV"
  },
  {
    content: "Giải pháp quản lý năng lượng của ECOTEL giúp chúng tôi tiết kiệm 30% chi phí điện năng hàng tháng. Rất ấn tượng!",
    author: "Nguyễn Đức Thành", position: "Giám đốc", company: "Công ty TNHH MTV Hoa Tiêu Hoàng Hải miền bắc"
  },
];

export default function Customer_Testimonials(){
  return(
    <TestimonialsSection
    title="Khách hàng"
    testimonials={testimonials}
    />
  )
}