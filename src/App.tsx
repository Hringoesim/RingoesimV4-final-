import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import UseCases from "./pages/UseCases";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DeviceCompatibility from "./pages/DeviceCompatibility";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import GlobalESIM from "./pages/GlobalESIM";
import ESIMEurope from "./pages/ESIMEurope";
import ESIMUSA from "./pages/ESIMUSA";
import ESIMvsRoaming from "./pages/ESIMvsRoaming";
import ESIMvsCompetitors from "./pages/ESIMvsCompetitors";

// ... (existing imports)

import GoogleAnalytics from "./components/GoogleAnalytics";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/use-cases" element={<UseCases />} />

            {/* New SEO Landing Pages */}
            <Route path="/global-esim" element={<GlobalESIM />} />
            <Route path="/esim-europe" element={<ESIMEurope />} />
            <Route path="/esim-usa" element={<ESIMUSA />} />
            <Route path="/esim-vs-roaming" element={<ESIMvsRoaming />} />
            <Route path="/compare-esim" element={<ESIMvsCompetitors />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/device-compatibility" element={<DeviceCompatibility />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
