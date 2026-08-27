import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, ShieldCheck, RefreshCw, FileText, Info } from 'lucide-react';
import medicineData from '../data/medicineStock.json';
import { MedicineItem, StockStatus } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
  showTitle?: boolean;
  maxInitialItems?: number;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderClick,
  showTitle = true,
  maxInitialItems
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MedicineItem | null>(null);

  // Cast JSON data to typed items
  const allMedicines = useMemo(() => medicineData as MedicineItem[], []);

  // Categories list
  const categories = useMemo(() => {
    const cats = new Set(allMedicines.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [allMedicines]);

  // Filtered medicines
  const filteredMedicines = useMemo(() => {
    return allMedicines.filter(item => {
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.indication.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [allMedicines, searchTerm, selectedCategory, selectedStatus]);

  const displayedMedicines = maxInitialItems ? filteredMedicines.slice(0, maxInitialItems) : filteredMedicines;

  const getStatusBadge = (status: StockStatus) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Available</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700 dark:bg-red-950/70 dark:text-red-300 border border-red-200 dark:border-red-800">
            <XCircle className="w-3.5 h-3.5" />
            <span>Out of Stock</span>
          </span>
        );
      default:
        return null;
    }
  };

  const handleOrder = (item: MedicineItem) => {
    if (onOrderClick) {
      onOrderClick(`${item.name} (${item.packSize})`);
    } else {
      const msg = `Hello ${SITE_CONFIG.businessName}, I would like to order: ${item.name} (${item.packSize}) - MRP ₹${item.mrp.toFixed(2)}. Is it currently available for dispatch in Bodh Gaya?`;
      window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div id="medicine-stock-checker-section" className="w-full bg-[#121214] rounded-3xl p-5 sm:p-8 border border-white/10 shadow-2xl transition-colors">
      {showTitle && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold bg-white/5 text-emerald-400 rounded-full mb-2 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Live Pharmacy Inventory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Medicine Stock & Price Checker
            </h2>
            <p className="text-sm text-[#E0E0D6]/70 mt-1 max-w-2xl">
              Search real-time availability of prescription medications, OTC drugs, and healthcare devices at our Bodh Gaya dispensary.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#E0E0D6]/70 bg-white/5 px-3 py-2 rounded-xl border border-white/10 self-start md:self-auto">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Updated Daily at 07:30 AM</span>
          </div>
        </div>
      )}

      {/* Search & Filters bar */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-[#E0E0D6]/40" />
            <input
              id="medicine-search-input"
              type="text"
              placeholder="Search medicine name, brand (Cipla, Abbott), category or symptom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#17171A] text-sm font-medium rounded-2xl border border-white/10 text-[#E0E0D6] placeholder:text-[#E0E0D6]/30 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-xs font-semibold px-2 py-1 bg-white/10 text-[#E0E0D6] rounded-md hover:bg-white/20 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Dropdown */}
          <div className="sm:w-48">
            <select
              id="stock-status-filter"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              aria-label="Filter by Stock Status"
              className="w-full px-3.5 py-3 bg-[#17171A] text-sm font-medium rounded-2xl border border-white/10 text-[#E0E0D6] focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] cursor-pointer"
            >
              <option value="All" className="bg-[#121214] text-[#E0E0D6]">All Availability</option>
              <option value="Available" className="bg-[#121214] text-[#E0E0D6]">Available (In Stock)</option>
              <option value="Limited Stock" className="bg-[#121214] text-[#E0E0D6]">Limited Stock</option>
              <option value="Out of Stock" className="bg-[#121214] text-[#E0E0D6]">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Category horizontal scrolling pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-[#E0E0D6]/50 uppercase tracking-wider flex items-center gap-1 flex-shrink-0 mr-1">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A8F6A] text-white shadow-sm border border-emerald-500/50'
                  : 'bg-white/5 text-[#E0E0D6]/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-semibold text-[#E0E0D6]/60 mb-3 px-1">
        <span>Found {filteredMedicines.length} items in inventory</span>
        {searchTerm && (
          <span>Filtering for "{searchTerm}"</span>
        )}
      </div>

      {/* Desktop Table view (hidden on small screens) */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E10]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#17171A] border-b border-white/10 text-[#E0E0D6]/70 text-xs font-bold uppercase tracking-wider">
              <th className="py-3.5 px-4">Medicine Name & Formulation</th>
              <th className="py-3.5 px-4">Brand / Manufacturer</th>
              <th className="py-3.5 px-4">Category</th>
              <th className="py-3.5 px-4">MRP (₹)</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4">Expiry</th>
              <th className="py-3.5 px-4 text-right">Quick Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {displayedMedicines.length > 0 ? (
              displayedMedicines.map((med) => (
                <tr key={med.id} className="hover:bg-white/5 transition">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-white flex items-center gap-2">
                      {med.name}
                      {med.requiresPrescription && (
                        <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-red-950/70 text-red-300 rounded border border-red-800/60" title="Prescription Required (Rx)">
                          Rx
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#E0E0D6]/60">
                      {med.packSize} • {med.dosage}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-[#E0E0D6]/80">
                    {med.brand}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 text-xs bg-white/5 rounded-lg text-[#E0E0D6]/80 font-medium border border-white/10">
                      {med.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-white">
                    ₹{med.mrp.toFixed(2)}
                  </td>
                  <td className="py-3.5 px-4">
                    {getStatusBadge(med.status)}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-[#E0E0D6]/60 font-mono">
                    {med.expiry}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      id={`order-btn-${med.id}`}
                      onClick={() => handleOrder(med)}
                      disabled={med.status === 'Out of Stock'}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer ${
                        med.status === 'Out of Stock'
                          ? 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                          : 'bg-[#0A8F6A] hover:bg-[#087858] text-white hover:shadow-emerald-500/20 border border-emerald-500/30'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{med.status === 'Out of Stock' ? 'Unavailable' : 'Order via WhatsApp'}</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-10 text-center text-[#E0E0D6]/50">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <Search className="w-8 h-8 text-white/20" />
                    <p className="font-semibold text-white">No matching medicine found</p>
                    <p className="text-xs text-[#E0E0D6]/60 max-w-sm">
                      Can't find what you need? We can arrange rare or specialized medicines within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        const msg = `Hello ${SITE_CONFIG.businessName}, I am searching for medicine: "${searchTerm}". Can you arrange it for me in Bodh Gaya?`;
                        window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                      }}
                      className="mt-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-emerald-400 font-bold text-xs rounded-xl border border-emerald-500/30 cursor-pointer"
                    >
                      Ask Pharmacist on WhatsApp
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-3.5">
        {displayedMedicines.length > 0 ? (
          displayedMedicines.map((med) => (
            <div
              key={med.id}
              className="p-4 rounded-2xl bg-[#17171A] border border-white/10 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight">
                      {med.name}
                    </h3>
                    <p className="text-xs text-[#E0E0D6]/60 mt-0.5">
                      {med.brand} • {med.dosage}
                    </p>
                  </div>
                  {getStatusBadge(med.status)}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 text-[11px] font-medium bg-[#121214] text-[#E0E0D6]/80 rounded-md border border-white/10">
                    {med.category}
                  </span>
                  {med.requiresPrescription && (
                    <span className="px-2 py-0.5 text-[11px] font-bold bg-red-950/80 text-red-300 rounded-md border border-red-800/60">
                      Rx Required
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#E0E0D6]/50">MRP ({med.packSize})</span>
                  <div className="text-lg font-extrabold text-white">
                    ₹{med.mrp.toFixed(2)}
                  </div>
                </div>

                <button
                  id={`order-mob-btn-${med.id}`}
                  onClick={() => handleOrder(med)}
                  disabled={med.status === 'Out of Stock'}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                    med.status === 'Out of Stock'
                      ? 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                      : 'bg-[#0A8F6A] text-white hover:bg-[#087858] shadow-sm border border-emerald-500/30'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{med.status === 'Out of Stock' ? 'Out of Stock' : 'Order'}</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-8 text-center bg-[#17171A] rounded-2xl border border-dashed border-white/15 p-6">
            <p className="font-semibold text-white">No medicine found for "{searchTerm}"</p>
            <p className="text-xs text-[#E0E0D6]/60 mt-1">Contact our pharmacist directly to order special medicines.</p>
            <button
              onClick={() => {
                const msg = `Hello ${SITE_CONFIG.businessName}, I am searching for medicine: "${searchTerm}". Can you arrange it in Bodh Gaya?`;
                window.open(`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
              }}
              className="mt-3 px-4 py-2.5 bg-[#0A8F6A] text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              Inquire via WhatsApp
            </button>
          </div>
        )}
      </div>

      {/* Footer notice */}
      <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E0E0D6]/60 gap-2">
        <div className="flex items-center gap-1.5">
          <Info className="w-4 h-4 text-emerald-400" />
          <span>Prices are subject to manufacturer revisions. Valid doctor prescription required for Schedule H drugs.</span>
        </div>
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="text-emerald-400 font-semibold hover:underline"
        >
          Need Emergency Assistance? Call {SITE_CONFIG.displayPhone}
        </a>
      </div>
    </div>
  );
};
