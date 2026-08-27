import React from 'react';
import { X, Code2, Globe, Sparkles, Phone, Mail, ExternalLink, CheckCircle } from 'lucide-react';

interface WMITModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WMITModal: React.FC<WMITModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="wmit-info-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle accent backdrop */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <button
          id="close-wmit-modal"
          onClick={onClose}
          aria-label="Close WMIT popup"
          className="absolute top-4 right-4 p-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A8F6A] to-blue-600 text-white flex items-center justify-center shadow-lg">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                WebMaker IT Solutions
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-100 text-[#0A8F6A] dark:bg-emerald-950/80 dark:text-emerald-300 rounded-full">
                Verified
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enterprise Digital Web & App Development Partner
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          <p>
            This high-performance, PWA-enabled multi-page web platform for <strong>Sushil Medical Hall</strong> was architected and developed with modern standards by <strong>WebMaker IT Solutions (WMIT)</strong>.
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <CheckCircle className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>Full PWA Offline Capable</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <CheckCircle className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>Instant Stock Search</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <CheckCircle className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>WhatsApp Integration</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <CheckCircle className="w-3.5 h-3.5 text-[#0A8F6A]" />
              <span>SEO & Schema Ready</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-5 flex flex-col sm:flex-row gap-3">
          <a
            id="wmit-website-btn"
            href="https://webmakerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-[#0A8F6A] hover:bg-[#087858] text-white text-xs font-semibold rounded-xl text-center transition flex items-center justify-center gap-2 shadow-sm"
          >
            <Globe className="w-4 h-4" /> Visit WebMaker IT <ExternalLink className="w-3 h-3" />
          </a>
          <button
            id="close-wmit-btn"
            onClick={onClose}
            className="py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
