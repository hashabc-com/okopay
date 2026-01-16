import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function GamingPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
                游戏
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-700 font-semibold mb-4">
                游戏行业全方位<br />支付解决方案
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                OkoPay 融合游戏行业，帮助游戏行业建立一套全面而有效的支付解决方案，提高支付便捷性、安全性和用户体验，从而促进业务的快速发展。
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
                  src="/solutions/gaming_1.webp"
                  alt="游戏行业支付解决方案"
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
              赋能游戏
            </h2>
            <p className="text-2xl text-slate-700 font-semibold mb-8">
              支付解决方案，加速收益增长
            </p>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              OkoPay游戏支付全方位解决方案，集成多元支付和欺诈检测，保障高成功率和最新技术。通过API调用，实现一键支付，提供全球玩家安全、便捷支付体验。助力游戏发行商打造稳定支付生态，促进全球化发展。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Card 1 - Multiple Payment Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">多元支付方式</h3>
              <p className="text-slate-600 leading-relaxed">
                本土游戏与本地最新支付技术相结合，多种支付方式为游戏发行商提供稳定可靠的支付服务，满足当地玩家多样化的支付需求，提升支付成功率。
              </p>
            </div>

            {/* Card 2 - Secure Payment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">安全快捷支付</h3>
              <p className="text-slate-600 leading-relaxed">
                采用先进的先进的加密技术和安全措施，保护用户的支付信息和资金安全。同时，建立高效的欺诈检测系统，及时发现和处理欺诈行为，降低风险。
              </p>
            </div>

            {/* Card 3 - Marketing Strategy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">精准营销策略</h3>
              <p className="text-slate-600 leading-relaxed">
                精细化运营管理，游戏发行商可轻松获取更多可分析数据，优化支付流程和用户体验，提升精准营销策略，获取更高收益。
              </p>
            </div>

            {/* Card 4 - Localized Service */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">本地定制化服务</h3>
              <p className="text-slate-600 leading-relaxed">
                OkoPay提供全球本地化定制服务，满足不同游戏发行商支付方案，建立更流畅的玩家支付体验。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

