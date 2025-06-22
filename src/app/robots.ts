import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Cambia según tu dominio real
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://mi-sitio-optimizado.com' 
    : 'http://localhost:3000'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/404',
          '/*.json$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 3,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
