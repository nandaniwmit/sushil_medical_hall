import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="pointer-events-auto p-3 rounded-2xl bg-[#17171A] text-[#E0E0D6] shadow-2xl border border-white/15 hover:bg-white/10 transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer animate-fadeIn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${SITE_CONFIG.phone}`}
        aria-label="Call Sushil Medical Hall"
        title="Emergency Call Pharmacist"
        className="pointer-events-auto flex items-center justify-center w-13 h-13 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer group"
      >
        <Phone className="w-6 h-6 animate-bounce group-hover:animate-none" />
      </a>

      {/* Floating WhatsApp Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={onOpenWhatsAppModal}
        aria-label="Order medicine on WhatsApp"
        title="WhatsApp Medicine Order"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0A8F6A] hover:bg-[#087858] text-white shadow-2xl hover:shadow-emerald-500/40 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageSquare className="w-7 h-7" />
      </button>
    </div>
  );
};
