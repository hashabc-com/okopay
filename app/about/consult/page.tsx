import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ConsultPage() {
  return (
    <main>
      <Navbar />
      
      {/* Main Section - Side by Side Layout */}
      <section className="pt-32 pb-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-heading font-bold text-slate-900 mb-6">咨询</h1>
                <h2 className="text-2xl font-heading font-bold text-blue-600 mb-6">
                  为800多家<br />东南亚商户提供快捷支付解决方案
                </h2>
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
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">本地化服务</h4>
                    <p className="text-slate-600">
                      我们提供本地化全方位的支付解决方案定制服务，支持多国币种和支付方式。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">API对接</h4>
                    <p className="text-slate-600">
                      零开户费用、免费集成API解决方案、全程咨询服务和专业技术支持。
                    </p>
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
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">交易安全灵活</h4>
                    <p className="text-slate-600">
                      本地收付到账快，交易成本低，成功率高。结算最快T+1,企业回款更灵活。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">风控严格把控</h4>
                    <p className="text-slate-600">
                      严格的交易风控策略，为商户资金保驾护航，提升资金利用率，为您创收每一份财富。
                    </p>
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
