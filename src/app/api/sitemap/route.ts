import { NextRequest, NextResponse } from 'next/server'

// Simulación de datos de base de datos
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  lastModified: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

interface Category {
  id: string;
  slug: string;
  name: string;
  lastModified: string;
}

// Datos simulados (en producción vendrían de tu base de datos/CMS)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "guia-completa-seo-nextjs-2025",
    title: "Guía Completa de SEO en Next.js 2025",
    lastModified: "2025-01-15T10:00:00.000Z",
    priority: 0.9,
    changeFrequency: 'weekly'
  },
  {
    id: "2",
    slug: "core-web-vitals-optimizacion-practica",
    title: "Core Web Vitals: Optimización Práctica",
    lastModified: "2025-01-10T15:30:00.000Z",
    priority: 0.8,
    changeFrequency: 'monthly'
  },
  {
    id: "3",
    slug: "meta-tags-dinamicos-app-router",
    title: "Meta Tags Dinámicos en App Router",
    lastModified: "2025-01-05T09:15:00.000Z",
    priority: 0.8,
    changeFrequency: 'monthly'
  },
  {
    id: "4",
    slug: "lazy-loading-componentes-nextjs",
    title: "Lazy Loading de Componentes en Next.js",
    lastModified: "2024-12-20T14:20:00.000Z",
    priority: 0.7,
    changeFrequency: 'monthly'
  },
  {
    id: "5",
    slug: "optimizacion-imagenes-nextjs-2025",
    title: "Optimización de Imágenes en Next.js 2025",
    lastModified: "2024-12-15T11:45:00.000Z",
    priority: 0.8,
    changeFrequency: 'monthly'
  }
];

const categories: Category[] = [
  {
    id: "1",
    slug: "seo",
    name: "SEO",
    lastModified: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "2",
    slug: "rendimiento",
    name: "Rendimiento",
    lastModified: "2025-01-01T00:00:00.000Z"
  },
  {
    id: "3",
    slug: "nextjs",
    name: "Next.js",
    lastModified: "2025-01-01T00:00:00.000Z"
  }
];

function generateSitemapXML(baseUrl: string): string {  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/herramientas-seo`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastModified,
    changeFrequency: post.changeFrequency,
    priority: post.priority,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categoria/${category.slug}`,
    lastModified: category.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes, ...categoryRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}

export async function GET(request: NextRequest) {
  try {
    // Obtener la URL base del request
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;

    // En producción, aquí harías consultas reales a tu base de datos
    // const posts = await db.posts.findMany({ where: { published: true } });
    // const categories = await db.categories.findMany();

    const sitemap = generateSitemapXML(baseUrl);

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache por 1 hora
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}

// Función de ejemplo para obtener datos de base de datos real
/*
async function getDataFromDatabase() {
  try {
    // Ejemplo con Prisma
    const [posts, categories, pages] = await Promise.all([
      prisma.post.findMany({
        where: { published: true },
        select: {
          id: true,
          slug: true,
          updatedAt: true,
          priority: true,
        },
        orderBy: { updatedAt: 'desc' }
      }),
      prisma.category.findMany({
        select: {
          id: true,
          slug: true,
          updatedAt: true,
        }
      }),
      prisma.page.findMany({
        where: { active: true },
        select: {
          slug: true,
          updatedAt: true,
          priority: true,
        }
      })
    ]);

    return { posts, categories, pages };
  } catch (error) {
    console.error('Database error:', error);
    return { posts: [], categories: [], pages: [] };
  }
}
*/
