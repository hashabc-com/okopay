'use client';

import { useI18n } from '@/i18n/i18n-context';

export default function Testimonials() {
  const { t } = useI18n();

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Small Business Owner',
      avatar: '👩‍💼',
      text: 'OkoPay has transformed how I handle international payments. Fast, reliable, and the fees are incredibly low!',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Freelancer',
      avatar: '👨‍💻',
      text: 'As a freelancer working with global clients, OkoPay makes receiving payments seamless. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'E-commerce Manager',
      avatar: '👩‍💻',
      text: 'The real-time tracking and instant transfers have made our cross-border operations so much smoother.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/80 border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-300 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
