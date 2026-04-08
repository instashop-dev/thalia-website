import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Apps from "./pages/Apps";
import AppDetail from "./pages/AppDetail";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:slug" element={<AppDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="*" element={<NotFound />} />
        
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
