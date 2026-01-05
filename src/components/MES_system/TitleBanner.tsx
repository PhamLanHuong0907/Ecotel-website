import { motion } from "framer-motion";

export const TitleBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-500 to-blue-900 shadow-lg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground text-center tracking-wider"
        >
          TIÊN PHONG CHUYỂN ĐỔI SỐ TỔNG THỂ ĐA LĨNH VỰC
        </motion.h2>
      </div>
    </section>
  );
};