'use client';

import { useState } from 'react';
import { useFormSubmit } from '../FormSubmitContext';

export default function ContactFormSection() {
  const onSubmit = useFormSubmit();
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [touched, setTouched] = useState({ name: false, phone: false });

  // Валидация имени
  const validateName = (name: string) => {
    if (!name.trim()) {
      return 'Имя обязательно для заполнения';
    }
    if (name.trim().length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    if (!/^[а-яА-ЯёЁa-zA-Z\s-]+$/.test(name)) {
      return 'Имя может содержать только буквы';
    }
    return '';
  };

  // Валидация телефона
  const validatePhone = (phone: string) => {
    if (!phone.trim()) {
      return 'Телефон обязателен для заполнения';
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 11) {
      return 'Введите полный номер телефона';
    }
    return '';
  };

  // Форматирование телефона
  const formatPhone = (value: string) => {
    const phoneDigits = value.replace(/\D/g, '');
    if (phoneDigits.length === 0) return '';
    if (phoneDigits.length <= 1) return `+${phoneDigits}`;
    if (phoneDigits.length <= 4) return `+${phoneDigits.slice(0, 1)} (${phoneDigits.slice(1)}`;
    if (phoneDigits.length <= 7) return `+${phoneDigits.slice(0, 1)} (${phoneDigits.slice(1, 4)}) ${phoneDigits.slice(4)}`;
    if (phoneDigits.length <= 9) return `+${phoneDigits.slice(0, 1)} (${phoneDigits.slice(1, 4)}) ${phoneDigits.slice(4, 7)}-${phoneDigits.slice(7)}`;
    return `+${phoneDigits.slice(0, 1)} (${phoneDigits.slice(1, 4)}) ${phoneDigits.slice(4, 7)}-${phoneDigits.slice(7, 9)}-${phoneDigits.slice(9, 11)}`;
  };

  const handleNameChange = (value: string) => {
    setFormData({ ...formData, name: value });
    if (touched.name) {
      setErrors({ ...errors, name: validateName(value) });
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    setFormData({ ...formData, phone: formatted });
    if (touched.phone) {
      setErrors({ ...errors, phone: validatePhone(formatted) });
    }
  };

  const handleBlur = (field: 'name' | 'phone') => {
    setTouched({ ...touched, [field]: true });
    if (field === 'name') {
      setErrors({ ...errors, name: validateName(formData.name) });
    } else {
      setErrors({ ...errors, phone: validatePhone(formData.phone) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация всех полей
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);

    setErrors({ name: nameError, phone: phoneError });
    setTouched({ name: true, phone: true });

    if (nameError || phoneError) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setIsSuccess(true);
      setFormData({ name: '', phone: '' });
      setTouched({ name: false, phone: false });
      setErrors({ name: '', phone: '' });

      // Убираем анимацию успеха через 5 секунд
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-10 md:p-16 shadow-2xl animate-scale-in">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-xl text-green-100 mb-6">
                Спасибо за ваш запрос. Наш специалист свяжется с вами в течение 15 минут.
              </p>
              <div className="flex items-center justify-center gap-2 text-green-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ожидаемое время ответа: 15 минут</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 md:p-16 shadow-2xl overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Получите бесплатную консультацию
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="space-y-6">
                {/* Поле имени */}
                <div>
                  <label htmlFor="form-name" className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Ваше имя *
                  </label>
                  <div className="relative">
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-5 py-4 border-2 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/60 backdrop-blur-sm transition-all ${
                        errors.name && touched.name
                          ? 'border-red-300 focus:ring-red-300'
                          : 'border-white/20'
                      }`}
                      placeholder="Иван Иванов"
                    />
                    {errors.name && touched.name && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.name && touched.name && (
                    <p className="mt-2 text-sm text-red-200 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Поле телефона */}
                <div>
                  <label htmlFor="form-phone" className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Телефон *
                  </label>
                  <div className="relative">
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full px-5 py-4 border-2 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/60 backdrop-blur-sm transition-all ${
                        errors.phone && touched.phone
                          ? 'border-red-300 focus:ring-red-300'
                          : 'border-white/20'
                      }`}
                      placeholder="+7 (999) 123-45-67"
                    />
                    {errors.phone && touched.phone && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.phone && touched.phone && (
                    <p className="mt-2 text-sm text-red-200 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all font-bold text-lg disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Политика конфиденциальности */}
                <div className="flex items-start gap-2 text-sm text-blue-100">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
