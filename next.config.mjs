/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
