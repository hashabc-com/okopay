'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n/i18n-context';

export default function CompanyPage() {
  const { t } = useI18n();
  
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-heading font-bold text-slate-900 mb-6">
            {t('company.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('company.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                {t('company.intro.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                {t('company.intro.description1')}
              </p>
              <p className="text-lg text-slate-600 mb-4">
                {t('company.intro.description2')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">{t('company.advantages.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-900">{t('company.advantages.fullLicense.title')}</h4>
                      <p className="text-slate-600">{t('company.advantages.fullLicense.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-900">{t('company.advantages.localConnection.title')}</h4>
                      <p className="text-slate-600">{t('company.advantages.localConnection.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-900">{t('company.advantages.support247.title')}</h4>
                      <p className="text-slate-600">{t('company.advantages.support247.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              {t('company.licenses.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('company.licenses.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Payment System Providers License (PJP3)', country: '马来西亚' },
              { name: 'Electronic Money Institution (EMI)', country: '菲律宾' },
              { name: 'Merchant Acquiring Service (MAS)', country: '新加坡' },
              { name: 'MSO License', country: '印度尼西亚' },
              { name: 'Operator Of Payment System (OPS)', country: '泰国' },
              { name: 'Money Service Business (MSB)', country: '越南' }
            ].map((license, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{license.name}</h3>
                <p className="text-sm text-slate-600">{license.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              {t('company.partners.title')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('company.partners.description')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['GCash', 'Maya', 'Alipay+', 'J&T', 'Shopee', 'Grab', 'IGG', 'Lazada'].map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                  <span className="font-semibold text-slate-700">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

