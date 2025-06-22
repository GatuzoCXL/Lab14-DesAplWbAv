import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Datos simulados de posts (en producción vendrían de una base de datos)
const blogPosts = [
  {
    id: "1",
    title: "Guía Completa de SEO para Next.js 2025",
    excerpt: "Aprende las técnicas más avanzadas de SEO específicamente para aplicaciones Next.js...",
    content: `
# Guía Completa de SEO para Next.js 2025

En esta guía completa, aprenderás todas las técnicas avanzadas de SEO específicamente diseñadas para aplicaciones Next.js. Cubriremos desde los conceptos básicos hasta las estrategias más sofisticadas.

## ¿Por qué Next.js es perfecto para SEO?

Next.js ofrece renderizado del lado del servidor (SSR) y generación estática (SSG), lo que significa que los motores de búsqueda pueden indexar fácilmente tu contenido.

### Características clave para SEO:

- **Server-Side Rendering (SSR)**: Contenido renderizado antes de llegar al navegador
- **Static Site Generation (SSG)**: Páginas pre-generadas para máximo rendimiento
- **Image Optimization**: Componente Image optimizado automáticamente
- **Font Optimization**: Carga optimizada de fuentes de Google
- **Automatic Code Splitting**: Carga solo el código necesario

## Implementando Meta Tags Dinámicos

\`\`\`typescript
export const metadata: Metadata = {
  title: "Tu título optimizado para SEO",
  description: "Descripción que aparecerá en los resultados de búsqueda",
  openGraph: {
    title: "Título para redes sociales",
    description: "Descripción para cuando se comparte",
    images: ["/tu-imagen-og.jpg"]
  }
}
\`\`\`

## Core Web Vitals y Rendimiento

Los Core Web Vitals son fundamentales para el SEO moderno:

1. **Largest Contentful Paint (LCP)**: < 2.5 segundos
2. **First Input Delay (FID)**: < 100 milisegundos  
3. **Cumulative Layout Shift (CLS)**: < 0.1

Con Next.js, puedes optimizar fácilmente estas métricas usando:
- Componente Image con loading lazy
- Font optimization automática
- Code splitting automático
- Preloading estratégico

## Conclusión

Next.js proporciona todas las herramientas necesarias para crear sitios web altamente optimizados para SEO. La clave está en implementar correctamente estas características y seguir las mejores prácticas.
    `,
    date: "2025-06-15",
    author: "Juan Pérez",
    category: "SEO",
    readTime: "8 min",
    image: "/next.svg",
    tags: ["SEO", "Next.js", "React", "Web Development"]
  },
  {
    id: "2", 
    title: "Core Web Vitals: Optimización Práctica",
    excerpt: "Mejora tus métricas de Core Web Vitals con técnicas probadas y casos reales...",
    content: "Contenido del artículo sobre Core Web Vitals...",
    date: "2025-06-10",
    author: "María García", 
    category: "Performance",
    readTime: "12 min",
    image: "/vercel.svg",
    tags: ["Performance", "Core Web Vitals", "Optimization"]
  }
];

// Generar metadata dinámicos basados en el post
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return {
      title: "Artículo no encontrado - Mi Sitio Optimizado",
    };
  }

  return {
    title: `${post.title} | Blog - Mi Sitio Optimizado`,
    description: post.excerpt,
    keywords: [...post.tags, "blog", "artículo", "Mi Sitio Optimizado"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://mi-sitio-optimizado.com/blog/${post.id}`,
      siteName: "Mi Sitio Optimizado",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `Imagen del artículo: ${post.title}`,
        },
      ],
      locale: "es_ES",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      creator: "@misitioopt",
    },
    alternates: {
      canonical: `/blog/${post.id}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  };
}

// Generar rutas estáticas para los posts
export function generateStaticParams(): { id: string }[] {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Inicio
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contacto
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-gray-100 font-medium">{post.title}</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-gray-500 dark:text-gray-400 text-sm">
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-inter">
              {post.excerpt}
            </p>

            <div className="flex items-center space-x-4 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-300 font-semibold text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">{post.author}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Autor</p>
                </div>
              </div>
            </div>
          </header>

          {/* Article Image */}
          <div className="mb-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <Image
                src={post.image}
                alt={`Imagen principal del artículo: ${post.title}`}
                width={800}
                height={450}
                className="object-contain p-12 dark:invert"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            {/* En producción, aquí renderizarías el contenido desde markdown */}
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Etiquetas</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Sharing */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Compartir artículo</h3>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Compartir en Twitter
              </button>
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Compartir en Facebook
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Compartir en LinkedIn
              </button>
            </div>
          </div>
        </article>

        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            ← Volver al Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
