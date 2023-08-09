/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/DpntQs6/pexels-joe-caltiere-10996872.jpg',
          },
        ],
      },
}

module.exports = nextConfig
