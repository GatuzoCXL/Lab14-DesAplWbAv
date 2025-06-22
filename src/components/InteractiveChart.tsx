'use client'

import { useState } from 'react'

export default function InteractiveChart() {
  const [activeMetric, setActiveMetric] = useState('LCP')

  const metrics = {
    LCP: {
      name: 'Largest Contentful Paint',
      value: '1.2s',
      status: 'good',
      description: 'Tiempo para cargar el elemento más grande visible'
    },
    FID: {
      name: 'First Input Delay',
      value: '45ms',
      status: 'good',
      description: 'Tiempo de respuesta a la primera interacción'
    },
    CLS: {
      name: 'Cumulative Layout Shift',
      value: '0.08',
      status: 'good',
      description: 'Estabilidad visual durante la carga'
    },
    FCP: {
      name: 'First Contentful Paint',
      value: '0.9s',
      status: 'good',
      description: 'Tiempo hasta el primer contenido visible'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        📊 Core Web Vitals Dashboard
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(metrics).map(([key, metric]) => (
          <button
            key={key}
            onClick={() => setActiveMetric(key)}
            className={`p-4 rounded-lg text-center transition-all ${
              activeMetric === key
                ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {metric.value}
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              {key}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {metrics[activeMetric as keyof typeof metrics].name}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          {metrics[activeMetric as keyof typeof metrics].description}
        </p>
        <div className="mt-4 flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
            Rendimiento Excelente
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        📈 Componente interactivo cargado dinámicamente
      </p>
    </div>
  )
}
