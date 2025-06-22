'use client'

export default function FontShowcase() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        🔤 Optimización de Fuentes
      </h3>
        <div className="space-y-6">
        {/* Geist Sans - Fuente principal */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-sans">
            Geist Sans (Principal) ⭐
          </h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans">
            Fuente principal con <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">preload: true</code>, 
            ligaduras activadas y <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">adjustFontFallback</code> 
            para reducir layout shift.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            ✅ Preload: true | ✅ Ligatures | ✅ Kerning | ✅ Fallback ajustado
          </div>
        </div>

        {/* Inter - Variable font */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-inter">
            Inter (Variable Font)
          </h4>
          <p className="text-gray-700 dark:text-gray-300 font-inter">
            Variable font con pesos específicos (400, 500, 600, 700) para reducir el tamaño del bundle. 
            Ideal para interfaces modernas.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            🎯 Pesos selectivos | ⚡ Variable font | ✅ Optimizado para UI
          </div>
        </div>

        {/* Poppins - Para encabezados */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-poppins">
            Poppins (Encabezados)
          </h4>
          <p className="text-gray-700 dark:text-gray-300 font-poppins">
            Fuente moderna para encabezados y elementos destacados. Carga lazy para no afectar 
            el rendimiento inicial.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            🔄 Lazy loading | 🎨 Para diseño | ✅ Pesos optimizados
          </div>
        </div>

        {/* Geist Mono - Para código */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-mono">
            Geist Mono (Código)
          </h4>
          <pre className="text-gray-700 dark:text-gray-300 font-mono text-sm bg-gray-200 dark:bg-gray-600 p-2 rounded overflow-x-auto">
{`// Configuración avanzada
const optimizedFont = {
  display: "swap",
  adjustFontFallback: true,
  subsets: ["latin", "latin-ext"],
  fallback: ["Monaco", "Menlo"]
}`}
          </pre>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            ⚡ Sin ligaduras (código) | 🔧 Fallbacks mejorados | ✅ Monospace perfecto
          </div>
        </div>
      </div>

      {/* Métricas avanzadas de rendimiento */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h5 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
          � Optimizaciones Avanzadas Implementadas
        </h5>
        <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
          <li>• <strong>adjustFontFallback:</strong> Reduce Cumulative Layout Shift (CLS)</li>
          <li>• <strong>Variable Fonts:</strong> Un archivo para múltiples pesos</li>
          <li>• <strong>Subsets selectivos:</strong> Solo caracteres necesarios</li>
          <li>• <strong>Font Feature Settings:</strong> Ligaduras, kerning, alternativas</li>
          <li>• <strong>Preload estratégico:</strong> Solo fuentes críticas</li>
          <li>• <strong>Font Display Swap:</strong> Evita FOIT completamente</li>
          <li>• <strong>Fallbacks mejorados:</strong> Sistema nativo como respaldo</li>
        </ul>
      </div>

      {/* Demo de características tipográficas */}
      <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <h5 className="font-semibold text-green-900 dark:text-green-200 mb-3">
          ✨ Características Tipográficas Activadas
        </h5>
        <div className="space-y-2 text-sm">
          <div className="font-sans">
            <span className="text-green-800 dark:text-green-300">Ligaduras: </span>
            <span>fi fl ff ffi ffl (liga automática)</span>
          </div>
          <div className="font-poppins text-lg font-bold">
            <span className="text-green-800 dark:text-green-300">Poppins Bold: </span>
            <span>Encabezados Modernos</span>
          </div>
          <div className="font-inter">
            <span className="text-green-800 dark:text-green-300">Inter UI: </span>
            <span>Interfaz legible 123456789</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        🚀 Todas las fuentes están optimizadas para mejorar Core Web Vitals
      </p>
    </div>
  )
}
