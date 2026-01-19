'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useI18n } from '@/i18n/i18n-context';
import Link from 'next/link';

export default function LogisticsPage() {
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
                {t('solutions.logistics.title')}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-700 font-semibold mb-4">
                {t('solutions.logistics.subtitle')}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('solutions.logistics.description')}
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
                  src="/solutions/express_delivery_1.webp"
                  alt="Logistics Payment Solutions"
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

      {/* Enhancement Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              {t('solutions.logistics.enhanceTitle')}
            </h2>
            <p className="text-2xl text-slate-700 font-semibold mb-4">
              {t('solutions.logistics.enhanceSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/solutions/express_delivery_2.webp"
                alt="Southeast Asia Local Logistics Payment Efficiency"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('solutions.logistics.enhanceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Car Image */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <Image
            src="/solutions/express_delivery_3_car.webp"
            alt="Background"
            fill
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              {t('solutions.logistics.caseStudyTitle')}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              {t('solutions.logistics.caseStudyDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Solutions Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('solutions.logistics.cases.cod.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.logistics.cases.cod.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('solutions.logistics.cases.proxy.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.logistics.cases.proxy.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('solutions.logistics.cases.network.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.logistics.cases.network.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t('solutions.logistics.cases.receivable.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('solutions.logistics.cases.receivable.description')}
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
                  src="/solutions/express_delivery_3.webp"
                  alt="Logistics Success Stories"
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

