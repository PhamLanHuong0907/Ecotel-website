import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"; // Đã thêm ExternalLink (tuỳ chọn)
import { toast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Trong component ContactSection
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // URL của Supabase Edge Function (Thay bằng URL thật của bạn sau khi deploy)
    // Ví dụ: https://project-ref.supabase.co/functions/v1/send-email
    const SUPABASE_FUNCTION_URL = import.meta.env.VITE_SUPABASE_FUNCTION_URL; 
    try {
      const response = await fetch(SUPABASE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Có lỗi xảy ra");
      }

      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });

      setFormData({ name: "", email: "", phone: "", company: "", title: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Gửi thất bại",
        description: "Vui lòng thử lại sau hoặc gọi hotline trực tiếp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "Số 4-Q28, 136 Nguyễn An Ninh, Tương Mai, Hoàng Mai, Hà Nội",
      // --- THÊM PHẦN NÀY ---
      link: "https://www.google.com/maps/search/?api=1&query=Số+4-Q28,+136+Nguyễn+An+Ninh,+Tương+Mai,+Hoàng+Mai,+Hà+Nội",
      linkText: "Xem chỉ đường trên GoogleMaps",
      // ---------------------
    },
    {
      icon: Phone,
      label: "Điện thoại",
      value: "+84 378 665822",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@ecotel.com.vn",
    },
    {
      icon: Clock,
      label: "Giờ làm việc",
      value: "Thứ 2 - Thứ 6: 8:00 - 17:30",
    },
  ];

  return (
    <section id="contact" className="py-11 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Liên hệ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Đăng ký </span>
            <span className="gradient-text">nhận tư vấn</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Liên hệ ngay để được tư vấn giải pháp phù hợp với doanh nghiệp của bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="0912 345 678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Công ty
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Tên công ty"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Tiêu đề"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2 mt-7">
                  Nội dung
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Mô tả nhu cầu của bạn..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e5c8b] via-[#338bcf] to-[#4eb9e6] text-primary-foreground font-semibold hover-lift"
                style={{ boxShadow: "var(--shadow-button)" }}
              >
                Gửi yêu cầu tư vấn
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass-card rounded-2xl p-6 hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      {info.label}
                    </h4>
                    <p className="text-foreground">{info.value}</p>
                    
                    {/* --- THÊM PHẦN HIỂN THỊ LINK TẠI ĐÂY --- */}
                    {/* Kiểm tra nếu có link thì hiển thị thẻ a */}
                    {info.link && (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-1 inline-flex items-center gap-1 font-medium"
                      >
                        {info.linkText}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {/* -------------------------------------- */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};