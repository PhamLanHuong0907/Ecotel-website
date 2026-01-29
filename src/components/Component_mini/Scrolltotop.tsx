// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang ngay lập tức
    window.scrollTo(0, 0);
    
    // Nếu bạn muốn hiệu ứng trượt mượt mà thì dùng:
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]); // Chạy lại hiệu ứng mỗi khi pathname thay đổi

  return null;
};

export default ScrollToTop;