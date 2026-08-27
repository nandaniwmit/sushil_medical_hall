import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ShieldCheck, Clock, CheckCircle2, ArrowRight, HeartPulse, Pill, Activity, Baby, Sparkles, ChevronDown, ChevronUp, Star, Award, Search, Users, Truck, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA, HEALTH_TIPS } from '../data/healthTipsData';
import { REVIEWS_DATA, FAQS_DATA } from '../data/reviewsData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SEOHead } from '../components/SEOHead';

interface HomeProps {
  onOpenWhatsAppModal: (initialMedicine?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      <SEOHead
        title="Home"
        description="Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Bodh Gaya, Bihar."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 sm:pt-10 pb-12 sm:pb-16 bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        {/* Ambient decorative gradient orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-400/15 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-800/80 shadow-sm text-xs font-bold text-[#0A8F6A] dark:text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-[#0A8F6A]" />
                <span>100% Genuine Medicines • Lic. No: {SITE_CONFIG.drugLicenseNo}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Your Trusted Medical Store for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A8F6A] to-blue-600">
                  Genuine Medicines
                </span>{' '}
                & Healthcare Needs
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Bodh Gaya.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  id="hero-whatsapp-order-btn"
                  onClick={() => onOpenWhatsAppModal()}
                  className="px-6 py-3.5 bg-[#0A8F6A] hover:bg-[#087858] text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  id="hero-call-now-btn"
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm sm:text-base rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200 flex items-center gap-2.5"
                >
                  <Phone className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Call Now</span>
                </a>

                <a
                  id="hero-directions-btn"
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-[#0A8F6A] dark:text-emerald-300 font-bold text-sm sm:text-base rounded-2xl border border-emerald-200 dark:border-emerald-800 transition flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Live Info Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Open Today: {SITE_CONFIG.workingHours.weekdays}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Tikha Bigha Mord, Bodh Gaya</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Quick Local Delivery Available</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1586015555751-63c2954c2567?auto=format&fit=crop&w=1000&q=80"
                    alt="Sushil Medical Hall Pharmacy Interior in Bodh Gaya"
                    className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/50 dark:border-slate-700/50 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                          Rx
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">Cold Chain Maintained</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">Insulins, Vaccines & Biologics</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 text-[11px] font-extrabold bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950 dark:text-emerald-300 rounded-lg">
                        2°C - 8°C
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating prescription mini card */}
                <div className="absolute -top-4 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 max-w-[210px] hidden sm:flex items-center space-x-3 animate-pulse">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                    98%
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Instant Fulfillment</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Prescriptions Ready Fast</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Stats Ribbon */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {SITE_CONFIG.stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono text-[#0A8F6A] dark:text-emerald-400">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg">
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacist dispensing genuine medicines at Sushil Medical Hall"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center justify-between text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              <span>Licensed Pharmacist in Attendance</span>
              <Award className="w-4 h-4 text-[#0A8F6A]" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold">
              <span>Serving Bodh Gaya Community Since {SITE_CONFIG.establishedYear}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Legacy of Trust, Authenticity & Healthcare Reliability
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Located conveniently at <strong>Tikha Bigha Mord, Bodh Gaya</strong>, Sushil Medical Hall was founded with a single mission: ensuring that every patient and family receives 100% genuine pharmaceutical drugs, reliable healthcare devices, and expert dosage guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Verified Authorized Distributors Only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Computerized Batch & Expiry Bills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Dedicated Temperature-Controlled Cold Chain</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Rapid WhatsApp Order & Home Delivery</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                id="home-about-read-more"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs sm:text-sm rounded-xl transition"
              >
                <span>Read Our Full Story & Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6 AS REQUESTED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold mb-2">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Comprehensive Healthcare Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Healthcare & Pharmacy Services
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2">
            Everything you need for your family's health under one roof with certified pharmacist consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {index === 0 && <Pill className="w-6 h-6" />}
                  {index === 1 && <HeartPulse className="w-6 h-6" />}
                  {index === 2 && <Activity className="w-6 h-6" />}
                  {index === 3 && <ShieldCheck className="w-6 h-6" />}
                  {index === 4 && <Baby className="w-6 h-6" />}
                  {index === 5 && <Sparkles className="w-6 h-6" />}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded-full">
                    {service.itemsCount}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <Link
                  to="/services"
                  className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenWhatsAppModal(service.title)}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-[#0A8F6A] hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            id="home-view-all-services-btn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-[#0A8F6A] dark:text-emerald-300 font-bold text-sm rounded-2xl border border-emerald-300 dark:border-emerald-700 transition"
          >
            <span>Explore All Medicine Categories & Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
              The Sushil Medical Hall Standard
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
              Why Doctors & Families in Bodh Gaya Trust Us
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              We prioritize patient health over everything with genuine batch sourcing, strict storage protocols, and compassionate pharmacist guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.features.map((feat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500 transition-colors duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-800">
                  0{index + 1}
                </div>
                <h3 className="font-bold text-base text-white">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED MEDICINE STOCK CHECKER PREVIEW (EXCLUSIVE FEATURE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker
          onOrderClick={(medName) => onOpenWhatsAppModal(medName)}
          maxInitialItems={6}
        />
        <div className="text-center mt-6">
          <Link
            to="/services"
            id="home-view-full-stock-btn"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline"
          >
            <span>View Full Pharmacy Inventory with 20+ Categories & Devices</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Real Customer Feedback</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trusted by Thousands in Bodh Gaya
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold text-slate-900 dark:text-white">4.9 / 5.0 Rating</span>
            <span>based on local patient reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{rev.name}</div>
                  <div className="text-[11px] text-slate-400">{rev.location}</div>
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Pharmacist Health Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Essential Medicine & Wellness Tips
            </h2>
          </div>
          <Link
            to="/about"
            className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>Learn More About Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <span>{tip.category}</span>
                  <span>{tip.readTime}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  💡 {tip.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Common questions regarding prescriptions, WhatsApp ordering, and delivery in Bodh Gaya.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-colors"
            >
              <button
                id={`faq-toggle-${index}`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaqIndex === index}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition cursor-pointer"
              >
                <span>{faq.question}</span>
                {openFaqIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#0A8F6A] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {openFaqIndex === index && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/contact"
            className="text-xs font-bold text-[#0A8F6A] dark:text-emerald-400 hover:underline"
          >
            Have a different question? Contact our Bodh Gaya pharmacy team
          </Link>
        </div>
      </section>

      {/* 9. CTA & NEWSLETTER / REFILL REMINDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A8F6A] via-emerald-700 to-blue-700 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm inline-block">
                Emergency & Regular Prescriptions
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Need Urgent Medicines in Bodh Gaya?
              </h2>
              <p className="text-sm sm:text-base text-emerald-100 max-w-xl leading-relaxed">
                Send your prescription list via WhatsApp for immediate confirmation and fast delivery to your doorstep.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-sm rounded-xl shadow-lg transition flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Order via WhatsApp Now</span>
                </button>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="px-5 py-3 bg-emerald-900/60 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl border border-white/30 transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONFIG.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Newsletter & Refill Reminder form */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="font-bold text-base text-white mb-1">
                Monthly Medicine Refill Reminder
              </h3>
              <p className="text-xs text-emerald-100 mb-4">
                Enter your email or WhatsApp number to get timely refill reminders for chronic diabetes or BP medications.
              </p>

              {newsletterSubmitted ? (
                <div className="p-3 bg-white/20 rounded-xl text-xs font-semibold text-center text-white flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Refill reminder registered! We will notify you.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Email or WhatsApp Number"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shadow"
                  >
                    Subscribe for Refill Alerts
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
