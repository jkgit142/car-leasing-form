/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comment out for Vercel deployment
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig