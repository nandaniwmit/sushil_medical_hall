import React, { useState } from 'react';
import { X, ZoomIn, Eye, Filter, MessageSquare, ShieldCheck, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

interface GalleryProps {
  onOpenWhatsAppModal: (initialMedicine?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenWhatsAppModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'store', name: 'Store & Counter' },
    { id: 'shelves', name: 'Medicine Shelves' },
    { id: 'equipment', name: 'Cold Storage & Surgical' },
    { id: 'products', name: 'Health Devices & Products' },
    { id: 'dispensary', name: 'Dispensary Area' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      <SEOHead
        title="Store & Facility Gallery"
        description="View photos of Sushil Medical Hall, medicine shelves, pharmaceutical cold storage, diagnostic equipment display, and clean dispensary in Bodh Gaya, Bihar."
        canonicalPath="/gallery"
        pageBreadcrumbName="Gallery"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <Camera className="w-3.5 h-3.5" />
            <span>Store Atmosphere & Standards</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Store & Facility Gallery
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Take a look inside Sushil Medical Hall at Tikha Bigha Mord, Bodh Gaya. We maintain sanitized spaces, systematic shelving, and 24/7 temperature-monitored cold storage.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0A8F6A] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="p-3 bg-white/90 text-slate-900 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5 text-[#0A8F6A]" />
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug group-hover:text-[#0A8F6A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-lightbox"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-16/10 bg-slate-950">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-300 rounded-full uppercase tracking-wider">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {activeItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenWhatsAppModal(`Inquiry regarding: ${activeItem.title}`);
                  }}
                  className="px-4 py-2.5 bg-[#0A8F6A] hover:bg-[#087858] text-white text-xs font-bold rounded-xl shadow-md transition flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Sushil Medical Hall • Tikha Bigha Mord, Bodh Gaya</span>
                </div>
                <span>Phone: {SITE_CONFIG.displayPhone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
