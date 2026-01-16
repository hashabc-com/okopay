"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useState } from "react";

export default function LocalPaymentPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scenarios = [
    {
      name: "货到付款",
      icon: "📦",
      description:
        "OkoPay已经在菲律宾、印尼、泰国、马来与本地银行、持牌机构合作货币兑换业务，为OkoPay体系内的收单商户提供安全、合规、灵活的货币兑换服务",
    },
    {
      name: "旅行支付",
      icon: "✈️",
      description: "OkoPay 可以帮助您集成更安全的旅游行业支付解决方案",
    },
    {
      name: "酒店预订",
      icon: "🏨",
      description: "OkoPay支持在线酒店支付系统整合，用户随时随地可下单",
    },
    {
      name: "餐厅点餐",
      icon: "🍽️",
      description: "餐厅饭店集成线上点餐系统让您的业务更加灵活",
    },
    {
      name: "收费站",
      icon: "🚗",
      description:
        "我们提供得来速服务，让您的客户无需离开车辆即可方便地完成交易",
    },
    {
      name: "网上送餐",
      icon: "🍔",
      description:
        "在线订购服务，使用户能够通过无缝的数字平台方便地订购和接收他们最喜欢的餐食",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
                本地收单
              </h1>
              <p className="text-2xl text-blue-600 font-semibold mb-6">
                极速收单，资金到账更快
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                OkoPay为本地企业提供快捷高效的收单解决方案，满足多场景的支付需求，提升支付成功率，保障交易安全，提供更好的用户体验。
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                立即咨询
              </a>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/products/local_payment_1.webp"
                  alt="本地收单"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              更多的应用场景
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              OkoPay提供网页/手机端
              付款界面，企业主无需开发即可高效整合适配不同渠道（例如QRcode、网上银行、柜台银行、支付中心和电子钱包）更方便地接受付款。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Payment Link */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                支付链接
              </h3>
              <p className="text-slate-600 leading-relaxed">
                我们为本地商户提供安全便捷的支付选择，无论是在线还是线下，我们与本地渠道合作，以迅速结算资金，确保及时支付，满足他们的需求。
              </p>
            </div>

            {/* Online Payment */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                在线支付
              </h3>
              <p className="text-slate-600 leading-relaxed">
                我们通过使用社交媒体、搜索引擎优化和本地广告等本地化营销工具，帮助本地商户吸引更多客户，提升在社区中的知名度。
              </p>
            </div>

            {/* API Integration */}
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                API对接
              </h3>
              <p className="text-slate-600 leading-relaxed">
                我们为本地商户提供快速可靠的物流服务，通过与本地公司合作，确保及时送达，提升整体顾客购物体验。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Scenarios */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              服务场景
            </h2>
            <p className="text-lg text-slate-600">
              我们通过线上和线下多种方式提升收款效率
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Scenarios List */}
            <div className="space-y-3">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                      {scenario.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {scenario.name}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  {expandedIndex === index && (
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-slate-600 leading-relaxed pl-15">
                        {scenario.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="lg:sticky lg:top-32">
              <div className="relative w-full h-full min-h-[650px]">
                <Image
                  src="/products/local_payment_3.webp"
                  alt="服务场景"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
