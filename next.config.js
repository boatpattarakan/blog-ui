/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
  },
}

module.exports = nextConfig
