import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-heading font-bold text-slate-900 mb-6">产品报价</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            透明的定价方案，灵活的收费模式，满足不同规模企业的需求
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">基础版</h3>
            <p className="text-slate-600 mb-6">适合初创企业和小型商户</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">1.5%</span>
              <span className="text-slate-600 ml-2">每笔交易</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">支持主流支付方式</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">T+1结算</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">基础技术支持</span>
              </li>
            </ul>
            <a href="#contact" className="block w-full px-6 py-3 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-colors duration-200 text-center">
              立即咨询
            </a>
          </div>

          {/* Professional */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl p-8 transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">推荐</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">专业版</h3>
            <p className="text-primary-100 mb-6">适合成长型企业</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">1.0%</span>
              <span className="text-primary-100 ml-2">每笔交易</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">所有支付方式</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">T+0实时结算</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">7x24专属客服</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">数据分析报告</span>
              </li>
            </ul>
            <a href="#contact" className="block w-full px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-slate-50 transition-colors duration-200 text-center">
              立即咨询
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">企业版</h3>
            <p className="text-slate-600 mb-6">适合大型企业和高交易量商户</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">定制</span>
              <span className="text-slate-600 ml-2">方案</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">定制化费率</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">专属账户经理</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">定制化开发</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-600">SLA服务保障</span>
              </li>
            </ul>
            <a href="#contact" className="block w-full px-6 py-3 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-colors duration-200 text-center">
              联系销售
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">常见问题</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">是否有隐藏费用？</h3>
              <p className="text-slate-600">没有任何隐藏费用，所有收费项目都透明公开。</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">如何申请降低费率？</h3>
              <p className="text-slate-600">交易量达到一定规模后，可联系客服申请优惠费率。</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">支持哪些结算周期？</h3>
              <p className="text-slate-600">支持T+0、T+1等多种结算周期，根据套餐而定。</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">如何升级套餐？</h3>
              <p className="text-slate-600">随时可以升级套餐，联系客服即可办理。</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
