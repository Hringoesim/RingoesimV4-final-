import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Pricing = lazy(() => import("./pages/Pricing"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Contact = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Career"));
const Login = lazy(() => import("./pages/Login"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const DeviceCompatibility = lazy(() => import("./pages/DeviceCompatibility"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GlobalESIM = lazy(() => import("./pages/GlobalESIM"));
const ESIMEurope = lazy(() => import("./pages/ESIMEurope"));
const ESIMUSA = lazy(() => import("./pages/ESIMUSA"));
const ESIMvsRoaming = lazy(() => import("./pages/ESIMvsRoaming"));
const ESIMvsCompetitors = lazy(() => import("./pages/ESIMvsCompetitors"));

const queryClient = new QueryClient();

import GoogleAnalytics from "./components/GoogleAnalytics";

// Lightweight loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <GoogleAnalytics />
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
