"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/i18n-context";
// import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function LocalPaymentPage() {
  const { t } = useI18n();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scenarios = [
    {
      name: t('products.localPayment.scenarios.cod.name'),
      icon: "📦",
      description: t('products.localPayment.scenarios.cod.description'),
    },
    {
      name: t('products.localPayment.scenarios.travel.name'),
      icon: "✈️",
      description: t('products.localPayment.scenarios.travel.description'),
    },
    {
      name: t('products.localPayment.scenarios.hotel.name'),
      icon: "🏨",
      description: t('products.localPayment.scenarios.hotel.description'),
    },
    {
      name: t('products.localPayment.scenarios.restaurant.name'),
      icon: "🍽️",
      description: t('products.localPayment.scenarios.restaurant.description'),
    },
    {
      name: t('products.localPayment.scenarios.toll.name'),
      icon: "🚗",
      description: t('products.localPayment.scenarios.toll.description'),
    },
    {
      name: t('products.localPayment.scenarios.delivery.name'),
      icon: "🍔",
      description: t('products.localPayment.scenarios.delivery.description'),
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
                {t('products.localPayment.title')}
              </h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">
                {t('products.localPayment.subtitle')}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('products.localPayment.description')}
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
                  src="/products/local_payment_1.webp"
                  alt="本地收单"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              {t('products.localPayment.moreScenarios')}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t('products.localPayment.scenariosDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Payment Link */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {t('products.localPayment.paymentLink.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('products.localPayment.paymentLink.description')}
              </p>
            </div>

            {/* Online Payment */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {t('products.localPayment.onlinePayment.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('products.localPayment.onlinePayment.description')}
              </p>
            </div>

            {/* API Integration */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {t('products.localPayment.apiIntegration.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('products.localPayment.apiIntegration.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Scenarios */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              {t('products.localPayment.serviceScenarios')}
            </h2>
            <p className="text-lg text-slate-600">
              {t('products.localPayment.serviceScenariosDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Scenarios List */}
            <div className="space-y-3">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-2xl">
                      {scenario.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {scenario.name}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-180" : ""
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
                    </div>
                  </div>
                  {expandedIndex === index && (
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-slate-600 leading-relaxed pl-15">
                        {scenario.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="lg:sticky lg:top-32">
              <div className="relative w-full h-full min-h-[650px]">
                <Image
                  src="/products/local_payment_3.webp"
                  alt="服务场景"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section> */}

      <Footer />
    </main>
  );
}


