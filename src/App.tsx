import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })));

// Scroll restoration helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page Fallback Spinner
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center">
        <div className="w-6 h-6 border-3 border-[#0A8F6A] border-t-transparent rounded-full animate-spin" />
      </div>
      <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Loading Sushil Medical Hall...</p>
    </div>
  );
}

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [initialMedicineForOrder, setInitialMedicineForOrder] = useState<string>('');

  const handleOpenWhatsAppModal = (initialMed: string = '') => {
    setInitialMedicineForOrder(initialMed);
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
    setInitialMedicineForOrder('');
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0A0A0B] text-[#E0E0D6] selection:bg-[#0A8F6A] selection:text-white transition-colors duration-200">
          {/* Main Sticky Navbar */}
          <Navbar onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route
                  path="/"
                  element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />}
                />
                <Route
                  path="/about"
                  element={<About onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />}
                />
                <Route
                  path="/services"
                  element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />}
                />
                <Route
                  path="/gallery"
                  element={<Gallery onOpenWhatsAppModal={handleOpenWhatsAppModal} />}
                />
                <Route
                  path="/contact"
                  element={<Contact onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                {/* Fallback route */}
                <Route
                  path="*"
                  element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />}
                />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer (with Step 11 Global Tracking & Step 12 WMIT Popup Trigger) */}
          <Footer />

          {/* Floating Actions: WhatsApp, Call, Back to Top */}
          <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal('')} />

          {/* Interactive WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={isWhatsAppModalOpen}
            onClose={handleCloseWhatsAppModal}
            initialMedicineName={initialMedicineForOrder}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
