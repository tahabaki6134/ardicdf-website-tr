/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/live", destination: "/fabrication", permanent: true }];
  },
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
