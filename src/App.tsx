import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/Introduce";
import Leadership from "./pages/Leadership";
import Customers from "./pages/Customer";
import ScrollToTop from "./components/Component_mini/Scrolltotop";
// [NEW] Import ThemeToggle
import ThemeToggle from "./components/ThemeToogle"; 
import ChristmasIntro from "./components/Component_mini/ChiristmasIntro";
import Award from "./pages/Prize_page";
import ServicePage from "./pages/ServicePage";
import ProductsPage from "./pages/ProductsPage";
import { BlogsSection } from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/Projects";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
   
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <ChristmasIntro />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gioi-thieu-chung" element={<About />} />
          <Route path="/doi-ngu-lanh-dao" element={<Leadership />} />
          <Route path="/khach-hang" element={<Customers />} />
          <Route path="/giai-thuong" element={<Award/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/:serviceSlug" element={<ServicePage />} />
          <Route path="/:serviceSlug/:productSlug" element={<ProductsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/du-an" element={<ProjectsPage />} />
        </Routes>

        {/* [NEW] Đặt nút đổi màu ở góc màn hình. 
            z-50 để nổi lên trên cùng, fixed để luôn hiển thị khi cuộn */}
        <div className="fixed bottom-6 left-6 z-50 md:bottom-10 md:left-10 animate-fade-up">
           <ThemeToggle />
        </div>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;