import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import ERPSolutions from "./pages/ERPSolutions";
import AttendanceSystem from "./pages/AttendanceSystem";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import JobSearch from "./pages/JobSearch";
import SavedJobs from "./pages/SavedJobs";
import AccessApplication from "./pages/AccessApplication";
import WhoWeAre from "./pages/WhoWeAre";
import LifeAtMyVidyon from "./pages/LifeAtMyVidyon";
import HowWeHire from "./pages/HowWeHire";
import Sitemap from "./pages/Sitemap";
import WhatIsMyVidyon from "./pages/WhatIsMyVidyon";
import AboutMyVidyon from "./pages/AboutMyVidyon";
import MyVidyonERPSoftware from "./pages/MyVidyonERPSoftware";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top on route change without smooth behavior conflict
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Enable GSAP smooth scroll normalization globaly
    ScrollTrigger.normalizeScroll(true);

    // Optional: refine global ScrollTrigger defaults for better performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
    });
  }, []);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/erp-solutions" element={<ERPSolutions />} />
        <Route path="/attendance-system" element={<AttendanceSystem />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Brand Pages */}
        <Route path="/what-is-myvidyon" element={<WhatIsMyVidyon />} />
        <Route path="/about-myvidyon" element={<AboutMyVidyon />} />
        <Route path="/myvidyon-erp-software" element={<MyVidyonERPSoftware />} />
        {/* Careers */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/job-search" element={<JobSearch />} />
        <Route path="/careers/saved-jobs" element={<SavedJobs />} />
        <Route path="/careers/access-application" element={<AccessApplication />} />
        <Route path="/careers/who-we-are" element={<WhoWeAre />} />
        <Route path="/careers/life-at-my-vidyon" element={<LifeAtMyVidyon />} />
        <Route path="/careers/how-we-hire" element={<HowWeHire />} />
        <Route path="/sitemap" element={<Sitemap />} />
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
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
