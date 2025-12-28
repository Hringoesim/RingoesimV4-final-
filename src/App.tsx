import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for performance
const Index = React.lazy(() => import("./pages/Index"));
const HowItWorks = React.lazy(() => import("./pages/HowItWorks"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const UseCases = React.lazy(() => import("./pages/UseCases"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Career = React.lazy(() => import("./pages/Career"));
const Login = React.lazy(() => import("./pages/Login"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const DeviceCompatibility = React.lazy(() => import("./pages/DeviceCompatibility"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const GlobalESIM = React.lazy(() => import("./pages/GlobalESIM"));
const ESIMEurope = React.lazy(() => import("./pages/ESIMEurope"));
const ESIMUSA = React.lazy(() => import("./pages/ESIMUSA"));
const ESIMvsRoaming = React.lazy(() => import("./pages/ESIMvsRoaming"));
const ESIMvsCompetitors = React.lazy(() => import("./pages/ESIMvsCompetitors"));

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
          <React.Suspense fallback={<PageLoader />}>
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
          </React.Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
