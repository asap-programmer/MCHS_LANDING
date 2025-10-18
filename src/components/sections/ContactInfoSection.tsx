export default function ContactInfoSection() {
  const contactMethods = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      title: 'Телефон',
      main: '+7 (495) 123-45-67',
      href: 'tel:+74951234567',
      additional: 'Пн-Пт: 9:00 - 18:00',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      badge: 'Звоните сейчас',
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      title: 'Email',
      main: 'info@mchs-license.ru',
      href: 'mailto:info@mchs-license.ru',
      additional: 'Ответим в течение часа',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      badge: 'Быстрый ответ',
    },
    {
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
      title: 'Адрес',
      main: 'г. Москва, ул. Примерная, д. 1',
      href: null,
      additional: 'Офис 101',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      badge: 'Приходите к нам',
    },
  ];

  const socialLinks = [
    {
      name: 'VK',
      fullName: 'ВКонтакте',
      href: '#',
      icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 576 512"
        className="w-8 h-8 text-blue-500"
      >
        <path
          stroke="none"
          d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6"
        ></path>
      </svg>
      ),
    },
    {
      name: 'TG',
      fullName: 'Telegram',
      href: '#',
      icon: (
        <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-blue-500"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
  >
    <path
      stroke="none"
      d="m446.7 98.6-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2"
    ></path>
  </svg>
      ),
    },
    {
      name: 'WA',
      fullName: 'WhatsApp',
      href: '#',
      icon: (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        className="w-8 h-8 text-blue-500"
      >
        <path
          stroke="none"
          d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"
        ></path>
      </svg>
      ),
    },
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', hours: '9:00 - 18:00' },
    { day: 'Суббота', hours: '10:00 - 16:00' },
    { day: 'Воскресенье', hours: 'Выходной' },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
              Контакты
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный способ связи. Мы всегда готовы ответить на ваши вопросы
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Badge */}
                <div className={`inline-block px-3 py-1 ${method.bgColor} rounded-full mb-4`}>
                  <span className={`text-xs font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                    {method.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>

                    {method.icon}

                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>

                {/* Main Contact */}
                {method.href ? (
                  <a
                    href={method.href}
                    className={`inline-block text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent hover:underline mb-2`}
                  >
                    {method.main}
                  </a>
                ) : (
                  <p className="text-gray-800 text-lg font-semibold mb-2">{method.main}</p>
                )}

                {/* Additional Info */}
                <p className="text-gray-600 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {method.additional}
                </p>

                {/* CTA Arrow */}
                {method.href && (
                  <div className="mt-4 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Связаться</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Decorative Corner Element */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${method.color} opacity-5 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Two Column Layout: Working Hours & Social */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Working Hours */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Режим работы</h3>
            </div>
            <div className="space-y-3">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700 font-medium">{schedule.day}</span>
                  <span className="text-blue-600 font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-lg text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Мы в соцсетях</h3>
            </div>
            <p className="text-blue-100 mb-6">Следите за новостями и получайте полезные советы</p>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-300 hover:scale-105 border-2 border-white/20 hover:border-white/40"
                  title={social.fullName}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                        {social.icon}

                    </div>
                    <span className="text-white font-semibold text-sm">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
            </p>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Оставить заявку
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
