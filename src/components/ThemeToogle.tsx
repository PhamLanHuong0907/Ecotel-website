import React, { useEffect, useState } from 'react';
import SnowEffect from './snow'; 
import ChristmasIntro from './Component_mini/ChiristmasIntro';

type Theme = 'dark' | 'light' | 'noel';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isNoelDay, setIsNoelDay] = useState(false);

  // Hàm hỗ trợ set theme và lưu vào localStorage
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove('light', 'theme-noel');

    if (newTheme === 'light') {
      root.classList.add('light');
    } else if (newTheme === 'noel') {
      root.classList.add('theme-noel');
    }

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme === 'noel' ? 'theme-noel' : newTheme);
  };

  useEffect(() => {
    // 1. Kiểm tra xem hôm nay có phải 24/12 không
    const now = new Date();
    const isTodayNoel = now.getDate() === 24 && now.getMonth() === 11; // Tháng 11 trong JS là tháng 12 ngoài đời
    setIsNoelDay(isTodayNoel);

    // 2. Lấy theme đã lưu
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    // 3. Logic khởi tạo theme
    if (isTodayNoel) {
        // Nếu ĐÚNG là ngày Noel:
        // Ưu tiên hiển thị Noel nếu người dùng chưa chọn gì hoặc đã chọn Noel trước đó
        if (storedTheme === 'theme-noel' || !storedTheme) {
            applyTheme('noel');
            return;
        }
    } else {
        // Nếu KHÔNG phải ngày Noel:
        // Nếu theme lưu trong máy là 'theme-noel' (do set từ năm ngoái), thì reset về dark để tránh lỗi
        if (storedTheme === 'theme-noel') {
            applyTheme('dark');
            return;
        }
    }

    // Logic mặc định cho các trường hợp còn lại (Light/Dark)
    if (storedTheme === 'light' || (!storedTheme && systemPrefersLight)) {
      applyTheme('light');
    } else {
      applyTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    let newTheme: Theme = 'dark';

    if (theme === 'dark') {
      newTheme = 'light';
    } else if (theme === 'light') {
      // Logic quan trọng:
      // Chỉ cho phép chuyển sang 'noel' nếu hôm nay là 24/12 (isNoelDay = true)
      if (isNoelDay) {
        newTheme = 'noel';
      } else {
        newTheme = 'dark'; // Nếu không phải Noel, quay về Dark
      }
    } else if (theme === 'noel') {
      newTheme = 'dark';
    }

    applyTheme(newTheme);
  };

  return (
    <>
      {/* Chỉ hiện tuyết nếu đang ở theme Noel */}
      {theme === 'noel' && <SnowEffect />}

      <button
        onClick={toggleTheme}
        className="
          relative flex items-center justify-center w-12 h-12 rounded-full 
          glass-card hover-lift transition-all duration-300
          group border border-white/10
          active:scale-95 z-[60] 
        "
        aria-label="Toggle Theme"
        title={`Current theme: ${theme}`}
      >
          <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

          {/* Icon Mặt trời (Hiện khi Dark) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 text-yellow-400 transition-all duration-500 transform absolute ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>

          {/* Icon Bông tuyết (Hiện khi Light - Nút bấm để chuyển sang Noel) 
             CHÚ Ý: Nếu không phải ngày Noel, icon này vẫn hiện khi ở Light mode, 
             nhưng bấm vào sẽ về Dark chứ không ra Noel (như logic toggleTheme ở trên) 
             Hoặc bạn có thể đổi icon này thành icon Mặt trăng nếu không phải mùa Noel.
          */}
          {isNoelDay ? (
             /* Nếu là ngày Noel: Icon Bông tuyết để báo hiệu click sẽ ra Noel */
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-6 h-6 text-blue-400 transition-all duration-500 transform absolute ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}>
                <path d="M2 12h20" /> <path d="M12 2v20" /> <path d="m20 20-8-8-8 8" /> <path d="m4 4 8 8 8-8" />
             </svg>
          ) : (
             /* Nếu ngày thường: Icon Mặt trăng (để báo hiệu click sẽ về Dark) */
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 text-primary transition-all duration-500 transform absolute ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
             </svg>
          )}

          {/* Icon Cây thông/Mặt trăng (Hiện khi ở theme Noel) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 text-primary transition-all duration-500 transform absolute ${theme === 'noel' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
      </button>
    </>
  );
};

export default ThemeToggle;