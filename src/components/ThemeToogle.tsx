import React, { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    // Ép buộc dùng mặc định theme Dark
    const root = document.documentElement;
    root.classList.remove('light', 'theme-noel');

    // Lưu vào localStorage để các component khác (nếu có) vẫn đọc được state đúng
    localStorage.setItem('theme', 'dark');
  }, []);

  // Không hiển thị giao diện nút nữa
  return null;
};

export default ThemeToggle;