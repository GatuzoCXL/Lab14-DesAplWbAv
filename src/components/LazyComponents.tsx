'use client'

import dynamic from "next/dynamic";

// Lazy loading de componentes pesados con ssr: false
const LargeComponent = dynamic(() => import("./LargeComponent"), {
  ssr: false, // Ahora sí podemos usar ssr: false en un client component
  loading: () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-1/2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3 w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
      </div>
    </div>
  ),
});

const FontShowcase = dynamic(() => import("./FontShowcase"), {
  ssr: false, // No crítico para SEO
  loading: () => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-6 w-1/4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  ),
});

// Componentes exportados para usar en Server Components
export function LazyLargeComponent() {
  return <LargeComponent />;
}

export function LazyFontShowcase() {
  return <FontShowcase />;
}
