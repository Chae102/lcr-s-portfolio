import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
