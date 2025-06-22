import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { LazyLargeComponent, LazyFontShowcase } from "../components/LazyComponents";
import InteractiveChart from "../components/InteractiveChart";

// Meta tags específicos para esta página
export const metadata: Metadata = {
  title: "Inicio - Optimización SEO con Next.js",
  description: "Página principal de nuestro sitio optimizado. Aprende las mejores técnicas de SEO y rendimiento web con Next.js.",
  keywords: ["inicio", "home", "SEO", "Next.js", "optimización", "página principal"],
  openGraph: {
    title: "Inicio - Mi Sitio Optimizado",
    description: "Bienvenido a nuestro sitio web optimizado para SEO. Descubre técnicas avanzadas de optimización web.",
    images: ["/next.svg"],
  },
  twitter: {
    title: "Inicio - Mi Sitio Optimizado",
    description: "Bienvenido a nuestro sitio web optimizado para SEO. Descubre técnicas avanzadas de optimización web.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Image
              src="/next.svg"
              alt="Mi Sitio Optimizado - Logo de empresa especializada en SEO y Next.js"
              width={120}
              height={24}
              priority
              className="dark:invert"
              sizes="120px"
              quality={85}
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <section id="inicio" className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
            Bienvenido a Mi Sitio 
            <span className="text-blue-600 dark:text-blue-400"> Optimizado</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-inter">
            Aprende cómo mejorar el rendimiento y SEO en Next.js. Descubre técnicas avanzadas 
            de optimización web que harán que tu sitio destaque en los motores de búsqueda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Comenzar Ahora
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Ver Documentación
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="servicios" className="grid md:grid-cols-3 gap-8 mb-16">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              {/* Imagen SVG optimizada inline */}
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Icono de rendimiento">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Rendimiento Optimizado
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Técnicas avanzadas de optimización para mejorar la velocidad de carga y Core Web Vitals.
            </p>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              {/* Imagen from public folder - lazy loading por defecto */}
              <Image
                src="/vercel.svg"
                alt="Icono de SEO avanzado representando optimización web"
                width={24}
                height={24}
                className="text-green-600 dark:text-green-400"
                sizes="24px"
                quality={90}
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              SEO Avanzado
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Meta tags dinámicos, datos estructurados y mejores prácticas para posicionamiento web.
            </p>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              {/* Placeholder optimizado */}
              <Image
                src="/globe.svg"
                alt="Icono de experiencia de usuario global"
                width={24}
                height={24}
                className="text-purple-600 dark:text-purple-400"
                sizes="24px"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo="
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Experiencia de Usuario
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Interfaces modernas y responsivas que garantizan una excelente experiencia del usuario.
            </p>
          </article>
        </section>

        {/* Sección de demostración de imágenes optimizadas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Ejemplos de Optimización de Imágenes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Imagen con prioridad alta */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Imagen con Priority (Above the Fold)
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/next.svg"
                  alt="Imagen hero optimizada para SEO - Tecnologías Next.js"
                  fill
                  priority
                  className="object-contain p-8 dark:invert"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                ✅ Priority: true, ✅ Fill layout, ✅ Responsive sizes
              </p>
            </div>

            {/* Imagen con lazy loading */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Imagen con Lazy Loading
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/vercel.svg"
                  alt="Imagen optimizada con lazy loading - Plataforma Vercel"
                  fill
                  className="object-contain p-8 dark:invert"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                ✅ Lazy loading, ✅ Quality optimizada, ✅ Responsive
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contacto" className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Listo para optimizar tu sitio web?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Contáctanos para obtener más información sobre cómo implementar estas técnicas 
            de optimización en tu proyecto Next.js.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
            Contactar Ahora
          </button>
        </section>

        {/* Secciones con Lazy Loading */}
        <section className="space-y-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Componentes con Lazy Loading
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              Los siguientes componentes se cargan solo cuando son necesarios para mejorar el rendimiento inicial
            </p>
          </div>

          {/* Componente pesado con lazy loading */}
          <div>
            <LazyLargeComponent />
          </div>

          {/* Dashboard interactivo con lazy loading */}
          <div>
            <InteractiveChart />
          </div>

          {/* Showcase de fuentes optimizadas */}
          <div>
            <LazyFontShowcase />
          </div>
        </section>

        {/* Sección de navegación a páginas especializadas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explora Más Contenido Especializado
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/blog"
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 block"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Blog SEO
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Aprende estrategias avanzadas y mantente actualizado con las últimas tendencias en SEO.</p>
            </Link>

            <Link 
              href="/herramientas-seo"
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 block"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Herramientas SEO
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Analiza y valida el SEO de tu sitio con nuestras herramientas gratuitas.
              </p>
            </Link>

            <Link 
              href="/ejemplo-rich-snippets"
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 block"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Rich Snippets
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ejemplos prácticos de cómo implementar datos estructurados en tus páginas.
              </p>
            </Link>

            <Link 
              href="/contacto"
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 block"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Contacto
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ponte en contacto para consultas de SEO y optimización web.
              </p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 Mi Sitio Optimizado. Todos los derechos reservados.</p>
        <p className="mt-2">Desarrollado con ❤️ usando Next.js y técnicas avanzadas de SEO</p>
      </footer>
    </div>
  );
}
