"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/i18n-context";

export default function Home() {
  const { t } = useI18n();
  
  const licenses = [
    { name: "PJP3", icon: "/home/icon1.png" },
    { name: "VASP", icon: "/home/icon2.png" },
    { name: "EMI", icon: "/home/icon3.png" },
    { name: "MAS", icon: "/home/icon4.png" },
    { name: "MSO", icon: "/home/icon5.png" },
    { name: "MSB", icon: "/home/icon6.png" },
  ];

  const partners = [
    "/home/Alipay.png",
    "/home/BancNet.png",
    "/home/Bataan.png",
    "/home/Bosum.png",
    "/home/GCash.png",
    "/home/IGG.png",
    "/home/J&T.png",
    "/home/Maya.png",
    "/home/MiGame.png",
    "/home/PPMI.png",
    "/home/SEC.png",
    "/home/Shoplazza.png",
    "/home/Shuyi.png",
    "/home/Tantan.png",
    "/home/Wordpress.png",
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-primary-50 via-sky-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <Link
                href="/about/consult"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                {t('nav.getStarted')}
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[500px] animate-fade-in">
              <Image
                src="/home/img1.webp"
                alt="Hero Image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="relative py-32 from-slate-50 via-blue-50 to-indigo-50 text-slate-900 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              {t('home.licenses.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {t('home.licenses.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {licenses.map((license, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-200 border-2 border-primary-100 hover:border-primary-300 cursor-pointer group"
              >
                <div className="relative h-20 mb-4 transition-transform duration-200 group-hover:scale-105">
                  <Image
                    src={license.icon}
                    alt={license.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                  {license.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Partners Marquee */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "url(/home/fully_legally_bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          {/* Partners Marquee with fade effect */}
          <div className="mb-20 relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="overflow-hidden">
              <div className="flex animate-scroll">
                {[...partners, ...partners].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 w-32 mx-6">
                    <div className="relative h-16 grayscale hover:grayscale-0 transition-all duration-200 opacity-70 hover:opacity-100 cursor-pointer">
                      <Image
                        src={partner}
                        alt={`Partner ${index}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 leading-tight">
                {t('home.services.title')}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t('home.services.subtitle')}
              </p>
            </div>

            {/* Right Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-primary-100 hover:border-primary-200 cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  {t('home.services.local.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('home.services.local.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-primary-100 hover:border-primary-200 cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  {t('home.services.channels.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('home.services.channels.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-primary-100 hover:border-primary-200 cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  {t('home.services.cost.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('home.services.cost.description')}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-primary-100 hover:border-primary-200 cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">
                  {t('home.services.support.title')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('home.services.support.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </main>
  );
}


