import { MetadataRoute } from 'next'

// Datos simulados (en producción vendrían de base de datos)
const blogPosts = [
  { id: "1", slug: "guia-completa-seo-nextjs-2025", lastModified: "2025-06-15", priority: 0.8 },
  { id: "2", slug: "core-web-vitals-optimizacion-practica", lastModified: "2025-06-10", priority: 0.8 },
  { id: "3", slug: "meta-tags-dinamicos-app-router", lastModified: "2025-06-05", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://mi-sitio-optimizado.com' 
    : 'http://localhost:3000'
  // Páginas estáticas principales
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },    {
      url: `${baseUrl}/herramientas-seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ejemplo-rich-snippets`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Páginas dinámicas de blog
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'monthly' as const,
    priority: post.priority,
  }));

  // En producción, podrías agregar más rutas dinámicas desde base de datos
  // const dynamicRoutes = await getDynamicRoutesFromDatabase();

  return [
    ...staticRoutes,
    ...blogRoutes,
  ];
}

// Función ejemplo para obtener rutas dinámicas de base de datos
// async function getDynamicRoutesFromDatabase() {
//   try {
//     // Ejemplo de consulta a base de datos
//     // const posts = await db.posts.findMany({ where: { published: true } });
//     // const categories = await db.categories.findMany();
//     // const products = await db.products.findMany({ where: { active: true } });
//     
//     // return [
//     //   ...posts.map(post => ({
//     //     url: `${baseUrl}/blog/${post.slug}`,
//     //     lastModified: post.updatedAt,
//     //     priority: 0.8,
//     //   })),
//     //   ...categories.map(cat => ({
//     //     url: `${baseUrl}/categoria/${cat.slug}`,
//     //     lastModified: cat.updatedAt,
//     //     priority: 0.6,
//     //   })),
//     // ];
//     return [];
//   } catch (error) {
//     console.error('Error fetching dynamic routes:', error);
//     return [];
//   }
// }
