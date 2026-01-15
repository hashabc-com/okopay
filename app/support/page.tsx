import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SupportPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-heading font-bold text-slate-900 mb-6">支持中心</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            为您提供全方位的技术支持和服务保障
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">技术文档</h3>
            <p className="text-slate-600 text-center mb-6">
              详细的API文档和集成指南，帮助您快速接入
            </p>
            <a href="#" className="block w-full px-6 py-3 bg-primary-100 text-primary-600 font-medium rounded-lg hover:bg-primary-200 transition-colors duration-200 text-center">
              查看文档
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">常见问题</h3>
            <p className="text-slate-600 text-center mb-6">
              快速找到常见问题的解答
            </p>
            <a href="#" className="block w-full px-6 py-3 bg-primary-100 text-primary-600 font-medium rounded-lg hover:bg-primary-200 transition-colors duration-200 text-center">
              查看FAQ
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">在线客服</h3>
            <p className="text-slate-600 text-center mb-6">
              7x24小时在线客服，随时为您解答
            </p>
            <a href="#" className="block w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 text-center">
              联系客服
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">快速开始</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-slate-900 mb-2">注册账号</h3>
              <p className="text-sm text-slate-600">填写基本信息，完成账号注册</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-slate-900 mb-2">企业认证</h3>
              <p className="text-sm text-slate-600">提交企业资质，完成实名认证</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-slate-900 mb-2">接入对接</h3>
              <p className="text-sm text-slate-600">根据文档完成API接入</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-slate-900 mb-2">开始收款</h3>
              <p className="text-sm text-slate-600">测试通过后即可正式上线</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
