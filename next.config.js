/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const withVideos = require("next-videos");
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  ...withImages(),
  ...withVideos(),
  future: {
    webpack5: false,
  },
  async redirects() {
    return [
      {
        source: "/education/educationcard",
        destination: "/education/what-is-lot",
        permanent: true,
      },
      {
        source: "/trade/newsdetails",
        destination: "/trade/education",
        permanent: true,
      },
     
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  distDir: "dist",
  images: {
    disableStaticImages: true,
    domains: [
      "file.cptinternational.com",
      "image.cptmarkets.com",
      "adbird.smartstalk.com",
      "gmg-media.o18.click",
      "zaclienttest.cptinternational.com",
      "biz-ad.vnative.net",
    ],
  },
  i18n,
};

module.exports = nextConfig;
