import type { Metadata } from "next";
import SEOChecker from "../../components/SEOChecker";

export const metadata: Metadata = {
  title: "Herramientas SEO - Validación y Análisis",
  description: "Herramientas gratuitas para validar y analizar el SEO de tu sitio web. Verifica meta tags, Open Graph, Twitter Cards y más.",
  keywords: ["herramientas SEO", "validación meta tags", "análisis SEO", "checker", "Open Graph", "Twitter Cards"],
  openGraph: {
    title: "Herramientas SEO - Validación y Análisis",
    description: "Herramientas gratuitas para validar y analizar el SEO de tu sitio web. Verifica meta tags, Open Graph, Twitter Cards y más.",
    images: ["/og-tools-image.jpg"],
  },
  twitter: {
    title: "Herramientas SEO - Validación y Análisis",
    description: "Herramientas gratuitas para validar y analizar el SEO de tu sitio web.",
    images: ["/twitter-tools-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function HerramientasSEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
            Herramientas
            <span className="text-purple-600 dark:text-purple-400"> SEO</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Valida y optimiza el SEO de tu sitio web con nuestras herramientas gratuitas.
            Analiza meta tags, Open Graph, Twitter Cards y más.
          </p>
        </header>

        {/* SEO Checker Tool */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              🔍 Analizador de SEO
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ingresa una URL para analizar sus meta tags, puntuación SEO y obtener recomendaciones de mejora.
            </p>
            <SEOChecker />
          </div>
        </section>

        {/* Quick SEO Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Consejos Rápidos de SEO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Meta Tags
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Título: 30-60 caracteres</li>
                <li>• Descripción: 120-160 caracteres</li>
                <li>• Incluye keywords relevantes</li>
                <li>• Cada página debe ser única</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🖼️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Open Graph
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• og:title único por página</li>
                <li>• og:description atractiva</li>
                <li>• og:image 1200x630px</li>
                <li>• og:url absoluta y limpia</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Rendimiento
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Core Web Vitals óptimos</li>
                <li>• Imágenes optimizadas</li>
                <li>• Lazy loading</li>
                <li>• Compresión GZIP/Brotli</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Sitemap
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Actualización automática</li>
                <li>• Incluye todas las páginas</li>
                <li>• Prioridades correctas</li>
                <li>• Submit a Search Console</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Robots.txt
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Permite acceso a contenido</li>
                <li>• Bloquea páginas privadas</li>
                <li>• Referencia al sitemap</li>
                <li>• Crawl delays apropiados</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Analytics
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>• Google Search Console</li>
                <li>• Google Analytics 4</li>
                <li>• Lighthouse CI</li>
                <li>• PageSpeed Insights</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Validation Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Herramientas de Validación Externas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://validator.w3.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                W3C HTML Validator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Valida que tu HTML sea semánticamente correcto y sin errores.
              </p>
            </a>

            <a 
              href="https://developers.facebook.com/tools/debug/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-600"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Facebook Debugger
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Verifica cómo se ve tu contenido cuando se comparte en Facebook.
              </p>
            </a>

            <a 
              href="https://cards-dev.twitter.com/validator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-sky-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Twitter Card Validator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Prueba cómo se visualizan tus Twitter Cards.
              </p>
            </a>

            <a 
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-green-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Rich Results Test
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Verifica si tu página es elegible para rich results de Google.
              </p>
            </a>

            <a 
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                PageSpeed Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Analiza el rendimiento y Core Web Vitals de tu sitio.
              </p>
            </a>

            <a 
              href="https://www.xml-sitemaps.com/validate-xml-sitemap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-purple-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Sitemap Validator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Valida que tu sitemap XML tenga el formato correcto.
              </p>
            </a>
          </div>
        </section>

        {/* Local Testing Info */}
        <section className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
            ⚠️ Nota sobre Testing Local
          </h2>
          <div className="text-yellow-700 dark:text-yellow-300 space-y-3">
            <p>
              Algunas herramientas externas no pueden acceder a tu sitio local (localhost).
              Para validar completamente tu SEO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Despliega tu sitio en un entorno público (Vercel, Netlify, etc.)</li>
              <li>Usa ngrok para exponer tu localhost temporalmente</li>
              <li>Configura un dominio de prueba en tu hosting</li>
            </ul>
            <p className="mt-4">
              <strong>URLs de tu sitio para validar:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 font-mono text-sm">
              <li>/sitemap.xml - Sitemap principal</li>
              <li>/robots.txt - Archivo robots</li>
              <li>/api/sitemap - Sitemap alternativo (API)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
