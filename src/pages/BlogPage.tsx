import { Header } from "@/components/Component_mini/Header";
import { Footer } from "@/components/Component_mini/Footer";
import { BlogsSection } from "./Blog";
const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogsSection/>
      
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;