import Image from 'next/image'
import { ComponentProps } from 'react'

interface OptimizedImageProps extends ComponentProps<typeof Image> {
  src: string
  alt: string
  className?: string
  priority?: boolean
  quality?: number
}

/**
 * Componente de imagen optimizada con mejores prácticas de SEO
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  quality = 85,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      quality={quality}
      // Optimizaciones automáticas
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      // Placeholder para mejor UX
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      {...props}
    />
  )
}

/**
 * Componente específico para imágenes hero/banner
 */
export function HeroImage({
  src,
  alt,
  className = '',
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      priority={true} // Las imágenes hero siempre tienen prioridad
      quality={90} // Mayor calidad para imágenes principales
      sizes="100vw" // Imagen hero suele ocupar todo el ancho
      {...props}
    />
  )
}

/**
 * Componente para imágenes en cards/tarjetas
 */
export function CardImage({
  src,
  alt,
  className = '',
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      priority={false} // Las imágenes de cards no tienen prioridad
      quality={80} // Calidad menor para imágenes secundarias
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  )
}
