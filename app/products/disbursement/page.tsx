'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';

// Collapsible Item Component
function CollapsibleItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900">{title}</span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 bg-slate-50">
          <p className="text-slate-600">{content}</p>
        </div>
      )}
    </div>
  );
}

export default function DisbursementPage() {
  const [activeTab, setActiveTab] = useState('philippines');

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 mb-6">
                本地代付
              </h1>
              <p className="text-2xl text-primary-600 font-semibold mb-6">
                极速打款，安全高效
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                OkoPay为企业提供随时随地转账业务，支持电子钱包、信用卡或借记卡多方式转账，确保运营资金周转灵活，提供安全保障。
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                立即咨询
              </a>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image 
                  src="/products/disbursment_1.webp"
                  alt="本地代付"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast and Secure Payment Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Title and Collapsible Sections */}
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                快速、安全，实时打款
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                OkoPay支持包括本地银行卡、电子钱包、网银支付等多种打款方式，覆盖菲律宾，印度尼西亚，泰国，马来西亚等多个国家，支持自动批量转账，高安全性、高成功率、高灵活性为打款交易保驾护航。
              </p>

              {/* Collapsible Sections */}
              <div className="space-y-2">
                {[
                  { title: '支付渠道', content: '本地银行账户、电子钱包、实体便利店、当铺等' },
                  { title: '支付方式', content: '可以选择手动或API批量打款' },
                  { title: '小额代付', content: '支持金额、网络游戏、零售业和转账类型服务的小额代付' },
                  { title: '大额代付', content: '贸易支付、代发工资、企业转账' },
                  { title: '支付货币', content: '支持多种货币结算' },
                  { title: '到账时间', content: '实时到账，快速便捷' }
                ].map((item, index) => (
                  <CollapsibleItem key={index} title={item.title} content={item.content} />
                ))}
              </div>
            </div>

            {/* Right: Country Tabs and Payment Methods */}
            <div>
              {/* Country Tabs */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'philippines', name: '菲律宾' },
                    { id: 'indonesia', name: '印度尼西亚' },
                    { id: 'malaysia', name: '马来西亚' },
                    { id: 'thailand', name: '泰国' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-primary-600 text-white shadow-md'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-primary-100">
                {/* Bank Payment Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">银行打款</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    我们与{activeTab === 'philippines' ? '菲律宾' : activeTab === 'indonesia' ? '印度尼西亚' : activeTab === 'malaysia' ? '马来西亚' : '泰国'}当地多家当地银行建立直连合作关系，支持主流银行打款，资金安全打款成功率极高，费用低廉。
                  </p>
                  
                  {/* Bank Icons */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-4">
                    {activeTab === 'philippines' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bdo.png" alt="BDO" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_metrobank.png" alt="MetroBank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_ub.png" alt="UnionBank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_security_bank.png" alt="Security Bank" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'indonesia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bca.png" alt="BCA" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_mandiri.png" alt="Mandiri" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bni.png" alt="BNI" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_bank_bri.png" alt="BRI" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'malaysia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_maybank.png" alt="Maybank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_CIMB.png" alt="CIMB" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_PUBLICK_BANK.png" alt="Public Bank" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_RHB.png" alt="RHB" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'thailand' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_scb.png" alt="SCB" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_Krungthai.png" alt="Krungthai" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_ttb.png" alt="TTB" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-primary-600 font-medium">更多支持...</p>
                </div>

                {/* E-Wallet Section */}
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">电子钱包</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    我们支持支付到{activeTab === 'philippines' ? '菲律宾' : activeTab === 'indonesia' ? '印度尼西亚' : activeTab === 'malaysia' ? '马来西亚' : '泰国'}流行的电子钱包，满足客户的直接充值需求。
                  </p>
                  
                  {/* E-Wallet Icons */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-4">
                    {activeTab === 'philippines' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_gcash.png" alt="GCash" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_maya.png" alt="Maya" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_spay.png" alt="ShopeePay" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_grabpay.png" alt="GrabPay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'indonesia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_ovo.png" alt="OVO" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_linkAja.png" alt="LinkAja" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_astraPay.png" alt="AstraPay" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_spay.png" alt="ShopeePay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'malaysia' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_Touch_NGO.png" alt="Touch 'n Go" width={70} height={35} className="object-contain" />
                        </div>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_grabpay.png" alt="GrabPay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                    {activeTab === 'thailand' && (
                      <>
                        <div className="flex justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <Image src="/products/icon_grabpay.png" alt="GrabPay" width={70} height={35} className="object-contain" />
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-primary-600 font-medium">更多支持...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              更多应用场景
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              本地资金代付，可通过自动化批量打款操作，实现低费用、减少财务核对工作，提高企业财务处理效率，降低支付成本，助力企业运营高效化。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Scenarios Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">企业工资代付</h3>
                <p className="text-slate-600 leading-relaxed">批量发放员工工资，提高财务处理效率</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">供应商货款代付</h3>
                <p className="text-slate-600 leading-relaxed">快速结算供应商款项，保持良好合作关系</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">商户交易，退款业务</h3>
                <p className="text-slate-600 leading-relaxed">处理商户交易退款，提升用户体验</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">实时转账/取款</h3>
                <p className="text-slate-600 leading-relaxed">支持用户实时转账和取款需求</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative w-full h-[550px] rounded-2xl overflow-hidden top-18">
                <Image 
                  src="/products/disbursments_3.webp"
                  alt="应用场景"
                  fill
                  className="object-contain"
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

