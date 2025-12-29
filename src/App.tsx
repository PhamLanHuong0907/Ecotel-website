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
import Giaiphapkho from "./pages/Giaiphapkho";
import ERP from "./pages/ERP_system";
import Professor from "./pages/Professor";
import Partners from "./pages/Partners";
import ScrollToTop from "./components/Scrolltotop";
import Smart_Factory from "./pages/Smart_Factory";
import AI_IoT from "./pages/AI&IoT_system";
import MES from "./pages/MES_system";
// [NEW] Import ThemeToggle
import ThemeToggle from "./components/ThemeToogle"; 
import ChristmasIntro from "./components/ChiristmasIntro";
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
          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/professors" element={<Professor />} />
          <Route path="/about/customers" element={<Customers />} />
          <Route path="/about/partners" element={<Partners />} />
          <Route path="/industrial/giaiphapkho" element={<Giaiphapkho />} />
          <Route path="/industrial/smart_factory" element={<Smart_Factory/>}/>
          <Route path="/erp" element={<ERP />} />
          <Route path="/mes" element={<MES/>}/>
    
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/AI&IoT" element={<AI_IoT/>}/>
        
         
        
  
        
          <Route path="*" element={<NotFound />} />
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