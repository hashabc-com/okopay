'use client';

import { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';

type FormData = {
  name: string;
  email: string;
  phonePrefix: string;
  phone: string;
  countries: string[];
  company: string;
  inquiryType: string;
  note: string;
};

export default function ContactForm() {
  const { t } = useI18n();
  
  const COUNTRIES = [
    { label: t('consult.form.countries.indonesia'), code: 'ID', flag: '/country/icon_country_ID.png' },
    { label: t('consult.form.countries.philippines'), code: 'PH', flag: '/country/icon_country_PH.png' },
    { label: t('consult.form.countries.malaysia'), code: 'MY', flag: '/country/icon_country_MS.png' },
    { label: t('consult.form.countries.thailand'), code: 'TH', flag: '/country/icon_country_TH.png' },
    { label: t('consult.form.countries.hongkong'), code: 'HK', flag: '/country/icon_country_HK.png' },
    { label: t('consult.form.countries.mexico'), code: 'MX', flag: '/country/icon_country_MX.png' },
    { label: t('consult.form.countries.brazil'), code: 'BR', flag: '/country/icon_country_BR.png' },
    { label: t('consult.form.countries.dubai'), code: 'AE', flag: '/country/icon_country_dubai.png' },
    { label: t('consult.form.countries.other'), code: 'OTHER', flag: '/country/icon_country_other.png' },
  ];

  const PHONE_PREFIXES = [
    { code: '+86', label: 'CN +86' },
    { code: '+62', label: 'ID +62' },
    { code: '+63', label: 'PH +63' },
    { code: '+60', label: 'MY +60' },
    { code: '+66', label: 'TH +66' },
    { code: '+852', label: 'HK +852' },
    { code: '+52', label: 'MX +52' },
    { code: '+55', label: 'BR +55' },
    { code: '+971', label: 'AE +971' },
  ];

  const INQUIRY_TYPES = [
    t('consult.form.inquiryTypes.consult'),
    t('consult.form.inquiryTypes.quote'),
    t('consult.form.inquiryTypes.other'),
  ];

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phonePrefix: '+86',
    phone: '',
    countries: [],
    company: '',
    inquiryType: '',
    note: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCountryToggle = (countryLabel: string) => {
    setFormData((prev) => {
      const newCountries = prev.countries.includes(countryLabel)
        ? prev.countries.filter((c) => c !== countryLabel)
        : [...prev.countries, countryLabel];
      return { ...prev, countries: newCountries };
    });
    if (errors.countries) {
      setErrors((prev) => ({ ...prev, countries: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = t('consult.form.errors.nameRequired');
    if (!formData.email.trim()) newErrors.email = t('consult.form.errors.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('consult.form.errors.emailInvalid');
    if (!formData.phone.trim()) newErrors.phone = t('consult.form.errors.phoneRequired');
    if (formData.countries.length === 0) newErrors.countries = t('consult.form.errors.countryRequired');
    if (!formData.company.trim()) newErrors.company = t('consult.form.errors.companyRequired');
    if (!formData.inquiryType) newErrors.inquiryType = t('consult.form.errors.inquiryTypeRequired');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert(t('consult.form.submitSuccess'));
      // Reset form or redirect
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-primary-50">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        {t('consult.form.title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* 姓名 */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-900">
              {t('consult.form.name')}<span className="text-primary-600">{t('consult.form.required')}</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t('consult.form.namePlaceholder')}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-slate-200'
              } focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
            />
          </div>

          {/* 联系邮箱 */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-900">
              {t('consult.form.email')}<span className="text-primary-600">{t('consult.form.required')}</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('consult.form.emailPlaceholder')}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-slate-200'
              } focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
            />
          </div>
        </div>

        {/* 联系号码 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900">
            {t('consult.form.phone')}<span className="text-primary-600">{t('consult.form.required')}</span>
          </label>
          <div className="flex">
            <select
              name="phonePrefix"
              value={formData.phonePrefix}
              onChange={handleInputChange}
              className="px-4 py-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all w-32"
            >
              {PHONE_PREFIXES.map((prefix) => (
                <option key={prefix.code} value={prefix.code}>
                  {prefix.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t('consult.form.phonePlaceholder')}
              className={`flex-1 px-4 py-3 rounded-r-lg border ${
                errors.phone ? 'border-red-500' : 'border-slate-200'
              } focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
            />
          </div>
        </div>

        {/* 国家或地区 */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-900">
            {t('consult.form.country')}<span className="text-primary-600">{t('consult.form.required')}</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {COUNTRIES.map((country) => (
              <label
                key={country.label}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.countries.includes(country.label)}
                    onChange={() => handleCountryToggle(country.label)}
                    className="peer w-5 h-5 border-2 border-slate-300 rounded focus:ring-primary-500 text-primary-600 cursor-pointer transition-colors checked:bg-primary-600 checked:border-primary-600"
                  />
                  {/* Custom Checkbox Style if needed, but standard with accent-color is often enough. 
                      Tailwind's form plugin handles this well, but here we rely on basic classes. 
                  */}
                </div>
                <span className="flex items-center text-slate-700 group-hover:text-primary-600 transition-colors">
                  <img 
                    src={country.flag} 
                    alt={country.label}
                    className="mr-2 w-6 h-6 object-contain"
                  />
                  {country.label}
                </span>
              </label>
            ))}
          </div>
          {errors.countries && (
            <p className="text-sm text-red-500 mt-1">
              {errors.countries}
            </p>
          )}
        </div>

        {/* 公司名称 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900">
            {t('consult.form.company')}<span className="text-primary-600">{t('consult.form.required')}</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder={t('consult.form.companyPlaceholder')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.company ? 'border-red-500' : 'border-slate-200'
            } focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
          />
        </div>

        {/* 咨询内容 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900">
            {t('consult.form.inquiryType')}<span className="text-primary-600">{t('consult.form.required')}</span>
          </label>
          <div className="relative">
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border appearance-none bg-white ${
                errors.inquiryType ? 'border-red-500 text-red-500' : 'border-slate-200 text-slate-900'
              } focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all`}
            >
              <option value="" disabled>{t('consult.form.inquiryTypePlaceholder')}</option>
              {INQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* 备注 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900">
            {t('consult.form.note')}
          </label>
          <div className="relative">
            <textarea
              name="note"
              value={formData.note}
              onChange={(e) => {
                if (e.target.value.length <= 200) {
                  handleInputChange(e);
                }
              }}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
            />
            <div className="absolute bottom-3 right-4 text-xs text-primary-400">
              {formData.note.length}/200
            </div>
          </div>
        </div>

        {/* 提交按钮 */}
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          {t('consult.form.submit')}
        </button>
      </form>
    </div>
  );
}

