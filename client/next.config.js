/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source:'/api/users:path*',
        destination:'http://localhost:5000/api/users:path*'
      }
    ]
  }
}

module.exports = nextConfig
