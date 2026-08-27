import React, { useState } from 'react';
import { Pill, HeartPulse, Activity, Scissors, Baby, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Phone, Search, PackageCheck, AlertCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/healthTipsData';
import { SITE_CONFIG } from '../config/siteConfig';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SEOHead } from '../components/SEOHead';

interface ServicesProps {
  onOpenWhatsAppModal: (initialMedicine?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const categoriesDetail = [
    {
      id: 'prescription-allopathy',
      title: 'Prescription Pharmaceuticals (Rx)',
      tag: 'Schedule H & H1 Dispensing',
      icon: Pill,
      description: 'Full dispensary of authentic branded prescription medicines for cardiology, diabetes, nephrology, neurology, gastroenterology, and infectious diseases.',
      items: [
        'Antidiabetic (Metformin, Glimepiride, DPP-4 Inhibitors, Insulin Pens)',
        'Cardiovascular (Telmisartan, Amlodipine, Statins, Beta-Blockers)',
        'Broad Spectrum Antibiotics (Augmentin, Azithromycin, Cephalosporins)',
        'Respiratory & Asthma Inhalers (Budesonide, Levolin, Seroflo, Foracort)',
        'Psychiatric & Neurological medications (Strict Rx Verification)'
      ],
      storageNote: 'Biologics and insulins stored at certified 2°C to 8°C cold chain.'
    },
    {
      id: 'otc-wellness',
      title: 'Over-The-Counter (OTC) & First Aid',
      tag: 'Immediate Counter Availability',
      icon: HeartPulse,
      description: 'Essential remedies for common household ailments, fever, seasonal allergies, headaches, coughs, acidity, and minor cuts.',
      items: [
        'Fever & Pain Relief (Paracetamol 500/650, Ibuprofen, Diclofenac)',
        'Antacids & Gas Relief (Pan-D, Gelusil, Digene, Eno, Omez)',
        'Cough Syrups & Lozenge Drops (Benadryl, Ascoril, Strepsils, Koflet)',
        'Allergy & Cold Remedies (Levocetirizine, Montair-LC, Sinarest, Vicks)',
        'WHO-Formula ORS & Hydration Solutions (Electral, Enerzal)'
      ],
      storageNote: 'Convenient strip and sachet packaging for home and travel.'
    },
    {
      id: 'diagnostic-devices',
      title: 'Health Diagnostics & Home Monitors',
      tag: 'Clinically Validated Accuracy',
      icon: Activity,
      description: 'Precision medical devices for self-monitoring blood pressure, blood glucose, oxygen saturation, and body temperature at home.',
      items: [
        'Automatic Digital BP Monitors (Omron, Dr. Morepen, Dr Trust)',
        'Glucometers & Test Strip Packs (Accu-Chek Active, Contour Plus, OneTouch)',
        'Heavy-Duty Compressor Nebulizers for Adult & Pediatric Asthma',
        'Fingertip Pulse Oximeters with OLED waveform display',
        'Infrared Contactless & Digital Clinical Thermometers'
      ],
      storageNote: 'Includes manufacturer warranty, calibration guide, and batteries.'
    },
    {
      id: 'surgical-homecare',
      title: 'Surgical & Post-Operative Supplies',
      tag: 'Hospital Grade Disposables',
      icon: Scissors,
      description: 'Medical disposables and rehabilitation aids for home nursing, clinic clinics, wound dressings, and elderly patient care.',
      items: [
        'Sterile Gauze Swabs, Cotton Rolls, Crepe Bandages & Micropore Tape',
        'Antiseptic Lotions (Betadine 10%, Savlon, Dettol, Hydrogen Peroxide)',
        'Disposable Syringes, Cannulas, IV Infusion Sets & Urine Bags',
        'Orthopaedic Braces (Cervical Collars, Knee Caps, Lumbar Belts, Arm Slings)',
        'Anti-Bedsore Air Mattresses with Electric Pumps'
      ],
      storageNote: 'Gamma-sterilized sealed packaging.'
    },
    {
      id: 'baby-maternal',
      title: 'Baby Care & Pediatric Pharmacy',
      tag: 'Gentle & Dermatologist Tested',
      icon: Baby,
      description: 'Dedicated pediatric dispensary providing specialized infant milk formulas, colic drops, teething solutions, and hypoallergenic baby care.',
      items: [
        'Pediatric Suspensions (Calpol Pead, Meftal-P, Zinc Drops, Colicaid)',
        'Infant Formulas & Cereals (Nestlé Nan Pro, Lactogen, Similac, Cerelac)',
        'Gentle Baby Washes, Shampoos & Massage Oils (Sebamed, Himalaya, Cetaphil)',
        'Anti-Rash Creams with Zinc Oxide & Hypoallergenic Wipes',
        'Premium Diapers (Pampers, MamyPoko Pants, Huggies) in all sizes'
      ],
      storageNote: 'Strict expiry inspection for all pediatric consumables.'
    },
    {
      id: 'ayurveda-supplements',
      title: 'Ayurvedic & Daily Nutrition',
      tag: 'Holistic & Standardized Formulations',
      icon: Sparkles,
      description: 'Herbal tonics and daily dietary supplements formulated to improve bone strength, liver health, vitality, and natural immunity.',
      items: [
        'Herbal Formulations (Himalaya Liv.52 DS, Dabur Chyawanprash, Triphala)',
        'Bone & Joint Supplements (Shelcal 500, Calcidol D3, Glucosamine)',
        'Multivitamin & Mineral Capsules (Becosules Z, Supradyn, Zincovit)',
        'High Protein Nutritional Powders (Protinex, Ensure, Resource High Protein)',
        'Ayurvedic Digestion & Cough Syrups (Zandu Pancharishta, Dabur Honitus)'
      ],
      storageNote: 'Certified sugar-free options available for diabetic patients.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      <SEOHead
        title="Pharmacy Services & Medicine Categories"
        description="Explore prescription drugs, OTC medicines, health monitors, surgical disposables, pediatric care and live medicine stock at Sushil Medical Hall, Bodh Gaya."
        canonicalPath="/services"
        pageBreadcrumbName="Services"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Authorized Pharmacy Dispensary</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Products & Services
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            From daily wellness essentials to critical life-saving medications and surgical devices, explore our comprehensive inventory at Tikha Bigha Mord, Bodh Gaya.
          </p>
        </div>
      </section>

      {/* 1. EXCLUSIVE FEATURE: EMBEDDED FULL MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker
          onOrderClick={(medName) => onOpenWhatsAppModal(medName)}
          showTitle={true}
        />
      </section>

      {/* 2. CATEGORY-WISE DETAILED SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Detailed Healthcare Categories
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Each category is supervised by our registered pharmacists ensuring correct usage, verified batch numbers, and proper storage conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categoriesDetail.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col justify-between space-y-6 hover:border-emerald-500/50 transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-[#0A8F6A] dark:text-emerald-400 flex items-center justify-center shadow-inner flex-shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700">
                      {cat.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Products bullet points */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Key Formulations & Products:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0A8F6A] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0A8F6A] flex-shrink-0" />
                    <span>{cat.storageNote}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenWhatsAppModal(cat.title)}
                      className="px-4 py-2.5 bg-[#0A8F6A] hover:bg-[#087858] text-white font-bold text-xs rounded-xl shadow-sm hover:shadow transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order This Category</span>
                    </button>

                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#0A8F6A] transition flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0A8F6A]" />
                      <span>Consult Pharmacist</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Prescription Upload & Special Orders CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800 inline-block">
                Special Medicine Procurement Service
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Looking for Rare or Oncology Medicines?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                If a prescribed specialized medication or surgical appliance is not readily available on our shelves, we can procure it directly from authorized pharmaceutical distributors in Patna/Kolkata within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-emerald-400 font-semibold pt-2">
                <span>✓ 100% Invoice with GST</span>
                <span>✓ Intact Cold Storage Packaging</span>
                <span>✓ Direct Delivery to Bodh Gaya Residence</span>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => onOpenWhatsAppModal('Special Medicine Inquiry')}
                className="w-full sm:w-auto px-8 py-4 bg-[#0A8F6A] hover:bg-[#087858] text-white font-extrabold text-sm rounded-2xl shadow-xl transition transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2 mx-auto lg:ml-auto"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Upload Doctor's Slip on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
