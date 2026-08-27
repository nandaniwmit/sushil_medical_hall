import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, Send, CheckCircle2, Navigation, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medicine Stock & Availability Inquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }

    // Prepare WhatsApp fallback option
    const msg = `Hello ${SITE_CONFIG.businessName}, 
*CONTACT FORM INQUIRY*
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}\n` : ''}📌 Subject: ${formData.subject}
📝 Message: ${formData.message || 'I would like to inquire about medicine availability.'}`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encoded}`;

    setFormSubmitted(true);
    
    // Also trigger WhatsApp after short delay or direct user
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      <SEOHead
        title="Contact Us & Store Location"
        description="Visit Sushil Medical Hall at Tikha Bigha Mord, Bodh Gaya, Bihar 824231. Call 9835829175 or order medicines on WhatsApp."
        canonicalPath="/contact"
        pageBreadcrumbName="Contact"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <MapPin className="w-3.5 h-3.5" />
            <span>Tikha Bigha Mord, Bodh Gaya</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact & Visit Our Pharmacy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Have questions regarding prescription medications, home delivery, or urgent medicine requirements? Reach out to our pharmacist team in Bodh Gaya.
          </p>
        </div>
      </section>

      {/* 1. Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Store Address */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Store Location</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {SITE_CONFIG.fullAddress}
            </p>
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8F6A] hover:underline pt-1"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2: Phone Helpline */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Phone Support</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Direct counter helpline for quick stock verification & pharmacist guidance.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline pt-1"
            >
              <span>{SITE_CONFIG.displayPhone}</span>
            </a>
          </div>

          {/* Card 3: WhatsApp Ordering */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">WhatsApp Orders</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Send prescription photos or medicine list for instant fulfillment.
            </p>
            <button
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#0A8F6A] hover:underline pt-1 cursor-pointer"
            >
              <span>Send WhatsApp Message</span>
            </button>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Opening Hours</h3>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p>Mon - Sat: {SITE_CONFIG.workingHours.weekdays}</p>
              <p>Sunday: {SITE_CONFIG.workingHours.sunday}</p>
            </div>
            <span className="inline-block text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
              Emergency Helpline 24/7
            </span>
          </div>

        </div>
      </section>

      {/* 2. Interactive Contact Form & Embedded Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form: Inquiries */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below and our staff will respond promptly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-12 h-12 text-[#0A8F6A] mx-auto" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Submitted!</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Your message has been received and WhatsApp has been initiated. Our pharmacist will confirm medicine availability shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 px-4 py-2 bg-[#0A8F6A] text-white font-bold text-xs rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9835829175"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject / Topic
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-900 dark:text-white cursor-pointer"
                    >
                      <option value="Medicine Stock & Availability Inquiry">Medicine Stock & Availability</option>
                      <option value="Prescription Delivery in Bodh Gaya">Prescription Delivery</option>
                      <option value="Medical Device (BP/Sugar Monitor) Demo">Medical Device / Equipment Demo</option>
                      <option value="Rare / Oncology Medicine Order">Special Medicine Procurement</option>
                      <option value="General Feedback or Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Medicine List or Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Write the medicine names, required quantities, or your inquiry details here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A] text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="flex-1 py-3.5 px-6 bg-[#0A8F6A] hover:bg-[#087858] text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Open WhatsApp</span>
                  </button>

                  <a
                    id="contact-call-direct"
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="py-3.5 px-5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-4 h-4 text-[#0A8F6A]" />
                    <span>Direct Call</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Map & Navigation Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#0A8F6A]" />
                  <span>Interactive Map & Route</span>
                </h3>
                <span className="text-[11px] font-semibold text-slate-400">Bodh Gaya, Bihar</span>
              </div>

              {/* Map Container */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-4/3 relative">
                <iframe
                  title="Sushil Medical Hall Location Map"
                  src={SITE_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  <strong>Landmark:</strong> Situated right at Tikha Bigha Mord turning on the Gaya - Bodh Gaya Main Road, easily accessible for automobiles and pedestrians with front parking.
                </div>

                <a
                  id="contact-map-directions-btn"
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-50 dark:bg-emerald-950/70 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold rounded-xl border border-emerald-300 dark:border-emerald-700 transition flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navigate with Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-100">
                <AlertCircle className="w-4 h-4" />
                <span>Urgent Medicine Dispatch</span>
              </div>
              <h4 className="text-lg font-extrabold">Emergency Prescription Helpline</h4>
              <p className="text-xs text-red-100 leading-relaxed">
                If you require urgent life-saving medications or diabetic supplies outside normal business hours, our helpline is reachable.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-700 font-extrabold text-xs rounded-xl shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Emergency: {SITE_CONFIG.displayPhone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
