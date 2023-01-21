/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['a.storyblok.com']
  },
  env: {
    STORYBLOK_ACCESS_TOKEN: "Aiv4FnFxUhWqAkelVYSIOgtt"
  }
}

module.exports = nextConfig
