import React from 'react';
import { ShieldCheck, Award, CheckCircle, Heart, Users, Clock, MapPin, Sparkles, Building2, Stethoscope, FileCheck, Phone, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  const milestones = [
    {
      year: '2012',
      title: 'Inauguration at Tikha Bigha Mord',
      description: 'Sushil Medical Hall was founded to provide the local Bodh Gaya population with direct access to genuine, authentic pharmaceutical medications without having to travel to distant city centers.'
    },
    {
      year: '2016',
      title: 'Cold-Chain Infrastructure Expansion',
      description: 'Upgraded to specialized pharmaceutical refrigeration with 24/7 dedicated inverter backups for sensitive vaccines, insulins, and biologic formulations.'
    },
    {
      year: '2020',
      title: 'Emergency Delivery & COVID Support',
      description: 'Provided uninterrupted medical supplies, oxygen accessories, oximeters, and essential chronic illness medications during critical lockdown periods.'
    },
    {
      year: '2024 - 2026',
      title: 'Digital Health & Instant WhatsApp Dispatch',
      description: 'Modernized inventory management with live stock checking, WhatsApp prescription dispatch, and expanding to over 10,000+ formulations and surgical devices.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      <SEOHead
        title="About Us"
        description="Learn about Sushil Medical Hall, our certified pharmacists, drug licensing, 14+ years history, mission, vision and commitment to healthcare in Bodh Gaya, Bihar."
        canonicalPath="/about"
        pageBreadcrumbName="About Us"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <Building2 className="w-3.5 h-3.5" />
            <span>Serving Bodh Gaya Since {SITE_CONFIG.establishedYear}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Sushil Medical Hall
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A pillar of genuine pharmaceutical dispensing, ethical medical practice, and patient-first healthcare support in the historic city of Bodh Gaya, Bihar.
          </p>
        </div>
      </section>

      {/* 1. Business Story & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Journey & Dedication to Patient Health
            </h2>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>Sushil Medical Hall</strong> is situated at <strong>Tikha Bigha Mord, Bodh Gaya, Bihar (824231)</strong>. Over the past 14 years, we have grown from a modest neighborhood chemist into one of the most reliable and trusted medical retailers in the region.
              </p>
              <p>
                We understand that when it comes to medicine, authenticity and proper storage make the difference between life and recovery. That is why every single tablet, syrup, insulin vial, and surgical product on our shelves is sourced exclusively from registered pharmaceutical C&F agents and recognized corporate brands such as Cipla, Sun Pharma, Abbott, Alkem, Mankind, GSK, and Pfizer.
              </p>
              <p>
                Whether you need everyday OTC relief, critical prescription antibiotics, pediatric care products, or specialized diagnostic equipment like blood pressure monitors and nebulizers, our certified pharmacists ensure you receive genuine stock with verified batch numbers and expiration dates.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-extrabold text-[#0A8F6A] font-mono">10,000+</div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">Medicine Formulations</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-extrabold text-blue-600 font-mono">25,000+</div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">Local Patients Assisted</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80"
                alt="Medicine storage shelves at Sushil Medical Hall Bodh Gaya"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0A8F6A]" /> Certified Storage & Dispensing
              </span>
              <span>Drug Lic: {SITE_CONFIG.drugLicenseNo}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision, Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide the residents and pilgrims of Bodh Gaya with immediate access to 100% genuine medicines, verified healthcare devices, and honest pharmacist guidance at ethical and transparent pricing.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most modern, technology-enabled, and trusted community pharmacy in Gaya district, seamlessly bridging the gap between clinical prescriptions and fast, safe home delivery.
            </p>
          </div>

          {/* Core Values */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Integrity in medicine authenticity, zero compromise on cold-chain integrity, patient safety before sales, and continuous availability for urgent health emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Owner & Pharmacist Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left space-y-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 p-1 shadow-xl">
                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  <Stethoscope className="w-12 h-12 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sushil Kumar</h3>
                <p className="text-xs text-emerald-400 font-semibold">Founder & Head Pharmacist</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Sushil Medical Hall, Bodh Gaya</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-emerald-400 font-serif text-3xl">“</div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic -mt-4">
                Healthcare is not simply a business; it is a sacred responsibility to our community. When someone walks into Sushil Medical Hall with a doctor's prescription, they place their family's health in our hands. We pledge to maintain strictly authentic medicines, preserve proper cold storage, and offer courteous, professional advice every single day.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <span>• Pharmacy Reg: Certified</span>
                <span>• Location: Tikha Bigha Mord</span>
                <span>• Phone: +91 9835829175</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#0A8F6A] uppercase tracking-wider">Evolution of Trust</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Our Growth Timeline
          </h2>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-10">
          {milestones.map((milestone, i) => (
            <div key={i} className="relative pl-6 sm:pl-8 group">
              {/* Year marker badge */}
              <div className="hidden sm:block absolute -left-32 top-0.5 w-24 text-right font-mono font-extrabold text-sm text-[#0A8F6A] dark:text-emerald-400">
                {milestone.year}
              </div>

              {/* Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-[#0A8F6A] group-hover:scale-125 transition-transform" />

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1.5">
                <span className="sm:hidden text-xs font-bold font-mono text-[#0A8F6A] dark:text-emerald-400 block mb-1">
                  Year {milestone.year}
                </span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Licensures & Legal Compliances */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Official Licensing & Quality Standards
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Fully compliant with the Drugs and Cosmetics Act and Bihar State Pharmacy Council norms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <FileCheck className="w-6 h-6 mx-auto text-[#0A8F6A] mb-2" />
              <div className="text-xs text-slate-400">Drug License Number</div>
              <div className="font-mono font-bold text-sm text-slate-900 dark:text-white mt-0.5">{SITE_CONFIG.drugLicenseNo}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <Award className="w-6 h-6 mx-auto text-blue-600 mb-2" />
              <div className="text-xs text-slate-400">GSTIN Registration</div>
              <div className="font-mono font-bold text-sm text-slate-900 dark:text-white mt-0.5">{SITE_CONFIG.gstin}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <ShieldCheck className="w-6 h-6 mx-auto text-amber-500 mb-2" />
              <div className="text-xs text-slate-400">Registered Pharmacist</div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">{SITE_CONFIG.registeredPharmacist}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A8F6A] text-white shadow-xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Have a Question for Our Pharmacist?</h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto">
            Need information about dosage, medicine substitutes, or special medicine ordering? Contact us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenWhatsAppModal}
              className="px-6 py-3 bg-white text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow hover:bg-slate-100 transition flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#0A8F6A]" />
              <span>Ask on WhatsApp</span>
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-6 py-3 bg-emerald-900/50 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/30 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {SITE_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
