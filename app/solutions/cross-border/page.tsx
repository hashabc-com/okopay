import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function CrossBorderPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-heading font-bold text-slate-900 mb-6">跨境贸易</h1>
              <p className="text-2xl text-slate-700 mb-4">跨境贸易 一站式支付解决方案</p>
              <p className="text-lg text-slate-600 mb-8">
                覆盖东南亚多国货币和支付方式，为您提供便捷、高效、安全的支付解决方案。助力企业在东南亚地区拓展业务，为您提供专业的本地支付服务，助力快速出海。
              </p>
              <a href="#contact" className="inline-flex px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md hover:shadow-lg">
                立即咨询
              </a>
            </div>
            <div className="relative">
              <Image
                src="/solutions/cross_boeder_1.webp"
                alt="跨境贸易"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">为跨境贸易</h2>
            <h3 className="text-3xl font-heading font-bold text-slate-900 mb-6">从业者提供一站式跨境收付款解决方案</h3>
            <p className="text-lg text-slate-600 max-w-4xl">
              OkoPay提供一站式金融科技支付解决方案，整合数字金融支付，高效流程，安全可靠。通过统一API调用，细致数据分析，确保安全、创新、全球化的支付体验，提升用户满意度，助力企业发展。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">一键打通本土收款渠道</h3>
              <p className="text-slate-600">
                OkoPay提供先进的支付系统，提供多样选择，满足不同消费者的支付需求。集成线上线下的交易形式，商户可迅速开展营收业务。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">本地化助推出海</h3>
              <p className="text-slate-600">
                通过本地化策略助力业务出海，深入理解当地市场需求，提供精准解决方案。实现业务的本土化，为全球拓展提供可持续增长的基础。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">结算更快 费用好省</h3>
              <p className="text-slate-600">
                OkoPay 系统可以让跨境零售行业伙伴们在当天把款项提领到合作的银行中，免去传统银行或机构的 T+5 的困扰。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">资金安全有保障</h3>
              <p className="text-slate-600">
                OkoPay 在业务开展的地区均有齐全的金融或支付牌照，为跨境零售行业伙伴们安全合规的收付款环境，加上强大的法律团队配合，确保资金的安全性。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Payment Section with Background */}
      <section className="relative py-84 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/solutions/solution_cross_3.png"
            alt="Background"
            fill
            className="object-cover opacity-90"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">本地支付促进跨境贸易</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              OkoPay为跨境电子商务合作伙伴量身定制安全的全球支付体验，确保遵守当地金融许可证法律，并确保商户资金的安全。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
