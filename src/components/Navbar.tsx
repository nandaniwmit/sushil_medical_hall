import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Moon, Sun, Menu, X, Shield, Plus, HeartPulse, User } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0A0A0B]/95 shadow-2xl backdrop-blur-md border-b border-white/10'
          : 'bg-[#0A0A0B] border-b border-white/10'
      }`}
    >
      {/* Top emergency announcement bar */}
      <div className="bg-[#050506] text-[#E0E0D6]/80 text-xs py-1.5 px-4 hidden sm:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today: {SITE_CONFIG.workingHours.weekdays}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#E0E0D6]/70">📍 {SITE_CONFIG.address}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1 text-[#E0E0D6] hover:text-white font-medium transition"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call: {SITE_CONFIG.displayPhone}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-emerald-400 font-semibold tracking-wide">100% Genuine Medicines</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link
            to="/"
            id="brand-logo-link"
            className="flex items-center space-x-3 group"
            aria-label="Sushil Medical Hall Home"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0A8F6A] to-emerald-800 flex items-center justify-center text-white shadow-md border border-white/15 group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
              <Plus className="w-6 h-6 stroke-[3]" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0A0A0B] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0B]"></span>
              </div>
            </div>

            <div>
              <span className="block font-extrabold text-lg sm:text-xl tracking-tight text-white leading-tight">
                {SITE_CONFIG.businessName}
              </span>
              <span className="block text-[10px] font-bold text-emerald-400 tracking-[0.18em] uppercase">
                Bodh Gaya • Pharmacy & Chemist
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-150 ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/15 shadow-inner'
                      : 'text-[#E0E0D6]/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* PWA Add to Home */}
            <PWAInstallButton />

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title="Toggle Dark / Light Theme"
              className="p-2.5 rounded-xl text-[#E0E0D6] hover:bg-white/10 border border-white/10 hover:border-white/20 transition min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Login Link */}
            <Link
              to="/login"
              id="nav-login-btn"
              className={`p-2.5 rounded-xl border border-white/10 text-[#E0E0D6] hover:bg-white/10 transition min-w-[44px] min-h-[44px] flex items-center justify-center gap-1.5 text-xs font-bold ${
                location.pathname === '/login' ? 'bg-white/15 text-white border-emerald-400/50' : ''
              }`}
              title="Staff & Customer Portal Login"
            >
              <User className="w-4 h-4" />
              <span className="hidden xl:inline">Login</span>
            </Link>

            {/* Quick WhatsApp Order Button */}
            <button
              id="nav-whatsapp-order-btn"
              onClick={onOpenWhatsAppModal}
              className="px-4 py-2.5 bg-[#0A8F6A] hover:bg-[#087858] text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-emerald-500/20 border border-emerald-500/30 transition-all duration-200 flex items-center gap-2 cursor-pointer min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Right Controls & Hamburger */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              id="mob-theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-[#E0E0D6] border border-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl text-[#E0E0D6] hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden border-t border-white/10 bg-[#0E0E10] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn"
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  id={`mob-nav-link-${link.name.toLowerCase()}`}
                  className={`block px-4 py-3 rounded-xl text-sm font-bold min-h-[44px] flex items-center ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/15'
                      : 'text-[#E0E0D6]/80 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/login"
              id="mob-nav-login"
              className={`block px-4 py-3 rounded-xl text-sm font-bold min-h-[44px] flex items-center gap-2 ${
                location.pathname === '/login'
                  ? 'bg-white/10 text-white border border-white/15'
                  : 'text-[#E0E0D6]/80 hover:bg-white/5'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Staff & Customer Login</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <PWAInstallButton isMobileMenu={true} />

            <button
              id="mob-order-whatsapp-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppModal();
              }}
              className="w-full py-3 px-4 bg-[#0A8F6A] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md border border-emerald-500/30 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order Medicines on WhatsApp</span>
            </button>

            <a
              id="mob-call-btn"
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full py-3 px-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: {SITE_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
