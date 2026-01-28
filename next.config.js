/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/easyev',
  assetPrefix: '/easyev/',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;