'use client'

import { useState, useEffect } from 'react'

export default function LargeComponent() {
  const [data, setData] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos pesados
    setTimeout(() => {
      setData([
        'Análisis SEO completo',
        'Auditoria de Core Web Vitals',
        'Optimización de meta tags',
        'Estructura de datos Schema.org',
        'Optimización de imágenes',
        'Compresión de recursos',
        'Lazy loading implementado',
        'Cache strategies',
        'Performance monitoring',
        'Mobile optimization'
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        🚀 Servicios SEO Avanzados
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((service, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700 dark:text-gray-300">{service}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        ⚡ Este componente se cargó con lazy loading para mejorar el rendimiento inicial
      </p>
    </div>
  )
}
