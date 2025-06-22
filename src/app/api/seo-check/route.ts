import { NextRequest, NextResponse } from 'next/server'

interface SEOCheckResult {
  url: string;
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
  };
  twitter?: {
    title?: string;
    description?: string;
    image?: string;
  };
  canonical?: string;
  robots?: string;
  keywords?: string;
  structured_data?: any[];
  recommendations: string[];
  score: number;
}

function calculateSEOScore(data: any): { score: number; recommendations: string[] } {
  let score = 0;
  const recommendations: string[] = [];

  // Título (20 puntos)
  if (data.title) {
    if (data.title.length >= 30 && data.title.length <= 60) {
      score += 20;
    } else if (data.title.length > 0) {
      score += 10;
      recommendations.push(`Título debería tener entre 30-60 caracteres (actual: ${data.title.length})`);
    }
  } else {
    recommendations.push('Falta el título de la página');
  }

  // Descripción (20 puntos)
  if (data.description) {
    if (data.description.length >= 120 && data.description.length <= 160) {
      score += 20;
    } else if (data.description.length > 0) {
      score += 10;
      recommendations.push(`Descripción debería tener entre 120-160 caracteres (actual: ${data.description.length})`);
    }
  } else {
    recommendations.push('Falta la meta descripción');
  }

  // Open Graph (20 puntos)
  if (data.openGraph?.title && data.openGraph?.description) {
    score += 15;
    if (data.openGraph.image) {
      score += 5;
    } else {
      recommendations.push('Falta imagen de Open Graph');
    }
  } else {
    recommendations.push('Faltan meta tags de Open Graph completos');
  }

  // Twitter Cards (15 puntos)
  if (data.twitter?.title && data.twitter?.description) {
    score += 10;
    if (data.twitter.image) {
      score += 5;
    } else {
      recommendations.push('Falta imagen de Twitter Card');
    }
  } else {
    recommendations.push('Faltan meta tags de Twitter Cards');
  }

  // URL Canónica (10 puntos)
  if (data.canonical) {
    score += 10;
  } else {
    recommendations.push('Falta URL canónica');
  }

  // Robots (5 puntos)
  if (data.robots) {
    score += 5;
  } else {
    recommendations.push('Falta meta robots');
  }

  // Keywords (10 puntos) - Opcional pero útil
  if (data.keywords) {
    score += 10;
  } else {
    recommendations.push('Considera agregar keywords relevantes');
  }

  // Datos estructurados bonus (hasta 10 puntos extra)
  if (data.structured_data && data.structured_data.length > 0) {
    score += Math.min(10, data.structured_data.length * 5);
  } else {
    recommendations.push('Considera agregar datos estructurados (Schema.org)');
  }

  return { score: Math.min(100, score), recommendations };
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL es requerida' },
        { status: 400 }
      );
    }

    // En un escenario real, aquí harías scraping de la URL
    // Por ahora, simulamos la respuesta basada en nuestras páginas conocidas
    let mockData: any = {};

    if (url.includes('/blog/')) {
      mockData = {
        title: 'Guía Completa de SEO en Next.js 2025 | Mi Sitio Optimizado',
        description: 'Aprende técnicas avanzadas de SEO en Next.js 13+ con App Router. Implementa meta tags dinámicos, sitemaps y optimización completa.',
        openGraph: {
          title: 'Guía Completa de SEO en Next.js 2025',
          description: 'Aprende técnicas avanzadas de SEO en Next.js 13+ con App Router.',
          image: '/og-blog-image.jpg'
        },
        twitter: {
          title: 'Guía Completa de SEO en Next.js 2025',
          description: 'Aprende técnicas avanzadas de SEO en Next.js 13+ con App Router.',
          image: '/twitter-blog-image.jpg'
        },
        canonical: url,
        robots: 'index, follow',
        keywords: 'Next.js, SEO, App Router, meta tags, optimización',
        structured_data: [
          { '@type': 'Article', name: 'BlogPosting' },
          { '@type': 'BreadcrumbList', name: 'Breadcrumbs' }
        ]
      };
    } else if (url.includes('/contacto')) {
      mockData = {
        title: 'Contacto - Mi Sitio Optimizado',
        description: 'Ponte en contacto con nosotros para consultas sobre SEO y optimización web. Expertos en Next.js y rendimiento web.',
        openGraph: {
          title: 'Contacto - Mi Sitio Optimizado',
          description: 'Ponte en contacto con nosotros para consultas sobre SEO y optimización web.',
          image: '/og-contact-image.jpg'
        },
        twitter: {
          title: 'Contacto - Mi Sitio Optimizado',
          description: 'Ponte en contacto con nosotros para consultas sobre SEO y optimización web.'
        },
        canonical: url,
        robots: 'index, follow',
        keywords: 'contacto, consultoría SEO, Next.js',
        structured_data: [
          { '@type': 'ContactPage', name: 'Contact Information' }
        ]
      };
    } else {
      // Página principal por defecto
      mockData = {
        title: 'Mi Sitio Optimizado - SEO con Next.js',
        description: 'Aprende sobre optimización SEO y rendimiento en Next.js. Descubre técnicas avanzadas para mejorar tu web.',
        openGraph: {
          title: 'Mi Sitio Optimizado - SEO con Next.js',
          description: 'Descubre técnicas avanzadas para mejorar tu web con Next.js y optimización SEO.',
          image: '/og-home-image.jpg'
        },
        twitter: {
          title: 'Mi Sitio Optimizado - SEO con Next.js',
          description: 'Descubre técnicas avanzadas para mejorar tu web con Next.js y optimización SEO.',
          image: '/twitter-home-image.jpg'
        },
        canonical: url,
        robots: 'index, follow',
        keywords: 'Next.js, SEO, optimización web, React, desarrollo web, rendimiento',
        structured_data: [
          { '@type': 'WebSite', name: 'Website' },
          { '@type': 'Organization', name: 'Organization' }
        ]
      };
    }

    const { score, recommendations } = calculateSEOScore(mockData);

    const result: SEOCheckResult = {
      url,
      ...mockData,
      score,
      recommendations
    };

    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'public, max-age=300', // Cache por 5 minutos
      },
    });

  } catch (error) {
    console.error('Error checking SEO:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Ejemplo de función real de scraping (requeriría bibliotecas adicionales)
/*
async function scrapePageSEO(url: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Usar cheerio o similar para extraer meta tags
    const $ = cheerio.load(html);
    
    return {
      title: $('title').text(),
      description: $('meta[name="description"]').attr('content'),
      canonical: $('link[rel="canonical"]').attr('href'),
      robots: $('meta[name="robots"]').attr('content'),
      openGraph: {
        title: $('meta[property="og:title"]').attr('content'),
        description: $('meta[property="og:description"]').attr('content'),
        image: $('meta[property="og:image"]').attr('content'),
      },
      twitter: {
        title: $('meta[name="twitter:title"]').attr('content'),
        description: $('meta[name="twitter:description"]').attr('content'),
        image: $('meta[name="twitter:image"]').attr('content'),
      }
    };
  } catch (error) {
    throw new Error('Error scraping page');
  }
}
*/
