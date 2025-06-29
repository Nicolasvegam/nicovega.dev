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
    domains: ['nicovega.dev', 'images.unsplash.com'], 
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
    ];
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
    ];
  },
  
  async rewrites() {
    return [
      {
        source: '/rutificador/:path*',
        destination: 'https://rutificador.nicovega.dev/:path*',
      },
      {
        source: '/feriados-chile/:path*',
        destination: 'https://feriados-chile.nicovega.dev/:path*',
      },
      {
        source: '/trotaglobo/:path*',
        destination: 'https://trotaglobo.vercel.app/:path*',
      },
      {
        source: '/software/:path*',
        destination: 'https://software.nicovega.dev/:path*',
      },
    ];
  },
  
})