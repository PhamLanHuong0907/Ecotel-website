import React from 'react';
// Thay thế dòng này bằng đường dẫn đến file ảnh to (ghép 15 logo) của bạn
import AllPartnersImage from "@/assets/Screenshot 2026-01-05 125315.png";

const CustomerCard = () => {
  return (
    <section className="py-11 relative w-full">
      {/* Giữ lại hiệu ứng nền gradient mờ của bạn */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      {/* Container chính */}
      <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 sticky left-0 right-0">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">Khách hàng</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Danh sách khách hàng</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl text-center">
            Những doanh nghiệp đã tin tưởng và lựa chọn giải pháp của chúng tôi
          </p>
        </div>
          
          <div className="h-12" />
        {/* Vùng chứa ảnh: Căn giữa */}
        <div className="flex justify-center items-center">
          <img
            src={AllPartnersImage} 
            alt="Danh sách khách hàng"
            // w-full: Chiếm hết chiều rộng cho phép
            // h-auto: Tự động chỉnh chiều cao theo tỉ lệ ảnh (không bị méo)
            // max-w-6xl: Giới hạn chiều rộng tối đa để ảnh không bị quá to trên màn hình 4k
            // object-contain: Đảm bảo hiển thị trọn vẹn
            className="w-full h-auto max-w-7xl object-contain hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default CustomerCard;