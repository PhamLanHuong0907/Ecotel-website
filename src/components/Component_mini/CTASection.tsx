import { ChevronRight } from "lucide-react";
import {HashLink} from 'react-router-hash-link';
export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          Bạn muốn hợp tác cùng chúng tôi?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Liên hệ ngay để được tư vấn và hỗ trợ từ đội ngũ chuyên gia của ECOTEL
        </p>
        <HashLink
          smooth
          to="/#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover-lift"
        >
          Liên hệ ngay
          <ChevronRight className="w-4 h-4" />
        </HashLink>
      </div>
    </section>
  );
};