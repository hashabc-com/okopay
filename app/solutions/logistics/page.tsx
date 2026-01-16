import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function LogisticsPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
                物流快递
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-700 font-semibold mb-4">
                物流快递全方位支付解决方案
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                OkoPay物流支付全方位解决方案，整合多元支付、高效流程和卓越安全技术，提升用户体验。与物流企业紧密合作，追求技术创新与适应性，助力本地物流企业保持竞争力，实现高效、安全、创新的支付生态。
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
                  src="/solutions/express_delivery_1.webp"
                  alt="物流快递支付解决方案"
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

      {/* Enhancement Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              提升
            </h2>
            <p className="text-2xl text-slate-700 font-semibold mb-4">
              东南亚本地物流支付效率解决方案
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/solutions/express_delivery_2.webp"
                alt="东南亚本地物流支付效率"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
              <p className="text-lg text-slate-600 leading-relaxed">
                OkoPay是一家位于东南亚的公司，利用新的支付技术使在线购物更加高效。他们使用QR码来减少现金交易，从而使卖家和送货公司更容易操作。如果客户不在家，他们可以通过送货人发送的链接进行支付。这个系统简化了支付流程，使得所有相关方都能更加便宜地进行交易。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Background Car Image */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <Image
            src="/solutions/express_delivery_3_car.webp"
            alt="Background"
            fill
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              成功案例
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              OkoPay 结合现代物流快递业务场景提供了多种支付可能性。更快捷的支付体验，赋能物流快递企业提效增收
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Solutions Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  派件COD收款解决方案
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  为快递员提供便捷的货到付款收款工具，支持扫码收款、现金转账，实时到账
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  包裹代收及支付解决方案
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  客户不在家时，通过发送支付链接完成在线支付，简化收款流程
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  网点收款解决方案
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  为物流网点提供多种收款方式，支持扫码、刷卡、现金等多种支付方式
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  KA应收账款解决方案
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  为大客户提供专业的应收账款管理服务，自动对账、批量结算
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
                  src="/solutions/express_delivery_3.webp"
                  alt="物流快递成功案例"
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
