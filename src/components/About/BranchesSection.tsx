import { MapPin } from "lucide-react";

export const BranchesSection = () => {
  // Địa chỉ cụ thể
  const addressString = "Số 4- Q28, ngõ 136 Nguyễn An Ninh, Tương Mai, Thành phố Hà Nội";
  // Tạo link Google Maps để người dùng click vào mở tab mới
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressString)}`;

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Liên hệ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Văn phòng <span className="gradient-text">tại Hà Nội</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          
          {/* CỘT 1: BẢN ĐỒ (IFRAME) */}
          <div className="glass-card rounded-2xl overflow-hidden h-[400px] relative group border border-white/10 shadow-lg">
            <iframe
              title="Ban do Ha Noi"
              // Link embed google map trỏ về địa chỉ cụ thể
              src={`https://maps.google.com/maps?q=${encodeURIComponent(addressString)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* CỘT 2: THÔNG TIN CHI TIẾT */}
          <div className="space-y-6">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover-lift group animate-fade-up border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-primary/20">
                <MapPin className="w-8 h-8 text-white" />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  Trụ sở chính
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {addressString}
                </p>
                <span className="mt-3 inline-block text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Xem chỉ đường trên Google Maps &rarr;
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};