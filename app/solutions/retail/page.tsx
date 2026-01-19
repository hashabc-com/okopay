'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';

export default function RetailPage() {
  const { t } = useI18n();
  
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
                {t('solutions.retail.title')}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-700 font-semibold mb-4">
                {t('solutions.retail.subtitle')}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('solutions.retail.description')}
              </p>
              <Link
                href="/about/consult"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/solutions/business_1.webp"
                  alt="Retail Payment Solutions"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              {t('solutions.retail.empowerTitle')}
            </h2>
            <p className="text-2xl text-slate-700 font-semibold mb-8">
              {t('solutions.retail.empowerSubtitle')}
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {t('solutions.retail.empowerDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - One-stop Payment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('solutions.retail.features.oneStop.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('solutions.retail.features.oneStop.description')}
              </p>
            </div>

            {/* Card 2 - Payment Security */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('solutions.retail.features.security.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('solutions.retail.features.security.description')}
              </p>
            </div>

            {/* Card 3 - User Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('solutions.retail.features.experience.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('solutions.retail.features.experience.description')}
              </p>
            </div>

            {/* Card 4 - Multiple Terminals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('solutions.retail.features.terminals.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('solutions.retail.features.terminals.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              {t('solutions.retail.caseStudyTitle')}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              {t('solutions.retail.caseStudySubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Case List */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  {t('solutions.retail.cases.franchise.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.retail.cases.franchise.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  {t('solutions.retail.cases.convenience.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.retail.cases.convenience.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  {t('solutions.retail.cases.store.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.retail.cases.store.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  {t('solutions.retail.cases.market.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.retail.cases.market.description')}
                </p>
              </div>

              <Link
                href="/about/consult"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {t('nav.getStarted')}
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/solutions/business_3.webp"
                  alt="Retail Success Stories"
                  width={600}
                  height={700}
                  className="w-full h-auto"
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

