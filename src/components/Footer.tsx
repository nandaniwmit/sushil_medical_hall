import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock, Mail, ShieldCheck, Heart, Award, ExternalLink, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WMITModal } from './WMITModal';

export const Footer: React.FC = () => {
  const [isWMITModalOpen, setIsWMITModalOpen] = useState(false);

  // === STEP 11: GLOBAL TRACKER HOOK (PRESERVED EXACTLY AS SPECIFIED) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') as string);
    }
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };

      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  const handleWMITClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWMITModalOpen(true);
  };

  return (
    <footer className="bg-[#060607] text-[#E0E0D6]/80 pt-16 pb-12 border-t border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Business Branding & Trust Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A8F6A] to-emerald-800 flex items-center justify-center text-white font-extrabold text-lg shadow-md border border-white/15">
                +
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">
                  {SITE_CONFIG.businessName}
                </h3>
                <p className="text-xs text-emerald-400 font-semibold tracking-wide">
                  Govt. Lic. {SITE_CONFIG.drugLicenseNo}
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#E0E0D6]/60">
              Serving the community of Bodh Gaya with 100% genuine pharmaceutical drugs, cold-chain biologics, surgical disposables, and trusted healthcare advice since {SITE_CONFIG.establishedYear}.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-emerald-300 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0A8F6A]" /> Verified Pharmacy
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-blue-300 border border-white/10">
                <Award className="w-3.5 h-3.5 text-blue-400" /> GST Registered
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#0A8F6A] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 text-[#E0E0D6]/70 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 text-[#E0E0D6]/70 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" /> About Our Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 text-[#E0E0D6]/70 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" /> Services & Stock Checker
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 text-[#E0E0D6]/70 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" /> Store & Equipment Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 text-[#E0E0D6]/70 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" /> Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-400 text-[#E0E0D6]/70 transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" /> Staff & Member Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Healthcare Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#0A8F6A] pl-2.5">
              Medicine Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E0E0D6]/70">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Prescription Medicines (Rx)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Cold-Chain Insulin & Vaccines
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Digital BP & Sugar Monitors
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Surgical & Wound Dressings
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Baby Formulas & Pediatric Care
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Herbal & Immunity Boosters
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & Timings */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 border-l-2 border-[#0A8F6A] pl-2.5">
              Store Information
            </h4>

            <div className="flex items-start space-x-2.5 text-xs text-[#E0E0D6]/80">
              <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.fullAddress}</span>
            </div>

            <div className="flex items-center space-x-2.5 text-xs text-[#E0E0D6]/80">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white font-semibold">
                {SITE_CONFIG.displayPhone}
              </a>
            </div>

            <div className="flex items-center space-x-2.5 text-xs text-[#E0E0D6]/80">
              <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold">
                WhatsApp: {SITE_CONFIG.whatsappNumber}
              </a>
            </div>

            <div className="flex items-start space-x-2.5 text-xs text-[#E0E0D6]/80">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p>Mon - Sun: {SITE_CONFIG.workingHours.weekdays}</p>
                <p className="text-[11px] text-[#E0E0D6]/50 mt-0.5">Emergency Medicine Helpline Available</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-directions-btn"
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white rounded-lg transition border border-white/10"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer row */}
        <div className="py-6 border-b border-white/10 text-[11px] text-[#E0E0D6]/50 leading-relaxed space-y-1">
          <p>
            <strong className="text-[#E0E0D6]/80">Medical Disclaimer:</strong> Information provided on this web app is for informational & inventory-checking purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Prescription drugs will only be dispensed upon verification of a valid prescription by a registered medical practitioner.
          </p>
          <div className="flex flex-wrap gap-4 text-[#E0E0D6]/60 pt-2">
            <span>License: {SITE_CONFIG.drugLicenseNo}</span>
            <span>•</span>
            <span>GSTIN: {SITE_CONFIG.gstin}</span>
            <span>•</span>
            <span>Pharmacist in Charge: {SITE_CONFIG.registeredPharmacist}</span>
          </div>
        </div>

        {/* Copyright & WMIT integration line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#E0E0D6]/60 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
          </div>

          {/* REQUIRED WMIT POPUP TRIGGER — PRESERVED EXACTLY */}
          <div className="text-center font-medium">
            <a
              href="#"
              className="wmit-popup-trigger text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-400 transition cursor-pointer"
              onClick={handleWMITClick}
            >
              Developed by WMIT
            </a>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-[#E0E0D6]/60">
            <Link to="/about" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition">Terms of Dispensing</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition">Support</Link>
          </div>
        </div>
      </div>

      {/* WMIT Popup Modal */}
      <WMITModal
        isOpen={isWMITModalOpen}
        onClose={() => setIsWMITModalOpen(false)}
      />
    </footer>
  );
};
