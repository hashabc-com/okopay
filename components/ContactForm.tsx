'use client';

import { useState } from 'react';

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

const COUNTRIES = [
  { label: '印度尼西亚', code: 'ID', flag: '🇮🇩' },
  { label: '菲律宾', code: 'PH', flag: '🇵🇭' },
  { label: '马来西亚', code: 'MY', flag: '🇲🇾' },
  { label: '泰国', code: 'TH', flag: '🇹🇭' },
  { label: '中国香港', code: 'HK', flag: '🇭🇰' },
  { label: '墨西哥', code: 'MX', flag: '🇲🇽' },
  { label: '巴西', code: 'BR', flag: '🇧🇷' },
  { label: '迪拜', code: 'AE', flag: '🇦🇪' },
  { label: '其他', code: 'OTHER', flag: '🌐' },
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
  '支付接入',
  '商务合作',
  '技术支持',
  '其他咨询',
];

export default function ContactForm() {
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
    if (!formData.name.trim()) newErrors.name = '请填写您的姓名';
    if (!formData.email.trim()) newErrors.email = '请填写您的联系邮箱';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = '邮箱格式不正确';
    if (!formData.phone.trim()) newErrors.phone = '请填写您的联系号码';
    if (formData.countries.length === 0) newErrors.countries = '请选择国家或地区';
    if (!formData.company.trim()) newErrors.company = '请填写您的公司名称';
    if (!formData.inquiryType) newErrors.inquiryType = '请选择咨询内容';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('提交成功！我们将尽快联系您。');
      // Reset form or redirect
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-blue-50">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        立即开启高效支付之旅！
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* 姓名 */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-900">
              姓名<span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="请填写您的姓名"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-slate-200'
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all`}
            />
          </div>

          {/* 联系邮箱 */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-900">
              联系邮箱<span className="text-blue-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="请填写您的联系邮箱"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-slate-200'
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all`}
            />
          </div>
        </div>

        {/* 联系号码 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900">
            联系号码<span className="text-blue-600">*</span>
          </label>
          <div className="flex">
            <select
              name="phonePrefix"
              value={formData.phonePrefix}
              onChange={handleInputChange}
              className="px-4 py-3 rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 text-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all w-32"
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
              placeholder="请填写您的联系号码"
              className={`flex-1 px-4 py-3 rounded-r-lg border ${
                errors.phone ? 'border-red-500' : 'border-slate-200'
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all`}
            />
          </div>
        </div>

        {/* 国家或地区 */}
        <div className="space-y-3">
          <label className="block text-sm font-bold text-slate-900">
            国家或地区<span className="text-blue-600">*</span>
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
                    className="peer w-5 h-5 border-2 border-slate-300 rounded focus:ring-blue-500 text-blue-600 cursor-pointer transition-colors checked:bg-blue-600 checked:border-blue-600"
                  />
                  {/* Custom Checkbox Style if needed, but standard with accent-color is often enough. 
                      Tailwind's form plugin handles this well, but here we rely on basic classes. 
                  */}
                </div>
                <span className="flex items-center text-slate-700 group-hover:text-blue-600 transition-colors">
                  <span className="mr-2 text-xl">{country.flag}</span>
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
            公司名称<span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="请填写您的公司名称"
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.company ? 'border-red-500' : 'border-slate-200'
            } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all`}
          />
        </div>

        {/* 咨询内容 */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-900">
            咨询内容<span className="text-blue-600">*</span>
          </label>
          <div className="relative">
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border appearance-none bg-white ${
                errors.inquiryType ? 'border-red-500 text-red-500' : 'border-slate-200 text-slate-900'
              } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all`}
            >
              <option value="" disabled>请选择</option>
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
            备注
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
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
            />
            <div className="absolute bottom-3 right-4 text-xs text-blue-400">
              {formData.note.length}/200
            </div>
          </div>
        </div>

        {/* 提交按钮 */}
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          提交
        </button>
      </form>
    </div>
  );
}
