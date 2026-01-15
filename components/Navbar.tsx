'use client';

import { useI18n } from '@/i18n/i18n-context';
import { useState } from 'react';

export default function Navbar() {
  const { locale, t, setLocale } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/80 border border-slate-200 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-heading font-bold text-primary-600">
                OkoPay
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t.nav.features}
              </a>
              <a href="#how-it-works" className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t.nav.about}
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t.nav.contact}
              </a>
            </div>

            {/* CTA & Language Switcher */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLocale}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 transition-colors duration-200 cursor-pointer"
                aria-label="Switch language"
              >
                {locale === 'en' ? '中文' : 'EN'}
              </button>
              <a
                href="#get-started"
                className="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                {t.nav.getStarted}
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 px-4 py-4 space-y-3 animate-slide-down">
              <a href="#features" className="block py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium cursor-pointer">
                {t.nav.features}
              </a>
              <a href="#how-it-works" className="block py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium cursor-pointer">
                {t.nav.about}
              </a>
              <a href="#testimonials" className="block py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium cursor-pointer">
                {t.nav.contact}
              </a>
              <a
                href="#get-started"
                className="block w-full px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 text-center cursor-pointer"
              >
                {t.nav.getStarted}
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
