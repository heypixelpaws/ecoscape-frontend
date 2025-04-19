/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecoscapebd-assets.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "xsgames.co",
        port: "",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 3600, // 1 hour in seconds
  },
};

export default nextConfig;
