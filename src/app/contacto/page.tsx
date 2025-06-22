import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Meta tags específicos para Contacto
export const metadata: Metadata = {
  title: "Contacto - Mi Sitio Optimizado | Consultoría SEO",
  description: "¿Necesitas ayuda con SEO o desarrollo web? Contáctanos para una consulta gratuita. Expertos en Next.js, optimización web y posicionamiento en Google.",
  keywords: ["contacto", "consultoría SEO", "desarrollo web", "consulta gratuita", "expertos Next.js"],
  authors: [{ name: "Equipo Mi Sitio Optimizado" }],
  openGraph: {
    title: "Contacto - Mi Sitio Optimizado | Consultoría SEO Profesional",
    description: "Ponte en contacto con nuestros expertos en SEO y desarrollo web. Consulta gratuita disponible.",
    url: "https://mi-sitio-optimizado.com/contacto",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Contacto - Mi Sitio Optimizado, expertos en SEO y desarrollo web",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - Consultoría SEO Profesional",
    description: "¿Necesitas optimizar tu sitio web? Contáctanos para una consulta gratuita con expertos en SEO.",
    images: ["/next.svg"],
    creator: "@misitioopt",
  },
  alternates: {
    canonical: "/contacto",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/next.svg"
              alt="Mi Sitio Optimizado - Volver al inicio"
              width={120}
              height={24}
              priority
              className="dark:invert"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              Inicio
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              Blog
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-teal-600 dark:text-teal-400 font-semibold">
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
            ¡Hablemos de tu <span className="text-teal-600 dark:text-teal-400">Proyecto</span>!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-inter">
            ¿Listo para llevar tu sitio web al siguiente nivel? Nuestros expertos en SEO 
            y desarrollo web están aquí para ayudarte.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📝 Envíanos un Mensaje
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tipo de Servicio
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="auditoria-seo">Auditoría SEO</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="optimizacion-rendimiento">Optimización de Rendimiento</option>
                  <option value="consultoria-general">Consultoría General</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Enviar Mensaje 🚀
              </button>
            </form>
          </section>

          {/* Información de Contacto */}
          <section className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                📞 Información de Contacto
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">contacto@mi-sitio-optimizado.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Horario</h3>
                    <p className="text-gray-600 dark:text-gray-300">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                🎯 ¿Por qué Elegirnos?
              </h2>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Consulta inicial gratuita</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Expertos certificados en SEO</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Especialistas en Next.js</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Resultados medibles y reportes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Respuesta en menos de 24h</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400 mt-16">
        <p>&copy; 2025 Mi Sitio Optimizado. Expertos en SEO y desarrollo web.</p>
      </footer>
    </div>
  );
}
