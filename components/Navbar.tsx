'use client';

import { useI18n } from '@/i18n/i18n-context';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const { locale, t, setLocale } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/80 border border-slate-200 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-primary-600">
                OkoPay
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t('nav.home')}
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium flex items-center">
                  {t('nav.products')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                  <Link href="/products/local-payment" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subProducts.localPayment')}
                  </Link>
                  <Link href="/products/disbursement" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subProducts.disbursement')}
                  </Link>
                  <Link href="/products/merchant-platform" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subProducts.merchantPlatform')}
                  </Link>
                  <Link href="/products/payment-method" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subProducts.paymentMethod')}
                  </Link>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium flex items-center">
                  {t('nav.solutions')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                  <Link href="/solutions/local-life" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subSolutions.localLife')}
                  </Link>
                  <Link href="/solutions/logistics" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subSolutions.logistics')}
                  </Link>
                  <Link href="/solutions/gaming" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subSolutions.gaming')}
                  </Link>
                  <Link href="/solutions/fintech" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subSolutions.fintech')}
                  </Link>
                  <Link href="/solutions/retail" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subSolutions.retail')}
                  </Link>
                  <Link href="/solutions/cross-border" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subSolutions.crossBorder')}
                  </Link>
                </div>
              </div>

              <Link href="/pricing" className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t('nav.pricing')}
              </Link>

              <Link href="/support" className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t('nav.support')}
              </Link>

              {/* About Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium flex items-center">
                  {t('nav.about')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                  <Link href="/about/company" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subAbout.company')}
                  </Link>
                  <Link href="/about/consult" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-500">
                    {t('nav.subAbout.consult')}
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA & Language Switcher */}
            <div className="flex items-center space-x-3">
              <Link
                href="/login"
                className="hidden lg:inline-flex px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 transition-colors duration-200"
              >
                {t('nav.login')}
              </Link>
              <button
                onClick={toggleLocale}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-500 transition-colors duration-200 cursor-pointer"
                aria-label="Switch language"
              >
                {locale === 'en' ? '中文' : 'EN'}
              </button>
              <a
                href="#get-started"
                className="hidden lg:inline-flex px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                {t('nav.getStarted')}
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
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
            <div className="lg:hidden border-t border-slate-200 px-4 py-4 space-y-3 animate-slide-down">
              <Link href="/" className="block py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t('nav.home')}
              </Link>
              
              {/* Products Mobile */}
              <div>
                <button 
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  {t('nav.products')}
                  <svg className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/products/local-payment" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subProducts.localPayment')}
                    </Link>
                    <Link href="/products/disbursement" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subProducts.disbursement')}
                    </Link>
                    <Link href="/products/merchant-platform" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subProducts.merchantPlatform')}
                    </Link>
                    <Link href="/products/payment-method" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subProducts.paymentMethod')}
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Mobile */}
              <div>
                <button 
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  {t('nav.solutions')}
                  <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/solutions/local-life" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subSolutions.localLife')}
                    </Link>
                    <Link href="/solutions/logistics" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subSolutions.logistics')}
                    </Link>
                    <Link href="/solutions/gaming" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subSolutions.gaming')}
                    </Link>
                    <Link href="/solutions/fintech" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subSolutions.fintech')}
                    </Link>
                    <Link href="/solutions/retail" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subSolutions.retail')}
                    </Link>
                    <Link href="/solutions/cross-border" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subSolutions.crossBorder')}
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/pricing" className="block py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t('nav.pricing')}
              </Link>

              <Link href="/support" className="block py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t('nav.support')}
              </Link>

              {/* About Mobile */}
              <div>
                <button 
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium"
                >
                  {t('nav.about')}
                  <svg className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/about/company" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subAbout.company')}
                    </Link>
                    <Link href="/about/consult" className="block py-1.5 text-sm text-slate-600 hover:text-primary-500">
                      {t('nav.subAbout.consult')}
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/login" className="block py-2 text-slate-700 hover:text-primary-500 transition-colors duration-200 font-medium">
                {t('nav.login')}
              </Link>

              <a
                href="#get-started"
                className="block w-full px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 text-center cursor-pointer"
              >
                {t('nav.getStarted')}
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
