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
    minimumCacheTTL: 86400, // 1 day in seconds
    // unoptimized: true, // Disable all image optimization globally
  },
};

export default nextConfig;
