"use client";

import { useI18n } from "@/i18n/i18n-context";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const { locale, t, setLocale } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleLocale = () => {
    setLocale(locale === "en" ? "zh" : "en");
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/90 border border-primary-200 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer group">
              <span className="text-2xl font-heading font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                OkoPay
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="text-slate-700 hover:text-primary-600 transition-colors duration-200 font-medium cursor-pointer"
              >
                {t("nav.home")}
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center cursor-pointer" aria-haspopup="true" aria-expanded="false">
                  {t("nav.products")}
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-xl shadow-xl border border-primary-100 py-2" role="menu">
                  <Link
                    href="/products/local-payment"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    {t("nav.subProducts.localPayment")}
                  </Link>
                  <Link
                    href="/products/disbursement"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {t("nav.subProducts.disbursement")}
                  </Link>
                  <Link
                    href="/products/merchant-platform"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                    </svg>
                    {t("nav.subProducts.merchantPlatform")}
                  </Link>
                  <Link
                    href="/products/payment-method"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("nav.subProducts.paymentMethod")}
                  </Link>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center cursor-pointer" aria-haspopup="true" aria-expanded="false">
                  {t("nav.solutions")}
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-xl shadow-xl border border-primary-100 py-2" role="menu">
                  <Link
                    href="/solutions/local-life"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {t("nav.subSolutions.localLife")}
                  </Link>
                  <Link
                    href="/solutions/logistics"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    {t("nav.subSolutions.logistics")}
                  </Link>
                  <Link
                    href="/solutions/gaming"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("nav.subSolutions.gaming")}
                  </Link>
                  <Link
                    href="/solutions/fintech"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    {t("nav.subSolutions.fintech")}
                  </Link>
                  <Link
                    href="/solutions/retail"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {t("nav.subSolutions.retail")}
                  </Link>
                  <Link
                    href="/solutions/cross-border"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("nav.subSolutions.crossBorder")}
                  </Link>
                </div>
              </div>

              <Link
                href="/pricing"
                className="text-slate-700 hover:text-primary-600 transition-colors duration-200 font-medium cursor-pointer"
              >
                {t("nav.pricing")}
              </Link>

              {/* <Link
                href="/support"
                className="text-slate-700 hover:text-primary-600 transition-colors duration-200 font-medium cursor-pointer"
              >
                {t("nav.support")}
              </Link> */}

              {/* About Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 hover:text-primary-600 transition-colors duration-200 font-medium flex items-center cursor-pointer" aria-haspopup="true" aria-expanded="false">
                  {t("nav.about")}
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-xl shadow-xl border border-primary-100 py-2" role="menu">
                  <Link
                    href="/about/company"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {t("nav.subAbout.company")}
                  </Link>
                  <Link
                    href="/about/consult"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {t("nav.subAbout.consult")}
                  </Link>
                  <a
                    href="https://t.me/dd666dd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 cursor-pointer"
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.037.308.021.475z" />
                    </svg>
                    {t("nav.subAbout.contact")}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA & Language Switcher */}
            <div className="flex items-center space-x-3">
              {/* <Link
                href="/login"
                className="hidden lg:inline-flex px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
              >
                {t("nav.login")}
              </Link> */}
              <button
                onClick={toggleLocale}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 cursor-pointer"
                aria-label="Switch language"
              >
                {locale === "en" ? "中文" : "EN"}
              </button>
              <Link
                href="/about/consult"
                className="hidden lg:inline-flex px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                {t("nav.getStarted")}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-blue-200 px-4 py-4 space-y-3 animate-slide-down">
              <Link
                href="/"
                className="block py-2 text-slate-700 hover:text-blue-500 transition-colors duration-200 font-medium"
              >
                {t("nav.home")}
              </Link>

              {/* Products Mobile */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-blue-500 transition-colors duration-200 font-medium"
                >
                  {t("nav.products")}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="/products/local-payment"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      {t("nav.subProducts.localPayment")}
                    </Link>
                    <Link
                      href="/products/disbursement"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {t("nav.subProducts.disbursement")}
                    </Link>
                    <Link
                      href="/products/merchant-platform"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                      {t("nav.subProducts.merchantPlatform")}
                    </Link>
                    <Link
                      href="/products/payment-method"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t("nav.subProducts.paymentMethod")}
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Mobile */}
              <div>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-blue-500 transition-colors duration-200 font-medium"
                >
                  {t("nav.solutions")}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="/solutions/local-life"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {t("nav.subSolutions.localLife")}
                    </Link>
                    <Link
                      href="/solutions/logistics"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                      {t("nav.subSolutions.logistics")}
                    </Link>
                    <Link
                      href="/solutions/gaming"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t("nav.subSolutions.gaming")}
                    </Link>
                    <Link
                      href="/solutions/fintech"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      {t("nav.subSolutions.fintech")}
                    </Link>
                    <Link
                      href="/solutions/retail"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {t("nav.subSolutions.retail")}
                    </Link>
                    <Link
                      href="/solutions/cross-border"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t("nav.subSolutions.crossBorder")}
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/pricing"
                className="block py-2 text-slate-700 hover:text-blue-500 transition-colors duration-200 font-medium"
              >
                {t("nav.pricing")}
              </Link>
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center justify-between w-full py-2 text-slate-700 hover:text-blue-500 transition-colors duration-200 font-medium"
                >
                  {t("nav.about")}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {aboutOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="/about/company"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {t("nav.subAbout.company")}
                    </Link>
                    <Link
                      href="/about/consult"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {t("nav.subAbout.consult")}
                    </Link>
                    <a
                      href="https://t.me/dd666dd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center py-1.5 text-sm text-slate-600 hover:text-blue-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.037.308.021.475z" />
                      </svg>
                      {t("nav.subAbout.contact")}
                    </a>
                  </div>
                )}
              </div>
              <Link
                href="/about/consult"
                className="block w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-center cursor-pointer"
              >
                {t("nav.getStarted")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
