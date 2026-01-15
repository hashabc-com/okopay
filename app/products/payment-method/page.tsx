import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaymentMethodPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-heading font-bold text-slate-900 mb-6">
            支付方式
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            支持多种主流支付方式，满足不同用户的支付习惯
          </p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            覆盖银行卡、电子钱包、二维码支付等多种支付渠道，为用户提供便捷的支付体验
          </p>
        </div>
      </section>

      {/* Payment Methods Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              支持的支付方式
            </h2>
            <p className="text-lg text-slate-600">
              接入多种支付渠道，提供全方位的支付解决方案
            </p>
          </div>

          {/* E-Wallets */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">电子钱包</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'GCash', desc: '菲律宾领先的电子钱包' },
                { name: 'Maya', desc: '菲律宾主流支付方式' },
                { name: 'Alipay+', desc: '支付宝国际版' },
                { name: 'GrabPay', desc: '东南亚流行支付' },
                { name: 'PayMaya', desc: '便捷移动支付' },
                { name: 'ShopeePay', desc: '虾皮钱包' },
                { name: 'TouchnGo', desc: '马来西亚电子钱包' },
                { name: 'Dana', desc: '印尼数字钱包' }
              ].map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">{method.name}</h4>
                  <p className="text-sm text-slate-600">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Transfers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">银行转账</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Online Banking', desc: '在线银行转账' },
                { name: 'ATM Transfer', desc: 'ATM转账支付' },
                { name: 'Bank Counter', desc: '银行柜台支付' },
                { name: 'Instapay', desc: '即时转账网络' },
                { name: 'PESONet', desc: '菲律宾电子转账' },
                { name: 'BancNet', desc: '银行网络支付' }
              ].map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">{method.name}</h4>
                  <p className="text-sm text-slate-600">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code & Others */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">其他支付方式</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'QR Code', desc: '二维码扫码支付' },
                { name: 'OTC', desc: '便利店支付' },
                { name: 'Credit Card', desc: '信用卡支付' },
                { name: 'Debit Card', desc: '借记卡支付' }
              ].map((method, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">{method.name}</h4>
                  <p className="text-sm text-slate-600">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              为什么选择我们
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">接入简单</h3>
              <p className="text-slate-600">一次对接，支持所有支付方式，快速上线</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">安全可靠</h3>
              <p className="text-slate-600">符合国际安全标准，保障每笔交易安全</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">高成功率</h3>
              <p className="text-slate-600">智能路由，确保99%+的支付成功率</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            一站式支付服务专家
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            免费开通账号，立即开启便捷的支付之旅
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-slate-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            立即咨询
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
