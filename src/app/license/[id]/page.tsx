import { notFound } from "next/navigation";
import Link from "next/link";
import { getLicenseById, getAllLicenseIds } from "@/data/licenseData";
import Image from "next/image";

export async function generateStaticParams() {
  const ids = getAllLicenseIds();
  return ids.map((id) => ({ id }));
}

export default async function LicenseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const license = getLicenseById(id);

  const first_license_images =
    getLicenseById("fire-extinguishing")?.galleryImages;

  if (!license) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Главная
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
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
            <Link
              href="/#license-types"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Виды лицензий
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
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
            <span className="text-gray-900 font-medium">{license.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            fill
            src={license.mainImage}
            alt={license.title}
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg
                className="w-5 h-5 text-blue-400"
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
              <span className="text-sm font-semibold">Лицензия МЧС</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {license.title}
            </h1>

            {/* Short Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {license.shortDescription}
            </p>

            {/* CTA Button */}
            <Link
              href="/#form"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Получить консультацию
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Full Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Описание деятельности
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {license.fullDescription}
                </p>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Лицензионные требования
                </h2>
                <ul className="space-y-4">
                  {license.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mt-1`}
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 flex-1">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Процесс получения лицензии
                </h2>
                <div className="space-y-6">
                  {license.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center font-bold text-white shadow-lg`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-700 text-lg">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Необходимые документы
                </h2>
                <ul className="space-y-3">
                  {license.documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="">
              <div className="sticky top-20 space-y-6 ">
                <div
                  className={`bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl `}
                >
                  <h3 className="text-2xl font-bold mb-4">Нужна помощь?</h3>
                  <p className="text-white/90 mb-6">
                    Наши специалисты помогут получить лицензию под ключ
                  </p>

                  <div className="space-y-4 mb-6">
                    <a
                      href="tel:+74951234567"
                      className="flex items-center gap-3 text-white hover:text-white/90 transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">Телефон</div>
                        <div className="font-semibold">+7 (495) 123-45-67</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">Срок получения</div>
                        <div className="font-semibold">От 30 дней</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/#form"
                    className="block w-full bg-white text-center py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                    style={{ color: "rgb(59 130 246)" }}
                  >
                    Оставить заявку
                  </Link>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Важно знать
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Лицензия МЧС выдается на неограниченный срок. Работать
                        без лицензии запрещено законом и влечет административную
                        ответственность.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Card */}
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-16">
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">Примеры работ</h2> */}
            <div className="grid md:grid-cols-3 gap-6">
              {first_license_images?.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={image}
                    alt={`${license.title} - фото ${index + 1}`}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`relative py-16 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы получить лицензию?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Оставьте заявку, и мы проконсультируем вас по всем вопросам
          </p>
          <Link
            href="/#form"
            className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            style={{ color: "rgb(59 130 246)" }}
          >
            Бесплатная консультация
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
