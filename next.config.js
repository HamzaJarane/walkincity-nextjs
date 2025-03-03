/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'gravatar.com'
      },
      {
        hostname: 'cdn-walkincity.hamza.im'
      }
    ],
  }
}

module.exports = nextConfig;
