import React from 'react';
import { Share, PlusSquare, X, Smartphone, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="ios-pwa-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-ios-guide"
          onClick={onClose}
          aria-label="Close guide"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-[#0A8F6A] flex items-center justify-center shadow-inner">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">{SITE_CONFIG.shortName} App</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Install directly to your iPhone or iPad</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              1
            </div>
            <div>
              <p className="text-sm font-medium">Tap the Safari <span className="font-semibold text-blue-600 dark:text-blue-400">Share</span> button</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                Located at the bottom of your Safari browser bar <Share className="w-3.5 h-3.5 inline" />
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-[#0A8F6A] flex items-center justify-center flex-shrink-0 font-bold text-sm">
              2
            </div>
            <div>
              <p className="text-sm font-medium">Scroll down and select <span className="font-semibold text-[#0A8F6A]">"Add to Home Screen"</span></p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                Look for the plus icon <PlusSquare className="w-3.5 h-3.5 inline" />
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              3
            </div>
            <div>
              <p className="text-sm font-medium">Tap <span className="font-semibold">"Add"</span> in the top right corner</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                The app icon will now appear on your home screen for quick offline-ready access!
              </p>
            </div>
          </div>
        </div>

        <button
          id="got-it-btn"
          onClick={onClose}
          className="w-full py-3 px-4 bg-[#0A8F6A] hover:bg-[#087858] text-white font-semibold rounded-xl transition shadow-md flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-4 h-4" /> Got it, thanks!
        </button>
      </div>
    </div>
  );
};
