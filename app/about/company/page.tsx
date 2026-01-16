import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CompanyPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-heading font-bold text-slate-900 mb-6">
            关于我们
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            值得信赖的本地支付服务专家
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">
                OkoPay - 您的本地支付解决方案专家
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                OkoPay致力于为全球企业提供专业、安全、高效的支付解决方案。我们深耕东南亚市场，持有多个国家和地区的官方支付牌照，为客户提供合规、可靠的支付服务。
              </p>
              <p className="text-lg text-slate-600 mb-4">
                我们的使命是让跨境支付变得简单、快捷、安全，帮助企业轻松拓展全球业务，让每一笔交易都能快速、安全地完成。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">核心优势</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-900">牌照齐全</h4>
                      <p className="text-slate-600">持有多个国家和地区的官方支付牌照</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-900">本地直连</h4>
                      <p className="text-slate-600">与本地支付渠道直接合作，确保高成功率</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-slate-900">7x24服务</h4>
                      <p className="text-slate-600">全天候客户服务，及时响应您的需求</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              牌照资质
            </h2>
            <p className="text-lg text-slate-600">
              在东南亚，我们持有官方牌照，凭借合规资质为每笔交易提供安全、高效、合法的保障
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Payment System Providers License (PJP3)', country: '马来西亚' },
              { name: 'Electronic Money Institution (EMI)', country: '菲律宾' },
              { name: 'Merchant Acquiring Service (MAS)', country: '新加坡' },
              { name: 'MSO License', country: '印度尼西亚' },
              { name: 'Operator Of Payment System (OPS)', country: '泰国' },
              { name: 'Money Service Business (MSB)', country: '越南' }
            ].map((license, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{license.name}</h3>
                <p className="text-sm text-slate-600">{license.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              合作伙伴
            </h2>
            <p className="text-lg text-slate-600">
              与全球知名企业建立战略合作关系
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['GCash', 'Maya', 'Alipay+', 'J&T', 'Shopee', 'Grab', 'IGG', 'Lazada'].map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                  <span className="font-semibold text-slate-700">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

