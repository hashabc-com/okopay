"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useI18n } from "@/i18n/i18n-context";
import Link from "next/link";

export default function MerchantPlatformPage() {
  const { t } = useI18n();
  
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
                {t('products.merchantPlatform.title')}
              </h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">
                {t('products.merchantPlatform.subtitle')}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('products.merchantPlatform.description')}
              </p>
              <Link
                href="/about/consult"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/products/merchant_dashboard_1.webp"
                  alt="Merchant Dashboard Hero"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-full blur-xl opacity-50 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full blur-xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section: Smart Operation Management */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
                <span className="text-primary-600">{t('products.merchantPlatform.smartManagement')}</span>
                <br />
                {t('products.merchantPlatform.smartManagementDesc')}<span className="text-primary-600"></span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('products.merchantPlatform.smartManagementDetail')}
              </p>
            </div>

            {/* Right: Feature Grid (2x2) */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1: 资金管理 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 h-full flex flex-col">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {t('products.merchantPlatform.gridFeatures.fundManagementTitle')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('products.merchantPlatform.gridFeatures.fundManagementDesc')}
                </p>
              </div>

              {/* Card 2: 自动结算 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 h-full flex flex-col">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {t('products.merchantPlatform.gridFeatures.autoSettlementTitle')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('products.merchantPlatform.gridFeatures.autoSettlementDesc')}
                </p>
              </div>

              {/* Card 3: 多账号管理 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 h-full flex flex-col">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {t('products.merchantPlatform.gridFeatures.multiAccountTitle')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('products.merchantPlatform.gridFeatures.multiAccountDesc')}
                </p>
              </div>

              {/* Card 4: 24/7服务 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 h-full flex flex-col">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {t('products.merchantPlatform.gridFeatures.support247Title')}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t('products.merchantPlatform.gridFeatures.support247Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-slate-900">
                {t('products.merchantPlatform.onboardingTitle')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('products.merchantPlatform.onboardingDesc')}
              </p>
            </div>
            <div className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
              <Image
                src="/products/merchant_dashboard_3.webp"
                alt="Merchant onboarding flow"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

