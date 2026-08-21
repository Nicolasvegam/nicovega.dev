/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: ['nicovega.dev', 'images.unsplash.com', 'm.media-amazon.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/agent-instructions.md',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/markdown; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        source: '/rutificador/:path*',
        destination: 'https://rutificador.nicovega.dev/:path*',
        permanent: true,
      },
      {
        source: '/feriados-chile/:path*',
        destination: 'https://feriados-chile.nicovega.dev/:path*',
        permanent: true,
      },
      {
        source: '/trotaglobo/:path*',
        destination: 'https://trotaglobo.vercel.app/:path*',
        permanent: true,
      },
      {
        source: '/software/:path*',
        destination: 'https://software.nicovega.dev/:path*',
        permanent: true,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
      {
        source: '/trotaglobo/:path*',
        destination: 'https://trotaglobo.vercel.app/:path*',
      },
    ]
  },
})
