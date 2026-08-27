import React, { useState } from 'react';
import { X, MessageSquare, Send, Phone, Upload, CheckCircle, FileText, Clock, MapPin, User, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineName: initialMedicineName,
    quantity: '1 Strip / Box',
    prescriptionAvailable: 'Yes',
    preferredDeliveryTime: 'Immediate (Within 1-2 Hours)',
    message: ''
  });

  const [prescriptionFileName, setPrescriptionFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update initial medicine name when modal opens
  React.useEffect(() => {
    if (initialMedicineName) {
      setFormData(prev => ({ ...prev, medicineName: initialMedicineName }));
    }
  }, [initialMedicineName]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionFileName(file.name);
      setFormData(prev => ({ ...prev, prescriptionAvailable: 'Yes' }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.phone.trim() || !formData.medicineName.trim()) {
      alert('Please fill in your Name, Phone Number, and Medicine details.');
      return;
    }

    setIsSubmitting(true);

    const formattedMessage = `Hello *${SITE_CONFIG.businessName}*,
*MEDICINE ORDER REQUEST*

👤 *Customer Name:* ${formData.customerName}
📞 *Phone:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}📍 *Delivery Address:* ${formData.address || 'Pickup from store / Bodh Gaya'}
💊 *Medicine Required:* ${formData.medicineName}
📦 *Quantity:* ${formData.quantity}
📋 *Prescription Attached/Available:* ${formData.prescriptionAvailable}${prescriptionFileName ? ` (File: ${prescriptionFileName})` : ''}
⏰ *Preferred Delivery Time:* ${formData.preferredDeliveryTime}
${formData.message ? `📝 *Notes/Instructions:* ${formData.message}` : ''}

_Sent via Sushil Medical Hall Official Web App_`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encoded}`;

    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      id="whatsapp-order-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#121214] rounded-3xl shadow-2xl p-5 sm:p-7 border border-white/10 text-[#E0E0D6] my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-[#0A8F6A] text-white flex items-center justify-center shadow-md border border-white/15">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white leading-tight">
                Quick WhatsApp Medicine Order
              </h3>
              <p className="text-xs text-[#E0E0D6]/60">
                Direct dispatch from Bodh Gaya Store • 9835829175
              </p>
            </div>
          </div>
          <button
            id="close-order-modal"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#E0E0D6]/60 hover:text-white rounded-full hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prescription notice */}
        <div className="flex items-center gap-2 p-3 bg-white/5 text-emerald-300 rounded-xl text-xs mb-4 border border-white/10">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-emerald-400" />
          <span>You can send a photo of your prescription directly on WhatsApp after clicking send.</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
                Your Full Name <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-[#E0E0D6]/40" />
                <input
                  id="order-name"
                  type="text"
                  name="customerName"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] placeholder:text-[#E0E0D6]/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
                WhatsApp Phone Number <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-[#E0E0D6]/40" />
                <input
                  id="order-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 9835829175"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] placeholder:text-[#E0E0D6]/30"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
                Medicine Name & Strength <span className="text-emerald-400">*</span>
              </label>
              <input
                id="order-medicine"
                type="text"
                name="medicineName"
                required
                placeholder="e.g. Dolo 650, Augmentin 625, Telma 40"
                value={formData.medicineName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] placeholder:text-[#E0E0D6]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
                Quantity Required
              </label>
              <input
                id="order-quantity"
                type="text"
                name="quantity"
                placeholder="e.g. 2 Strips / 1 Bottle"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] placeholder:text-[#E0E0D6]/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
              Delivery Address in Bodh Gaya
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 absolute left-3 top-3 text-[#E0E0D6]/40" />
              <input
                id="order-address"
                type="text"
                name="address"
                placeholder="House No., Street / Landmark in Bodh Gaya or Tikha Bigha"
                value={formData.address}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2.5 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] placeholder:text-[#E0E0D6]/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
                Do you have a Doctor's Prescription?
              </label>
              <select
                id="order-prescription"
                name="prescriptionAvailable"
                value={formData.prescriptionAvailable}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] cursor-pointer"
              >
                <option value="Yes" className="bg-[#121214] text-[#E0E0D6]">Yes (I have a valid prescription)</option>
                <option value="No" className="bg-[#121214] text-[#E0E0D6]">No (OTC / Daily Health Product)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
                Preferred Delivery Time
              </label>
              <select
                id="order-time"
                name="preferredDeliveryTime"
                value={formData.preferredDeliveryTime}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] cursor-pointer"
              >
                <option value="Immediate (Within 1-2 Hours)" className="bg-[#121214] text-[#E0E0D6]">Immediate (Within 1-2 Hours)</option>
                <option value="Today Evening (5 PM - 8 PM)" className="bg-[#121214] text-[#E0E0D6]">Today Evening (5 PM - 8 PM)</option>
                <option value="Tomorrow Morning" className="bg-[#121214] text-[#E0E0D6]">Tomorrow Morning</option>
                <option value="Store Pickup (Keep Ready)" className="bg-[#121214] text-[#E0E0D6]">Store Pickup (Keep Ready)</option>
              </select>
            </div>
          </div>

          {/* Upload prescription simulation */}
          <div>
            <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
              Upload Prescription Photo (Optional)
            </label>
            <label className="flex items-center justify-center px-4 py-3 border border-dashed border-white/15 rounded-xl cursor-pointer hover:border-[#0A8F6A] hover:bg-white/5 transition group">
              <div className="flex items-center space-x-2 text-xs text-[#E0E0D6]/60 group-hover:text-emerald-400">
                <Upload className="w-4 h-4" />
                <span>{prescriptionFileName ? `Attached: ${prescriptionFileName}` : 'Select Prescription Image from Device / Camera'}</span>
              </div>
              <input
                id="prescription-file-input"
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#E0E0D6]/80 mb-1">
              Additional Notes (Optional)
            </label>
            <textarea
              id="order-notes"
              name="message"
              rows={2}
              placeholder="Any specific brand preference or medical instructions..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#17171A] text-sm rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-[#E0E0D6] placeholder:text-[#E0E0D6]/30 resize-none"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              id="submit-whatsapp-order"
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3.5 px-5 bg-[#0A8F6A] hover:bg-[#087858] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/20 border border-emerald-500/30 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}</span>
            </button>

            <a
              id="call-now-order-btn"
              href={`tel:${SITE_CONFIG.phone}`}
              className="py-3.5 px-5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-xl border border-white/10 transition flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
