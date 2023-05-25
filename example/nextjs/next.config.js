/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    externalDir: true
  },
  images: {
    disableStaticImages: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader'
    })
    return config
  }
}

module.exports = nextConfig
