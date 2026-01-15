'use client';

import { useI18n } from '@/i18n/i18n-context';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-60"></div>
      
      {/* Animated circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative illustrations */}
      <div className="absolute top-32 left-20 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#F59E0B" strokeWidth="3" strokeDasharray="8 8"/>
          <circle cx="60" cy="60" r="35" fill="#F59E0B" opacity="0.2"/>
          <path d="M40 60 L55 75 L80 50" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-20 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="10" width="80" height="80" rx="12" stroke="#8B5CF6" strokeWidth="3"/>
          <path d="M30 50 L50 70 L70 30" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t.hero.trusted} 2M+ users
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-xl text-slate-600 mb-4 font-medium">
              {t.hero.subtitle}
            </p>
            
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                {t.hero.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-primary-500 hover:text-primary-600 transition-all duration-200 cursor-pointer"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-slate-600 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-600 font-medium">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-slate-600 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right content - Visual */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Glass card with mock transaction */}
              <div className="backdrop-blur-md bg-white/80 border border-slate-200 rounded-3xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">Send Money</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Instant</span>
                  </div>
                  
                  <div>
                    <div className="text-sm text-slate-500 mb-2">You send</div>
                    <div className="text-4xl font-bold text-slate-900">$1,000</div>
                    <div className="text-sm text-slate-400 mt-1">USD</div>
                  </div>

                  <div className="flex items-center justify-center py-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-slate-500 mb-2">Recipient gets</div>
                    <div className="text-4xl font-bold text-primary-600">
                      ¥6,850
                    </div>
                    <div className="text-sm text-slate-400 mt-1">CNY</div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">Exchange rate</span>
                      <span className="font-medium text-slate-900">1 USD = 6.85 CNY</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Fee</span>
                      <span className="font-medium text-green-600">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 backdrop-blur-md bg-white/90 border border-slate-200 rounded-2xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Transfer completed</div>
                    <div className="text-sm font-semibold text-slate-900">2 seconds ago</div>
                  </div>
                </div>
              </div>
              
              {/* Bottom left illustration */}
              <div className="absolute -bottom-6 -left-6 backdrop-blur-md bg-gradient-to-br from-primary-100 to-secondary-100 border border-primary-200 rounded-2xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" fill="url(#gradient)" />
                    <path d="M16 8v8l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                        <stop offset="0%" stopColor="#F59E0B"/>
                        <stop offset="100%" stopColor="#8B5CF6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-xs font-semibold text-primary-700">2-3 sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
