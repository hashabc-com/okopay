'use client';

import { useI18n } from '@/i18n/i18n-context';

export default function HowItWorks() {
  const { t } = useI18n();

  const steps = [
    {
      number: '01',
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background illustrations */}
      <div className="absolute top-20 right-10 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#F59E0B" strokeWidth="4"/>
          <circle cx="100" cy="100" r="60" stroke="#8B5CF6" strokeWidth="4"/>
          <circle cx="100" cy="100" r="40" stroke="#F59E0B" strokeWidth="4"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 opacity-5">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <rect x="20" y="20" width="140" height="140" rx="20" stroke="#8B5CF6" strokeWidth="4"/>
          <rect x="40" y="40" width="100" height="100" rx="15" stroke="#F59E0B" strokeWidth="4"/>
          <rect x="60" y="60" width="60" height="60" rx="10" stroke="#8B5CF6" strokeWidth="4"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="backdrop-blur-md bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Step number badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-primary-600 mx-auto mb-6 mt-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#get-started"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            Get Started Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
