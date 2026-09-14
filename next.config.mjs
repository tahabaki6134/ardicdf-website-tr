/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/live", destination: "https://www.ardicdf.com/fabrication", permanent: true },
      { source: "/sitemap.xml", destination: "https://www.ardicdf.com/sitemap.xml", permanent: true },
      { source: "/robots.txt", destination: "https://www.ardicdf.com/robots.txt", permanent: true }
    ];
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
