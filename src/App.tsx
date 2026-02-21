import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Residential from "./pages/Residential";
import Construction from "./pages/Construction";
import ArchitectureDesign from "./pages/ArchitectureDesign";
import Properties from "./pages/Properties";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import InteriorDesigns from "./pages/InteriorDesigns";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import TopContactBar from "./components/layout/TopContactBar";
import { usePageLoader } from "./hooks/usePageLoader";

const queryClient = new QueryClient();

const AppContent = () => {
  const isLoading = usePageLoader();

  return (
    <>
      <TopContactBar />
      <ScrollToTop />
      <PageLoader isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Main Pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/interior-designs" element={<InteriorDesigns />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/architecture" element={<ArchitectureDesign />} />
        <Route path="/services/residential" element={<Residential />} />
        <Route path="/services/renovations" element={<Residential />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Careers />} />
        
        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
