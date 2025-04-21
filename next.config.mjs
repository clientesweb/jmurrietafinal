/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuración para generar el Service Worker
  async rewrites() {
    return [
      {
        source: '/sw.js',
        destination: '/_next/static/sw.js',
      },
    ];
  },
  // Configuración para optimizar imágenes
  images: {
    domains: ['jmurrietapcp.com'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuración para mejorar el SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
    ];
  },
  experimental: {
    // Eliminamos optimizeCss que requiere critters
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
