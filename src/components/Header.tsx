import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/ecotel-logo.png";
import {HashLink} from 'react-router-hash-link';
interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "TRANG CHỦ", href: "/" },
  {
    label: "GIỚI THIỆU",
    href: "#about",
    dropdown: [
      { label: "Giới thiệu chung", href: "/about" },
      { label: "Đội ngũ lãnh đạo", href: "/about/leadership" },
      { label: "Khách hàng", href: "/about/customers" },
    ],
  },
  {
    label: "SẢN PHẨM",
    href: "#services",
    dropdown: [
      { label: "Hệ thống ERP (Enterprise Resource Planning)", href: "/erp" },
      { label: "Hệ thống MES (Manufacturing Execution System)", href: "/mes"},
      { label: "Hệ thống AIoT \n (Artificial Intelligence of Things)", href: "/AI&IoT" },
      { label: "Kho dữ liệu tập trung", href:"/datalakehouse" }
    ],
  },
  {
    label: "NỔI BẬT",
    href: "#highlights",
    dropdown: [
      { label: "Dự án", href: "#projects" },
      { label: "Giải thưởng", href: "#awards" },
      { label: "Triển lãm", href: "#exhibitions" },
    ],
  },
  { label: "TIN TỨC", href: "#blog" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-start ml-0 group select-none cursor-pointer">
            <img src={logo} alt="ECOTEL Logo" className="  h-[53px] w-auto object-contain">
            </img>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
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
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-up">
                    <div className="glass-card rounded-xl p-2 min-w-[220px] border border-border/50 bg-slate-950">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
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
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover-lift"
            style={{ boxShadow: "var(--shadow-button)" }}
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
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="pl-6">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
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
