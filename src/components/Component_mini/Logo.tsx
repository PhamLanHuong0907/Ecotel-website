import React, { useEffect, useState, useRef } from 'react';
// Import file ảnh logo của bạn. Đảm bảo đường dẫn này đúng với project của bạn.
// Người dùng chỉ định đường dẫn '@/assets/logo1.png'.
import logoSrc from '@/assets/logo1.png'; 

const AnimatedLogo: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const requestRef = useRef<number>();

  const animate = () => {
    setAngle((prevAngle) => {
      const nextAngle = prevAngle + 1.5;
      
      // CHỈNH SỬA TẠI ĐÂY: Dừng lại khi đã quét xong (380 độ để dải sáng chạy khuất hẳn)
      if (nextAngle >= 380) {
        return 380; // Giữ nguyên ở 380 độ, không gọi tiếp requestAnimationFrame
      }
      
      // Chỉ tiếp tục animation nếu góc còn nhỏ hơn 380
      requestRef.current = requestAnimationFrame(animate);
      return nextAngle;
    });
  };
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // CHỈNH SỬA TẠI ĐÂY: Đặt góc bắt đầu là -35deg để trùng với cạnh trên của logo.
  const maskSweep = `conic-gradient(from -13deg at 50% 50%, black -11deg, black ${angle}deg, transparent ${angle}deg, transparent 360deg)`;

  // CHỈNH SỬA TẠI ĐÂY: Thu hẹp dải hẹp từ 20 độ xuống 3 độ.
  // Điều này làm cho dải sáng trông giống một luồng sáng hẹp, tinh tế2 hơn.
  // Gần như trùng hoàn hảo với cạnh thẳng.
  const maskEdge = `conic-gradient(from -13deg at 50% 50%, transparent ${angle -20}deg, black ${angle}deg, transparent ${angle}deg, transparent 360deg)`;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      
      {/* LAYER 1: Base - Ảnh xám đen mờ (giữ nguyên) */}
      <img
        src={logoSrc}
        alt="Logo Base"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: ' opacity(0.3)', // Chuyển thành xám và mờ đi làm nền
        }}
      />

      {/* LAYER 2: Color Reveal - Ảnh màu gốc đầy đủ, quét màu (giữ nguyên) */}
      <img
        src={logoSrc}
        alt="Logo Color Reveal"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          WebkitMaskImage: maskSweep,
          maskImage: maskSweep,
        }}
      />

      {/* LAYER 3: Bright Edge - Ảnh màu gốc được làm sáng (CHỈNH SỬA) */}
      <img
        src={logoSrc}
        alt="Logo Bright Edge"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          // CHỈNH SỬA FILTER: Thêm blur(2px) để làm mềm luồng sáng,
          // trông giống quầng sáng mềm mại hơn.
          filter: 'brightness(2) contrast(1.2) blur(2px)', 
          WebkitMaskImage: maskEdge,
          maskImage: maskEdge,
        }}
      />
      
    </div>
  );
};

export default AnimatedLogo;