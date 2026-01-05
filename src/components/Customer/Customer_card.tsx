import React from 'react';
import Vinacomin from "@/assets/Vinacomin.png";
import Vangdanh from "@/assets/thanvangdanh_2.png";
import VUBC from "@/assets/uongbi_3.png";
import Vimico from "@/assets/vimico_4.png";
import DH from "@/assets/duonghuy_5.png";
import Deonai from "@/assets/thandeonai_6.png";
import Caoson from "@/assets/thancaoson_7.png";
import HL from "@/assets/halam_8.png";
import TMK from "@/assets/thanmaokhe_9.png";
import HaLong from "@/assets/thanhalong.png";
import VMC from "@/assets/vmc_11.png";
import LoTri from "@/assets/lotri_12.png";
import CamPha from "@/assets/campha_13.png";
import HaTu from "@/assets/thanhatu.png";
import QuangHanh from "@/assets/quanghanh.png";
// Giả lập danh sách logo (Bạn thay thế 'src' bằng đường dẫn ảnh thật của bạn)
const logos = [
  { id: 1, name: 'Vinacomin', src: Vinacomin },
  { id: 2, name: 'Vangdanh', src: Vangdanh },
  { id: 3, name: 'VUBC', src: VUBC },
  { id: 4, name: 'Vimico', src: Vimico },
  { id: 5, name: 'Logo 5', src: DH },
  { id: 6, name: 'Logo 6', src: Deonai },
  { id: 7, name: 'Than Cao Son', src: Caoson },
  { id: 8, name: 'Logo 8', src: HL },
  { id: 9, name: 'TMK', src: TMK },
  { id: 10, name: 'Logo 10', src: HaLong },
  { id: 11, name: 'VMC', src: VMC },
  { id: 12, name: 'Lo Tri', src: LoTri },
  { id: 13, name: 'Cam Pha Port', src: CamPha },
  { id: 14, name: 'Logo 14', src: HaTu },
  { id: 15, name: 'Quang Hanh', src: QuangHanh },
];

const CustomerCard = () => {
  return (
    // Container chính: w-full để full chiều rộng
    // bg-transparent: Để lộ màu nền của bạn (hoặc xóa class này đi nó mặc định là trong suốt)
    <section className="py-20 relative ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      {/* Grid Layout:
          - grid-cols-2: 2 cột trên mobile
          - md:grid-cols-3: 3 cột trên tablet
          - lg:grid-cols-5: 5 cột trên màn hình PC (giống hệt ảnh của bạn)
          - gap-x-8 gap-y-12: Khoảng cách giữa các logo
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center">
        
        {logos.map((logo) => (
          <div 
            key={logo.id} 
            className="w-full flex justify-center items-center transition-transform hover:scale-105 duration-300"
          >
            {/* img class:
               - h-24: Chiều cao cố định (khoảng 96px) để tất cả bằng nhau
               - w-auto: Chiều rộng tự động theo tỉ lệ
               - object-contain: Đảm bảo ảnh không bị cắt hay méo dù là hình tròn hay hình thoi
            */}
            <img
              src={logo.src} // Thay bằng đường dẫn thực tế hoặc placeholder
              alt={logo.name}
              className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-sm" 
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default CustomerCard;