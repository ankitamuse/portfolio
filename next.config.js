/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ankitamuse' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ankitamuse/' : '',
}

module.exports = nextConfig
