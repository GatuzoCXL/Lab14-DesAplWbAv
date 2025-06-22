import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Meta tags específicos para Blog
export const metadata: Metadata = {
  title: "Blog - Artículos sobre SEO y Desarrollo Web",
  description: "Descubre los últimos artículos sobre optimización SEO, Next.js, desarrollo web y mejores prácticas. Guías paso a paso y casos de estudio reales.",
  keywords: ["blog", "SEO", "artículos", "desarrollo web", "Next.js", "tutoriales", "guías"],
  authors: [{ name: "Equipo Mi Sitio Optimizado" }],
  openGraph: {
    title: "Blog - Mi Sitio Optimizado | Artículos sobre SEO",
    description: "Los mejores artículos sobre SEO, desarrollo web y optimización. Aprende con casos prácticos y tutoriales detallados.",
    url: "https://mi-sitio-optimizado.com/blog",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Blog de Mi Sitio Optimizado - Artículos sobre SEO y desarrollo web",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Artículos sobre SEO y Desarrollo",
    description: "Descubre técnicas avanzadas de SEO y desarrollo web con nuestros artículos especializados.",
    images: ["/next.svg"],
    creator: "@misitioopt",
  },
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

// Datos simulados de blog posts
const blogPosts = [
  {
    id: 1,
    title: "Guía Completa de SEO para Next.js 2025",
    excerpt: "Aprende las técnicas más avanzadas de SEO específicamente para aplicaciones Next.js...",
    date: "2025-06-15",
    author: "Juan Pérez",
    category: "SEO",
    readTime: "8 min",
    image: "/next.svg"
  },
  {
    id: 2,
    title: "Core Web Vitals: Optimización Práctica",
    excerpt: "Mejora tus métricas de Core Web Vitals con técnicas probadas y casos reales...",
    date: "2025-06-10",
    author: "María García",
    category: "Performance",
    readTime: "12 min",
    image: "/vercel.svg"
  },
  {
    id: 3,
    title: "Meta Tags Dinámicos en App Router",
    excerpt: "Implementa meta tags dinámicos eficientes en Next.js 13+ con App Router...",
    date: "2025-06-05",
    author: "Carlos López",
    category: "Desarrollo",
    readTime: "6 min",
    image: "/globe.svg"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/next.svg"
              alt="Mi Sitio Optimizado - Logo principal"
              width={120}
              height={24}
              priority
              className="dark:invert"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Inicio
            </Link>
            <Link href="/blog" className="text-purple-600 dark:text-purple-400 font-semibold">
              Blog
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
            Blog de <span className="text-purple-600 dark:text-purple-400">SEO</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-inter">
            Artículos especializados sobre SEO, desarrollo web y optimización. 
            Aprende con casos prácticos y tutoriales paso a paso.
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Image
                  src={post.image}
                  alt={`Imagen del artículo: ${post.title}`}
                  width={400}
                  height={225}
                  className="object-contain p-8 dark:invert"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Por {post.author}</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Newsletter Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            📧 Suscríbete al Newsletter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Recibe los mejores artículos sobre SEO y desarrollo web directamente en tu email. 
            Sin spam, solo contenido de calidad.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Suscribirse
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400 mt-16">
        <p>&copy; 2025 Mi Sitio Optimizado. Blog especializado en SEO y desarrollo web.</p>
      </footer>
    </div>
  );
}
