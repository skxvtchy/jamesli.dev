/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  output: "export",
  basePath: "/jamesli.dev",
};

module.exports = nextConfig;
