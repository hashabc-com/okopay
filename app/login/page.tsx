import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-md mx-auto w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2 text-center">
              登录
            </h1>
            <p className="text-slate-600 text-center mb-8">
              登录您的商户账号
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  邮箱地址
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="请输入邮箱地址"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  密码
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="请输入密码"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm text-slate-600">记住我</span>
                </label>
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  忘记密码？
                </a>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                登录
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-600">
                还没有账号？
                <Link href="/about/consult" className="text-primary-600 hover:text-primary-700 font-medium ml-1">
                  立即注册
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
