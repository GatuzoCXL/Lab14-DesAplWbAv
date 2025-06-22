import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dominios externos permitidos para imágenes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ],
    // Formatos de imagen soportados (webp y avif para mejor compresión)
    formats: ['image/webp', 'image/avif'],
    // Tamaños de imagen para diferentes dispositivos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuración experimental para optimizaciones adicionales
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
