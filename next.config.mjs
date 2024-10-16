/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-do.thegeekconf.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
