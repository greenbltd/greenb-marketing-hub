import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EcoRewardsPage from "./pages/EcoRewardsPage";
import FAQPage from "./pages/FAQPage";
import ImpactPage from "./pages/ImpactPage";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import PartnersPage from "./pages/PartnersPage";
import ProjectsPage from "./pages/ProjectsPage";
import RecyclingPage from "./pages/RecyclingPage";
import SmartBinPage from "./pages/SmartBinPage";
import SmartWastePage from "./pages/SmartWastePage";
import SolutionsPage from "./pages/SolutionsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ecorewards" element={<EcoRewardsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/recycling" element={<RecyclingPage />} />
          <Route path="/smart-bin" element={<SmartBinPage />} />
          <Route path="/smart-waste-management" element={<SmartWastePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
