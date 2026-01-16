import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section - Removed, content moved to Features section */}

      {/* Features and Contact Form Section - Side by Side */}
      <section className="py-36 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-3">价格</h2>
                <h3 className="text-2xl font-heading font-bold text-blue-600 mb-6">量身定制 价格方案</h3>
                <p className="text-slate-600 mb-8">
                  OkoPay 系于2021年成立的跨境收款及本地支付解决方案公司，专注于为客户提供定制化金融解决方案。其植根于新兴市场，服务地区以东南亚、拉美、中东为主。
                </p>
              </div>

              <div className="space-y-20">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">免费接入，多国可用</h4>
                    <p className="text-slate-600">一次接入多国可用，助力快速全球化业务</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">费率固定，灵活组合</h4>
                    <p className="text-slate-600">价格公开透明，每一笔交易计费成本清晰明了</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">支付本地化，费用极低</h4>
                    <p className="text-slate-600">全球支付方案最优定价，为您降本增效</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
