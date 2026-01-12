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
import Giaiphapkho from "./pages/Resource_management";
import ERP from "./pages/ERP_system";
import Professor from "./pages/Professor";
import Partners from "./pages/Partners";
import ScrollToTop from "./components/Scrolltotop";
import Hethongql from "./pages/Manufacturing_management";
import ProductionManagement from "./pages/Production_management";
import AI_IoT from "./pages/AI&IoT_system";
import MES from "./pages/MES_system";
// [NEW] Import ThemeToggle
import ThemeToggle from "./components/ThemeToogle"; 
import ChristmasIntro from "./components/ChiristmasIntro";
import Erp_Bi from "./pages/ERP&BI";
import KDDV from "./pages/Sales_service";
import ManufacturingMonitoring from "./pages/Monitoring_operation";
import OEEManagement from "./pages/Oee_management";
import QualityManagement from "./pages/Qms";
import EnvironmentMonitoring from "./pages/Enviroment_monitor";
import ConveyorMonitoring from "./pages/Convayor";
import Central_management from "./pages/Central_management";
import Safety_security from "./pages/Safety_security";
import VisionSensor from "./pages/Vision_sensor";
import SmartSurvey from "./pages/Smartsurvey";
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
          <Route path="/erp/resource-management" element={<Giaiphapkho />} />
          <Route path="/erp/manufacturing-operations" element={<Hethongql/>}/>
          <Route path="/erp" element={<ERP />} />
          <Route path="/erp/erp_bi" element={<Erp_Bi/>} />
          <Route path="/erp/sales-services" element={<KDDV/>} />
          <Route path="/mes" element={<MES/>}/>
          <Route path="/mes/production-management" element={<ProductionManagement/>} />
          <Route path='/mes/monitoring-operation' element={<ManufacturingMonitoring/>}/>
          <Route path="/mes/oee-management" element={<OEEManagement/>}/>
          <Route path="/mes/qms" element={<QualityManagement/>}/>
          <Route path="/mes/environment-monitoring" element={<EnvironmentMonitoring/>}/>
          <Route path="/mes/conveyor-monitoring" element={<ConveyorMonitoring/>}/>
          <Route path="/AI&IoT" element={<AI_IoT/>}/>
          <Route path="/AI&IoT/smart-survey" element= {<SmartSurvey/>}/>
          <Route path="/AIoT/safety_security" element={<Safety_security/>}/>
          <Route path="/AI&IoT/vision-sensor" element={<VisionSensor/>}/>
          <Route path="/AI&IoT/central-management" element={<Central_management/>}/>
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