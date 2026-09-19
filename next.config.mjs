/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/live", destination: "/fabrication", permanent: true }];
  },
  trailingSlash: false,
  async headers() { return [{ source: "/review.html", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }]; },
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
