import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import santa from '@/assets/santa-removebg-preview.png';

// Danh sách lời chúc ngẫu nhiên
const WISHES = [
  "Kính chúc Quý khách và Gia đình một mùa Giáng sinh ấm áp, hạnh phúc và một năm mới An khang - Thịnh vượng.",
  "ECOTEL chúc bạn một mùa lễ hội tràn ngập niềm vui, tiếng cười và những khoảnh khắc đáng nhớ bên người thân.",
  "Chúc mừng Giáng Sinh! Mong rằng năm mới sẽ mang đến cho bạn nhiều thành công rực rỡ và những bước tiến đột phá.",
  "May your holidays be filled with love, joy, and laughter. Merry Christmas and Happy New Year from ECOTEL!",
  "Giáng sinh an lành! Cảm ơn bạn đã đồng hành cùng ECOTEL. Chúc bạn một năm mới vạn sự như ý.",
  "Chúc bạn nhận được thật nhiều quà, thật nhiều lời chúc tốt đẹp và một năm mới bình an, may mắn."
];

const ChristmasIntro = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [currentWish, setCurrentWish] = useState(WISHES[0]);

  useEffect(() => {
      // 1. Kiểm tra ngày tháng (Chỉ chạy vào 23/12)
      const now = new Date();
      // getMonth() trả về 0-11, nên tháng 12 là 11
      const isTargetDate = now.getDate() === 24 && now.getMonth() === 11; 
      
      // Nếu không phải ngày 23/12 -> Dừng luôn
      if (!isTargetDate) return;

      // 2. Kiểm tra vị trí (Chỉ chạy ở trang chủ '/')
      // Nếu đang ở trang khác (vd: /about) khi reload -> Dừng luôn
      if (location.pathname !== '/') return;

      // 3. Nếu thỏa mãn cả 2 điều kiện trên -> Bắt đầu hiển thị
      setIsVisible(true);
      
      // Random lời chúc
      const randomIndex = Math.floor(Math.random() * WISHES.length);
      setCurrentWish(WISHES[randomIndex]);

      // Hẹn giờ hiện thiệp (sau 4.5s xe bay qua)
      const timer = setTimeout(() => {
        setShowCard(true);
      }, 4500);

      return () => clearTimeout(timer);
  }, []); // Dependency rỗng: Chỉ chạy 1 lần duy nhất khi web vừa load xong

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Lớp nền tối mờ */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* --- XE TRƯỢT TUYẾT BAY --- */}
      <div className={`absolute left-0 top-1/4 w-full flex items-center animate-fly-across ${showCard ? 'opacity-0 transition-opacity duration-1000' : ''}`}>
        
        {/* Khối chứa: [Banner] - [Dây] - [Ông già Noel] */}
        <div className="flex items-center gap-4 min-w-max">
            
            {/* 1. Banner (Đi trước) */}
            <div className="relative bg-red-700/90 text-white px-8 py-4 rounded-l-lg border-y-2 border-l-2 border-yellow-400 shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-yellow-300 drop-shadow-md whitespace-nowrap">
                    MERRY CHRISTMAS
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>

            {/* 2. Dây nối (Gradient ngược để tạo cảm giác kéo từ phải) */}
            <div className="h-1 w-20 bg-gradient-to-l from-yellow-600 to-transparent opacity-60" />

            {/* 3. Ảnh Ông già Noel (Đi sau) */}
            <img 
              src={santa} 
              alt="Santa Claus" 
              className="h-32 md:h-48 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            />
        </div>
      </div>

      {/* --- THIỆP CHÚC MỪNG --- */}
      {showCard && (
        <div className="relative w-[90%] max-w-lg aspect-[4/3] bg-[#fffbf0] rounded-lg shadow-2xl animate-zoom-in border-4 border-red-700 p-1 flex flex-col">
            <button 
                onClick={() => setIsVisible(false)}
                className="absolute -top-4 -right-4 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-10"
            >
                <X size={24} />
            </button>

            <div className="flex-1 border-2 border-dashed border-red-300 m-2 rounded bg-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                {/* Trang trí góc */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-600 rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-600 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-600 rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-600 rounded-br-xl" />

                <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4 font-heading">
                    Giáng Sinh An Lành!
                </h2>
                
                {/* Lời chúc ngẫu nhiên */}
                <p className="text-gray-700 mb-6 leading-relaxed font-body italic px-4">
                   "{currentWish}"
                </p>
                
                <div className="mt-auto">
                    <span className="font-bold text-primary block mb-4">From ECOTEL with Love ❤️</span>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
                    >
                        Nhận lời chúc
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ChristmasIntro;