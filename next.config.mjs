/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/trucking',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
