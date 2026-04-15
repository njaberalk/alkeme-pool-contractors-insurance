/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pool-contractors',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
