import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AudioProvider } from "@/contexts/AudioContext";
import Index from "./pages/Index";
import VideoMessages from "./pages/VideoMessages";
import PhotoMemories from "./pages/PhotoMemories";
import SpecialMessage from "./pages/SpecialMessage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AudioProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/videos" element={<VideoMessages />} />
              <Route path="/photos" element={<PhotoMemories />} />
              <Route path="/message" element={<SpecialMessage />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </AudioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;