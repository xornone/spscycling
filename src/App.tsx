import { useEffect, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index.tsx"));
const IndexV2 = lazy(() => import("./pages/IndexV2.tsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.tsx"));
const GpxTemplate = lazy(() => import("./pages/GpxTemplate.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <p className="font-barlow-condensed text-lg tracking-wide">
        Redirection vers les sorties…
      </p>
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#080410] text-white">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-2 border-sps-pink/30 border-t-sps-pink rounded-full animate-spin" />
                <span className="font-barlow-condensed text-xs uppercase tracking-[3px] text-white/50">
                  Chargement SPS…
                </span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/v2" element={<IndexV2 />} />
            <Route
              path="/sorties"
              element={<ExternalRedirect to="https://spsapp2.vercel.app/" />}
            />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/gpx" element={<GpxTemplate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
