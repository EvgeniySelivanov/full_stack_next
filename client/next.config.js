/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, '/client/'),
  //   },
  // },
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
