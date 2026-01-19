'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useI18n } from '@/i18n/i18n-context';

export default function SolutionsIndexPage() {
  const { t } = useI18n();
  
  const solutions = [
    {
      title: t('solutions.index.items.localLife.title'),
      desc: t('solutions.index.items.localLife.description'),
      icon: '🍽️',
      link: '/solutions/local-life',
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      title: t('solutions.index.items.logistics.title'),
      desc: t('solutions.index.items.logistics.description'),
      icon: '📦',
      link: '/solutions/logistics',
      gradient: 'from-primary-400 to-primary-600'
    },
    {
      title: t('solutions.index.items.gaming.title'),
      desc: t('solutions.index.items.gaming.description'),
      icon: '🎮',
      link: '/solutions/gaming',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: t('solutions.index.items.fintech.title'),
      desc: t('solutions.index.items.fintech.description'),
      icon: '💰',
      link: '/solutions/fintech',
      gradient: 'from-green-400 to-green-600'
    },
    {
      title: t('solutions.index.items.retail.title'),
      desc: t('solutions.index.items.retail.description'),
      icon: '🛒',
      link: '/solutions/retail',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      title: t('solutions.index.items.crossBorder.title'),
      desc: t('solutions.index.items.crossBorder.description'),
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
            {t('solutions.index.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('solutions.index.description')}
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
                  {t('solutions.index.learnMore')}
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

