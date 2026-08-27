import { HealthTip, ServiceCategory } from '../types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    iconName: 'Pill',
    shortDesc: '100% genuine allopathic medicines from certified Indian & global pharma manufacturers.',
    fullDesc: 'Comprehensive dispensary of cardiovascular, antidiabetic, antibiotic, neurological, psychiatric, and respiratory medications strictly dispensed by certified pharmacists against valid medical prescriptions.',
    benefits: [
      'Strict batch & expiry tracking',
      'Continuous cold chain storage for biologics',
      'Affordable MRP with genuine computerized billing',
      'Direct sourcing from accredited distributors'
    ],
    itemsCount: '6,500+ Formulations'
  },
  {
    id: 'otc-daily-care',
    title: 'OTC & Daily Healthcare Essentials',
    iconName: 'HeartPulse',
    shortDesc: 'Everyday remedies for cold, fever, cough, digestive relief, pain balms & first-aid.',
    fullDesc: 'Immediate over-the-counter wellness solutions for common ailments like seasonal allergies, antacids, ORS hydration packs, antiseptic gargles, pain sprays, and eye/ear drops.',
    benefits: [
      'Instant counter availability',
      'Trusted brands (Cipla, Sun Pharma, Abbott, Dabur)',
      'Dosage and usage guidance',
      'Convenient travel packs'
    ],
    itemsCount: '1,200+ Products'
  },
  {
    id: 'health-devices',
    title: 'Health Devices & Diagnostic Equipment',
    iconName: 'Activity',
    shortDesc: 'Digital BP monitors, glucometers, nebulizers, thermometers, and pulse oximeters.',
    fullDesc: 'Precision home health diagnostics from trusted manufacturers like Omron, Accu-Chek, Dr. Morepen, and Dr Trust. Includes warranty support and demonstration assistance.',
    benefits: [
      'Clinically validated accuracy',
      'Manufacturer warranty cards included',
      'Test strips & spare accessories available',
      'In-store demonstration & battery check'
    ],
    itemsCount: '150+ Devices'
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical & Wound Dressing Supplies',
    iconName: 'Scissors',
    shortDesc: 'Sterile gauze, surgical tape, bandages, cannulas, catheters, IV sets, and gloves.',
    fullDesc: 'Hospital-grade surgical disposables and post-operative home recovery supplies suitable for clinical clinics, home nurses, and patient caretakers.',
    benefits: [
      'Gamma-sterilized medical grade supplies',
      'Orthopaedic braces, cervical collars & crepe rolls',
      'Bulk packages available for clinics & home care',
      'High absorption wound pads & skin adhesives'
    ],
    itemsCount: '450+ Surgical Items'
  },
  {
    id: 'baby-maternal-care',
    title: 'Baby Care & Maternal Nutrition',
    iconName: 'Baby',
    shortDesc: 'Pediatric drops, infant formulas, gentle baby soaps, diapers, and maternal supplements.',
    fullDesc: 'Complete pediatric and mother wellness inventory including Similac, Lactogen, Pampers, Sebamed, Himalaya Baby, Mamaearth, and prenatal folic acid/iron supplements.',
    benefits: [
      'Dermatologically tested infant care',
      'Pediatric dosage measuring droppers & spoons',
      'Anti-rash creams and hypoallergenic baby wipes',
      'Maternal lactation & calcium tonics'
    ],
    itemsCount: '350+ Baby Products'
  },
  {
    id: 'ayurvedic-supplements',
    title: 'Ayurvedic & Nutritional Supplements',
    iconName: 'Sparkles',
    shortDesc: 'Herbal immunity boosters, multivitamins, protein powders, calcium & liver care.',
    fullDesc: 'Holistic health remedies combining traditional Ayurvedic formulations with modern nutritional science to support daily vitality, bone density, and metabolic health.',
    benefits: [
      'Standardized herbal extracts (Himalaya, Dabur, Baidyanath)',
      'Sugar-free health formulas for seniors & diabetics',
      'Multivitamin strips with zinc and Vitamin D3',
      'High-protein & recovery nutritional shakes'
    ],
    itemsCount: '500+ Wellness Items'
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'tip-1',
    title: 'Understanding Proper Medicine Storage at Home',
    category: 'Medicine Safety',
    readTime: '3 min read',
    summary: 'Why direct sunlight and bathroom cabinets can damage your medicines, and how to store insulin safely.',
    content: 'Medicines should be stored in a cool, dry place away from heat and moisture. Bathrooms and kitchen windows are often too humid. For temperature-sensitive items like insulin and certain eye drops, keep them in the refrigerator door shelf (2°C to 8°C) and never in the freezer.',
    icon: 'ShieldCheck'
  },
  {
    id: 'tip-2',
    title: 'Why Finishing the Full Antibiotic Course is Vital',
    category: 'Antibiotic Awareness',
    readTime: '4 min read',
    summary: 'Stopping antibiotics early leads to drug resistance and bacterial recurrence.',
    content: 'Even if you feel 100% better within 2 days, bacteria may still linger in your system. Stopping the prescribed antibiotic course early allows surviving bacteria to develop resistance, making future infections harder to treat.',
    icon: 'Pill'
  },
  {
    id: 'tip-3',
    title: 'Accurate Blood Pressure Measurement at Home',
    category: 'Cardiovascular Care',
    readTime: '3 min read',
    summary: 'Simple steps to get doctor-accurate BP readings with digital upper-arm monitors.',
    content: 'Sit quietly for 5 minutes before taking a reading. Avoid caffeine, exercise, or smoking 30 minutes prior. Keep your arm supported at heart level with feet flat on the floor without crossing legs, and avoid talking during the inflation cycle.',
    icon: 'HeartPulse'
  }
];
