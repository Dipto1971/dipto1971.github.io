/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages deploy: the Actions workflow publishes ./out
  output: "export",
  // NOTE: `trailingSlash: true` breaks a clean `next build` on 14.2.23
  // (PageNotFoundError: /_document), so URLs stay extension- and slash-less.
  images: {
    // Static export has no image optimisation server
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
