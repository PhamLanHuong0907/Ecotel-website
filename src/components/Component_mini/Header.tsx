import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { HashLink } from 'react-router-hash-link';
import { useNavigation } from "@/hooks/useNavigation"; // Ensure this path matches where you saved useNavigation.ts

// --- THÊM IMPORT TẠI ĐÂY ---
import AnimatedLogo from "@/components/Component_mini/Logo"; // Cập nhật lại đường dẫn này nếu file để ở thư mục khác
import textLogo from "@/assets/ecotel-logo.png"; // Ảnh chữ Ecotel đi kèm

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  id?: string;
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  is_header?: boolean;
}

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Fetch data from Supabase
  const { data: navigationData } = useNavigation();

  // Transform database data to UI structure
  const navItems: NavItem[] = navigationData
    ?.filter((item) => item.is_header)
    .map((item) => ({
      id: item.id,
      label: item.label,
      href: item.href,
      dropdown: (item.dropdown as unknown as DropdownItem[]) || undefined
    })) || [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-4">
        
          
          {/* SỬA PHẦN LOGO Ở ĐÂY: Đặt AnimatedLogo và textLogo cùng hàng ngang */}
          {/* Sửa h-20 thành h-16 md:h-20 để header trên mobile gọn gàng hơn */}
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* SỬA PHẦN LOGO Ở ĐÂY: Làm cho logo responsive */}
          <a href="#home" className="flex items-center ml-0 group select-none cursor-pointer">
            {/* Wrapper cho AnimatedLogo: Mobile 40px, Desktop 60px */}
            <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] flex-shrink-0 transition-all duration-300">
              <AnimatedLogo />
            </div>
            
            {/* Ảnh Ecotel (chữ): Mobile giảm chiều cao xuống 32px, Desktop 48px/60px */}
            <img 
              src={textLogo} 
              alt="ECOTEL Logo" 
              className="h-[32px] md:h-[50px] w-auto object-contain -ml-1 md:-ml-2 transition-all duration-300" 
            />
          </a>

          

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.id || item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium select-none cursor-pointer text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-secondary/50",
                    activeDropdown === item.label && "text-primary bg-secondary/50 select-none cursor-pointer"
                  )}
                >
                  {item.label}
                  {item.dropdown && item.dropdown.length > 0 && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {item.dropdown && item.dropdown.length > 0 && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-up">
                    <div className="glass-card rounded-xl p-2 min-w-[220px] border border-border/50 bg-slate-950">
                      {item.dropdown.map((subItem, index) => (
                        <a
                          key={`${subItem.label}-${index}`}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <HashLink
            smooth
            to="/#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] text-white font-semibold text-sm hover-lift"
            style={{ 
              boxShadow: "0 4px 15px rgba(30, 92, 139, 0.3)",
            }}
          >
            Liên hệ ngay
          </HashLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/30 animate-fade-up">
            {navItems.map((item) => (
              <div key={item.id || item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => (!item.dropdown || item.dropdown.length === 0) && setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.dropdown && item.dropdown.length > 0 && (
                  <div className="pl-6">
                    {item.dropdown.map((subItem, index) => (
                      <a
                        key={`${subItem.label}-${index}`}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};