"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useI18n } from "@/i18n/i18n-context";
import Link from "next/link";

// 测试

export default function PaymentMethodPage() {
  const { t } = useI18n();
  
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Module 1: Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-0 lg:pb-0 lg:h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full h-full">
            {/* Left: Content */}
            <div className="z-10 py-12 lg:py-0">
              <h1 className="text-xl font-bold text-slate-900 mb-4">
                {t('products.paymentMethod.title')}
              </h1>
              <h2 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                {t('products.paymentMethod.subtitle')}
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                {t('products.paymentMethod.description')}
              </p>
              <Link
                href="/about/consult"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {t('nav.getStarted')}
              </Link>
            </div>

            {/* Right: Image (Full Screen on Desktop) */}
            <div className="absolute top-20 right-0 w-full lg:w-1/2 h-full hidden lg:block">
              <div className="relative w-full h-full">
                <Image
                  src="/products/payment_method_1.png"
                  alt="Payment Methods Hero"
                  fill
                  className="object-contain object-right"
                  priority
                />
                {/* Gradient Overlay for text readability if needed, though split screen usually handles it */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:hidden"></div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl mt-8">
              <Image
                src="/products/payment_method_1.png"
                alt="Payment Methods Hero"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Module 2: Country Payment Methods List */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">
              {t('products.paymentMethod.multiCountry')}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t('products.paymentMethod.multiCountryDesc')}
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-100">
            <table className="min-w-full text-left">
              <thead className="bg-white border-b border-slate-100">
                <tr>
                  <th className="px-8 py-6 text-xl font-bold text-primary-600 tracking-wide">
                    {t('products.paymentMethod.supportedCountry')}
                  </th>
                  <th className="px-8 py-6 text-xl font-bold text-primary-600 tracking-wide">
                    {t('products.paymentMethod.paymentType')}
                  </th>
                  <th className="px-8 py-6 text-xl font-bold text-primary-600 tracking-wide">
                    {t('products.paymentMethod.paymentChannel')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    country: "菲律宾",
                    type: "QR Code",
                    logo: "/products/Group_1930925.png",
                  },
                  {
                    country: "菲律宾",
                    type: "Online Banking",
                    logo: "/products/Group_1930932.png",
                  },
                  {
                    country: "菲律宾",
                    type: "OTC Bank and ATM",
                    logo: "/products/Frame_192671.png",
                  },
                  {
                    country: "菲律宾",
                    type: "E-Wallets",
                    logo: "/products/Group_1930935.png",
                  },
                  {
                    country: "印度尼西亚",
                    type: "Bank Transfers",
                    logo: "/products/Frame_dd411.png",
                  },
                  {
                    country: "印度尼西亚",
                    type: "E-Wallets",
                    logo: "/products/Frame_ind_409.png",
                  },
                  {
                    country: "印度尼西亚",
                    type: "QR Code",
                    logo: "/products/qris.png",
                  },
                  {
                    country: "马来西亚",
                    type: "Bank Transfers",
                    logo: "/products/Frame_192672.png",
                  },
                  {
                    country: "马来西亚",
                    type: "E-Wallets",
                    logo: "/products/Frame_192673.png",
                  },
                  {
                    country: "马来西亚",
                    type: "QR Code",
                    logo: "/products/image_ma_152.png",
                  },
                  {
                    country: "泰国",
                    type: "E-Wallets",
                    logo: "/products/Frame_192674.png",
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="px-8 py-8 text-lg font-semibold text-slate-900 whitespace-nowrap">
                      {row.country}
                    </td>
                    <td className="px-8 py-8 text-lg font-medium text-slate-800 whitespace-nowrap">
                      {row.type}
                    </td>
                    <td className="px-4 lg:px-8 py-6 min-w-[480px] lg:min-w-0">
                      <img
                        src={row.logo}
                        alt="payment logo"
                        className="h-24 lg:h-10 object-contain w-full min-w-[240px] lg:w-auto lg:min-w-0"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

