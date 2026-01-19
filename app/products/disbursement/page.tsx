'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';

// Collapsible Item Component
function CollapsibleItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900">{title}</span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 bg-slate-50">
          <p className="text-slate-600">{content}</p>
        </div>
      )}
    </div>
  );
}

export default function DisbursementPage() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState('philippines');

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
                {t('products.disbursement.title')}
              </h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">
                {t('products.disbursement.subtitle')}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('products.disbursement.description')}
              </p>
              <Link
                href="/about/consult"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image 
                  src="/products/disbursment_1.webp"
                  alt="Local Disbursement"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast and Secure Payment Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Title and Collapsible Sections */}
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                {t('products.disbursement.fastPaymentTitle')}
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                {t('products.disbursement.fastSecureDesc')}
              </p>

              {/* Collapsible Sections */}
              <div className="space-y-2">
                {[
                  { title: t('products.disbursement.features.channel.title'), content: t('products.disbursement.features.channel.description') },
                  { title: t('products.disbursement.features.method.title'), content: t('products.disbursement.features.method.description') },
                  { title: t('products.disbursement.features.smallAmount.title'), content: t('products.disbursement.features.smallAmount.description') },
                  { title: t('products.disbursement.features.largeAmount.title'), content: t('products.disbursement.features.largeAmount.description') },
                  { title: t('products.disbursement.features.currency.title'), content: t('products.disbursement.features.currency.description') },
                  { title: t('products.disbursement.features.arrival.title'), content: t('products.disbursement.features.arrival.description') }
                ].map((item, index) => (
                  <CollapsibleItem key={index} title={item.title} content={item.content} />
                ))}
              </div>
            </div>

            {/* Right: Country Tabs and Payment Methods */}
            <div>
              {/* Country Tabs */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'philippines', name: t('products.disbursement.countryTabs.philippines') },
                    { id: 'indonesia', name: t('products.disbursement.countryTabs.indonesia') },
                    { id: 'malaysia', name: t('products.disbursement.countryTabs.malaysia') },
                    { id: 'thailand', name: t('products.disbursement.countryTabs.thailand') }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-primary-100">
                {/* Bank Payment Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{t('products.disbursement.bankPayment')}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {t('products.disbursement.bankPaymentDesc').replace('{country}', activeTab === 'philippines' ? t('products.disbursement.countryTabs.philippines') : activeTab === 'indonesia' ? t('products.disbursement.countryTabs.indonesia') : activeTab === 'malaysia' ? t('products.disbursement.countryTabs.malaysia') : t('products.disbursement.countryTabs.thailand'))}
                  </p>
                  
                  {/* Bank Icons */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-4">
                    {activeTab === 'philippines' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bdo.png" alt="BDO" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_metrobank.png" alt="MetroBank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_ub.png" alt="UnionBank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_security_bank.png" alt="Security Bank" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'indonesia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bca.png" alt="BCA" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_mandiri.png" alt="Mandiri" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bni.png" alt="BNI" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bank_bri.png" alt="BRI" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'malaysia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_maybank.png" alt="Maybank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_CIMB.png" alt="CIMB" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_PUBLICK_BANK.png" alt="Public Bank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_RHB.png" alt="RHB" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'thailand' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_scb.png" alt="SCB" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_Krungthai.png" alt="Krungthai" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_ttb.png" alt="TTB" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-primary-600 font-medium">{t('products.disbursement.moreSupport')}</p>
                </div>

                {/* E-Wallet Section */}
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{t('products.disbursement.eWallet')}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {t('products.disbursement.eWalletDesc').replace('{country}', activeTab === 'philippines' ? t('products.disbursement.countryTabs.philippines') : activeTab === 'indonesia' ? t('products.disbursement.countryTabs.indonesia') : activeTab === 'malaysia' ? t('products.disbursement.countryTabs.malaysia') : t('products.disbursement.countryTabs.thailand'))}
                  </p>
                  
                  {/* E-Wallet Icons */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-4">
                    {activeTab === 'philippines' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_gcash.png" alt="GCash" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_maya.png" alt="Maya" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_spay.png" alt="ShopeePay" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_grabpay.png" alt="GrabPay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'indonesia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_ovo.png" alt="OVO" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_linkAja.png" alt="LinkAja" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_astraPay.png" alt="AstraPay" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_spay.png" alt="ShopeePay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'malaysia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_Touch_NGO.png" alt="Touch 'n Go" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_grabpay.png" alt="GrabPay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'thailand' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_grabpay.png" alt="GrabPay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-primary-600 font-medium">{t('products.disbursement.moreSupport')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              {t('products.disbursement.scenariosTitle')}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('products.disbursement.scenariosDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Scenarios Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('products.disbursement.scenarios.salary.title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('products.disbursement.scenarios.salary.description')}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('products.disbursement.scenarios.supplier.title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('products.disbursement.scenarios.supplier.description')}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('products.disbursement.scenarios.refund.title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('products.disbursement.scenarios.refund.description')}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('products.disbursement.scenarios.withdrawal.title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('products.disbursement.scenarios.withdrawal.description')}</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative w-full h-[550px] rounded-2xl overflow-hidden top-18">
                <Image 
                  src="/products/disbursments_3.webp"
                  alt="Application Scenarios"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

