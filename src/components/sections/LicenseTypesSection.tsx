"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LicenseTypesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const licenseTypes = [
    {
      id: "fire-extinguishing",
      image: "https://pozhsystems.ru/wp-content/uploads/2020/07/skud.jpg",
      title: "Системы пожаротушения",
      description:
        "Монтаж, техническое обслуживание и ремонт систем пожаротушения и их элементов, включая диспетчеризацию и проведение пусконаладочных работ.",
      color: "from-red-500 to-red-600",
    },
    {
      id: "fire-alarm",
      image:
        "https://expertsb.kz/wp-content/uploads/2024/04/pozharnaya-bezopasnost-shymkent.webp",
      title: "Пожарная сигнализация",
      description:
        "Монтаж, техническое обслуживание и ремонт систем пожарной и охранно-пожарной сигнализации и их элементов, включая диспетчеризацию и проведение пусконаладочных работ.",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "water-supply",
      image:
        "https://nimbus-spb.ru/app/uploads/2024/02/nnij-protivopozharnyj-vodoprovod-min.webp",
      title: "Противопожарное водоснабжение",
      description:
        "Монтаж, техническое обслуживание и ремонт систем противопожарного водоснабжения и их элементов, включая диспетчеризацию и проведение пусконаладочных работ.",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "smoke-ventilation",
      image:
        "https://ceds.ru/local/templates/qwent/assets/img/slide/Sistema-dymoudaleniya-protivodymnaya-ventilyatsiya.webp",
      title: "Противодымная вентиляция",
      description:
        "Монтаж, техническое обслуживание и ремонт автоматических систем (элементов автоматических систем) противодымной вентиляции, включая диспетчеризацию и проведение пусконаладочных работ.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "evacuation-systems",
      image:
        "https://spbmchs.ru/wp-content/uploads/2017/03/sistemy-opovescheniya.jpg",
      title: "Системы оповещения и эвакуации",
      description:
        "Монтаж, техническое обслуживание и ремонт систем оповещения и эвакуации при пожаре и их элементов, включая диспетчеризацию и проведение пусконаладочных работ, в том числе фотолюминесцентных эвакуационных систем и их элементов.",
      color: "from-green-500 to-green-600",
    },
    {
      id: "fire-notification",
      image:
        "https://www.prom.uz/_ipx/f_webp/https://devel.prom.uz/upload/reduced/products/39/ba/39ba0d6a320589a848c5cc4fbbccfec3.png",
      title: "Передача извещений о пожаре",
      description:
        "Монтаж, техническое обслуживание и ремонт автоматических систем (элементов автоматических систем) передачи извещений о пожаре, включая диспетчеризацию и проведение пусконаладочных работ.",
      color: "from-teal-500 to-teal-600",
    },
    {
      id: "fire-curtains",
      image:
        "https://стекло-стиль.рф/sites/default/files/styles/full_wm/public/shtory_zanaveski.jpg?itok=9M5TlFHm",
      title: "Противопожарные занавесы и завесы",
      description:
        "Монтаж, техническое обслуживание и ремонт противопожарных занавесов и завес, включая диспетчеризацию и проведение пусконаладочных работ.",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "fire-doors",
      image:
        "https://www.pozhmashina.ru/wp-content/uploads/2022/01/zapolnenie-proemov-v-protivopozharnyh-pregradah-1.jpg",
      title: "Заполнения проемов",
      description:
        "Монтаж, техническое обслуживание и ремонт заполнений проемов в противопожарных преградах.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "fire-protection",
      image:
        "https://alialtechno.ru/upload/iblock/dc3/l0atyiph2wb4r1m2deebq3i49cp5zxjb.jpg",
      title: "Огнезащита",
      description:
        "Выполнение работ по огнезащите материалов, изделий и конструкций.",
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "primary-fire-equipment",
      image:
        "https://static.tildacdn.com/tild3931-3863-4366-b833-386536343763/AdobeStock_129623248.jpeg",
      title: "Первичные средства пожаротушения",
      description:
        "Монтаж, техническое обслуживание и ремонт первичных средств пожаротушения.",
      color: "from-rose-500 to-rose-600",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
              Виды лицензий
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Чем вы планируете заниматься?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Рассмотрим для выполнения каких именно видов деятельности требуется
            получать лицензию МЧС.
          </p>
        </div>

        {/* Info Block */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 mb-12 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Кому необходима лицензия МЧС?
          </h3>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Организациям и ИП, чья работа связана с{" "}
                <strong>тушением пожаров</strong> — деятельность по спасению
                людей, имущества и ликвидации пожаров.
              </span>
            </p>
            <p className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Организациям и ИП, проводящим работы по{" "}
                <strong>
                  монтажу, техническому обслуживанию и ремонту средств
                  обеспечения пожарной безопасности
                </strong>{" "}
                зданий и сооружений.
              </span>
            </p>
          </div>
        </div>

        {/* License Type Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {licenseTypes.map((type, index) => (
            <div
              key={type.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <Link href={`/license/${type.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={type.image}
                    alt={type.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                  ></div>

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg font-bold text-gray-900">
                    {index + 1}
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <Link href={`/license/${type.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {type.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {type.description}
                </p>

                {/* Learn More Button (appears on hover) */}
                <Link
                  href={`/license/${type.id}`}
                  className={`inline-flex items-center gap-2 text-blue-600 font-semibold text-sm transition-all duration-300 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  Подробнее
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Bottom accent bar */}
              <div
                className={`h-1 bg-gradient-to-r ${
                  type.color
                } transform origin-left transition-all duration-300 ${
                  hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 md:p-8 border-l-4 border-amber-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Важно!</h3>
              <p className="text-gray-700 leading-relaxed">
                Вышеуказанный перечень работ и услуг, требующих обязательного
                получения лицензии МЧС, является{" "}
                <strong>исчерпывающим и закрытым</strong> согласно Постановлению
                Правительства РФ от 28.07.2020 № 1128.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
