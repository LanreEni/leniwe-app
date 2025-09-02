/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["images.unsplash.com"], // whitelist Unsplash
  },
};

module.exports = nextConfig;
