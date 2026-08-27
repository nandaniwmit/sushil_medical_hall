import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, ShieldCheck, CheckCircle2, AlertCircle, ArrowLeft, Plus, KeyRound } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';

export const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!identifier.trim() || !password.trim()) {
      setErrorMsg('Please enter both your registered Email/Mobile and Password.');
      return;
    }

    setIsLoading(true);

    // Simulate authentication check
    setTimeout(() => {
      setIsLoading(false);
      if (password.length < 4) {
        setErrorMsg('Invalid password. Password must be at least 4 characters.');
      } else {
        setLoginSuccess(true);
      }
    }, 1000);
  };

  const handleDemoFill = (role: 'Staff Pharmacist' | 'Customer Account') => {
    if (role === 'Staff Pharmacist') {
      setIdentifier('staff@sushilmedicalhall.com');
      setPassword('pharma2026');
    } else {
      setIdentifier('customer@gmail.com');
      setPassword('health123');
    }
    setErrorMsg('');
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (resetEmail.trim()) {
      setResetSent(true);
      setTimeout(() => {
        setResetSent(false);
        setShowForgotPasswordModal(false);
        setResetEmail('');
      }, 3000);
    }
  };

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-[75vh] flex items-center justify-center">
      <SEOHead
        title="Portal Login"
        description="Secure login portal for Sushil Medical Hall staff, pharmacists, and customer prescription tracking in Bodh Gaya, Bihar."
        canonicalPath="/login"
        pageBreadcrumbName="Login"
      />

      <div className="w-full max-w-md">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0A8F6A] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl space-y-6">
          
          {/* Logo & Branding */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0A8F6A] to-blue-600 flex items-center justify-center text-white shadow-lg">
              <Plus className="w-8 h-8 stroke-[3]" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Portal Access
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {SITE_CONFIG.businessName} • Bodh Gaya
            </p>
          </div>

          {/* Success State */}
          {loginSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#0A8F6A] mx-auto" />
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Authentication Successful!
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Welcome back to Sushil Medical Hall management console.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  to="/"
                  className="w-full py-2.5 bg-[#0A8F6A] text-white text-xs font-bold rounded-xl text-center shadow"
                >
                  Return to Home
                </Link>
                <button
                  onClick={() => setLoginSuccess(false)}
                  className="text-xs text-slate-500 hover:underline"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 rounded-xl text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Identifier Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address or Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    id="login-identifier"
                    type="text"
                    required
                    placeholder="Enter email or mobile"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 bg-slate-50 dark:bg-slate-800 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPasswordModal(true)}
                    className="text-xs font-semibold text-[#0A8F6A] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#0A8F6A] rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <span>Remember this device</span>
                </label>

                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>256-Bit SSL Encrypted</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                id="login-submit-btn"
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-[#0A8F6A] hover:bg-[#087858] text-white font-bold text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Secure Portal Login</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Quick Demo Fill Buttons for Testing */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block text-center">
              Quick Test Credentials:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleDemoFill('Staff Pharmacist')}
                className="py-1.5 px-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-[11px] font-semibold transition text-center"
              >
                Staff Pharmacist
              </button>
              <button
                type="button"
                onClick={() => handleDemoFill('Customer Account')}
                className="py-1.5 px-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-[11px] font-semibold transition text-center"
              >
                Customer Portal
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div
          id="forgot-password-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowForgotPasswordModal(false)}
        >
          <div
            className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-1">Reset Password</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Enter your registered email address or phone to receive an OTP reset link.
            </p>

            {resetSent ? (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-xl text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" />
                <span>Password reset link sent to your registered contact!</span>
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Enter email or mobile"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 text-sm rounded-xl border border-slate-200 dark:border-slate-700"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#0A8F6A] text-white text-xs font-bold rounded-xl"
                  >
                    Send OTP Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotPasswordModal(false)}
                    className="px-3 py-2.5 bg-slate-100 dark:bg-slate-800 text-xs font-semibold rounded-xl"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
