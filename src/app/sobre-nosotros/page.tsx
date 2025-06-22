import type { Metadata } from "next";
import Image from "next/image";

// Meta tags específicos para la página Sobre Nosotros
export const metadata: Metadata = {
  title: "Sobre Nosotros - Mi Sitio Optimizado",
  description: "Conoce más sobre nuestro equipo y nuestra misión de crear sitios web optimizados con las mejores prácticas de SEO y rendimiento.",
  keywords: ["sobre nosotros", "equipo", "misión", "experiencia", "desarrollo web"],
  openGraph: {
    title: "Sobre Nosotros - Mi Sitio Optimizado",
    description: "Descubre quiénes somos y cómo podemos ayudarte a optimizar tu presencia en línea.",
    images: ["/next.svg"],
    type: "website",
  },
  twitter: {
    title: "Sobre Nosotros - Mi Sitio Optimizado",
    description: "Descubre quiénes somos y cómo podemos ayudarte a optimizar tu presencia en línea.",
  },
  alternates: {
    canonical: "/sobre-nosotros",
  },
};

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Image
              src="/next.svg"
              alt="Mi Sitio Optimizado Logo"
              width={120}
              height={24}
              priority
              className="dark:invert"
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Inicio
            </a>
            <a href="/sobre-nosotros" className="text-green-600 dark:text-green-400 font-semibold">
              Sobre Nosotros
            </a>
            <a href="/servicios" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Servicios
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre <span className="text-green-600 dark:text-green-400">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Somos un equipo apasionado por crear experiencias web excepcionales, 
            especializados en optimización SEO y desarrollo con Next.js.
          </p>
        </section>

        {/* Team Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ayudar a empresas y desarrolladores a crear sitios web que no solo se vean increíbles, 
              sino que también tengan un rendimiento excepcional y estén optimizados para motores de búsqueda.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Creemos que un buen SEO y rendimiento web son fundamentales para el éxito en línea, 
              y trabajamos incansablemente para hacer que estas tecnologías sean accesibles para todos.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestra Experiencia
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">5+ años en desarrollo web</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Especialistas en Next.js y React</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Expertos en optimización SEO</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">100+ proyectos completados</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Calidad
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos comprometemos a entregar código limpio, eficiente y bien documentado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovación
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Siempre buscamos las últimas tecnologías y mejores prácticas del sector.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Colaboración
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Trabajamos estrechamente con nuestros clientes para lograr los mejores resultados.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Estamos listos para ayudarte a llevar tu proyecto al siguiente nivel.
          </p>
          <a 
            href="/" 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Contactanos
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400 mt-16">
        <p>&copy; 2025 Mi Sitio Optimizado. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
