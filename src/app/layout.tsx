import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

// Fuente principal optimizada con configuración avanzada
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"], // Más caracteres soportados
  display: "swap", // Evita FOIT (Flash of Invisible Text)
  preload: true, // Prioridad alta para fuente principal
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "arial"],
  adjustFontFallback: true, // Ajusta métricas para reducir layout shift
});

// Fuente monoespaciada optimizada
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // No crítica para el renderizado inicial
  fallback: ["Monaco", "Menlo", "Consolas", "Courier New", "monospace"],
  adjustFontFallback: true,
});

// Inter - Variable font con pesos específicos
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  // Pesos específicos para reducir el tamaño del archivo
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

// Poppins - Para encabezados especiales
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "Mi Sitio Optimizado - SEO con Next.js",
    template: "%s | Mi Sitio Optimizado"
  },
  description: "Aprende sobre optimización SEO y rendimiento en Next.js. Descubre técnicas avanzadas para mejorar tu web.",
  keywords: ["Next.js", "SEO", "optimización web", "React", "desarrollo web", "rendimiento"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  publisher: "Mi Sitio Optimizado",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mi-sitio-optimizado.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Mi Sitio Optimizado - SEO con Next.js",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js y optimización SEO.",
    url: "https://mi-sitio-optimizado.com",
    siteName: "Mi Sitio Optimizado",
    images: [
      {
        url: "/next.svg", // Usamos el logo de Next.js como imagen por ahora
        width: 800,
        height: 600,
        alt: "Mi Sitio Optimizado - SEO con Next.js",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Sitio Optimizado - SEO con Next.js",
    description: "Descubre técnicas avanzadas para mejorar tu web con Next.js y optimización SEO.",
    images: ["/next.svg"],
    creator: "@tu_usuario_twitter",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui', // Reemplaza con tu código real
    // yandex: 'codigo-yandex',
    // yahoo: 'codigo-yahoo',
    // other: {
    //   'facebook-domain-verification': 'codigo-facebook',
    // }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable}`}>
      <body
        className="antialiased font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900"
      >
        {children}
      </body>
    </html>
  );
}
