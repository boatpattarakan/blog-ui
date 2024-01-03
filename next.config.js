/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
  },
  images: {
    domains: ['127.0.0.1','placehold.jp'],
  },
}

module.exports = nextConfig
