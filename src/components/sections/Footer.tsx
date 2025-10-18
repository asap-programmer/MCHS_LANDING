import Logo from '../ui/Logo';

export default function Footer() {
  const services = [
    {
      name: 'Получение лицензии МЧС',
      href: '#info',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      name: 'Продление лицензии',
      href: '#info',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    },
    {
      name: 'Переоформление лицензии',
      href: '#info',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
    },
    {
      name: 'Консультации',
      href: '#form',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    },
  ];

  const quickLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'О лицензии', href: '#info' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Контакты', href: '#contact' },
  ];

  const contacts = [
    {
      label: 'Телефон',
      value: '+7 (495) 123-45-67',
      href: 'tel:+74951234567',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    },
    {
      label: 'Email',
      value: 'info@mchs-license.ru',
      href: 'mailto:info@mchs-license.ru',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
      label: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1, офис 101',
      href: null,
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
    },
  ];

  const workingHours = [
    { day: 'Пн-Пт', time: '9:00 - 18:00' },
    { day: 'Сб', time: '10:00 - 16:00' },
    { day: 'Вс', time: 'Выходной' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo className='text-white' />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Профессиональная помощь в получении лицензий МЧС для вашего бизнеса
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">С 2015 года</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">500+ лицензий</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-400">100% гарантия</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded"></div>
              Услуги
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.icon}
                    </svg>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded"></div>
              Навигация
            </h4>
            <ul className="space-y-3 mb-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-3 text-blue-400">Режим работы</h5>
              <div className="space-y-1">
                {workingHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-gray-400">
                    <span>{schedule.day}:</span>
                    <span className="font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded"></div>
              Контакты
            </h4>
            <ul className="space-y-4">
              {contacts.map((contact, index) => (
                <li key={index} className="group">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg className="w-4 h-4 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {contact.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{contact.label}</div>
                      {contact.href ? (
                        <a href={contact.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-300">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="#form"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 rounded-lg transition-all text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Оставить заявку
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Лицензия МЧС. Все права защищены.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Профессиональное лицензирование деятельности МЧС
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm hidden sm:inline">Мы в соцсетях:</span>
              <div className="flex gap-2">
                {['VK', 'TG', 'WA'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    title={social}
                  >
                    <span className="text-white font-bold text-xs">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              Информация на сайте носит ознакомительный характер и не является публичной офертой.
              Все услуги предоставляются в соответствии с действующим законодательством РФ.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
