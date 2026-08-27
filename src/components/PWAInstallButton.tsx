import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  isMobileMenu?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ className = '', isMobileMenu = false }) => {
  const {
    isInstallable,
    isInstalled,
    showIOSModal,
    setShowIOSModal,
    installedSuccess,
    triggerInstall,
  } = usePWAInstall();

  if (isInstalled && !installedSuccess) {
    return null;
  }

  if (installedSuccess) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-200 dark:border-emerald-800 ${className}`}>
        <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
        <span>App Installed!</span>
      </div>
    );
  }

  return (
    <>
      <button
        id="btn-add-to-home"
        onClick={triggerInstall}
        aria-label="Add Sushil Medical Hall to Home Screen"
        title="Install Web App to Home Screen"
        className={`inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 min-h-[44px] min-w-[44px] cursor-pointer shadow-sm active:scale-95 ${
          isMobileMenu
            ? 'w-full bg-emerald-50 dark:bg-emerald-950/70 text-[#0A8F6A] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100'
            : 'bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/60 text-[#0A8F6A] dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700/60'
        } ${className}`}
      >
        <span className="text-base" role="img" aria-label="smartphone">📲</span>
        <span>Add to Home</span>
      </button>

      <IOSInstallGuide
        isOpen={showIOSModal}
        onClose={() => setShowIOSModal(false)}
      />
    </>
  );
};
