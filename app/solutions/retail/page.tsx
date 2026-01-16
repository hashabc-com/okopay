import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function RetailPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
                零售行业
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-700 font-semibold mb-4">
                零售业<br />一体化支付解决方案
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                OkoPay 致力助推东南亚零售，构建一体化支付解决方案，确保安全与便捷。借创新科技，提供可靠支付，创造高效安全交易体验，加强零售行业生态稳健发展
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                立即咨询
              </a>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/solutions/business_1.webp"
                  alt="零售行业支付解决方案"
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
              助力
            </h2>
            <p className="text-2xl text-slate-700 font-semibold mb-8">
              东南亚零售行业，打造更安全易操作的支付解决方案
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              OkoPay整合先进技术，为零售商提供东南亚主流支付，保障安全，简化操作。智能支付系统提升用户体验，实现便捷购物。持续优化防欺诈，确保交易安全。致力于与零售商共同打造数字支付新标准，促进业务增长
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - One-stop Payment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">一站式支付服务</h3>
              <p className="text-slate-600 leading-relaxed">
                OkoPay提供先进的支付系统，提供多样选择，满足不同消费者的支付需求。集成线上线下的交易形式，商户可迅速开展营收业务。
              </p>
            </div>

            {/* Card 2 - Payment Security */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">支付安全保障</h3>
              <p className="text-slate-600 leading-relaxed">
                采用先进的加密技术和安全措施，保护用户的支付信息和资金安全。同时，建立高效的欺诈检测系统，及时发现和处理欺诈行为，降低风险。
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">深化用户支付体验</h3>
              <p className="text-slate-600 leading-relaxed">
                搭建智能支付系统，提升用户在购物过程中的体验，实现更便捷、高效的支付流程。基于数字化交易更深入了解用户购物需求，提供更好的决策方案。
              </p>
            </div>

            {/* Card 4 - Multiple Terminals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">多种支付终端</h3>
              <p className="text-slate-600 leading-relaxed">
                支付本地化,满足当地多种支付终端，均适配手机、PC、平板等设备，可实现线上线下交易模式。
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
              成功案例
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              丰富服务场景，满足更广泛需求
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Case List */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  加盟店
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  我们为加盟店定制支付解决方案，确保交易顺畅并提高财务管理运营效率
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  便利店
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  OkoPay通过专门支付解决方案简化了便利店的交易和财务结算
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  商店
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  我们为商场门店提供量身定制的支付解决方案，提高交易效率和丰富支付方式
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">
                  市场
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  OkoPay不断简化支付流程，以提高商家和客户的支付便利性和高效性
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                立即咨询
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <Image
                  src="/solutions/business_3.webp"
                  alt="零售行业成功案例"
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
