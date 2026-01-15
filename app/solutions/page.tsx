import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SolutionsIndexPage() {
  const solutions = [
    {
      title: '本地生活',
      desc: '为本地生活服务提供完整的支付解决方案',
      icon: '🍽️',
      link: '/solutions/local-life',
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      title: '物流快递',
      desc: '为物流行业提供高效的支付和代付服务',
      icon: '📦',
      link: '/solutions/logistics',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: '游戏行业',
      desc: '游戏充值、道具购买等支付解决方案',
      icon: '🎮',
      link: '/solutions/gaming',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: '金融科技',
      desc: '为金融科技公司提供安全可靠的支付服务',
      icon: '💰',
      link: '/solutions/fintech',
      gradient: 'from-green-400 to-green-600'
    },
    {
      title: '零售行业',
      desc: '线上线下零售的全场景支付解决方案',
      icon: '🛒',
      link: '/solutions/retail',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      title: '跨境贸易',
      desc: '跨境电商支付、结算一站式服务',
      icon: '🌏',
      link: '/solutions/cross-border',
      gradient: 'from-cyan-400 to-cyan-600'
    }
  ];

  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-heading font-bold text-slate-900 mb-6">
            行业解决方案
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            为不同行业量身定制的支付解决方案，助力业务快速增长
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link key={index} href={solution.link}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center text-3xl mb-6`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 mb-4">{solution.desc}</p>
                <div className="flex items-center text-primary-600 font-medium">
                  了解更多
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
