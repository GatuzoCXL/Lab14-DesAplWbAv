import { Organization, WebSite, BreadcrumbList } from 'schema-dts';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        const organization: Organization = {
          '@type': 'Organization',
          name: 'Mi Sitio Optimizado',
          url: 'https://mi-sitio-optimizado.com',
          logo: 'https://mi-sitio-optimizado.com/next.svg',
          description: 'Especialistas en optimización SEO y desarrollo web con Next.js',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-123-4567',
            contactType: 'customer service',
            availableLanguage: ['Spanish', 'English']
          },
          sameAs: [
            'https://facebook.com/misitiooptimizado',
            'https://twitter.com/misitioopt',
            'https://linkedin.com/company/misitiooptimizado'
          ]
        };
        return organization;

      case 'website':
        const website: WebSite = {
          '@type': 'WebSite',
          name: 'Mi Sitio Optimizado',
          url: 'https://mi-sitio-optimizado.com',
          description: 'Aprende sobre optimización SEO y rendimiento en Next.js',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://mi-sitio-optimizado.com/buscar?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        };
        return website;

      case 'breadcrumb':
        const breadcrumb: BreadcrumbList = {
          '@type': 'BreadcrumbList',
          itemListElement: data?.items?.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          })) || []
        };
        return breadcrumb;

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...structuredData
        })
      }}
    />
  );
}
