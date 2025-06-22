'use client'

import { useState } from 'react';

interface SEOResult {
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

export default function SEOChecker() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SEOResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Por favor, ingresa una URL válida');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/seo-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Error al analizar la URL');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Error al analizar la URL. Verifica que sea válida.');
      console.error('SEO Check error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100 dark:bg-green-900';
    if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900';
    return 'bg-red-100 dark:bg-red-900';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* URL Input Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              URL a analizar
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://ejemplo.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Analizando...
                </>
              ) : (
                <>
                  🔍 Analizar
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick buttons for local testing */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Prueba rápida con páginas locales:</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setUrl('http://localhost:3000')}
              className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Inicio
            </button>
            <button
              type="button"
              onClick={() => setUrl('http://localhost:3000/blog')}
              className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Blog
            </button>
            <button
              type="button"
              onClick={() => setUrl('http://localhost:3000/blog/1')}
              className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Post de Blog
            </button>
            <button
              type="button"
              onClick={() => setUrl('http://localhost:3000/contacto')}
              className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Contacto
            </button>
          </div>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
          <p className="text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Score Summary */}
          <div className={`p-6 rounded-lg ${getScoreBg(result.score)}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Puntuación SEO
              </h3>
              <div className={`text-3xl font-bold ${getScoreColor(result.score)}`}>
                {result.score}/100
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${
                  result.score >= 80 ? 'bg-green-500' :
                  result.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${result.score}%` }}
              ></div>
            </div>
          </div>

          {/* Meta Tags Analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              📄 Meta Tags Básicos
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.title || 'No encontrado'}
                </p>
                {result.title && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Longitud: {result.title.length} caracteres
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Descripción</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.description || 'No encontrada'}
                </p>
                {result.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Longitud: {result.description.length} caracteres
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Keywords</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.keywords || 'No encontradas'}
                </p>
              </div>
            </div>
          </div>

          {/* Open Graph */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              📘 Open Graph (Facebook)
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">OG Título</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.openGraph?.title || 'No encontrado'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">OG Descripción</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.openGraph?.description || 'No encontrada'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">OG Imagen</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.openGraph?.image || 'No encontrada'}
                </p>
              </div>
            </div>
          </div>

          {/* Twitter Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              🐦 Twitter Cards
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Twitter Título</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.twitter?.title || 'No encontrado'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Twitter Descripción</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.twitter?.description || 'No encontrada'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Twitter Imagen</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.twitter?.image || 'No encontrada'}
                </p>
              </div>
            </div>
          </div>

          {/* Technical SEO */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              ⚙️ SEO Técnico
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL Canónica</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.canonical || 'No encontrada'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Meta Robots</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.robots || 'No encontrado'}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Datos Estructurados</label>
                <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {result.structured_data?.length ? 
                    `${result.structured_data.length} esquemas encontrados` : 
                    'No encontrados'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-4">
                💡 Recomendaciones de Mejora
              </h3>
              <ul className="space-y-2">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2 text-blue-800 dark:text-blue-300">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
