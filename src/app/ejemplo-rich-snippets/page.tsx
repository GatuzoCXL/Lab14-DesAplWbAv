import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ejemplo de Rich Snippets - Datos Estructurados",
  description: "Página de ejemplo que demuestra el uso de datos estructurados (Schema.org) para rich snippets en Google.",
  keywords: ["rich snippets", "datos estructurados", "schema.org", "JSON-LD", "SEO avanzado"],
  openGraph: {
    title: "Ejemplo de Rich Snippets - Datos Estructurados",
    description: "Descubre cómo implementar datos estructurados para mejorar la apariencia de tu sitio en los resultados de búsqueda.",
    images: ["/og-rich-snippets.jpg"],
  },
  twitter: {
    title: "Ejemplo de Rich Snippets - Datos Estructurados",
    description: "Descubre cómo implementar datos estructurados para mejorar la apariencia de tu sitio en los resultados de búsqueda.",
  },
};

export default function EjemploRichSnippetsPage() {
  // Datos estructurados para la organización
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mi Sitio Optimizado",
    "url": "https://mi-sitio-optimizado.com",
    "logo": "https://mi-sitio-optimizado.com/logo.png",
    "description": "Expertos en optimización SEO y rendimiento web con Next.js",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "Tu Nombre"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contacto@mi-sitio-optimizado.com"
    },
    "sameAs": [
      "https://twitter.com/tu_usuario",
      "https://linkedin.com/company/tu-empresa",
      "https://github.com/tu-usuario"
    ]
  };

  // Datos estructurados para el artículo
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guía Completa de Rich Snippets y Datos Estructurados",
    "description": "Aprende a implementar datos estructurados para mejorar la visibilidad de tu contenido en Google.",
    "image": "https://mi-sitio-optimizado.com/article-image.jpg",
    "author": {
      "@type": "Person",
      "name": "Tu Nombre",
      "url": "https://mi-sitio-optimizado.com/autor"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mi Sitio Optimizado",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mi-sitio-optimizado.com/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mi-sitio-optimizado.com/ejemplo-rich-snippets"
    }
  };

  // Datos estructurados para FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué son los rich snippets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los rich snippets son resultados de búsqueda mejorados que muestran información adicional extraída de datos estructurados en tu sitio web."
        }
      },
      {
        "@type": "Question", 
        "name": "¿Cómo implementar datos estructurados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes implementar datos estructurados usando JSON-LD, Microdata o RDFa. JSON-LD es el formato recomendado por Google."
        }
      },
      {
        "@type": "Question",
        "name": "¿Los rich snippets mejoran el SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, los rich snippets pueden mejorar la visibilidad y el CTR de tus páginas en los resultados de búsqueda, aunque no afectan directamente el ranking."
        }
      }
    ]
  };

  // Datos estructurados para breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://mi-sitio-optimizado.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ejemplos",
        "item": "https://mi-sitio-optimizado.com/ejemplos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Rich Snippets",
        "item": "https://mi-sitio-optimizado.com/ejemplo-rich-snippets"
      }
    ]
  };

  return (
    <>
      {/* Scripts de datos estructurados */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Rich Snippets
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
              Rich Snippets y
              <span className="text-emerald-600 dark:text-emerald-400"> Datos Estructurados</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Aprende cómo implementar datos estructurados (Schema.org) para mejorar 
              la apariencia de tu contenido en los resultados de búsqueda de Google.
            </p>
          </header>

          {/* Main Article Content */}
          <article className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                ¿Qué son los Rich Snippets?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Los rich snippets son resultados de búsqueda enriquecidos que muestran información 
                adicional más allá del título, URL y meta descripción tradicionales. Estos fragmentos 
                mejorados pueden incluir calificaciones con estrellas, precios, fechas de eventos, 
                información del autor, y mucho más.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Tipos de Rich Snippets Implementados en esta Página
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                    📄 Artículo (Article)
                  </h4>
                  <p className="text-emerald-700 dark:text-emerald-300 text-sm">
                    Incluye información del autor, fecha de publicación, imagen principal y editor.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                    🏢 Organización (Organization)
                  </h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Información de la empresa, logo, contacto y redes sociales.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
                    ❓ FAQ (FAQPage)
                  </h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Preguntas frecuentes que pueden aparecer como desplegables en Google.
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">
                    🍞 Breadcrumbs (BreadcrumbList)
                  </h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">
                    Navegación de migas de pan que ayuda a entender la estructura del sitio.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Cómo Implementar Datos Estructurados
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  1. Usando JSON-LD (Recomendado)
                </h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`<Script
  id="article-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Tu Título",
      "author": {
        "@type": "Person",
        "name": "Tu Nombre"
      }
    }),
  }}
/>`}
                </pre>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Preguntas Frecuentes sobre Rich Snippets
              </h2>
              
              <div className="space-y-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      ¿Qué son los rich snippets?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 text-gray-700 dark:text-gray-300">
                    Los rich snippets son resultados de búsqueda mejorados que muestran información 
                    adicional extraída de datos estructurados en tu sitio web. Pueden incluir 
                    calificaciones, precios, fechas, y otros datos relevantes.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      ¿Cómo implementar datos estructurados?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 text-gray-700 dark:text-gray-300">
                    Puedes implementar datos estructurados usando JSON-LD (recomendado), Microdata o RDFa. 
                    JSON-LD es el formato preferido por Google y el más fácil de implementar en Next.js 
                    usando el componente Script.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      ¿Los rich snippets mejoran el SEO?
                    </h3>
                    <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-4 text-gray-700 dark:text-gray-300">
                    Sí, los rich snippets pueden mejorar significativamente la visibilidad y el CTR 
                    (Click-Through Rate) de tus páginas en los resultados de búsqueda. Aunque no 
                    afectan directamente el ranking, pueden hacer que tu resultado sea más atractivo 
                    y prominente.
                  </div>
                </details>
              </div>
            </div>

            {/* Testing Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Herramientas de Validación
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                    🔍 Rich Results Test (Google)
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Herramienta oficial de Google para validar datos estructurados y verificar 
                    eligibilidad para rich results.
                  </p>
                </a>

                <a 
                  href="https://validator.schema.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">
                    ✅ Schema.org Validator
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Validador oficial de Schema.org para verificar la sintaxis y estructura 
                    de tus datos estructurados.
                  </p>
                </a>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  💡 Consejo Pro
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  Para probar esta página, copia la URL de producción y úsala en las herramientas 
                  de validación. Los datos estructurados de esta página incluyen Article, Organization, 
                  FAQ y Breadcrumbs.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
